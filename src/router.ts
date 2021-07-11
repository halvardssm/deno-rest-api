import { Router } from "../deps.ts";

const v1Router = new Router()
  .get("/health-check", (context) => {
    context.response.status = 200;
  });

export const router = new Router()
  // Remove the middleware below for new projects
  .get("/", (ctx) => {
    ctx.response.body = "Hello World!";
  })
  .use("/v1", v1Router.routes(), v1Router.allowedMethods());
