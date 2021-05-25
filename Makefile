run:
	deno run --allow-net --allow-env main.ts

migrate:
	deno run -A --unstable https://deno.land/x/nessie@2.0.0-rc2/cli.ts migrate

rollback:
	deno run -A --unstable https://deno.land/x/nessie@2.0.0-rc2/cli.ts rollback

build:
	@docker build -t deno_rest .

run_prod:
	@docker run -it --rm deno_rest 
