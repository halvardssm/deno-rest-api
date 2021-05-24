import { AbstractMigration, Info,ClientPostgreSQL } from "https://deno.land/x/nessie@2.0.0-rc2/mod.ts";

export default class extends AbstractMigration<ClientPostgreSQL> {
    /** Runs on migrate */
    async up(info: Info): Promise<void> {
        await this.client.queryArray('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    }

    /** Runs on rollback */
    async down(info: Info): Promise<void> {
        await this.client.queryArray('DROP EXTENSION IF EXISTS "uuid-ossp";')
    }
}
