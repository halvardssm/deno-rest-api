import { ClientSQLite, NessieConfig } from "./deps.ts";
import { connectionOptions } from "./db/db.ts";

const config: NessieConfig = {
  client: new ClientSQLite(connectionOptions),
  migrationFolders: ["./db/migrations"],
  seedFolders: ["./db/seeds"],
};

export default config;
