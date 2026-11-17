import { corePages, HUBS } from "./core.mjs";
import { familyPages } from "./families.mjs";
import { englishPages } from "./en_pages.mjs";
import { topics1 } from "./topics1.mjs";
import { topics2 } from "./topics2.mjs";
import { topics3 } from "./topics3.mjs";
import { topics4 } from "./topics4.mjs";
import { topics5 } from "./topics5.mjs";
import { extras1 } from "./extras1.mjs";
import { extras2 } from "./extras2.mjs";
import { extras3 } from "./extras3.mjs";
import { extras4 } from "./extras4.mjs";
import { extras5 } from "./extras5.mjs";
import { extras6 } from "./extras6.mjs";
import { extras7 } from "./extras7.mjs";
import { extras8 } from "./extras8.mjs";
import { extras9 } from "./extras9.mjs";
import { extras10 } from "./extras10.mjs";
import { generateGulfCityPages } from "./gulf_cities.mjs";
import { generateGulfSportsPages } from "./gulf_sports.mjs";
import { generateGulfDevicesAppsPages } from "./gulf_devices_apps.mjs";
import { generateGulfIspsPages } from "./gulf_isps.mjs";
import { generateGulfIntentPricingPages } from "./gulf_intent_pricing.mjs";
import { generateGulfEnExpatsPages } from "./gulf_en_expats.mjs";
import { generateScaleDistrictsPages } from "./scale_districts.mjs";
import { generateScaleSportsTeamsPages } from "./scale_sports_teams.mjs";
import { generateScaleDevicesTvPages } from "./scale_devices_tv.mjs";
import { generateScaleCityPlansPages } from "./scale_city_plans.mjs";
import { generateScaleEnglishExpatsPages } from "./scale_english_expats.mjs";

export { HUBS };
export const CAT_LABEL = {};

const EXTRAS = {};
for (const ex of [extras1, extras2, extras3, extras4, extras5, extras6, extras7, extras8, extras9, extras10]) for (const [k, v] of Object.entries(ex)) (EXTRAS[k] = EXTRAS[k] || []).push(...v);

// أقسام عامة مشتركة بين صفحات الدول نحذفها لتقليل التكرار
const DROP = {
  isp: ["متى تتصل بدعم المزود؟"],
  "country-subscribe": ["أخطاء شائعة"],
  "country-legal": ["علامات تحذيرية", "قرار عملي"],
  "country-expats": ["اختر حسب احتياجك لا حسب العدد", "الحذر مما ينتشر بين الجاليات", "عند السفر أو العودة إلى بلدك"],
};

const norm = (p) => ({ faqs: [], related: [], sections: [], kw2: "iptv", ...p });

export function allPages() {
  const list = [
    ...corePages(),
    ...familyPages(),
    ...topics1, ...topics2, ...topics3, ...topics4, ...topics5,
    ...englishPages(),
    ...generateGulfCityPages(),
    ...generateGulfSportsPages(),
    ...generateGulfDevicesAppsPages(),
    ...generateGulfIspsPages(),
    ...generateGulfIntentPricingPages(),
    ...generateGulfEnExpatsPages(),
    ...generateScaleDistrictsPages(),
    ...generateScaleSportsTeamsPages(),
    ...generateScaleDevicesTvPages(),
    ...generateScaleCityPlansPages(),
    ...generateScaleEnglishExpatsPages(),
  ].map(norm);

  const bySlug = new Map(list.map((p) => [p.slug, p]));
  for (const [slug, secs] of Object.entries(EXTRAS)) {
    const p = bySlug.get(slug);
    if (!p) throw new Error(`extras: unknown slug ${slug}`);
    p.sections.push(...secs.map(([h, body]) => ({ h, body })));
  }
  for (const p of list) {
    if (p.lead && !/iptv/i.test(p.lead)) {
      if (p.lang === "en") p.lead += " This guide is part of our Gulf IPTV series.";
      else p.lead += " وهذا الدليل جزء من سلسلة شروح IPTV لمستخدمي الخليج.";
    }
    const drop = DROP[p.cat];
    if (drop) p.sections = p.sections.filter((s) => !drop.includes(s.h));
  }
  const rank = (p) => (p.slug === "" ? 0 : p.slug === "en" ? 0.5 : p.cat === "hub" ? 1 : p.cat === "core" ? 2 : 3);
  return list.sort((a, b) => rank(a) - rank(b));
}
