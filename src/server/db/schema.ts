import { authOrg } from "@/server/db/utils/auth";
import { sql } from "drizzle-orm";
import { authUid, authenticatedRole, crudPolicy } from "drizzle-orm/neon";
import {
	bigint,
	boolean,
	integer,
	pgTable,
	serial,
	text,
	varchar,
} from "drizzle-orm/pg-core";

export const todos = pgTable(
	"todos",
	{
		id: integer().primaryKey().generatedByDefaultAsIdentity(),
		task: text().notNull(),
		completed: boolean().notNull().default(false),
		userId: text().notNull().default(sql`(auth.user_id())`),
	},
	(table) => [
		crudPolicy({
			role: authenticatedRole,
			read: authUid(table.userId),
			modify: authUid(table.userId),
		}),
	],
);

export const orgTodos = pgTable(
	"org_todos",
	{
		id: integer().primaryKey().generatedByDefaultAsIdentity(),
		task: text().notNull(),
		completed: boolean().notNull().default(false),
		orgCode: text().notNull().default(sql`(auth.session()->>'org_code')`),
	},
	(table) => [
		crudPolicy({
			role: authenticatedRole,
			read: authOrg(table.orgCode),
			modify: authOrg(table.orgCode),
		}),
	],
);

export type Todo = typeof todos.$inferSelect;
export type OrgTodo = typeof orgTodos.$inferSelect;
