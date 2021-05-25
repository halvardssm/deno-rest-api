run:
	deno run --allow-net --allow-env src/main.ts

migrate:
	deno run -A --unstable https://deno.land/x/nessie@2.0.0-rc2/cli.ts migrate

rollback:
	deno run -A --unstable https://deno.land/x/nessie@2.0.0-rc2/cli.ts rollback