.PHONY: migrate rollback
run:
	deno run --allow-net --allow-read src/mod.ts

migrate:
	deno run --allow-net --allow-read https://deno.land/x/nessie@1.1.3/cli.ts migrate

rollback:
	deno run --allow-net --allow-read https://deno.land/x/nessie@1.1.3/cli.ts rollback