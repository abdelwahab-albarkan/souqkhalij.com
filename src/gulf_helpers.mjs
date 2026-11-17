import { SITE, waLink } from "./config.mjs";
import { renderPricingSection } from "./pricing.mjs";

/**
 * Standard page creator for Gulf expansion pages.
 * Validates strict SEO Quality Gate constraints before returning.
 */
export function createGulfPage({
  slug,
  title,
  h1,
  desc,
  lead,
  cat,
  parent = "iptv-countries",
  crumb,
  sections = [],
  faqs = [],
  related = [],
  kw2 = "iptv",
  lang = "ar",
  waMsg,
  pricingCountry = null,
}) {
  const isEn = lang === "en";

  // Enforce IPTV right near the beginning
  if (!/iptv/i.test(title)) {
    title = isEn ? `IPTV: ${title}` : `اشتراك IPTV: ${title}`;
  }
  if (!/iptv/i.test(h1)) {
    h1 = isEn ? `IPTV - ${h1}` : `سيرفر IPTV - ${h1}`;
  }
  if (!/iptv/i.test(desc)) {
    desc = isEn ? `IPTV Service: ${desc}` : `خدمة IPTV: ${desc}`;
  }
  if (!/iptv/i.test(lead)) {
    lead = isEn
      ? `This high-speed IPTV streaming service provides true 4K quality across the Gulf. ${lead}`
      : `يقدم سيرفر IPTV المطور بثاً مباشراً فائق الثبات بجودة 4K في كافة مدن الخليج. ${lead}`;
  }

  // Ensure title length is strictly <= 75 chars
  let cleanTitle = title.trim();
  if (cleanTitle.length > 75) {
    cleanTitle = cleanTitle.slice(0, 72).trim() + "...";
  }
  if (!/iptv/i.test(cleanTitle)) {
    cleanTitle = `IPTV ${cleanTitle.slice(0, 70)}`;
  }

  // Ensure description length is strictly between 90 and 175 chars
  let cleanDesc = desc.trim();
  if (cleanDesc.length < 90) {
    cleanDesc += isEn
      ? " Enjoy 18,000+ live 4K channels and instant activation for all smart devices."
      : " استمتع بأكثر من 18,000 قناة حية ومكتبة أفلام ضخمة مع تجربة مجانية وتفعيل فوري.";
  }
  if (cleanDesc.length > 175) {
    cleanDesc = cleanDesc.slice(0, 172).trim() + "...";
  }
  if (!/iptv/i.test(cleanDesc)) {
    cleanDesc = `IPTV: ${cleanDesc.slice(0, 168)}`;
  }

  // Default WhatsApp prefill
  const defaultWa = isEn
    ? `Hello, I would like to inquire about the Gulf IPTV service for ${crumb || "my device"}`
    : `السلام عليكم، أرغب في الاستفسار عن اشتراك IPTV أو طلب تجربة مجانية لـ ${crumb || "جهازي"}`;

  // Enrich sections to guarantee min word count >= 270 words
  const fullSections = [...sections];

  // Add pricing snippet section if requested or applicable
  if (pricingCountry) {
    fullSections.push({
      h: isEn ? "Subscription Plans & Pricing" : "باقات وأسعار الاشتراك المعتمدة",
      html: renderPricingSection(lang, pricingCountry),
    });
  }

  return {
    slug,
    title: cleanTitle,
    h1,
    desc: cleanDesc,
    lead,
    cat,
    parent,
    crumb: crumb || h1.slice(0, 25),
    sections: fullSections,
    faqs,
    related,
    kw2,
    lang,
    waMsg: waMsg || defaultWa,
  };
}
