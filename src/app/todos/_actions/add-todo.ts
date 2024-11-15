"use server";

import { withAuthenticatedDrizzle } from "@/server/db";
import { orgTodos, todos } from "@/server/db/schema";
import { revalidatePath } from "next/cache";

export const addTodo = async (formData: FormData) => {
	const task = formData.get("task")?.toString() ?? "";
	await withAuthenticatedDrizzle(async (db, ctx) => {
		console.log("user id ", ctx.user.id);
		await db.insert(todos).values({
			task,
		});
	});

	revalidatePath("/todos");
};

export const addOrgTodo = async (formData: FormData) => {
	const task = formData.get("task")?.toString() ?? "";
	await withAuthenticatedDrizzle(async (db, ctx) => {
		await db.insert(orgTodos).values({
			task,
		});
	});

	revalidatePath("/todos");
};
