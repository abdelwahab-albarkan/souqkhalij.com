import { createGulfPage } from "./gulf_helpers.mjs";

export const GULF_ISPS_EXT = [
  { id: "stc-saudi-fiber", nameAr: "ألياف stc بيتي فايبر", country: "saudi-arabia", countryAr: "السعودية", router: "راوتر stc فايبر HG8245W5 أو Nokia", dns: "1.1.1.1 و 8.8.8.8" },
  { id: "stc-saudi-5g", nameAr: "راوتر stc الجيل الخامس 5G المنزلي", country: "saudi-arabia", countryAr: "السعودية", router: "راوتر نوكيا أو هواوي 5G CPE Pro", dns: "8.8.8.8 و 1.1.1.1" },
  { id: "mobily-fiber-saudi", nameAr: "ألياف موبايلي فايبر المنزلية", country: "saudi-arabia", countryAr: "السعودية", router: "راوتر موبايلي فايبر ZNID أو Zhone", dns: "1.1.1.1 و 1.0.0.1" },
  { id: "mobily-5g-saudi", nameAr: "راوتر موبايلي 5G المنزلي اللاسلكي", country: "saudi-arabia", countryAr: "السعودية", router: "راوتر موبايلي 5G Airbox", dns: "8.8.4.4 و 8.8.8.8" },
  { id: "zain-saudi-5g", nameAr: "راوتر زين 5G المنزلي فائق السرعة", country: "saudi-arabia", countryAr: "السعودية", router: "راوتر زين 5G H122-373", dns: "1.1.1.1 و 8.8.8.8" },
  { id: "salam-telecom-saudi", nameAr: "إنترنت سلام فايبر (الاتصالات المتكاملة)", country: "saudi-arabia", countryAr: "السعودية", router: "راوتر سلام فايبر الحديث", dns: "1.1.1.1 و 8.8.8.8" },
  { id: "e-and-fiber-uae", nameAr: "ألياف e& اتصالات في الإمارات", country: "uae", countryAr: "الإمارات", router: "راوتر اتصالات D-Link أو Huawei", dns: "1.1.1.1 و 8.8.8.8" },
  { id: "du-fiber-uae", nameAr: "ألياف دو du المنزلية في دبي وأبوظبي", country: "uae", countryAr: "الإمارات", router: "راوتر du Wi-Fi 6 المتطور", dns: "8.8.8.8 و 1.1.1.1" },
  { id: "du-5g-home-uae", nameAr: "إنترنت du 5G Home Wireless المنزلي", country: "uae", countryAr: "الإمارات", router: "راوتر ZTE أو Tozed 5G", dns: "1.1.1.1 و 8.8.8.8" },
  { id: "zain-kuwait-fiber", nameAr: "شبكة وألياف زين الكويت", country: "kuwait", countryAr: "الكويت", router: "راوتر زين فايبر و 5G المنزلي", dns: "1.1.1.1 و 8.8.8.8" },
  { id: "ooredoo-kuwait-net", nameAr: "شبكة Ooredoo الكويت المنزلية", country: "kuwait", countryAr: "الكويت", router: "راوتر Ooredoo فايبر", dns: "8.8.8.8 و 1.1.1.1" },
  { id: "stc-kuwait-viva", nameAr: "شبكة stc الكويت (فيفا سابقاً)", country: "kuwait", countryAr: "الكويت", router: "راوتر stc الكويت 5G", dns: "1.1.1.1 و 8.8.8.8" },
  { id: "ooredoo-qatar-fiber", nameAr: "ألياف Ooredoo قطر سوبر نت", country: "qatar", countryAr: "قطر", router: "راوتر Ooredoo فايبر جيجابت", dns: "1.1.1.1 و 8.8.8.8" },
  { id: "vodafone-qatar-giga", nameAr: "شبكة فودافون قطر جيجا نت", country: "qatar", countryAr: "قطر", router: "راوتر فودافون جيجا فايبر", dns: "8.8.8.8 و 1.1.1.1" },
  { id: "beyon-bahrain-fiber", nameAr: "ألياف بيون (باتلكو) في البحرين", country: "bahrain", countryAr: "البحرين", router: "راوتر بيون فايبر المنزلي", dns: "1.1.1.1 و 8.8.8.8" },
  { id: "zain-bahrain-home", nameAr: "إنترنت زين البحرين المنزلي", country: "bahrain", countryAr: "البحرين", router: "راوتر زين البحرين 5G", dns: "8.8.8.8 و 1.1.1.1" },
  { id: "stc-bahrain-net", nameAr: "شبكة stc البحرين المنزلية", country: "bahrain", countryAr: "البحرين", router: "راوتر stc البحرين فايبر", dns: "1.1.1.1 و 8.8.8.8" },
  { id: "omantel-fiber-home", nameAr: "ألياف عمانتل المنزلية في عُمان", country: "oman", countryAr: "عُمان", router: "راوتر عمانتل فايبر المنزلي", dns: "1.1.1.1 و 8.8.8.8" },
  { id: "ooredoo-oman-home", nameAr: "ألياف وشبكات Ooredoo عُمان", country: "oman", countryAr: "عُمان", router: "راوتر Ooredoo عُمان 5G وفايبر", dns: "8.8.8.8 و 1.1.1.1" },
];

export function generateGulfIspsPages() {
  const pages = [];

  for (const isp of GULF_ISPS_EXT) {
    // 1. ISP Setup & Speed
    pages.push(
      createGulfPage({
        slug: `iptv-isp-ext-${isp.id}-setup`,
        title: `تشغيل اشتراك IPTV على إنترنت ${isp.nameAr} في ${isp.countryAr}`,
        h1: `تشغيل سيرفر IPTV على شبكة ${isp.nameAr} بثبات تام`,
        desc: `دليل تشغيل سيرفر IPTV على ${isp.nameAr} في ${isp.countryAr}: السرعة المطلوبة، إعدادات الاتصال، وبث قنوات 4K بدون تقطيع مع تفعيل فوري.`,
        lead: `تعرف على أفضل طريقة لتشغيل خدمة IPTV على خط ${isp.nameAr} في ${isp.countryAr} للاستمتاع بالقنوات الرياضية والترفيهية بأعلى جودة واستقرار.`,
        cat: "gulf-isp",
        parent: "iptv-isp",
        crumb: `${isp.nameAr}`,
        kw2: `iptv ${isp.id}`,
        pricingCountry: isp.country,
        waMsg: `السلام عليكم، أنا مشترك في ${isp.nameAr} في ${isp.countryAr} وأرغب في تفعيل سيرفر IPTV متوافق وسريع`,
        sections: [
          {
            h: `كفاءة وسرعة ${isp.nameAr} مع سيرفرات IPTV`,
            body: `تعتبر شبكة ${isp.nameAr} من الخيارات الممتازة للبث الرقمي. لتشغيل قنوات Full HD تحتاج إلى سرعة 10 ميغابت لكل شاشة، بينما تحتاج قنوات 4K إلى 25 ميغابت مستقرة لضمان تدفق مستمر بدون توقف.`,
          },
        ],
        faqs: [
          [`هل أحتاج لبرامج VPN لتشغيل IPTV على ${isp.nameAr}؟`, `لا، سيرفراتنا تعمل مباشرة وبشكل طبيعي وسلس دون أي حاجة لبرامج VPN أو تغييرات معقدة.`],
        ],
      })
    );

    // 2. DNS Settings
    pages.push(
      createGulfPage({
        slug: `iptv-isp-ext-${isp.id}-dns`,
        title: `أفضل DNS لتسريع IPTV على راوتر ${isp.nameAr} 2026`,
        h1: `ضبط إعدادات DNS على راوتر ${isp.nameAr} لتسريع IPTV`,
        desc: `شرح تغيير DNS على راوتر ${isp.nameAr} لتسريع استجابة IPTV ومنع التقطيع: استخدم Cloudflare (${isp.dns}) لتصفح فوري وسرعة فتح القنوات.`,
        lead: `دليل خطوة بخطوة لتغيير خوادم الـ DNS على راوتر ${isp.nameAr} لتسريع زمن استجابة قنوات IPTV وتفادي أي بطء في تحميل البث المباشر.`,
        cat: "gulf-isp",
        parent: "iptv-troubleshooting",
        crumb: `dns ${isp.nameAr.slice(0, 15)}`,
        kw2: `dns iptv ${isp.id}`,
        pricingCountry: isp.country,
        waMsg: `السلام عليكم، أحتاج مساعدة في ضبط DNS راوتر ${isp.nameAr} لتسريع IPTV`,
        sections: [
          {
            h: `خطوات تغيير الـ DNS في ${isp.router}`,
            body: `1. افتح المتصفح وأدخل عنوان الراوتر (غالباً 192.168.1.1 أو 192.168.8.1).\n2. سجل الدخول ببيانات المسؤول المكتوبة خلف الراوتر.\n3. انتقل إلى Network أو DHCP Settings.\n4. ضع في Primary DNS: 1.1.1.1 وفي Secondary DNS: 8.8.8.8.\n5. احفظ الإعدادات وأعد تشغيل الراوتر.`,
          },
        ],
        faqs: [
          [`ما فائدة تغيير الـ DNS لـ IPTV؟`, `يساعد في تسريع حل عناوين خوادم البث المباشر وتقليل زمن التحميل الأولي للقناة عند التنقل بالريموت.`],
        ],
      })
    );

    // 3. Peak Buffering Fix
    pages.push(
      createGulfPage({
        slug: `iptv-isp-ext-${isp.id}-buffering`,
        title: `حل تقطيع IPTV وقت الذروة على إنترنت ${isp.nameAr}`,
        h1: `كيف تتخلص من تقطيع سيرفر IPTV على شبكة ${isp.nameAr}؟`,
        desc: `حلول نهائية لمشكلة تقطيع وتجمد IPTV وقت الذروة على ${isp.nameAr}: نصائح تحسين الراوتر، تبديل القنوات، وتثبيت البث على 4K بثبات تام.`,
        lead: `إذا كنت تعاني من بطء أو تقطيع قنوات IPTV أثناء مباريات المساء على إنترنت ${isp.nameAr}، فهذا الدليل يمنحك الحلول التقنية الفعالة لاستعادة استقرار البث.`,
        cat: "gulf-isp",
        parent: "iptv-troubleshooting",
        crumb: `تقطيع ${isp.nameAr.slice(0, 15)}`,
        kw2: `buffering iptv ${isp.id}`,
        pricingCountry: isp.country,
        waMsg: `السلام عليكم، أواجه تقطيعاً في IPTV على إنترنت ${isp.nameAr} وأحتاج حلاً فنياً`,
        sections: [
          {
            h: `أسباب التقطيع في ساعات المساء وكيفية تفاديها`,
            body: `يعود التقطيع غالباً إلى ازدحام التردد 2.4GHz اللاسلكي أو استهلاك أجهزة المنزل الأخرى للسرعة. الحل الأمثل هو ربط جهاز التلفاز بكابل إيثرنت أو تفعيل خاصية تحديد السرعة (QoS) في الراوتر.`,
          },
        ],
        faqs: [
          [`هل السيرفر يوفر قنوات بديلة عند ضعف الإنترنت؟`, `نعم، يحتوي سيرفرنا على قنوات بجودات FHD و HD و SD تعمل بسلاسة تامة حتى عند انخفاض سرعة الاتصال.`],
        ],
      })
    );

    // 4. 4K Speed Package
    pages.push(
      createGulfPage({
        slug: `iptv-isp-ext-${isp.id}-4k`,
        title: `أفضل سرعة وباقة لـ IPTV بجودة 4K على ${isp.nameAr}`,
        h1: `السرعة المناسبة لتشغيل IPTV بجودة 4K على ${isp.nameAr}`,
        desc: `ما هي باقة وسرعة الإنترنت المناسبة لتشغيل IPTV بدقة 4K على ${isp.nameAr} في ${isp.countryAr}؟ تفاصيل استهلاك البيانات ومعدل البث 60fps.`,
        lead: `دليل اختيار باقة الإنترنت المنزلية المناسبة من ${isp.nameAr} لتشغيل سيرفر IPTV بدقة 4K الحقيقية وبدون أي استهلاك مفرط أو تقطيع في الصورة.`,
        cat: "gulf-isp",
        parent: "iptv-isp",
        crumb: `باقة 4K ${isp.nameAr.slice(0, 15)}`,
        kw2: `speed iptv 4k ${isp.id}`,
        pricingCountry: isp.country,
        waMsg: `السلام عليكم، ما هي أفضل باقة إنترنت من ${isp.nameAr} لتشغيل IPTV 4K بدون تقطيع؟`,
        sections: [
          {
            h: `استهلاك سرعة الإنترنت مع جودة 4K`,
            body: `تبث قنوات 4K بمعدل تدفق يتراوح بين 15 و 25 ميغابت في الثانية. إذا كان خطك يوفر 50 ميغابت أو أكثر، فستعمل القنوات بأعلى جودة مع إمكانية تشغيل أجهزة أخرى في المنزل براحة تامة.`,
          },
        ],
        faqs: [
          [`كم تستهلك ساعة المشاهدة بجودة 4K من البيانات؟`, `تستهلك في المتوسط بين 5 إلى 9 غيغابايت في الساعة، ولذلك ينصح دائماً بالباقات غير المحدودة (Unlimited) للاستخدام المنزلي.`],
        ],
      })
    );
  }

  // 4 General Network Guides
  const GENERAL_NET = [
    { id: "mesh-wifi-iptv-villas", title: "أفضل أنظمة راوتر Mesh لتوزيع إنترنت IPTV في الفلل الكبيرة", h1: "طريقة ضبط شبكات Mesh Wi-Fi لتشغيل IPTV في الفلل والمنازل الكبيرة", desc: "تعرف على أفضل أنظمة Mesh Wi-Fi لتغطية المنازل والفلل الكبيرة في الخليج بإنترنت مستقر يمنع تقطيع قنوات IPTV على الشاشات المتعددة.", kw: "راوترات مش" },
    { id: "wifi-5ghz-vs-24ghz-stream", title: "الفرق بين واي فاي 5GHz و 2.4GHz لتشغيل قنوات IPTV 4K", h1: "لماذا يجب ربط شاشة IPTV بتردد الواي فاي 5GHz وليس 2.4GHz؟", desc: "مقارنة عملية توضح سبب تفوق تردد 5GHz في توفير سرعة عالية وثبات فائق لبث قنوات 4K على سيرفر IPTV بدون تداخل إشارات الجيران.", kw: "واي فاي 5g" },
    { id: "ping-latency-test-gulf", title: "قياس زمن الاستجابة Ping الفعلي لسيرفرات IPTV في الخليج", h1: "كيف تقيس جودة وثبات اتصالك بسيرفرات IPTV في دول الخليج؟", desc: "دليل فحص الـ Ping وفقدان الحزم Packet Loss على خط الإنترنت الخاص بك للتأكد من ملاءمته لتشغيل البث الرياضي المباشر فائق السرعة.", kw: "فحص البينغ" },
    { id: "isp-throttling-check", title: "هل تخنق شركات الاتصالات سرعة IPTV وكيف تكتشف ذلك؟", h1: "كيف تعرف إذا كان مزود الإنترنت يقلل سرعة سيرفرات IPTV لديك؟", desc: "طرق كشف تقليل السرعة المتعمد (Throttling) من قبل مزودي الإنترنت أثناء المباريات الكبرى والحلول التقنية المعتمدة لتجاوزه فورا.", kw: "خنق السرعة" },
  ];

  for (const gn of GENERAL_NET) {
    pages.push(
      createGulfPage({
        slug: `iptv-net-guide-${gn.id}`,
        title: `${gn.title}`,
        h1: `${gn.h1}`,
        desc: `${gn.desc}`,
        lead: `يعد استقرار الشبكة المنزلية الركيزة الأساسية لنجاح البث المباشر. في هذا الدليل نستعرض ${gn.h1} للحصول على أعلى ثبات ممكن في الخليج.`,
        cat: "gulf-isp",
        parent: "iptv-isp",
        crumb: gn.kw,
        kw2: `${gn.kw} iptv`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، أرغب في الاستفسار عن ${gn.title} لسيرفر IPTV`,
        sections: [
          {
            h: `التفاصيل التقنية والتوصيات العملية`,
            body: `للحصول على أفضل نتيجة، احرص دائماً على وضع الراوتر في مكان مركزي ومرتفع، واستخدام كابلات شبكة CAT6 أو CAT7 للأجهزة الثابتة، وتجنب مكررات الإشارة اللاسلكية الرخيصة التي تضاعف زمن الاستجابة.`,
          },
        ],
        faqs: [
          [`هل تؤثر هذه الإعدادات على سرعة بقية الأجهزة في البيت؟`, `على العكس، تنظيم الشبكة يفيد جميع مستخدمي المنزل ويقلل الضغط والازدحام على الراوتر بشكل ملحوظ.`],
        ],
      })
    );
  }

  return pages;
}

