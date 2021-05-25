import { AbstractMigration, ClientPostgreSQL } from "../../deps.ts";

export default class extends AbstractMigration<ClientPostgreSQL> {
  /** Runs on migrate */
  async up(): Promise<void> {
    await this.client.queryArray('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  }

  /** Runs on rollback */
  async down(): Promise<void> {
    await this.client.queryArray('DROP EXTENSION IF EXISTS "uuid-ossp";');
  }
}
