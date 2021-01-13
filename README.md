# deno-rest-api

Template for deno rest api

## Commands

`make` or `make run` starts the server

`make migrate` runs migrations

`make rollback` runs rollback

## Migrations

To create migrations, run: `deno run --allow-net --allow-read --allow-write https://deno.land/x/nessie/cli.ts make create_users`
