import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("dist");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".json": "application/json",
};

const port = Number(process.argv[2] || process.env.PORT || 3025);

const server = http.createServer((q, r) => {
  const [pathname, search] = q.url.split("?");
  const query = search ? `?${search}` : "";
  let p = decodeURIComponent(pathname);
  let f = path.join(root, p);

  // Security check: prevent directory traversal
  if (!f.startsWith(root)) {
    r.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
    return r.end("403 Forbidden");
  }

  // Legacy Dropped Domain / Old Shopify 301 Redirects
  if (p === "/pages/contact-us" || p === "/pages/contact-us/" || p === "/pages/contact" || p === "/pages/contact/" || p === "/contact-us" || p === "/contact-us/" || p === "/contact" || p === "/contact/") {
    r.writeHead(301, {
      Location: `/iptv-contact/${query}`,
      "Cache-Control": "public, max-age=31536000",
      "content-type": "text/plain; charset=utf-8"
    });
    return r.end(`301 Redirecting to /iptv-contact/${query}`);
  }
  if (p.startsWith("/collections/") || p.startsWith("/products/")) {
    r.writeHead(301, {
      Location: `/iptv-prices/${query}`,
      "Cache-Control": "public, max-age=31536000",
      "content-type": "text/plain; charset=utf-8"
    });
    return r.end(`301 Redirecting to /iptv-prices/${query}`);
  }
  if (p.startsWith("/pages/")) {
    r.writeHead(301, {
      Location: `/${query}`,
      "Cache-Control": "public, max-age=31536000",
      "content-type": "text/plain; charset=utf-8"
    });
    return r.end(`301 Redirecting to /${query}`);
  }

  // Trailing slash normalization for directories (SEO 301 Permanent Redirect)
  try {
    if (fs.existsSync(f)) {
      const stat = fs.statSync(f);
      if (stat.isDirectory()) {
        if (!p.endsWith("/")) {
          r.writeHead(301, {
            Location: `${p}/${query}`,
            "Cache-Control": "public, max-age=31536000",
            "content-type": "text/plain; charset=utf-8"
          });
          return r.end(`301 Redirecting to ${p}/${query}`);
        }
        f = path.join(f, "index.html");
      }
    }
  } catch (err) {
    // fall through to 404
  }

  if (p.endsWith("/")) f = path.join(f, "index.html");
  if (!fs.existsSync(f) && fs.existsSync(f + ".html")) f = f + ".html";

  // 404 Not Found handling
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) {
    r.writeHead(404, {
      "content-type": "text/html; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "Cache-Control": "no-cache, no-store, must-revalidate"
    });
    const nfPath = path.join(root, "404.html");
    if (fs.existsSync(nfPath)) return fs.createReadStream(nfPath).pipe(r);
    return r.end("<!doctype html><html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1></body></html>");
  }

  // Standard static file serving with optimal HTTP headers
  const ext = path.extname(f).toLowerCase();
  const isImmutable = f.includes(path.sep + "assets" + path.sep) || f.includes(path.sep + "img" + path.sep);
  const cacheControl = isImmutable ? "public, max-age=31536000, immutable" : "public, max-age=3600, stale-while-revalidate=86400";

  r.writeHead(200, {
    "content-type": types[ext] || "application/octet-stream",
    "Cache-Control": cacheControl,
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  });
  fs.createReadStream(f).pipe(r);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});
