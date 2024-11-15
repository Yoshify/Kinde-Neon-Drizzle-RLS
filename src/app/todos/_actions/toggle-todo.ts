"use server";

import { withAuthenticatedDrizzle } from "@/server/db";
import { orgTodos, todos } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (id: number, completed: boolean) => {
	await withAuthenticatedDrizzle(async (db, ctx) => {
		await db.update(todos).set({ completed }).where(eq(todos.id, id));
	});
	revalidatePath("/todos");
};

export const toggleOrgTodo = async (id: number, completed: boolean) => {
	await withAuthenticatedDrizzle(async (db, ctx) => {
		await db.update(orgTodos).set({ completed }).where(eq(orgTodos.id, id));
	});
	revalidatePath("/todos");
};
