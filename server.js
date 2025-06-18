import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { html } from "./src/index.js";

const app = new Hono();

// Serve static files
app.use("/static/*", serveStatic({ root: "./" }));
app.use("/manifest.json", serveStatic({ path: "./manifest.json" }));

// Main route
app.get("/", (c) => {
    return c.html(html);
});

const port = process.env.PORT || 3000;

serve({ fetch: app.fetch, port: port }, () =>
    console.log(`Server running on http://localhost:${port}`)
);
