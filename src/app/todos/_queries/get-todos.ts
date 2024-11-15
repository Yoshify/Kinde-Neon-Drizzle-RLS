import "server-only";

import { withAuthenticatedDrizzle } from "@/server/db";

export const getTodos = async () => {
	return await withAuthenticatedDrizzle(async (db, ctx) => {
		return await db.query.todos.findMany({
			orderBy: (todos, { asc }) => [asc(todos.id)],
		});
	});
};

export const getOrgTodos = async () => {
	return await withAuthenticatedDrizzle(async (db, ctx) => {
		return await db.query.orgTodos.findMany({
			orderBy: (todos, { asc }) => [asc(todos.id)],
		});
	});
};
