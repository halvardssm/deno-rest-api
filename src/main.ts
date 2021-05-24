import { Application } from "https://deno.land/x/oak@v7.5.0/mod.ts";
const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hallo World!";
});

const port = parseInt(Deno.env.get("APP_PORT") || "8000");

console.info(`Server is listening on port ${port}`);

await app.listen({ port });
