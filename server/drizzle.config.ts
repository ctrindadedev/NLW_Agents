import { defineConfig } from "drizzle-kit";
import { env } from "./src/env.ts";

export default defineConfig({
  dialect: "postgresql",
  casing: "snake_case",
  schema: "./src/db/schema/**.ts", //Todo arquivo de schema é uma tabela do banco de dados
  out: "./src/db/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
