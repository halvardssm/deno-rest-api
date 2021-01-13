import {
  AbstractMigration,
  ClientPostgreSQL,
  Info,
} from "https://deno.land/x/nessie@1.1.3/mod.ts";
// import Dex from "https://deno.land/x/dex/mod.ts";

export default class CreateUsers extends AbstractMigration<ClientPostgreSQL> {
  /** Runs on migrate */
  async up(info: Info): Promise<void> {
    await this.client.query("CREATE TABLE table1 (id int)");
  }

  /** Runs on rollback */
  async down(info: Info): Promise<void> {
    await this.client.query("DROP TABLE table1");
  }
}
