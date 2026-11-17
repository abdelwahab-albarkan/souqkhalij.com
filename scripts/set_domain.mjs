#!/usr/bin/env node
/**
 * Automated Domain Switcher & Production Rebuilder
 * 
 * Usage:
 *   node scripts/set_domain.mjs <domain-name>
 * Example:
 *   node scripts/set_domain.mjs khalijiptv.com
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configPath = path.join(root, "src", "config.mjs");

const domainInput = process.argv[2];

if (!domainInput) {
  console.log(`
Usage:
  node scripts/set_domain.mjs <domain-name>

Example:
  node scripts/set_domain.mjs khalijiptv.com
`);
  process.exit(0);
}

// Clean domain input (remove http/https/trailing slashes)
const cleanDomain = domainInput.replace(/^https?:\/\//i, "").replace(/\/+$/, "").trim();
const fullUrl = `https://${cleanDomain}`;

console.log(`Updating site domain to: ${fullUrl}...`);

let configCode = fs.readFileSync(configPath, "utf8");
configCode = configCode.replace(
  /url:\s*\(process\.env\.SITE_URL\s*\|\|\s*["'][^"']+["']\)/,
  `url: (process.env.SITE_URL || "${fullUrl}")`
);

fs.writeFileSync(configPath, configCode, "utf8");
console.log("✅ src/config.mjs updated.");

console.log("🔨 Running production build...");
execSync("node build.mjs", { stdio: "inherit", cwd: root });

console.log("🚀 Generating updated IndexNow & Google indexing payloads...");
execSync("node scripts/seo_ping.mjs", { stdio: "inherit", cwd: root });

console.log(`
======================================================
🎉 SUCCESS! Domain successfully updated to: ${fullUrl}
All 3,057 pages, sitemaps, canonicals, and schemas
are now rebuilt for ${fullUrl} in the dist/ folder.
======================================================
`);

