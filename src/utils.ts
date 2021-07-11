import { AppContext } from "./types.ts";

export function createResponse(
  ctx: AppContext,
  body: Record<string, any> = {},
  errorMessage?: string,
) {
  const isSuccess = !errorMessage;

  ctx.response.type = "json";
  ctx.response.status = 200;
  ctx.response.body = {
    success: isSuccess,
    error: errorMessage,
    body,
  };
}

/** Retrieves the request body as JSON */
export async function getReqBody<T extends Record<string, any>>(
  ctx: AppContext,
): Promise<T> {
  return await ctx.request.body({ type: "json" }).value;
}
