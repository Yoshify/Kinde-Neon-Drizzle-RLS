import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import type { KindeAccessToken } from "@kinde-oss/kinde-auth-nextjs/types";
import type { NextRequest } from "next/server";

export default withAuth(
	async function middleware(req: NextRequestWithAuth) {},
	{
		isReturnToCurrentPage: true,
	},
);

export const config = {
	matcher: ["/todos"],
};

type KindeUserProperties = {
	has_onboarded: {
		v: string;
	};
};

type NextRequestWithAuth = NextRequest & {
	kindeAuth: {
		token: KindeAccessToken & {
			exp: number;
			iat: number;
		};
	};
};
