import fs from "node:fs";
import path from "node:path";
import https from "node:https";

const sitemapAllPath = path.resolve("dist", "sitemap-all.xml");
const sitemapPath = fs.existsSync(sitemapAllPath) ? sitemapAllPath : path.resolve("dist", "sitemap.xml");

if (!fs.existsSync(sitemapPath)) {
  console.error("Error: dist/sitemap.xml not found. Please run 'node build.mjs' first.");
  process.exit(1);
}

const xml = fs.readFileSync(sitemapPath, "utf8");
const urls = [];
const regex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
let match;
while ((match = regex.exec(xml)) !== null) {
  urls.push(match[1]);
}

console.log(`========================================`);
console.log(`🚀 Gulf IPTV Senior SEO Indexing Suite`);
console.log(`========================================`);
console.log(`Total URLs discovered in sitemap.xml: ${urls.length}`);

// Category breakdown
const breakdown = {
  arHome: 0,
  enHome: 0,
  pricing: 0,
  countries: 0,
  cities: 0,
  districts: 0,
  devices: 0,
  apps: 0,
  isp: 0,
  sports: 0,
  guides: 0,
  troubleshooting: 0,
  compare: 0,
  other: 0,
};

for (const u of urls) {
  if (u.endsWith("/iptv-prices/") || u.endsWith("/en/iptv-prices/")) breakdown.pricing++;
  else if (u.includes("/iptv-saudi-arabia") || u.includes("/iptv-uae") || u.includes("/iptv-kuwait") || u.includes("/iptv-qatar") || u.includes("/iptv-bahrain") || u.includes("/iptv-oman")) {
    if (u.includes("-district-") || u.includes("-trial") || u.includes("-fiber") || u.includes("-4k")) breakdown.districts++;
    else breakdown.countries++;
  } else if (u.includes("iptv-city-")) breakdown.cities++;
  else if (u.includes("device") || u.includes("samsung") || u.includes("firestick") || u.includes("apple-tv")) breakdown.devices++;
  else if (u.includes("app") || u.includes("tivimate") || u.includes("smarters") || u.includes("iboplayer")) breakdown.apps++;
  else if (u.includes("isp") || u.includes("stc") || u.includes("mobily") || u.includes("fiber")) breakdown.isp++;
  else if (u.includes("sport") || u.includes("roshn") || u.includes("league")) breakdown.sports++;
  else if (u.includes("troubleshoot")) breakdown.troubleshooting++;
  else if (u.includes("compare")) breakdown.compare++;
  else if (u.includes("guide")) breakdown.guides++;
  else breakdown.other++;
}

console.log(`\n📊 Topical Silo Breakdown:`);
console.log(`  • Pricing & Offers: ${breakdown.pricing} pages`);
console.log(`  • Country Hubs: ${breakdown.countries} pages`);
console.log(`  • City & District Micro-Pages: ${breakdown.cities + breakdown.districts} pages`);
console.log(`  • Hardware & Devices: ${breakdown.devices} pages`);
console.log(`  • IPTV Apps & Players: ${breakdown.apps} pages`);
console.log(`  • Internet Providers & Networks: ${breakdown.isp} pages`);
console.log(`  • Sports & Leagues: ${breakdown.sports} pages`);
console.log(`  • Technical Guides & Troubleshooting: ${breakdown.guides + breakdown.troubleshooting} pages`);
console.log(`  • General / Comparisons: ${breakdown.compare + breakdown.other} pages`);

// Generate IndexNow batch payload
const host = urls[0] ? new URL(urls[0]).host : "localhost";
const indexNowPayload = {
  host: host,
  key: "iptv-gulf-indexnow-key-2026",
  keyLocation: `https://${host}/iptv-gulf-indexnow-key-2026.txt`,
  urlList: urls.slice(0, 10000)
};

const payloadPath = path.resolve("dist", "indexnow_payload.json");
fs.writeFileSync(payloadPath, JSON.stringify(indexNowPayload, null, 2));
console.log(`\n✅ Generated IndexNow batch payload: ${payloadPath} (${urls.length} URLs)`);

// Generate Google Indexing API batch request list
const googleRequests = urls.map((url) => ({
  url: url,
  type: "URL_UPDATED"
}));
const googleBatchPath = path.resolve("dist", "google_indexing_batch.json");
fs.writeFileSync(googleBatchPath, JSON.stringify(googleRequests, null, 2));
console.log(`✅ Generated Google Indexing API batch list: ${googleBatchPath} (${urls.length} URLs)`);

console.log(`\n🎯 Next Senior SEO Execution Steps:`);
console.log(`  1. Submit sitemap: Ping Google at https://www.google.com/ping?sitemap=https://${host}/sitemap.xml`);
console.log(`  2. Submit IndexNow to Bing: POST to https://api.indexnow.org/indexnow with dist/indexnow_payload.json`);
console.log(`  3. In Google Search Console: Submit https://${host}/sitemap.xml for complete priority crawl.`);
console.log(`========================================\n`);

