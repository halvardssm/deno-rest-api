import {
  ClientPostgreSQL,
  NessieConfig,
} from "https://deno.land/x/nessie@2.0.0-rc2/mod.ts";

const config: NessieConfig = {
  client: new ClientPostgreSQL({
    database: "nessie",
    hostname: "localhost",
    port: 5432,
    user: "root",
    password: "pwd",
  }),
};

export default config;
