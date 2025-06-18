import { createClient, defaultPlugins } from "@hey-api/openapi-ts";

const oas = await fetch("http://localhost:5014/openapi/v1.json").then((res) =>
  res.json()
);

await createClient({
  input: oas,
  output: "api",
  plugins: [
    ...defaultPlugins,
    "@hey-api/transformers",
    {
      name: "@hey-api/client-fetch",
      throwOnError: true,
    },
  ],
});

new Deno.Command("deno", {
  args: ["lint", "--unstable-sloppy-imports", "--fix", "api"],
}).spawn().ref();
