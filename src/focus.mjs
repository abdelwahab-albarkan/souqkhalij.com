import { countries, isps, cities, apps, devices } from "./entities.mjs";

// لكل صفحة: كلمة رئيسية موحدة (iptv) + كلمة تركيز خاصة بالصفحة + نية البحث
const cBySlug = Object.fromEntries(countries.map((c) => [c.slug, c]));
const ispById = Object.fromEntries(isps.map((i) => [i.id, i]));
const cityById = Object.fromEntries(cities.map((c) => [`iptv-${c.id}`, c]));
const appById = Object.fromEntries(apps.map((a) => [a.id, a]));
const devById = Object.fromEntries(devices.map((d) => [d.id, d]));

const HUB = {
  "iptv-countries": ["iptv الخليج", "iptv gulf"], "iptv-isp": ["iptv مزودي الإنترنت", "iptv internet provider"],
  "iptv-apps": ["تطبيقات iptv", "iptv apps"], "iptv-devices": ["أجهزة iptv", "iptv devices"],
  "iptv-guides": ["دليل iptv", "iptv guide"], "iptv-troubleshooting": ["حل مشاكل iptv", "iptv problems"], "iptv-compare": ["مقارنة iptv", "iptv comparison"],
};
const INTENT = {
  home: "تجاري/تعريفي", hub: "تصفح", core: "معلوماتي", country: "تجاري محلي", "country-subscribe": "معاملاتي", "country-legal": "معلوماتي",
  "country-expats": "تجاري محلي", isp: "معلوماتي محلي", city: "تجاري محلي", app: "ملاحي/معلوماتي", device: "معلوماتي", guide: "معلوماتي",
  troubleshooting: "حل مشكلة", compare: "مقارنة قبل الشراء",
  "gulf-city": "تجاري محلي", "gulf-sports": "بث رياضي", "gulf-device": "أجهزة وتطبيقات", "gulf-app": "تطبيقات",
  "gulf-isp": "شبكات وإنترنت", "gulf-pricing": "معاملاتي / باقات", "gulf-expat": "تجاري إكسبات",
};

export function focusFor(p) {
  const tail = p.slug.split("/")[1] || "";
  let ar = p.crumb || p.h1, en = "iptv";
  if (p.slug === "") { ar = "iptv الخليج"; en = "iptv"; }
  else if (p.slug === "en") { ar = "iptv gulf"; en = "best iptv subscription"; }
  else if (p.slug === "iptv-prices") { ar = "اسعار اشتراك iptv"; en = "iptv price"; }
  else if (p.slug === "en/iptv-prices") { ar = "iptv subscription prices"; en = "iptv price"; }
  else if (p.lang === "en") { ar = p.crumb || p.h1; en = p.kw2 || "iptv"; }
  else if (HUB[p.slug]) [ar, en] = HUB[p.slug];
  else if (p.cat === "country") { const c = cBySlug[p.slug]; ar = c ? `iptv ${c.ar}` : p.h1; en = c ? `iptv ${c.col.toLowerCase()}` : "iptv"; }
  else if (p.cat === "country-subscribe") { const c = cBySlug[p.slug.split("/")[0]]; ar = c ? `اشتراك iptv ${c.ar}` : p.h1; en = c ? `iptv subscription ${c.col.toLowerCase()}` : "iptv subscription"; }
  else if (p.cat === "country-legal") { const c = cBySlug[p.slug.split("/")[0]]; ar = c ? `هل iptv قانوني في ${c.ar}` : p.h1; en = "is iptv legal"; }
  else if (p.cat === "country-expats") { const c = cBySlug[p.slug.split("/")[0]]; ar = c ? `iptv للمقيمين في ${c.ar}` : p.h1; en = "iptv"; }
  else if (p.cat === "isp") { const i = ispById[tail]; ar = i ? `iptv ${i.name}` : p.h1; en = i ? `iptv ${tail.replace(/-/g, " ")}` : "iptv"; }
  else if (p.cat === "city") { const c = cityById[p.slug]; ar = c ? `iptv ${c.ar}` : p.h1; en = p.slug.replace(/-/g, " "); }
  else if (p.cat === "app") { const a = appById[tail]; ar = a ? a.name : p.h1; en = a ? (a.kw || `iptv ${tail.replace(/-/g, " ")}`) : "iptv"; }
  else if (p.cat === "device") { const d = devById[tail]; ar = d ? `iptv ${d.name}` : p.h1; en = d ? `iptv ${tail.replace(/-/g, " ")}` : "iptv"; }
  else if (p.kw2 && p.kw2 !== "iptv") { ar = p.crumb || p.h1; en = p.kw2; }
  else { ar = p.crumb || p.h1; en = "iptv"; }
  return { ar, en, intent: INTENT[p.cat] || "معلوماتي" };
}
