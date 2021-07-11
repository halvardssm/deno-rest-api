import { Application, loadEnvFile } from "./deps.ts";
import { router } from "./src/router.ts";
import { createResponse } from "./src/utils.ts";

loadEnvFile({ priorityEnv: true });

const app = new Application();

app.addEventListener("listen", ({ hostname = "localhost", port, secure }) => {
  const url = `${secure ? "https://" : "http://"}${hostname}:${port}`;
  console.info(`Listening on: ${url}`);
});

const encoder = new TextEncoder();

// Error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    const data = encoder.encode(new Date().toISOString() + ": " + e + "\n");
    Deno.writeFile("./logs/app.log", data, { append: true });
    createResponse(ctx, {}, e);
  }
});

app.use(router.routes(), router.allowedMethods());

const port = parseInt(Deno.env.get("APP_PORT") || "8000");

await app.listen({ port });
