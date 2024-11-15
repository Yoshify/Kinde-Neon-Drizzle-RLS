"use server";

import { withAuthenticatedDrizzle } from "@/server/db";
import { orgTodos, todos } from "@/server/db/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteTodo = async (id: number) => {
	const { isAuthenticated } = getKindeServerSession();

	if (!isAuthenticated) {
		redirect("/api/auth/login");
	}

	await withAuthenticatedDrizzle(async (db, ctx) => {
		await db.delete(todos).where(eq(todos.id, id));
	});

	revalidatePath("/todos");
};

export const deleteOrgTodo = async (id: number) => {
	await withAuthenticatedDrizzle(async (db, ctx) => {
		await db.delete(orgTodos).where(eq(orgTodos.id, id));
	});

	revalidatePath("/todos");
};
