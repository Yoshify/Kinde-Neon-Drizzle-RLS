import { sql } from "drizzle-orm";
import type { AnyPgColumn } from "drizzle-orm/pg-core";

export const authOrg = (orgIdColumn: AnyPgColumn) => {
	return sql`(select auth.session()->>'org_code' = ${orgIdColumn}::text)`;
};
