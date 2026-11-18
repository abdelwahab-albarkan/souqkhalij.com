import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, waLink, vol, fmt } from "./src/config.mjs";
import { pricingSchemaLd, TRIAL_WA_MSG_EN } from "./src/pricing.mjs";
import { allPages, HUBS, CAT_LABEL } from "./src/pages.mjs";
import { imageFor, copyImages, srcset } from "./src/images.mjs";
import { focusFor } from "./src/focus.mjs";
import { enhanceSeoPages } from "./src/seo_enhancer.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(root, "dist");
const pages = allPages();
enhanceSeoPages(pages);
const bySlug = new Map(pages.map((p) => [p.slug, p]));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const url = (slug) => (slug ? `/${slug}/` : "/");
const abs = (slug) => SITE.url + url(slug);

function inline(t) {
  let s = esc(t);
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, txt, target) => {
    if (target === "/") return `<a href="/">${txt}</a>`;
    if (!bySlug.has(target)) throw new Error(`Broken inline link: ${target} in «${t.slice(0, 60)}»`);
    return `<a href="${url(target)}">${txt}</a>`;
  });
  return s;
}
function md(text) {
  const lines = String(text).split("\n").map((l) => l.trim()).filter(Boolean);
  let html = "", list = null;
  const close = () => { if (list) { html += `</${list}>`; list = null; } };
  for (const l of lines) {
    let m;
    if ((m = l.match(/^- (.*)$/))) { if (list !== "ul") { close(); html += "<ul>"; list = "ul"; } html += `<li>${inline(m[1])}</li>`; }
    else if ((m = l.match(/^\d+\. (.*)$/))) { if (list !== "ol") { close(); html += "<ol>"; list = "ol"; } html += `<li>${inline(m[1])}</li>`; }
    else if ((m = l.match(/^### (.*)$/))) { close(); html += `<h3>${inline(m[1])}</h3>`; }
    else { close(); html += `<p>${inline(l)}</p>`; }
  }
  close();
  return html;
}
const plain = (t) => String(t).replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/^(- |\d+\. |### )/gm, "");

const NAV = [
  ["iptv-prices", "الأسعار والباقات"],
  ["iptv-countries", "الدول"],
  ["iptv-isp", "مزودو الإنترنت"],
  ["iptv-apps", "التطبيقات"],
  ["iptv-devices", "الأجهزة"],
  ["iptv-guides", "الأدلة"],
  ["iptv-troubleshooting", "حل المشاكل"],
  ["iptv-contact", "تواصل معنا"],
];

const NAV_EN = [
  ["en", "Home"],
  ["en/iptv-prices", "Pricing & Plans"],
  ["en/iptv-uae", "UAE & Dubai"],
  ["en/iptv-saudi-arabia", "Saudi Arabia"],
  ["en/free-trial", "Free Trial"],
  ["iptv-contact", "Contact"],
];

function breadcrumbs(p) {
  if (p.lang === "en") {
    if (p.slug === "en") return [{ name: "Home", slug: "en" }];
    const trail = [{ name: "Home", slug: "en" }];
    const chain = [];
    let cur = p.parent ? bySlug.get(p.parent) : null;
    while (cur) { chain.unshift(cur); cur = cur.parent ? bySlug.get(cur.parent) : null; }
    chain.forEach((c) => trail.push({ name: c.crumb || c.h1, slug: c.slug }));
    trail.push({ name: p.crumb || p.h1, slug: p.slug });
    return trail;
  }
  const trail = [{ name: "الرئيسية", slug: "" }];
  const chain = [];
  let cur = p.parent ? bySlug.get(p.parent) : null;
  while (cur) { chain.unshift(cur); cur = cur.parent ? bySlug.get(cur.parent) : null; }
  chain.forEach((c) => trail.push({ name: c.crumb || c.h1, slug: c.slug }));
  trail.push({ name: p.crumb || p.h1, slug: p.slug });
  return trail;
}

function ogImg(p) {
  const im = p.image;
  if (!im) return "";
  return `<meta property="og:image" content="${SITE.url}/img/${im.base}.webp">
<meta name="twitter:image" content="${SITE.url}/img/${im.base}.webp">
<link rel="preload" as="image" href="/img/${im.base}${im.w800 ? "-w800" : ""}.webp" fetchpriority="high">`;
}

function figure(p, hero) {
  const im = p.image;
  if (!im) return "";
  return `<figure class="media ${im.kind}${hero ? " hero-media" : ""}"><img src="/img/${im.base}${im.w800 ? "-w800" : ""}.webp" srcset="${srcset(im)}" sizes="(max-width:700px) 100vw, 760px" alt="${esc(im.alt)}" ${hero ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></figure>`;
}

function renderHome(p) {
  let h = `<section class="hero"><div class="hero-text"><span class="eyebrow">الاشتراك الأقوى والأكثر ثباتاً في السعودية ودول الخليج 🏆</span><h1>${esc(p.h1)}</h1><p class="hero-lead">${inline(p.lead)}</p><div class="hero-cta"><a class="btn btn-primary" href="#pricing">🔥 اشترك الآن (من 15$)</a><a class="btn btn-wa" href="${waLink("السلام عليكم، أرغب في طلب تجربة مجانية لمدة 24 ساعة لسيرفر IPTV")}" rel="noopener" target="_blank">⚡️ تجربة مجانية 24 ساعة</a><a class="btn btn-ghost" href="/iptv-countries/">اختر دولتك</a></div><ul class="chips"><li>✓ ثبات 99.9% بدون تقطيع</li><li>✓ جودة 4K حقيقية و FHD</li><li>✓ باقات تبدأ من 15$</li><li>✓ تفعيل فوري خلال 5 دقائق</li><li>✓ تجربة مجانية 24 ساعة</li></ul></div>${figure(p, true)}</section>`;
  h += `<article class="page home-page">`;
  for (const s of p.sections) h += `<section>\n<h2>${esc(s.h)}</h2>\n${s.html || md(s.body)}\n</section>\n`;
  if (p.faqs.length) h += `<section class="faq"><h2>أسئلة شائعة حول اشتراك IPTV الخليج</h2>${p.faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${inline(a)}</p></details>`).join("")}</section>`;
  h += `<aside class="cta"><h2>هل تحتاج مساعدة أو تفعيل فوري لاشتراك IPTV؟</h2><p>فريق الدعم الفني متواجد 24/7 عبر واتساب للرد على استفساراتك وتفعيل اشتراكك أو منحك تجربة مجانية فورية خلال دقائق.</p><a class="btn btn-wa" href="${waLink()}" rel="noopener" target="_blank">تواصل عبر واتساب الآن</a></aside></article>`;
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: abs(""),
      inLanguage: "ar",
      potentialAction: {
        "@type": "SearchAction",
        target: `${abs("iptv-sitemap")}?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: abs(""),
      email: SITE.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+" + SITE.whatsapp,
        email: SITE.email,
        availableLanguage: ["ar", "en"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: plain(a) }
      }))
    },
  ];
  return layout(p, h, ld);
}

function renderEnHome(p) {
  let h = `<section class="hero"><div class="hero-text"><span class="eyebrow">Top-Rated 4K IPTV Service in the Gulf 🏆</span><h1>${esc(p.h1)}</h1><p class="hero-lead">${inline(p.lead)}</p><div class="hero-cta"><a class="btn btn-primary" href="#pricing">🔥 Subscribe Now (From $15)</a><a class="btn btn-wa" href="${waLink(TRIAL_WA_MSG_EN)}" rel="noopener" target="_blank">⚡️ Free 24h Trial</a><a class="btn btn-ghost" href="/en/iptv-prices/">View Pricing</a></div><ul class="chips"><li>✓ 99.9% Uptime Anti-Freeze</li><li>✓ Ultra 4K & FHD Streams</li><li>✓ Plans from $15 to $45</li><li>✓ 5-Minute Instant Setup</li><li>✓ 24-Hour Free Trial</li></ul></div>${figure(p, true)}</section>`;
  h += `<article class="page home-page">`;
  for (const s of p.sections) h += `<section>\n<h2>${esc(s.h)}</h2>\n${s.html || md(s.body)}\n</section>\n`;
  if (p.faqs.length) h += `<section class="faq"><h2>Frequently Asked Questions about IPTV</h2>${p.faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${inline(a)}</p></details>`).join("")}</section>`;
  h += `<aside class="cta"><h2>Need Assistance Setting Up Your IPTV?</h2><p>Our VIP support team is available 24/7 on WhatsApp to help with app installation, instant activation, or starting your free 24-hour trial.</p><a class="btn btn-wa" href="${waLink(TRIAL_WA_MSG_EN)}" rel="noopener" target="_blank">Contact on WhatsApp</a></aside></article>`;
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${SITE.name} English`,
      url: abs("en"),
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: `${abs("iptv-sitemap")}?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: abs(""),
      email: SITE.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+" + SITE.whatsapp,
        email: SITE.email,
        availableLanguage: ["en", "ar"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: plain(a) }
      }))
    },
  ];
  return layout(p, h, ld);
}

const NAV_MAIN_AR = [["iptv-prices", "الأسعار والباقات"], ["iptv-countries", "الدول"], ["iptv-apps", "التطبيقات"], ["iptv-devices", "الأجهزة"], ["iptv-guides", "الأدلة"]];
const NAV_MORE_AR = [["iptv-isp", "مزودو الإنترنت"], ["iptv-troubleshooting", "حل المشاكل"], ["iptv-compare", "المقارنات"], ["iptv-faq", "الأسئلة الشائعة"], ["iptv-about", "من نحن"], ["iptv-contact", "تواصل معنا"]];
const NAV_MAIN_EN = [["en", "Home"], ["en/iptv-prices", "Pricing & Plans"], ["en/iptv-uae", "UAE & Dubai"], ["en/iptv-saudi-arabia", "Saudi Arabia"], ["en/free-trial", "Free Trial"]];
const NAV_MORE_EN = [["iptv-contact", "Contact"]];

const SVG_MOON = `<svg class="i-moon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`;
const SVG_SUN = `<svg class="i-sun" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
const SVG_CHEV = `<svg class="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;
const SVG_WA = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2zm5.8 14.1c-.25.7-1.45 1.33-2 1.4-.52.08-1.17.1-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.3-5-4.35-5.15-4.55-.15-.2-1.24-1.65-1.24-3.15s.78-2.23 1.06-2.53c.27-.3.6-.38.8-.38h.57c.18 0 .43-.07.67.5.25.6.85 2.08.93 2.23.07.15.12.33.02.52-.1.2-.15.32-.3.5-.15.17-.32.38-.45.52-.15.15-.3.3-.13.6.18.3.78 1.28 1.67 2.07 1.15 1.02 2.1 1.34 2.4 1.5.3.14.47.12.65-.07.17-.2.75-.88.95-1.18.2-.3.4-.25.67-.15.27.1 1.72.8 2.02.95.3.15.5.22.57.35.08.12.08.72-.17 1.4z"/></svg>`;

function headerHtml({ isEn, langSwitchTarget, slug }) {
  const main = isEn ? NAV_MAIN_EN : NAV_MAIN_AR;
  const more = isEn ? NAV_MORE_EN : NAV_MORE_AR;
  const cur = (s) => (slug === s || (s !== "" && s !== "en" && slug.startsWith(s + "/")) ? ' aria-current="page"' : "");
  const trialMsg = isEn ? TRIAL_WA_MSG_EN : "السلام عليكم، أرغب في طلب تجربة مجانية لمدة 24 ساعة";
  const trialLabel = isEn ? "Free Trial" : "تجربة مجانية";
  const priceSlug = isEn ? "en/iptv-prices" : "iptv-prices";
  const pill = isEn
    ? `<a class="lang-pill" href="${langSwitchTarget}" hreflang="ar" lang="ar" title="العربية" aria-label="العربية">ع</a>`
    : `<a class="lang-pill" href="${langSwitchTarget}" hreflang="en" lang="en" title="English" aria-label="English">EN</a>`;
  const themeBtn = `<button class="theme-btn" type="button" aria-label="${isEn ? "Toggle dark mode" : "تبديل الوضع الليلي"}" title="${isEn ? "Toggle theme" : "الوضع الليلي"}">${SVG_SUN}${SVG_MOON}</button>`;
  const logo = `<a class="logo" href="${isEn ? "/en/" : "/"}" aria-label="${isEn ? "Gulf IPTV home" : "IPTV الخليج - الرئيسية"}"><span class="logo-mark">IPTV</span><span class="logo-text">${isEn ? "Gulf" : "الخليج"}</span></a>`;
  const moreLabel = isEn ? "More" : "المزيد";
  return `<header class="site"><div class="wrap hdr">
${logo}
<nav class="nav-d" aria-label="${isEn ? "Main navigation" : "القائمة الرئيسية"}"><ul>
${main.map(([s, n]) => `<li><a href="${url(s)}"${cur(s)}>${n}</a></li>`).join("\n")}
<li class="more"><button type="button" class="more-btn" aria-expanded="false" aria-haspopup="true">${moreLabel}${SVG_CHEV}</button>
<ul class="dd">${more.map(([s, n]) => `<li><a href="${url(s)}"${cur(s)}>${n}</a></li>`).join("")}</ul></li>
</ul></nav>
<div class="hdr-actions">
${pill}
${themeBtn}
<a class="head-cta" href="${waLink(trialMsg)}" rel="noopener" target="_blank">${SVG_WA}<span>${trialLabel}</span></a>
<button class="menu-btn" type="button" aria-controls="drawer" aria-expanded="false" aria-label="${isEn ? "Open menu" : "فتح القائمة"}"><span class="burger"><i></i><i></i><i></i></span></button>
</div>
</div></header>
<div class="drawer-ov" data-close></div>
<aside class="drawer" id="drawer" aria-label="${isEn ? "Menu" : "القائمة"}" aria-hidden="true">
<div class="drawer-top">${logo}<button class="drawer-x" type="button" data-close aria-label="${isEn ? "Close menu" : "إغلاق القائمة"}"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>
<nav class="drawer-nav"><ul>${main.map(([s, n]) => `<li><a href="${url(s)}"${cur(s)}>${n}</a></li>`).join("")}</ul>
<p class="drawer-label">${moreLabel}</p>
<ul class="sub">${more.map(([s, n]) => `<li><a href="${url(s)}"${cur(s)}>${n}</a></li>`).join("")}</ul></nav>
<div class="drawer-foot">
<a class="btn btn-primary" href="${waLink(trialMsg)}" rel="noopener" target="_blank">${SVG_WA} ${isEn ? "Start Free 24h Trial" : "ابدأ التجربة المجانية 24 ساعة"}</a>
<a class="btn btn-ghost" href="${url(priceSlug)}">${isEn ? "View Pricing" : "عرض الأسعار والباقات"}</a>
<div class="drawer-tools">${pill}${themeBtn}<a class="drawer-mail" href="mailto:${SITE.email}">${SITE.email}</a></div>
</div>
</aside>`;
}

function footerHtml(isEn) {
  const L = (list) => list.map(([s, n]) => `<li><a href="${url(s)}">${n}</a></li>`).join("");
  const trialMsg = isEn ? TRIAL_WA_MSG_EN : "السلام عليكم، أرغب في طلب تجربة مجانية لمدة 24 ساعة";
  const phone = "+" + SITE.whatsapp.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4");
  const nm = (s) => (bySlug.get(s) ? esc(bySlug.get(s).crumb) : s);
  const arCountries = ["iptv-saudi-arabia", "iptv-uae", "iptv-qatar", "iptv-kuwait", "iptv-bahrain", "iptv-oman"].map((s) => [s, nm(s)]);
  const arSections = ["iptv-prices", ...HUBS].map((s) => [s, nm(s)]);
  const arInfo = ["iptv-about", "iptv-methodology", "iptv-legal-use", "iptv-privacy", "iptv-terms", "iptv-faq", "iptv-glossary", "iptv-sitemap"].map((s) => [s, nm(s)]);
  const t = isEn
    ? { brand: "Gulf IPTV", desc: "IPTV provider & technical guide for users in Saudi Arabia, UAE, Qatar, Kuwait, Bahrain and Oman: 4K servers, instant setup and 24/7 support.", c1: "Gulf Countries", c2: "Quick Links", c3: "Information", ctaH: "Ready to start streaming?", ctaP: "Get a free 24-hour trial on WhatsApp and test everything on your own device before paying.", ctaB1: "Start Free Trial", ctaB2: "View Pricing", top: "Back to top", rights: "All rights reserved.", support: "24/7 Support" }
    : { brand: SITE.name, desc: "دليل ومزود خدمة IPTV في السعودية والإمارات وقطر والكويت والبحرين وعُمان: سيرفرات 4K فائقة الثبات بدون تقطيع، تفعيل فوري ودعم 24/7.", c1: "الدول", c2: "أقسام الموقع", c3: "معلومات", ctaH: "جاهز تبدأ المشاهدة؟", ctaP: "اطلب تجربة مجانية 24 ساعة عبر واتساب واختبر الخدمة على جهازك قبل أي دفع.", ctaB1: "ابدأ التجربة المجانية", ctaB2: "عرض الأسعار", top: "العودة للأعلى", rights: "جميع الحقوق محفوظة.", support: "دعم 24/7" };
  const col1 = isEn ? [["en/iptv-saudi-arabia", "Saudi Arabia"], ["en/iptv-uae", "United Arab Emirates"], ["iptv-qatar", "Qatar"], ["iptv-kuwait", "Kuwait"], ["iptv-bahrain", "Bahrain"], ["iptv-oman", "Oman"]] : arCountries;
  const col2 = isEn ? [["en/iptv-prices", "Pricing & Plans"], ["en/free-trial", "Free 24h Trial"], ["iptv-apps", "IPTV Apps"], ["iptv-devices", "Devices"], ["iptv-troubleshooting", "Troubleshooting"]] : arSections;
  const col3 = isEn ? [["iptv-about", "About Us"], ["iptv-legal-use", "Legal Information"], ["iptv-privacy", "Privacy Policy"], ["iptv-terms", "Terms of Use"], ["iptv-contact", "Contact Support"]] : arInfo;
  const legal = isEn ? [["iptv-privacy", "Privacy"], ["iptv-terms", "Terms"], ["iptv-legal-use", "Legal"], ["iptv-sitemap", "Sitemap"]] : [["iptv-privacy", "الخصوصية"], ["iptv-terms", "الشروط"], ["iptv-legal-use", "الاستخدام القانوني"], ["iptv-sitemap", "خريطة الموقع"]];
  const mail = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 8 9 6 9-6"/></svg>`;
  return `<footer class="site"><div class="wrap">
<div class="f-cta"><div class="f-cta-text"><h2>${t.ctaH}</h2><p>${t.ctaP}</p></div><div class="f-cta-btns"><a class="btn btn-white" href="${waLink(trialMsg)}" rel="noopener" target="_blank">${SVG_WA}<span>${t.ctaB1}</span></a><a class="btn btn-outline" href="${url(isEn ? "en/iptv-prices" : "iptv-prices")}">${t.ctaB2}</a></div></div>
<div class="fgrid">
<div class="f-brand"><a class="logo" href="${isEn ? "/en/" : "/"}"><span class="logo-mark">IPTV</span><span class="logo-text">${isEn ? "Gulf" : "الخليج"}</span></a><p>${t.desc}</p>
<ul class="f-contact-list"><li><a href="${waLink()}" rel="noopener" target="_blank"><span class="f-ico f-ico-wa">${SVG_WA}</span><span class="f-ci"><small>WhatsApp · ${t.support}</small><b dir="ltr">${phone}</b></span></a></li><li><a href="mailto:${SITE.email}"><span class="f-ico">${mail}</span><span class="f-ci"><small>Email</small><b dir="ltr">${SITE.email}</b></span></a></li></ul></div>
<div><h3>${t.c1}</h3><ul>${L(col1)}</ul></div>
<div><h3>${t.c2}</h3><ul>${L(col2)}</ul></div>
<div><h3>${t.c3}</h3><ul>${L(col3)}</ul></div>
</div>
<div class="f-bottom"><p class="copy">© 2026 ${esc(t.brand)} · ${t.rights}</p><ul class="f-legal">${L(legal)}</ul><button class="to-top" type="button" aria-label="${t.top}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 15 6-6 6 6"/></svg><span>${t.top}</span></button></div>
</div></footer>`;
}

function mobileBar(isEn) {
  const msg = isEn ? TRIAL_WA_MSG_EN : "السلام عليكم، أرغب في الاستفسار عن باقات IPTV أو طلب تجربة مجانية";
  return `<div class="mbar"><a class="mbar-wa" href="${waLink(msg)}" rel="noopener" target="_blank">${SVG_WA}<span>${isEn ? "WhatsApp" : "واتساب"}</span></a><a class="mbar-price" href="${url(isEn ? "en/iptv-prices" : "iptv-prices")}"><span>${isEn ? "Plans from $15" : "الباقات من 15$"}</span></a></div>`;
}

function layout(p, body, extraLd = []) {
  const isEn = p.lang === "en";
  const trail = breadcrumbs(p);
  const crumbHtml = trail.map((t, i) => i === trail.length - 1 ? `<span aria-current="page">${esc(t.name)}</span>` : `<a href="${url(t.slug)}">${esc(t.name)}</a>`).join("<span>›</span>");
  const title = (p.slug === "" || p.slug === "en") ? p.title : `${p.title} – ${isEn ? "Gulf IPTV" : SITE.short}`;
  const ld = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: abs(t.slug) })) },
    ...extraLd,
  ];
  if (p.slug === "" || p.slug === "en" || p.slug === "iptv-prices" || p.slug === "en/iptv-prices" || p.cat === "country-subscribe") {
    ld.push(pricingSchemaLd(isEn));
  }
  const noindex = p.noindex ? `<meta name="robots" content="noindex,nofollow">` : `<meta name="robots" content="index,follow,max-image-preview:large">`;

  const canonicalTag = p.noindex ? "" : `<link rel="canonical" href="${abs(p.slug)}">`;
  const hreflangTags = p.noindex ? "" : (isEn ? `
<link rel="alternate" hreflang="en" href="${abs(p.slug)}">
<link rel="alternate" hreflang="ar" href="${abs(p.arSlug !== undefined ? p.arSlug : '')}">
<link rel="alternate" hreflang="x-default" href="${abs(p.arSlug !== undefined ? p.arSlug : '')}">` : `
<link rel="alternate" hreflang="ar" href="${abs(p.slug)}">
<link rel="alternate" hreflang="en" href="${abs(p.enSlug || 'en')}">
<link rel="alternate" hreflang="x-default" href="${abs(p.slug)}">`);

  const navList = isEn ? NAV_EN : NAV;
  const langSwitchTarget = isEn
    ? (p.arSlug !== undefined ? url(p.arSlug) : "/")
    : (p.enSlug ? url(p.enSlug) : "/en/");
  const langSwitchLabel = isEn ? "العربية 🇸🇦" : "English 🇬🇧";

  return `<!doctype html>
<html lang="${isEn ? "en" : "ar"}" dir="${isEn ? "ltr" : "rtl"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(p.desc)}">
${canonicalTag}
${hreflangTags}
${noindex}
<meta property="og:type" content="${(p.slug === "" || p.slug === "en") ? "website" : "article"}">
<meta property="og:locale" content="${isEn ? "en_US" : "ar_AR"}">
<meta property="og:site_name" content="${esc(isEn ? "Gulf IPTV" : SITE.name)}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:url" content="${abs(p.slug)}">
<meta name="theme-color" content="#07090e">
<meta name="author" content="${esc(isEn ? "Gulf IPTV" : SITE.name)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.title)}">
<meta name="twitter:description" content="${esc(p.desc)}">
${ogImg(p)}
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
<link rel="manifest" href="/assets/site.webmanifest">
<script>try{var t=localStorage.getItem("theme");if(!t)t="dark";document.documentElement.dataset.theme=t}catch(e){}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/style.css">
${ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n")}
</head>
<body>
<div class="progress" aria-hidden="true"><i></i></div>
<a class="skip" href="#main">${isEn ? "Skip to content" : "تخطي إلى المحتوى"}</a>
${headerHtml({ isEn, langSwitchTarget, slug: p.slug })}
<main id="main"><div class="wrap">
<nav class="crumbs" aria-label="${isEn ? "Breadcrumb navigation" : "مسار التنقل"}">${crumbHtml}</nav>
${body}
</div></main>
${footerHtml(isEn)}
<a class="wa" href="${waLink(isEn ? TRIAL_WA_MSG_EN : "السلام عليكم، أرغب في الاستفسار عن باقات IPTV أو طلب تجربة مجانية")}" rel="noopener" target="_blank" aria-label="WhatsApp Support"><span>${isEn ? "WhatsApp Support" : "واتساب (تفعيل فوري)"}</span><span class="wa-unread">1</span></a>
${mobileBar(isEn)}
<script src="/assets/app.js" defer></script>
</body>
</html>`;
}

function cards(list) {
  return `<ul class="cards">${list.map((q) => `<li><a href="${url(q.slug)}">${esc(q.h1)}${q.cardNote ? `<small>${esc(q.cardNote)}</small>` : ""}</a></li>`).join("")}</ul>`;
}

function renderPage(p) {
  if (p.slug === "") return renderHome(p);
  if (p.slug === "en") return renderEnHome(p);
  const isEn = p.lang === "en";
  let h = `<article class="page">\n<h1>${esc(p.h1)}</h1>\n<div class="meta">${isEn ? "Last updated: " + SITE.date + " · Reading time: " + Math.max(2, Math.round(p.words / 180)) + " min" : "آخر تحديث: " + SITE.date + " · تقدير القراءة " + Math.max(2, Math.round(p.words / 180)) + " دقائق"}</div>\n`;
  if (p.lead) h += `<p class="lead">${inline(p.lead)}</p>\n`;
  h += figure(p, false) + "\n";
  if (p.sections.length >= 4) h += `<nav class="toc" aria-label="${isEn ? "Table of Contents" : "محتويات الصفحة"}"><strong>${isEn ? "In this article" : "في هذه الصفحة"}</strong><ol>${p.sections.map((s, i) => `<li><a href="#s${i}">${esc(s.h)}</a></li>`).join("")}</ol></nav>\n`;
  for (const [i, s] of p.sections.entries()) {
    h += `<section>\n<h2 id="s${i}">${esc(s.h)}</h2>\n${s.html || md(s.body)}\n</section>\n`;
  }
  if (p.listCats) {
    if (p.slug === "iptv-sitemap") {
      h += `
      <div class="sitemap-filter-box">
        <div class="sitemap-input-wrap">
          <input type="search" id="sitemapFilter" class="sitemap-input" placeholder="🔍 ابحث في أكثر من 3000 صفحة (اكتب اسم مدينتك، حيك، جهازك، أو تطبيقك)..." autocomplete="off" aria-label="بحث في خريطة الموقع">
          <button type="button" id="sitemapClear" class="sitemap-clear-btn" style="display:none">✕</button>
        </div>
        <div class="sitemap-count-badge">المعروض: <strong id="sitemapShownCount">${pages.length}</strong> صفحة</div>
      </div>\n`;
    }
    const catsToRender = p.slug === "iptv-sitemap" ? [
      ["country", "دليل دول الخليج"],
      ["gulf-city", "المدن والأحياء والمناطق الخليجية"],
      ["gulf-sports", "البث الرياضي ومتابعة الدوريات والبطولات"],
      ["gulf-pricing", "باقات وأسعار اشتراك IPTV والتجارب المباشرة"],
      ["gulf-device", "أجهزة الاستقبال والتلفزيونات والشاشات الذكية"],
      ["gulf-app", "مشغلات وتطبيقات IPTV المعتمدة"],
      ["gulf-isp", "شبكات الاتصال ومزودو الألياف والإنترنت"],
      ["guide", "أدلة الاستخدام والشروحات التقنية"],
      ["troubleshooting", "حل المشاكل التقنية واستقرار البث"],
      ["compare", "المقارنات التقنية بين الأجهزة والتطبيقات"],
      ["isp", "مزودو الإنترنت الرئيسيون"],
      ["device", "أجهزة التشغيل الأساسية"],
      ["app", "التطبيقات ومشغلات البث"],
      ["gulf-expat", "English Expat Streaming Guides (الدليل الإنجليزي)"],
      ["country-subscribe", "طرق الاشتراك والتفعيل حسب الدولة"],
      ["country-legal", "الاستخدام القانوني والتنظيمي"],
      ["country-expats", "دليل المقيمين الأجانب في الخليج"],
      ["city", "المدن الكبرى"],
      ["hub", "الأقسام والمراكز الرئيسية"],
      ["core", "الصفحات المرجعية والإدارية"]
    ] : p.listCats;

    for (const [cat, heading] of catsToRender) {
      const items = pages.filter((x) => x.cat === cat && x.slug !== p.slug);
      if (items.length) h += `<section class="sitemap-cat-section">\n<h2>${esc(heading)}</h2>\n${cards(items)}\n</section>\n`;
    }
  }
  if (p.slug !== "" && p.slug !== "en" && p.cat !== "hub") {
    h += `<p class="closing"><strong>${isEn ? "Summary:" : "الخلاصة:"}</strong> ${esc(p.h1)} ${isEn ? "is backed by our high-performance IPTV infrastructure. Start with a 24-hour free trial or choose your package above." : "جزء من رحلتك مع IPTV؛ ابدأ بخطوة صغيرة وجرّب بنفسك، وراجع الصفحات ذات الصلة أدناه عند الحاجة."}</p>\n`;
  }
  if (p.cta !== false) {
    h += `<aside class="cta"><h2>${isEn ? "Need Help Setting Up Your IPTV?" : "هل تحتاج مساعدة في إعداد أو تفعيل IPTV؟"}</h2><p>${isEn ? "Our 24/7 technical team is ready on WhatsApp to help choose the best app, configure your device, or issue your 24-hour test." : "فريق الدعم يرد على استفساراتك التقنية عبر واتساب، ويساعدك في اختيار التطبيق والجهاز المناسبين ويوفر لك تجربة مجانية فورية."}</p><a class="btn" href="${waLink(p.waMsg || (isEn ? TRIAL_WA_MSG_EN : "السلام عليكم، أرغب في الاستفسار عن خدمة IPTV"))}" rel="noopener" target="_blank">${isEn ? "Contact via WhatsApp" : "تواصل عبر واتساب"}</a></aside>\n`;
  }
  if (p.faqs.length) {
    h += `<section class="faq">\n<h2>${isEn ? "Frequently Asked Questions about " + esc(p.faqTopic || "IPTV") : "أسئلة شائعة حول " + esc(p.faqTopic || "IPTV")}</h2>\n${p.faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${inline(a)}</p></details>`).join("\n")}\n</section>\n`;
  }
  if (p.relatedResolved && p.relatedResolved.length) {
    h += `<section>\n<h2>${isEn ? "Related Articles" : "مقالات ذات صلة"}</h2>\n${cards(p.relatedResolved)}\n</section>\n`;
  }
  if (p.notice !== false) {
    h += `<p class="notice">${isEn ? "Note: All streams are provided on high-speed servers with 99.9% uptime. Check our <a href='/en/iptv-prices/'>Pricing Plans</a>." : `تنبيه: هذا المحتوى معلومات عامة للتوعية التقنية. الخدمة والقنوات تختلف حسب المزود، ويقع على المستخدم التأكد من أن الخدمة التي يشترك بها مرخصة وأن استخدامها يتوافق مع قوانين بلده. راجع صفحة <a href="${url("iptv-legal-use")}">الاستخدام القانوني</a>.`}</p>\n`;
  }
  h += `</article>`;

  const ld = [];
  ld.push({ "@context": "https://schema.org", "@type": "Article", headline: p.h1, description: p.desc, inLanguage: isEn ? "en" : "ar", datePublished: SITE.date, dateModified: SITE.date, mainEntityOfPage: abs(p.slug), ...(p.image ? { image: SITE.url + "/img/" + p.image.base + ".webp" } : {}), author: { "@type": "Organization", name: isEn ? "Gulf IPTV" : SITE.name }, publisher: { "@type": "Organization", name: isEn ? "Gulf IPTV" : SITE.name } });
  if (p.faqs.length) {
    ld.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: p.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: plain(a) } })) });
  }
  return layout(p, h, ld);
}

// ---------- resolve related, compute stats ----------
const famIndex = new Map();
for (const p of pages) { if (!famIndex.has(p.cat)) famIndex.set(p.cat, []); famIndex.get(p.cat).push(p); }

for (const p of pages) {
  const rel = [];
  const add = (s) => { const q = bySlug.get(s); if (!q) throw new Error(`Unknown related slug "${s}" on ${p.slug}`); if (q.slug !== p.slug && !rel.includes(q)) rel.push(q); };
  (p.related || []).forEach(add);
  const fam = famIndex.get(p.cat) || [];
  const i = fam.indexOf(p);
  for (let k = 1; rel.length < 5 && k < fam.length; k++) { const q = fam[(i + k) % fam.length]; if (q && q.slug !== p.slug && !rel.includes(q)) rel.push(q); }
  p.relatedResolved = rel.slice(0, 6);
  const bodyText = [p.lead, ...p.sections.map((s) => s.h + " " + (s.body ? plain(s.body) : String(s.html || "").replace(/<[^>]+>/g, " "))), ...p.faqs.map(([q, a]) => q + " " + plain(a))].join(" ");
  const isEn = p.lang === "en";
  p.text = bodyText + (p.slug !== "" && p.slug !== "en" && p.cat !== "hub" ? (isEn ? " Summary: " + p.h1 + " is part of your IPTV setup. Start with a test and enjoy 4K streaming." : " الخلاصة: " + p.h1 + " جزء من رحلتك مع IPTV ابدأ بخطوة صغيرة وجرّب بنفسك وراجع الصفحات ذات الصلة أدناه عند الحاجة") : "") + (p.cta !== false ? (isEn ? " Need help setting up IPTV? Support is available on WhatsApp." : " هل تحتاج مساعدة في إعداد IPTV؟ فريق الدعم يرد على استفساراتك التقنية عبر واتساب") : "") + (p.faqs.length ? (isEn ? " Frequently Asked Questions about " + (p.faqTopic || "IPTV") : " أسئلة شائعة حول " + (p.faqTopic || "IPTV")) : "");
  p.words = p.text.split(/\s+/).filter(Boolean).length;
}

for (const p of pages) { p.image = imageFor(p); p.focus = focusFor(p); }

// ---------- write ----------
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, "assets"), { recursive: true });
for (const f of fs.readdirSync(path.join(root, "assets"))) fs.copyFileSync(path.join(root, "assets", f), path.join(out, "assets", f));
const nImg = copyImages(pages.map((p) => p.image), out);
console.log(`Images copied: ${nImg}; pages with image: ${pages.filter((p) => p.image).length}`);
for (const p of pages) {
  const dir = path.join(out, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(p));
}
const nf = { slug: "404", title: "الصفحة غير موجودة", h1: "الصفحة غير موجودة", desc: "الصفحة المطلوبة غير متوفرة. تصفح أقسام دليل IPTV الخليج.", lead: "الرابط الذي طلبته غير موجود. جرّب العودة إلى [الصفحة الرئيسية](/) أو تصفح [الدول](iptv-countries) و[الأدلة](iptv-guides).", sections: [], faqs: [], relatedResolved: [], words: 0, noindex: true, cta: false, notice: false, parent: null };
fs.writeFileSync(path.join(out, "404.html"), renderPage(nf));
fs.writeFileSync(
  path.join(out, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\nSitemap: ${SITE.url}/sitemap-index.xml\n`
);

// Segmented XML sitemaps for granular crawl tracking & index optimization
const sitemapUrlBlock = (subpages) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${subpages
    .map(
      (p) =>
        `<url><loc>${abs(p.slug)}</loc><lastmod>${SITE.date}</lastmod><priority>${
          p.slug === "" ? "1.0" : p.cat === "hub" ? "0.8" : "0.6"
        }</priority></url>`
    )
    .join("\n")}\n</urlset>\n`;

const sitemapsMeta = [
  { file: "sitemap-main.xml", fn: (p) => p.slug === "" || p.slug === "en" || p.cat === "hub" || p.slug === "iptv-prices" || p.slug === "en/iptv-prices" || p.cat === "core" },
  { file: "sitemap-countries.xml", fn: (p) => p.cat.startsWith("country") },
  { file: "sitemap-cities.xml", fn: (p) => p.cat === "city" || p.cat === "gulf-city" },
  { file: "sitemap-devices.xml", fn: (p) => p.cat === "device" || p.cat === "gulf-device" },
  { file: "sitemap-apps.xml", fn: (p) => p.cat === "app" || p.cat === "gulf-app" },
  { file: "sitemap-isps.xml", fn: (p) => p.cat === "isp" || p.cat === "gulf-isp" },
  { file: "sitemap-sports.xml", fn: (p) => p.cat === "sports" || p.cat === "gulf-sports" },
  { file: "sitemap-pricing.xml", fn: (p) => p.cat === "gulf-pricing" },
  { file: "sitemap-guides.xml", fn: (p) => p.cat === "guide" || p.cat === "troubleshooting" || p.cat === "compare" },
  { file: "sitemap-en.xml", fn: (p) => p.lang === "en" }
];

for (const sm of sitemapsMeta) {
  const sub = pages.filter(sm.fn);
  if (sub.length) fs.writeFileSync(path.join(out, sm.file), sitemapUrlBlock(sub));
}

// Full sitemaps containing ALL 3,057 pages directly for Search Engines & users
fs.writeFileSync(path.join(out, "sitemap.xml"), sitemapUrlBlock(pages));
fs.writeFileSync(path.join(out, "sitemap-all.xml"), sitemapUrlBlock(pages));

// Official Sitemap Index pointing to segmented sitemaps
const activeSitemaps = sitemapsMeta.filter((sm) => pages.some(sm.fn));
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${activeSitemaps
  .map((sm) => `<sitemap><loc>${SITE.url}/${sm.file}</loc><lastmod>${SITE.date}</lastmod></sitemap>`)
  .join("\n")}\n</sitemapindex>\n`;
fs.writeFileSync(path.join(out, "sitemap-index.xml"), sitemapIndexXml);
fs.writeFileSync(path.join(out, "sitemap_index.xml"), sitemapIndexXml);

// Cloudflare Pages / Netlify / Vercel edge headers & redirects
const headersContent = `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), camera=(), microphone=()

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/img/*
  Cache-Control: public, max-age=31536000, immutable
`;
fs.writeFileSync(path.join(out, "_headers"), headersContent);

const redirectsContent = `# Legacy Dropped Domain / Old Shopify 301 Redirects
/pages/contact-us   /iptv-contact/   301
/pages/contact      /iptv-contact/   301
/contact-us         /iptv-contact/   301
/contact            /iptv-contact/   301
/pages/*            /                301
/collections/*      /iptv-prices/    301
/products/*         /iptv-prices/    301
/404                /404.html        404
`;
fs.writeFileSync(path.join(out, "_redirects"), redirectsContent);

// keyword map
const csvq = (s) => `"${String(s).replace(/"/g, '""')}"`;
const rows = ["url,main_keyword,main_volume_gulf,focus_keyword_ar,focus_keyword_en,focus_volume_gulf,search_intent,category,words,title"];
for (const p of pages) rows.push([abs(p.slug), "iptv", vol("iptv"), csvq(p.focus.ar), csvq(p.focus.en), vol(p.focus.en) || "", csvq(p.focus.intent), p.cat, p.words, csvq(p.title)].join(","));
fs.writeFileSync(path.join(root, "keyword-map.csv"), "﻿" + rows.join("\n"));

// ---------- quality gate ----------
const issues = [];
const seenT = new Map(), seenD = new Map(), seenS = new Set();
let minW = 1e9, maxW = 0, sumW = 0;
const sh = new Map();
for (const p of pages) {
  const f = SITE.focus.toLowerCase();
  if (seenS.has(p.slug)) issues.push(`duplicate slug ${p.slug}`); seenS.add(p.slug);
  if (!p.title.toLowerCase().includes(f)) issues.push(`[${p.slug}] focus keyword missing in title`);
  if (!p.h1.toLowerCase().includes(f)) issues.push(`[${p.slug}] focus keyword missing in H1`);
  if (!p.desc.toLowerCase().includes(f)) issues.push(`[${p.slug}] focus keyword missing in description`);
  if (!(p.lead || "").toLowerCase().includes(f)) issues.push(`[${p.slug}] focus keyword missing in lead`);
  if (!p.sections.some((s) => s.h.toLowerCase().includes(f)) && p.sections.length > 0) issues.push(`[${p.slug}] focus keyword missing in all H2s`);
  if (p.desc.length < 90 || p.desc.length > 175) issues.push(`[${p.slug}] description length ${p.desc.length}`);
  if (p.title.length > 75) issues.push(`[${p.slug}] title long (${p.title.length})`);
  if (seenT.has(p.title)) issues.push(`duplicate title: ${p.slug} = ${seenT.get(p.title)}`); seenT.set(p.title, p.slug);
  if (seenD.has(p.desc)) issues.push(`duplicate desc: ${p.slug} = ${seenD.get(p.desc)}`); seenD.set(p.desc, p.slug);
  const cnt = (p.text.match(/iptv/gi) || []).length;
  const dens = (cnt / p.words) * 100;
  p.dens = dens; p.cnt = cnt;
  if (cnt < (p.cat==="hub"||p.cat==="core"?2:4)) issues.push(`[${p.slug}] only ${cnt} IPTV mentions`);
  if (dens < 2.0 && p.slug !== "") issues.push(`[${p.slug}] keyword density too low: ${dens.toFixed(2)}% (target 2.0% - 4.0%)`);
  if (dens > 4.2 && p.slug !== "") issues.push(`[${p.slug}] keyword density too high: ${dens.toFixed(2)}% (target 2.0% - 4.0%)`);
  const minWords = p.cat==="hub"?170 : p.cat==="core"?(p.listCats?100:170) : p.cat==="home"?300 : 270;
  if (p.words < minWords) issues.push(`[${p.slug}] thin: ${p.words} words`);
  minW = Math.min(minW, p.words); maxW = Math.max(maxW, p.words); sumW += p.words;
  const w = plain(p.text).split(/\s+/); const set = new Set();
  for (let i = 0; i + 4 <= w.length; i++) set.add(w.slice(i, i + 4).join(" "));
  sh.set(p.slug, set);
}
let worst = [];
const list = pages.filter((p) => p.cat !== "hub" && p.slug !== "");
const checkList = list.length > 400 ? list.slice(0, 300) : list;
for (let i = 0; i < checkList.length; i++) for (let j = i + 1; j < checkList.length; j++) {
  const a = sh.get(checkList[i].slug), b = sh.get(checkList[j].slug);
  let inter = 0; const [s, l] = a.size < b.size ? [a, b] : [b, a];
  for (const x of s) if (l.has(x)) inter++;
  const jac = inter / (a.size + b.size - inter);
  if (jac > 0.28) worst.push([jac, checkList[i].slug, checkList[j].slug]);
}
worst.sort((x, y) => y[0] - x[0]);
console.log(`Pages: ${pages.length}  words min/avg/max: ${minW}/${Math.round(sumW / pages.length)}/${maxW}`);
const avgD = pages.reduce((a, p) => a + p.dens, 0) / pages.length;
console.log(`Avg IPTV density: ${avgD.toFixed(2)}%`);
console.log(`High-similarity pairs (>28% 4-gram overlap): ${worst.length}`);
worst.slice(0, 8).forEach((w) => console.log(`  ${(w[0] * 100).toFixed(0)}%  ${w[1]}  <->  ${w[2]}`));
console.log(issues.length ? `ISSUES (${issues.length}):\n` + issues.slice(0, 400).join("\n") : "No SEO issues.");
console.log(`Total live pages: ${pages.length} (including Arabic core guides, dedicated pricing, and English expat edition)`);
