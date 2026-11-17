import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMG = path.join(root, "images");

// Metadata dictionary: [kind: photo | product | tech | logo, description]
const META = {
  // Living room & home theater
  "home/living-room-hero": ["photo", "غرفة معيشة عصرية بتلفاز معلّق لمشاهدة IPTV"],
  "home/smart-tv-living-room": ["photo", "تلفاز ذكي في صالة منزلية لتشغيل IPTV"],
  "home/tv-phone-tablet": ["photo", "تلفاز وهاتف وجهاز لوحي يشغّلون IPTV معاً"],
  "home/streaming-device-remote": ["photo", "جهاز بث وريموت أمام تلفاز لمشاهدة IPTV"],
  "home/family-watching-tv": ["photo", "عائلة تشاهد قنوات وبرامج ترفيهية عبر اشتراك IPTV"],
  "living-room-tv": ["photo", "شاشة تلفاز ذكية في صالة أنيقة تعرض بث مباريات IPTV"],
  "family-tv": ["photo", "مشاهدة عائلية ممتعة لمحتوى ترفيهي وأفلام أطفال عبر IPTV"],
  "home-cinema": ["photo", "سينما منزلية 4K مع أحدث أفلام ومسلسلات VOD عبر IPTV"],
  "iptv/home/iptv-smart-tv": ["photo", "تلفاز ذكي كبير في صالة عصرية لمشاهدة IPTV"],

  // Hardware devices & screens
  "devices/devices-collection": ["photo", "مجموعة أجهزة لتشغيل IPTV: تلفاز وهاتف وتابلت ولابتوب"],
  "devices/frameless-smart-tv": ["photo", "تلفاز ذكي رفيع بدون إطار لعرض IPTV بدقة فائقة"],
  "devices/smart-tv-wall": ["photo", "تلفاز ذكي معلق على الجدار لمشاهدة قنوات IPTV"],
  "devices/smart-tv-remote": ["photo", "ريموت تلفاز ذكي للتحكم السريع في تطبيق IPTV"],
  "devices/streaming-stick-tv": ["photo", "جهاز بث صغير متصل بالتلفاز لتشغيل IPTV"],
  "devices/smartphone-in-hand": ["photo", "هاتف ذكي يشغل قنوات البث المباشر عبر تطبيق IPTV"],
  "devices/tv-tablet-phone": ["photo", "شاشات متعددة متزامنة تعرض IPTV في المنزل"],

  // Products
  samsungsmarttv: ["product", "شاشة سامسونج الذكية Samsung Smart TV لتشغيل IPTV"],
  "LG TV (webOS)": ["product", "شاشة إل جي LG webOS الذكية لتشغيل سيرفر IPTV"],
  "Sony TV (Google TV)": ["product", "شاشة سوني برافيا Sony Google TV لتشغيل IPTV 4K"],
  "Hisense TV": ["product", "شاشة هاي سينس Hisense Smart TV لتشغيل قنوات IPTV"],
  "TCL TV": ["product", "شاشة تي سي إل TCL Android TV لتشغيل IPTV"],
  firestick: ["product", "جهاز أمازون فاير ستيك Amazon Fire Stick لتشغيل IPTV"],
  firetvcude: ["product", "جهاز Fire TV Cube لتشغيل قنوات IPTV بدقة 4K"],
  appletv: ["product", "جهاز أبل تي في Apple TV 4K لتشغيل IPTV بأعلى جودة"],
  androidtvbox: ["product", "صندوق أندرويد بوكس شاومي Mi Box لتشغيل IPTV"],
  chromecast: ["product", "جهاز Google Chromecast مع Google TV لتشغيل IPTV"],
  nvidiashield: ["product", "جهاز NVIDIA Shield TV لتشغيل IPTV بدقة 4K 60fps"],
  mag: ["product", "جهاز MAG المخصص لتشغيل IPTV عبر بوابة Stalker"],
  Formuler: ["product", "جهاز Formuler Z الذكي لتشغيل قنوات ومكتبة IPTV"],
  iphone17: ["product", "هاتف آيفون iPhone لمشاهدة قنوات IPTV أينما كنت"],
  iPad: ["product", "جهاز آيباد iPad لمشاهدة المباريات والأفلام عبر IPTV"],
  androidphones: ["product", "هواتف أندرويد الذكية لتشغيل تطبيق IPTV"],
  windowspc: ["product", "حاسوب ويندوز PC لمشاهدة قنوات IPTV ومباريات 4K"],
  macos: ["product", "حاسوب Mac بنظام macOS لتشغيل قنوات IPTV"],
  roku: ["product", "جهاز Roku لتشغيل قنوات البث التلفزيوني عبر IPTV"],
  PlayStation: ["product", "جهاز بلايستيشن PlayStation لتشغيل البث التلفزيوني"],
  Xbox: ["product", "جهاز إكس بوكس Xbox لتشغيل تطبيقات البث وقنوات IPTV"],

  // Applications & Logos
  "Tivimate-app-logo": ["logo", "شعار تطبيق TiviMate IPTV Player الأفضل لأجهزة الأندرويد"],
  "Ibo-Player-Pro-app-logo": ["logo", "شعار تطبيق IBO Player Pro الأسرع لشاشات سمارت تي في"],
  "Smart-IPTV-app-logo": ["logo", "شعار تطبيق Smart IPTV لتشغيل القنوات على الشاشات الذكية"],
  "Smart-STB-app-logo": ["logo", "شعار تطبيق Smart STB لمحاكاة أجهزة الاستقبال"],
  "Hot-Player-app-logo": ["logo", "شعار تطبيق Hot Player لتشغيل باقات IPTV"],
  "apps-dashboard": ["photo", "واجهة وتطبيقات تشغيل IPTV الذكية على التلفاز والهاتف"],
  "beste-iptv-apps-dashboard": ["photo", "لوحة تحكم مشغلات وتطبيقات IPTV الأفضل في الخليج"],

  // Sports & Live Action
  "premier-league-soccer": ["photo", "بث مباشر لمباريات الدوري الإنجليزي ودوري أبطال أوروبا عبر IPTV"],
  "bundesliga-stadion": ["photo", "ملعب كرة قدم عالمي يمتلئ بالجماهير لمتابعة مباريات كرة القدم 4K"],
  "formula-1-aus": ["photo", "بث مباشر لسباقات الفورمولا 1 وجوائز الخليج الكبرى عبر IPTV"],
  "ufc-boxing-main-event": ["photo", "نزالات UFC والملاكمة العالمية الكبرى بث مباشر بدون تقطيع"],
  "fussball-streaming": ["photo", "بث حي ومباشر لمباريات كرة القدم ودوري روشن السعودي عبر IPTV"],
  "nbl-basketball": ["photo", "مباريات كرة السلة العالمية والدوريات الرياضية الكبرى عبر IPTV"],
  "cricket-ashes": ["photo", "مباريات وبطولات الكريكيت الدولية المباشرة بجودة 4K فائقة"],

  // Tech, Network & Infrastructure
  "anti-freeze-tech": ["tech", "تقنية Anti-Freeze 9.0 لمنع التقطيع وضمان ثبات البث في المباريات"],
  "zero-buffer": ["tech", "بث فائق السرعة بدون بفرنج على شبكات الفايبر في الخليج"],
  "server-infra": ["tech", "بنية تحتية سحابية متطورة وسيرفرات كاش CDN محلية في دول الخليج"],
  "cable-vs-iptv": ["tech", "مقارنة ثبات وجودة سيرفر IPTV المتطور مع البث الفضائي التقليدي"],
  "vpn-shield": ["tech", "حماية مشفرة وبث آمن بدون الحاجة لبرامج VPN على شبكات الخليج"],
  "quality-4k": ["tech", "جودة بث 4K حقيقية مع كودك HEVC الحديث الموفر لاستهلاك النت"],
  "provider-comparison": ["photo", "مقارنة باقات وأسعار اشتراك IPTV في الخليج بأفضل قيمة وأعلى جودة"],
  "safe-payment": ["photo", "طرق دفع آمنة ومحلية معتمدة في دول الخليج لتفعيل اشتراك IPTV فورياً"],
  "support-team": ["photo", "فريق دعم فني متواجد 24/7 عبر واتساب للمساعدة والتفعيل الفوري"],
  "vod-dashboard": ["photo", "واجهة ترفيهية متكاملة تضم أضخم مكتبة أفلام ومسلسلات في الخليج"],
  "iptv/setup/iptv-heimnetzwerk": ["tech", "رسم يوضح راوتر منزلي يوزع إنترنت IPTV على الأجهزة"],
  "iptv/troubleshooting/iptv-verbindung": ["tech", "إشارة واي فاي مستقرة لتشغيل IPTV"],
  "iptv/guides/iptv-sicherheit": ["tech", "درع حماية وأمان لحساب IPTV"],
};

const exists = (rel) => fs.existsSync(path.join(IMG, rel + ".webp"));

// Category Image Pools
const SPORTS_POOL = [
  "premier-league-soccer",
  "bundesliga-stadion",
  "formula-1-aus",
  "ufc-boxing-main-event",
  "fussball-streaming",
  "nbl-basketball",
  "cricket-ashes",
];

const DEVICE_POOL = [
  "devices/devices-collection",
  "devices/frameless-smart-tv",
  "devices/smart-tv-wall",
  "devices/streaming-stick-tv",
  "devices/smartphone-in-hand",
  "devices/tv-tablet-phone",
];

const APP_POOL = [
  "Tivimate-app-logo",
  "Ibo-Player-Pro-app-logo",
  "Smart-IPTV-app-logo",
  "Smart-STB-app-logo",
  "Hot-Player-app-logo",
  "apps-dashboard",
];

const ISP_POOL = [
  "anti-freeze-tech",
  "zero-buffer",
  "server-infra",
  "vpn-shield",
  "cable-vs-iptv",
  "quality-4k",
];

const LIVING_POOL = [
  "home/living-room-hero",
  "home/smart-tv-living-room",
  "home-cinema",
  "living-room-tv",
  "family-tv",
  "home/family-watching-tv",
  "iptv/home/iptv-smart-tv",
  "devices/frameless-smart-tv",
  "home/tv-phone-tablet",
];

const PRICING_POOL = [
  "provider-comparison",
  "safe-payment",
  "support-team",
  "vod-dashboard",
  "home-cinema",
];

const hash = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);

export function imageFor(p) {
  let key = null;
  const s = (p.slug || "").toLowerCase();
  const c = p.cat || "";

  // 1. Homepage & Core Hubs
  if (p.slug === "" || p.slug === "en") {
    key = "home/living-room-hero";
  } else if (p.slug === "iptv-prices" || p.slug === "en/iptv-prices") {
    key = "provider-comparison";
  } else if (p.slug === "en/free-trial") {
    key = "devices/devices-collection";
  } else if (p.slug === "en/iptv-uae" || p.slug === "en/iptv-saudi-arabia") {
    key = "iptv/home/iptv-smart-tv";
  }

  // 2. Sports (Gulf & Teams)
  if (!key && (c === "gulf-sports" || c === "scale-sports-teams" || s.includes("sport") || s.includes("league") || s.includes("match") || s.includes("bein") || s.includes("ssc"))) {
    if (s.includes("formula") || s.includes("f1")) key = "formula-1-aus";
    else if (s.includes("ufc") || s.includes("box")) key = "ufc-boxing-main-event";
    else if (s.includes("cricket")) key = "cricket-ashes";
    else if (s.includes("basket") || s.includes("nba")) key = "nbl-basketball";
    else key = SPORTS_POOL[hash(p.slug) % SPORTS_POOL.length];
  }

  // 3. Devices & TVs
  if (!key && (c === "gulf-device" || c === "device" || c === "scale-devices-tv" || s.includes("device") || s.includes("smart-tv"))) {
    if (s.includes("samsung")) key = "samsungsmarttv";
    else if (s.includes("lg") || s.includes("webos") || s.includes("oled")) key = "LG TV (webOS)";
    else if (s.includes("sony") || s.includes("bravia")) key = "Sony TV (Google TV)";
    else if (s.includes("hisense")) key = "Hisense TV";
    else if (s.includes("tcl")) key = "TCL TV";
    else if (s.includes("apple") || s.includes("tvos")) key = "appletv";
    else if (s.includes("cube")) key = "firetvcude";
    else if (s.includes("firestick") || s.includes("fire-stick") || s.includes("fire-tv")) key = "firestick";
    else if (s.includes("xiaomi") || s.includes("mi-box") || s.includes("android-tv") || s.includes("tv-box")) key = "androidtvbox";
    else if (s.includes("chromecast")) key = "chromecast";
    else if (s.includes("nvidia") || s.includes("shield")) key = "nvidiashield";
    else if (s.includes("mag")) key = "mag";
    else if (s.includes("formuler")) key = "Formuler";
    else if (s.includes("iphone") || s.includes("ipad") || s.includes("ios")) key = "iphone17";
    else if (s.includes("windows") || s.includes("pc") || s.includes("laptop")) key = "windowspc";
    else if (s.includes("mac") || s.includes("macos")) key = "macos";
    else if (s.includes("roku")) key = "roku";
    else if (s.includes("playstation") || s.includes("ps5") || s.includes("ps4")) key = "PlayStation";
    else if (s.includes("xbox")) key = "Xbox";
    else key = DEVICE_POOL[hash(p.slug) % DEVICE_POOL.length];
  }

  // 4. Apps & Players
  if (!key && (c === "gulf-app" || c === "app" || s.includes("app") || s.includes("player"))) {
    if (s.includes("tivimate")) key = "Tivimate-app-logo";
    else if (s.includes("ibo")) key = "Ibo-Player-Pro-app-logo";
    else if (s.includes("smart-iptv") || s.includes("siptv")) key = "Smart-IPTV-app-logo";
    else if (s.includes("stb")) key = "Smart-STB-app-logo";
    else if (s.includes("hot-player")) key = "Hot-Player-app-logo";
    else key = APP_POOL[hash(p.slug) % APP_POOL.length];
  }

  // 5. ISPs & Network Infrastructure
  if (!key && (c === "gulf-isp" || c === "isp" || s.includes("isp") || s.includes("fiber") || s.includes("stc") || s.includes("mobily") || s.includes("etisalat") || s.includes("ooredoo") || s.includes("zain"))) {
    key = ISP_POOL[hash(p.slug) % ISP_POOL.length];
  }

  // 6. Cities, Districts & Living Rooms
  if (!key && (c === "gulf-city" || c === "city" || c === "scale-districts" || c === "scale-city-plans" || c === "country" || c === "country-subscribe" || c === "country-expats")) {
    key = LIVING_POOL[hash(p.slug) % LIVING_POOL.length];
  }

  // 7. Pricing, Offers & Expats
  if (!key && (c === "gulf-pricing" || c === "gulf-expat" || s.includes("price") || s.includes("trial"))) {
    key = PRICING_POOL[hash(p.slug) % PRICING_POOL.length];
  }

  // Fallback to Living Pool
  if (!key) {
    key = LIVING_POOL[hash(p.slug) % LIVING_POOL.length];
  }

  if (!exists(key)) {
    key = "home/living-room-hero";
  }

  const meta = META[key] || ["photo", "سيرفر IPTV عالي الجودة للبث المباشر بدون تقطيع في الخليج"];
  const base = key.replace(/ /g, "-").replace(/[()]/g, "").replace(/\//g, "-").toLowerCase();
  const alt = `${meta[1]} – ${p.crumb || p.h1}`;

  return {
    key,
    base,
    kind: meta[0],
    alt,
    w400: fs.existsSync(path.join(IMG, key + "-w400.webp")),
    w800: fs.existsSync(path.join(IMG, key + "-w800.webp")),
  };
}

export function copyImages(used, outDir) {
  const dst = path.join(outDir, "img");
  fs.mkdirSync(dst, { recursive: true });
  const copied = new Set();

  // 1. Copy all used images with their srcset variants
  for (const im of used) {
    if (!im) continue;
    for (const [suf, tag] of [["", ""], ["-w400", "-w400"], ["-w800", "-w800"]]) {
      const src = path.join(IMG, im.key + suf + ".webp");
      if (fs.existsSync(src)) {
        const destFile = path.join(dst, im.base + tag + ".webp");
        fs.copyFileSync(src, destFile);
        copied.add(im.base + tag);
      }
    }
  }

  // 2. Recursively copy ALL images from the images directory so everything is available
  function walkAndCopy(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        walkAndCopy(full);
      } else if (/\.(webp|png|jpg|svg)$/i.test(ent.name)) {
        const rel = path.relative(IMG, full).replace(/\\/g, "/");
        const flatName = rel.replace(/\//g, "-").replace(/ /g, "-").replace(/[()]/g, "").toLowerCase();

        // Copy as flatName
        const targetFlat = path.join(dst, flatName);
        if (!fs.existsSync(targetFlat)) {
          fs.copyFileSync(full, targetFlat);
        }

        // Copy as simple basename (e.g. avatar-1.webp, apple-pay-logo.webp, samsungsmarttv.webp)
        const targetBase = path.join(dst, ent.name);
        if (!fs.existsSync(targetBase)) {
          fs.copyFileSync(full, targetBase);
        }

        // Copy as lowercase basename with spaces converted to dashes
        const cleanBase = ent.name.replace(/ /g, "-").replace(/[()]/g, "").toLowerCase();
        const targetClean = path.join(dst, cleanBase);
        if (!fs.existsSync(targetClean)) {
          fs.copyFileSync(full, targetClean);
        }

        copied.add(flatName);
      }
    }
  }

  walkAndCopy(IMG);
  return copied.size;
}

export function srcset(im) {
  const parts = [];
  if (im.w400) parts.push(`/img/${im.base}-w400.webp 400w`);
  if (im.w800) parts.push(`/img/${im.base}-w800.webp 800w`);
  parts.push(`/img/${im.base}.webp 1344w`);
  return parts.join(", ");
}
