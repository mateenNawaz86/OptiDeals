// Serves the static export in `out/` the way Cloudflare Pages does: `/about` resolves to
// `about.html`, and unknown paths get `404.html` with a 404 status. For local checks and
// the Playwright tests; production is served by Cloudflare.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT ?? 3000);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

async function find(pathname) {
  const clean = normalize(decodeURIComponent(pathname)).replace(/^([/\\]|\.\.)+/, "");
  const candidates = clean
    ? [clean, `${clean}.html`, join(clean, "index.html")]
    : ["index.html"];
  for (const candidate of candidates) {
    const file = join(root, candidate);
    if (!file.startsWith(root)) continue;
    try {
      return { file, body: await readFile(file) };
    } catch {
      // Try the next candidate.
    }
  }
  return null;
}

createServer(async (request, response) => {
  const { pathname } = new URL(request.url ?? "/", "http://localhost");
  const found = await find(pathname);
  if (found) {
    response.writeHead(200, {
      "Content-Type": types[extname(found.file)] ?? "application/octet-stream",
    });
    response.end(found.body);
    return;
  }
  response.writeHead(404, { "Content-Type": types[".html"] });
  response.end(await readFile(join(root, "404.html")));
}).listen(port, () => {
  console.log(`Serving out/ at http://localhost:${port}`);
});
