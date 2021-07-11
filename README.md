# deno-rest-api

Template for deno rest api

## Commands

`make` or `make run` starts the server

`make dev` starts the server in a docker image

`make build` builds the docker image

`make migrate` runs migrations

`make rollback` runs rollback

## Migrations

To create migrations, run:
`deno run -A --unstable https://deno.land/x/nessie/cli.ts make migration_name`
