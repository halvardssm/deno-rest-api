import { SQLiteClientOptions } from "../deps.ts";

// In case of PostgreSQL or MySQL
// const {
//   DB_HOST = "localhost",
//   DB_PORT = "5432",
//   DB_PASSWORD,
//   DB_USER = "postgres",
//   DB_NAME = "postgres",
// } = Deno.env.toObject();

// Undefined as we will use in memory db by default
export const connectionOptions: SQLiteClientOptions = undefined;
