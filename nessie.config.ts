import { ClientPostgreSQL, NessieConfig } from "./deps.ts";
import { connectionOptions } from "./db/db.ts";

const config: NessieConfig = {
  client: new ClientPostgreSQL(connectionOptions),
};

export default config;
