ENV=dev

include .env

run:
	deno run -A --unstable --watch main.ts

dev:
	@docker run -it --rm -v `pwd`:/app -p $(APP_PORT):$(APP_PORT) deno_rest

migrate:
	deno run -A --unstable https://deno.land/x/nessie@2.0.0-rc2/cli.ts migrate

rollback:
	deno run -A --unstable https://deno.land/x/nessie@2.0.0-rc2/cli.ts rollback

build:
	@docker build -t deno_rest .

start:
	@docker run -it --rm deno_rest 
