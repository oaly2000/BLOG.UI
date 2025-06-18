import { App, fsRoutes, staticFiles } from "fresh";
import { type State } from "./utils.ts";
import { client } from "./api/client.gen.ts";

if (Deno.env.get("BLOG_API")) {
  client.setConfig({ baseUrl: Deno.env.get("BLOG_API") });
}

export const app = new App<State>();

app.use(staticFiles());

await fsRoutes(app, {
  loadIsland: (path) => import(`./islands/${path}`),
  loadRoute: (path) => import(`./routes/${path}`),
});

if (import.meta.main) {
  await app.listen();
}
