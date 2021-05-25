import { PostgreSQLClientOptions } from "../deps.ts";

const {
  DB_HOST = "localhost",
  DB_PORT = "5432",
  DB_PASSWORD,
  DB_USER = "postgres",
  DB_NAME = "postgres",
} = Deno.env.toObject();

export const connectionOptions: PostgreSQLClientOptions = {
  database: DB_NAME,
  hostname: DB_HOST,
  port: parseInt(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
};
