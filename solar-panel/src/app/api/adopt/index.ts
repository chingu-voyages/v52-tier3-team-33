import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const appAdopt = new Hono();

appAdopt
  .get("/", (c) => {
    return c.json({
      message: "Yes we have cats for adoption",
    });
  })
  .post(
    "/",
    zValidator(
      "json",
      z.object({
        firstName: z.string().min(2).max(50),
        lastName: z.string().min(2).max(50),
        age: z.string().transform((val) => (val ? Number(val) : null)),
        amount: z.coerce.number(),
      })
    ),
    (c) => {
      const body = c.req.valid("json");
      return c.json(body, { status: 201 });
    }
  );

export default appAdopt;
