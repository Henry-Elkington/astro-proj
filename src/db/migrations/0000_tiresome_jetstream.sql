CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"done" boolean DEFAULT false,
	"description" text
);
