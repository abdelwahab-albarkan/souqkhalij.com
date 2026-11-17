import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

export const SITE = {
  url: (process.env.SITE_URL || "https://souqkhalij.com").replace(/\/$/, ""),
  name: "دليل IPTV الخليج",
  short: "IPTV الخليج",
  focus: "IPTV",
  whatsapp: "212625218443",
  email: "support@streamb4.com",
  date: "2026-11-11",
};

export function waLink(msg) {
  const text = msg || "السلام عليكم، أرغب في الاستفسار عن خدمة IPTV";
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

// ---- keyword volumes (Google Ads via DataForSEO, pulled 2026-11-11) ----
const COLS = ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"];
const vols = new Map();
const raw = fs.readFileSync(path.join(here, "volumes.csv"), "utf8").split(/\r?\n/).slice(1);
for (const line of raw) {
  const m = line.match(/^"(.*)",(.*)$/);
  if (!m) continue;
  const nums = m[2].split(",").map(Number);
  const o = { total: nums[0] };
  COLS.forEach((c, i) => (o[c] = nums[i + 1]));
  vols.set(m[1].toLowerCase(), o);
}
export function vol(keyword, col = "total") {
  const v = vols.get(String(keyword).toLowerCase());
  return v ? v[col] || 0 : 0;
}
export const fmt = (n) => Number(n).toLocaleString("en-US");
