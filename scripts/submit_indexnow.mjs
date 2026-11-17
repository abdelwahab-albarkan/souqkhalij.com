#!/usr/bin/env node
/**
 * Automated IndexNow Submitter for Gulf IPTV
 * Pushes all URLs from dist/indexnow_payload.json to the IndexNow API.
 * 
 * Usage:
 *   node scripts/submit_indexnow.mjs <host> <apiKey> [keyLocation]
 * Example:
 *   node scripts/submit_indexnow.mjs example.com my-secret-key-123
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const payloadPath = path.join(root, "dist", "indexnow_payload.json");

const host = process.argv[2];
const apiKey = process.argv[3];
const keyLocation = process.argv[4];

if (!host || !apiKey) {
  console.log(`
Usage:
  node scripts/submit_indexnow.mjs <host> <apiKey> [keyLocation]

Example:
  node scripts/submit_indexnow.mjs your-domain.com abc12345def67890
`);
  process.exit(0);
}

if (!fs.existsSync(payloadPath)) {
  console.error(`Error: Payload file not found at ${payloadPath}. Run "node build.mjs" first.`);
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(payloadPath, "utf8"));
const urlList = raw.urlList.map((u) => {
  return u.replace("https://YOUR-DOMAIN.com", `https://${host}`).replace("https://your-domain.com", `https://${host}`);
});

console.log(`Submitting ${urlList.length} URLs to IndexNow for host: ${host}...`);

// IndexNow accepts up to 10,000 URLs per batch
const payload = {
  host,
  key: apiKey,
  keyLocation: keyLocation || `https://${host}/${apiKey}.txt`,
  urlList
};

try {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(payload)
  });

  console.log(`IndexNow HTTP Response: ${res.status} ${res.statusText}`);
  if (res.status === 200 || res.status === 202) {
    console.log("✅ Successfully submitted all URLs to IndexNow network (Bing, Yandex, Seznam, Naver)!");
  } else {
    const text = await res.text();
    console.warn(`Response body: ${text}`);
  }
} catch (err) {
  console.error("Submission error:", err.message);
}

