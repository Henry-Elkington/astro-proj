import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

// for migrations
const migrationClient = postgres(import.meta.env.DATABASE_URL, { max: 1 });
await migrate(drizzle(migrationClient), {
  migrationsFolder: "./src/db/migrations",
});

// for query purposes
const queryClient = postgres(import.meta.env.DATABASE_URL);
const db: PostgresJsDatabase = drizzle(queryClient);

export { db, queryClient };
