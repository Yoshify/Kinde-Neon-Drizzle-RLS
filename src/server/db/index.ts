import "server-only";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import type { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { neon } from "@neondatabase/serverless";
import type { NeonHttpDatabase } from "drizzle-orm/neon-http";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export const withAuthenticatedDrizzle = async <T>(
	callback: (
		db: NeonHttpDatabase<typeof schema>,
		{ user }: { user: KindeUser<Record<string, unknown>> },
	) => Promise<T>,
) => {
	const { isAuthenticated, getAccessTokenRaw, getUser } =
		getKindeServerSession();

	const authed = await isAuthenticated();
	if (!authed) {
		throw new Error("Unauthorized");
	}

	const user = await getUser();
	if (!user) {
		throw new Error("Unauthorized");
	}

	const db = drizzle(
		neon(process.env.DATABASE_AUTHENTICATED_URL!, {
			authToken: async () => {
				const token = await getAccessTokenRaw();
				if (!token) {
					console.error("no token");
					throw new Error("Unauthorized");
				}
				return token;
			},
		}),
		{
			schema,
			casing: "snake_case",
		},
	);

	return callback(db, {
		user,
	});
};
