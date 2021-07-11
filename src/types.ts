import {
  Context,
  RouteParams,
  RouterContext,
  RouterMiddleware,
  State,
} from "../deps.ts";

export interface AppState extends State {}

export type AppContext = Context<AppState>;
export type AppRouterContext = RouterContext<RouteParams, AppState>;
export type AppMiddleware = RouterMiddleware<RouteParams, AppState>;
