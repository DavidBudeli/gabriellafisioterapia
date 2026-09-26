import { access, cp } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const standalone = new URL(".next/standalone/", projectRoot);

// Only package assets after Next.js itself has generated its real server.
// https://nextjs.org/docs/app/api-reference/config/next-config-js/output
await access(new URL("server.js", standalone));
await cp(new URL("public/", projectRoot), new URL("public/", standalone), {
  recursive: true,
});
await cp(new URL(".next/static/", projectRoot), new URL(".next/static/", standalone), {
  recursive: true,
});

console.log("Native Next.js standalone ready with public assets and static chunks.");
