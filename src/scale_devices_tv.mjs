import { createGulfPage } from "./gulf_helpers.mjs";

export const TV_MODELS = [
  { id: "samsung-neo-qled-8k-4k", name: "شاشات سامسونج نيو كيو إل إي دي Neo QLED", kw: "سامسونج نيو كيو ال اي دي" },
  { id: "samsung-oled-s90c-s95c", name: "شاشات سامسونج أو إل إي دي Samsung OLED S90C", kw: "سامسونج اوليد" },
  { id: "samsung-crystal-uhd-cu", name: "شاشات سامسونج كريستال يو إتش دي Crystal UHD", kw: "سامسونج كريستال uhd" },
  { id: "lg-oled-c3-c4-series", name: "شاشات إل جي أوليد LG OLED C3 و C4", kw: "ال جي اوليد c4" },
  { id: "lg-qned-mini-led", name: "شاشات إل جي كيو إن إي دي LG QNED Mini-LED", kw: "ال جي qned" },
  { id: "lg-uhd-4k-ur-series", name: "شاشات إل جي يو إتش دي LG UHD 4K UR7800", kw: "ال جي uhd 4k" },
  { id: "sony-bravia-xr-oled", name: "شاشات سوني برافيا إكس آر Sony Bravia XR OLED", kw: "سوني برافيا xr" },
  { id: "sony-bravia-led-4k", name: "شاشات سوني برافيا فور كيه Sony Bravia 4K LED", kw: "سوني برافيا led" },
  { id: "tcl-c845-mini-led", name: "شاشات تي سي إل ميني إل إي دي TCL C845 4K", kw: "شاشات tcl c845" },
  { id: "tcl-c645-qled-4k", name: "شاشات تي سي إل كيو إل إي دي TCL C645 QLED", kw: "شاشات tcl c645" },
  { id: "hisense-u7k-u8k-uled", name: "شاشات هايسنس يو إل إي دي Hisense ULED U7K", kw: "هايسنس uled u7k" },
  { id: "hisense-a6k-smart-tv", name: "شاشات هايسنس سمارت تي في Hisense A6K 4K", kw: "هايسنس a6k 4k" },
  { id: "firestick-4k-max-gen2", name: "أمازون فاير ستيك Fire TV Stick 4K Max Gen 2", kw: "فاير ستيك 4k max" },
  { id: "fire-tv-cube-gen3", name: "أمازون فاير تي في كيوب Fire TV Cube Gen 3", kw: "فاير تي في كيوب" },
  { id: "apple-tv-4k-128gb", name: "جهاز آبل تي في فور كيه Apple TV 4K 128GB", kw: "ابل تي في 128gb" },
  { id: "xiaomi-tv-box-s-gen2", name: "شاومي مي بوكس إس الجيل الثاني Xiaomi Box S 2nd", kw: "شاومي بوكس s2" },
  { id: "xiaomi-tv-stick-4k", name: "شاومي تي في ستيك فور كيه Xiaomi Stick 4K", kw: "شاومي ستيك 4k" },
  { id: "formuler-z11-pro-max", name: "فورمولر زد 11 برو ماكس Formuler Z11 Pro Max", kw: "فورمولر z11 ماكس" },
  { id: "formuler-z10-pro", name: "فورمولر زد 10 برو سبيشال Formuler Z10 Pro", kw: "فورمولر z10 برو" },
  { id: "nvidia-shield-tv-pro", name: "إنفيديا شيلد تي في برو NVIDIA Shield TV Pro", kw: "انفيديا شيلد برو" },
  { id: "mag-540-w3-linux", name: "أجهزة ماغ الرقمية MAG 540 W3 Linux Box", kw: "ماغ 540 بوكس" },
  { id: "mag-524-4k-box", name: "أجهزة ماغ 524 الرقمية MAG 524 4K Stalker", kw: "ماغ 524 4k" },
  { id: "google-tv-streamer-4k", name: "جهاز جوجل تي في ستريمر Google TV Streamer 4K", kw: "جوجل تي في ستريمر" },
  { id: "mecool-km2-plus-deluxe", name: "أجهزة ميكول كي إم 2 بلس Mecool KM2 Plus", kw: "ميكول km2 بلس" },
  { id: "strong-leap-s3-4k-box", name: "أجهزة سترونغ ليب إس 3 Strong Leap-S3 4K Box", kw: "سترونغ ليب s3" },
];

const DEVICE_ACTIONS = [
  { act: "setup-saudi", title: "تشغيل اشتراك IPTV في السعودية بدقة 4K فائقة", c: "saudi-arabia", cAr: "السعودية" },
  { act: "setup-uae", title: "تشغيل سيرفر IPTV في الإمارات على شبكات du و e&", c: "uae", cAr: "الإمارات" },
  { act: "setup-kuwait", title: "تشغيل اشتراك IPTV في الكويت على شبكة زين وأوريدو", c: "kuwait", cAr: "الكويت" },
  { act: "setup-qatar", title: "تشغيل سيرفر IPTV في قطر على فايبر Ooredoo", c: "qatar", cAr: "قطر" },
  { act: "setup-bahrain", title: "تشغيل اشتراك IPTV في البحرين على ألياف بيون وزين", c: "bahrain", cAr: "البحرين" },
  { act: "setup-oman", title: "تشغيل سيرفر IPTV في عُمان على شبكات عمانتل", c: "oman", cAr: "عُمان" },
  { act: "tivimate", title: "تثبيت وضبط تطبيق تيفي ميت TiviMate لتشغيل IPTV", c: "saudi-arabia", cAr: "الخليج" },
  { act: "smarters", title: "تثبيت تطبيق IPTV Smarters Pro وتشغيل القنوات 4K", c: "saudi-arabia", cAr: "الخليج" },
  { act: "ibo-player", title: "تفعيل تطبيق آيبو بلاير IBO Player Pro لسيرفر IPTV", c: "uae", cAr: "الخليج" },
  { act: "xtream", title: "طريقة إدخال كود اكستريم Xtream Codes لسيرفر IPTV", c: "saudi-arabia", cAr: "الخليج" },
  { act: "m3u", title: "تشغيل رابط وقائمة M3U Playlist بدقة 4K في سيرفر IPTV", c: "saudi-arabia", cAr: "الخليج" },
  { act: "4k-60fps", title: "ضبط جودة العرض 4K 60fps والصوت المحيطي Dolby في IPTV", c: "saudi-arabia", cAr: "الخليج" },
  { act: "buffer-fix", title: "حل مشكلة التقطيع والبفرنج في سيرفر IPTV بخطوات سهلة", c: "saudi-arabia", cAr: "الخليج" },
  { act: "audio-fix", title: "حل مشكلة اختفاء الصوت وترميز AC3 في قنوات IPTV", c: "saudi-arabia", cAr: "الخليج" },
  { act: "trial-24h", title: "طلب تجربة مجانية 24 ساعة لسيرفر IPTV عبر واتساب", c: "saudi-arabia", cAr: "الخليج" },
  { act: "best-server", title: "أفضل سيرفر IPTV VIP فائق الثبات بدون أي تقطيع", c: "saudi-arabia", cAr: "الخليج" },
];

export function generateScaleDevicesTvPages() {
  const pages = [];

  for (const m of TV_MODELS) {
    for (const a of DEVICE_ACTIONS) {
      pages.push(
        createGulfPage({
          slug: `iptv-tv-${m.id}-${a.act}`,
          title: `${m.name}: ${a.title}`,
          h1: `${m.name} - ${a.title}`,
          desc: `دليل شامل لـ ${m.name}: ${a.title}. استمتع بأكثر من 18,000 قناة رياضية وأفلام 4K مع سيرفر IPTV فائق الثبات وتفعيل فوري عبر واتساب.`,
          lead: `احصل على أقصى أداء ممكن عند استخدام ${m.name} لمشاهدة قنوات وسيرفر IPTV المعتمد في ${a.cAr} بدقة Ultra HD 4K وبدون تقطيع.`,
          cat: "gulf-device",
          parent: "iptv-devices",
          crumb: `${m.kw}`,
          kw2: `${m.kw} iptv`,
          pricingCountry: a.c,
          waMsg: `السلام عليكم، أرغب في الاستفسار عن ${m.name}: ${a.title} لسيرفر IPTV`,
          sections: [
            {
              h: `تفاصيل التوافق والأداء الفني`,
              body: `يعتبر ${m.name} من أقوى الأجهزة المتوافقة مع سيرفراتنا الحديثة، حيث يدعم فك الترميز التلقائي H.265 و 60 إطاراً في الثانية لعرض مباريات كرة القدم والأفلام السينمائية بأعلى سلاسة.`,
            },
          ],
          faqs: [
            [`هل أحتاج لتثبيت تطبيقات خارجية؟`, `يمكنك تثبيت التطبيقات الرسمية المتوفرة في متجر الجهاز، وسيقوم فريق دعمنا بتزويدك ببيانات السيرفر وكود التفعيل فوراً عبر واتساب.`],
          ],
        })
      );
    }
  }

  return pages;
}

