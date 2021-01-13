import {
  ClientOptions,
  ClientPostgreSQL,
} from "https://deno.land/x/nessie@1.1.3/mod.ts";
import type { ConnectionOptions } from "https://deno.land/x/postgres@v0.4.6/connection_params.ts";

/** These are the default config options. */
const clientOptions: ClientOptions = {
  migrationFolder: "./db/migrations",
  seedFolder: "./db/seeds",
  experimental: true,
};

export const pgOptions: ConnectionOptions = {
  database: "nessie",
  hostname: "localhost",
  port: 5432,
  user: "root",
  password: "pwd",
};

/** Select one of the supported clients */
const clientPg = new ClientPostgreSQL(clientOptions, pgOptions);

/** This is the final config object */
const config = {
  client: clientPg,
  // Defaults to false, if you want the query builder exposed in migration files, set this to true.
  exposeQueryBuilder: false,
};

export default config;
