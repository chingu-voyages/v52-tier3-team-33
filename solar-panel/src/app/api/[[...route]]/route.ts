import { Hono } from "hono";
import { handle } from "hono/vercel";

import appAdopt from "../adopt";

export const runtime = "nodejs";

const app = new Hono().basePath("/api");

app.route("/adopt", appAdopt);

export const GET = handle(app);
export const POST = handle(app);
