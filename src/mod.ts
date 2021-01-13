import { Application } from "https://deno.land/x/oak@v6.4.1/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.4.6/mod.ts";
import { pgOptions } from "../nessie.config.ts";
const app = new Application();

const client = new Client(pgOptions);

app.use(async (ctx) => {
  await client.connect();
  const result = await client.query(
    "INSERT INTO table1 VALUES ($1);",
    Math.floor(Math.random() * 100),
  );
  console.log(result.rows);
  await client.end();
});

await app.listen({ port: 8000 });
