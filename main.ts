import { Hono } from "hono";
// import { cors } from "hono/cors";

// import {
//   DoistCard,
//   DoistCardRequest,
//   SubmitAction,
//   TextBlock,
// } from "npm:@doist/ui-extensions-core";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

Deno.serve(app.fetch);
