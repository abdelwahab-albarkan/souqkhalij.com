import { createGulfPage } from "./gulf_helpers.mjs";

export const GULF_DEVICES = [
  { id: "samsung-tizen", nameAr: "شاشات سامسونج تايزن الذكية", kw: "سامسونج سمارت", type: "تلفاز ذكي", os: "Tizen OS" },
  { id: "lg-webos", nameAr: "شاشات إل جي webOS الذكية", kw: "ال جي سمارت", type: "تلفاز ذكي", os: "webOS" },
  { id: "amazon-firestick-4k", nameAr: "أجهزة أمازون فاير ستيك Firestick 4K", kw: "فاير ستيك", type: "جهاز بث وتدفق", os: "Fire OS" },
  { id: "apple-tv-4k", nameAr: "أجهزة آبل تي في Apple TV 4K", kw: "ابل تي في", type: "جهاز بث متطور", os: "tvOS" },
  { id: "xiaomi-mi-box", nameAr: "أجهزة شاومي مي بوكس Xiaomi Box & Stick", kw: "شاومي بوكس", type: "جهاز أندرويد تي في", os: "Android TV" },
  { id: "android-tv-box", nameAr: "أجهزة أندرويد تي في بوكس Android TV Box", kw: "اندرويد بوكس", type: "جهاز استقبال أندرويد", os: "Android TV" },
  { id: "google-chromecast-tv", nameAr: "أجهزة كروم كاست مع جوجل تي في Chromecast", kw: "كروم كاست", type: "جهاز جوجل تي في", os: "Google TV" },
  { id: "sony-bravia-tv", nameAr: "شاشات سوني برافيا أندرويد Sony Bravia", kw: "سوني برافيا", type: "شاشة ذكية 4K", os: "Google TV / Android" },
  { id: "tcl-smart-tv", nameAr: "شاشات تي سي إل الذكية TCL Android TV", kw: "شاشات tcl", type: "شاشة ذكية", os: "Google TV" },
  { id: "hisense-vidaa-tv", nameAr: "شاشات هايسنس الذكية Hisense VIDAA", kw: "شاشات هايسنس", type: "شاشة ذكية", os: "VIDAA OS" },
  { id: "formuler-z11-box", nameAr: "أجهزة فورمولر الاحترافية Formuler Z11 Pro", kw: "فورمولر z11", type: "جهاز IPTV مخصص", os: "MyTVOnline 3" },
  { id: "mag-box-infomir", nameAr: "أجهزة ماغ الرقمية MAG Box 524 و 540", kw: "ماغ بوكس", type: "جهاز فك تشفير", os: "Linux / Stalker Portal" },
  { id: "iphone-ipad-apple", nameAr: "هواتف آيفون وأجهزة آيباد iOS", kw: "ايفون وايباد", type: "أجهزة محمولة", os: "Apple iOS" },
  { id: "android-phones-tablets", nameAr: "هواتف وأجهزة أندرويد اللوحية", kw: "هواتف اندرويد", type: "أجهزة ذكية محمولة", os: "Android OS" },
  { id: "windows-pc-laptop", nameAr: "أجهزة الكمبيوتر المحمول بنظام ويندوز", kw: "كمبيوتر ويندوز", type: "حاسوب شخصي", os: "Windows 10/11" },
  { id: "macos-macbook", nameAr: "أجهزة ماك بوك وآي ماك Apple Mac", kw: "ماك بوك ابل", type: "حاسوب أبل", os: "macOS" },
];

export const GULF_APPS = [
  { id: "tivimate-player", nameAr: "تطبيق تيفي ميت TiviMate Premium", kw: "تيفي ميت", platform: "أندرويد وفاير ستيك", pro: "أفضل واجهة تلفزيونية وسرعة تنقل بين القنوات" },
  { id: "iptv-smarters-pro", nameAr: "تطبيق سمارتيرز برو IPTV Smarters Pro", kw: "سمارتيرز برو", platform: "جميع الأجهزة والأنظمة", pro: "تطبيق شامل وشهير يدعم الدخول السريع بأكواد اكستريم" },
  { id: "ibo-player-pro", nameAr: "تطبيق آيبو بلاير IBO Player Pro", kw: "ايبو بلاير", platform: "سامسونج وإل جي وفاير ستيك", pro: "تطبيق خفيف وسريع جداً على الشاشات الذكية بدون بطء" },
  { id: "xciptv-player-app", nameAr: "تطبيق إكس سي بلاير XCIPTV Player", kw: "اكس سي بلاير", platform: "أندرويد وفاير ستيك", pro: "واجهة عصرية غنية بالوسائط ومشغلين مدمجين" },
  { id: "smart-iptv-siptv", nameAr: "تطبيق سمارت آي بي تي في Smart IPTV", kw: "سمارت iptv", platform: "شاشات سمارت القديمة والحديثة", pro: "التطبيق العريق لتشغيل ملفات وقوائم M3U عبر الماك أدرس" },
  { id: "bob-player-tv", nameAr: "تطبيق بوب بلاير Bob Player", kw: "بوب بلاير", platform: "شاشات سامسونج وإل جي", pro: "مشغل سريع يدعم الترجمة الفورية ومكتبة VOD ضخمة" },
  { id: "flix-iptv-tv", nameAr: "تطبيق فليكس آي بي تي في Flix IPTV", kw: "فليكس iptv", platform: "الشاشات الذكية وأندرويد", pro: "واجهة مستخدم أنيقة ودعم تشغيل مسارات الصوت المتعددة" },
  { id: "net-iptv-player", nameAr: "تطبيق نت آي بي تي في Net IPTV", kw: "نت iptv", platform: "شاشات التلفزيون الذكية", pro: "تطبيق بسيط وخفيف لتشغيل روابط البث المباشر" },
  { id: "gse-smart-iptv", nameAr: "تطبيق جي إس إي GSE Smart IPTV", kw: "تطبيق gse", platform: "آيفون وآيباد وأبل تي في", pro: "دعم قوي لملفات M3U و JSON وميزات البث المنزلي" },
  { id: "vlc-media-player", nameAr: "مشغل الوسائط VLC Media Player", kw: "مشغل vlc", platform: "الكمبيوتر والماك والهواتف", pro: "برنامج مجاني مفتوح المصدر لتشغيل روابط وبثوث السيرفر" },
  { id: "set-iptv-tv", nameAr: "تطبيق سيت آي بي تي في SET IPTV", kw: "سيت iptv", platform: "شاشات سمارت وأندرويد", pro: "تطبيق مستقر يدعم فك التشفير التلقائي والصوت المحيطي" },
  { id: "bay-tv-player", nameAr: "تطبيق باي تي في Bay TV Player", kw: "باي تي في", platform: "شاشات سامسونج وإل جي", pro: "مشغل ممتاز لعرض قوائم القنوات المقسمة حسب الدول" },
];

export function generateGulfDevicesAppsPages() {
  const pages = [];

  // Device Matrix: 16 devices x 5 pages = 80 pages
  for (const d of GULF_DEVICES) {
    // 1. Setup Guide
    pages.push(
      createGulfPage({
        slug: `iptv-device-${d.id}-setup`,
        title: `تشغيل اشتراك IPTV على ${d.nameAr}: دليل شامل 2026`,
        h1: `طريقة إعداد وتشغيل اشتراك IPTV على ${d.nameAr}`,
        desc: `خطوات تشغيل اشتراك IPTV على ${d.nameAr} (${d.os}): تثبيت أفضل المشغلات، إدخال بيانات السيرفر، وتفعيل القنوات بدقة 4K خلال 5 دقائق.`,
        lead: `تعلم كيفية تثبيت وإعداد سيرفر IPTV على جهاز ${d.nameAr} خطوة بخطوة، لتستمتع بأكثر من 18,000 قناة حية ومكتبة أفلام ضخمة بأعلى ثبات وجودة صورة.`,
        cat: "gulf-device",
        parent: "iptv-devices",
        crumb: `إعداد ${d.kw}`,
        kw2: `setup iptv ${d.id}`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، أرغب في تشغيل اشتراك IPTV على ${d.nameAr} ومساعدتي في الإعداد الفوري`,
        sections: [
          {
            h: `خطوات التثبيت السريعة على ${d.nameAr}`,
            body: `1. افتح متجر التطبيقات على ${d.nameAr} (${d.os}).\n2. ابحث عن أحد المشغلات الموصى بها مثل IPTV Smarters Pro أو IBO Player أو TiviMate.\n3. بعد التثبيت، افتح التطبيق واختر الدخول عبر كود إكستريم (Xtream Codes API).\n4. أدخل اسم المستخدم وكلمة المرور ورابط السيرفر المعتمد المرسل إليك عبر واتساب.\n5. اضغط على حفظ ليتم تحميل كافة باقات القنوات والأفلام والمسلسلات فوراً.`,
          },
          {
            h: `أفضل إعدادات الفيديو والصوت على ${d.nameAr}`,
            body: `للحصول على أقصى أداء ممكن، فعّل خيار فك الترميز الصلب (Hardware Acceleration)، واختر مشغل EXOPlayer أو VLC الداخلي لدعم الصوت المحيطي ودقة 4K بدون تقطيع.`,
          },
        ],
        faqs: [
          [`هل جهاز ${d.nameAr} يدعم تشغيل قنوات 4K بسلاسة؟`, `نعم، يعتبر ${d.nameAr} من أفضل الأجهزة لتشغيل قنوات البث الفائق بدقة 4K ومعدل 60 إطاراً في الثانية عند توفر اتصال إنترنت مستقر.`],
          [`كيف أحصل على كود تفعيل تجريبي لجهاز ${d.nameAr}؟`, `تواصل معنا عبر واتساب وزودنا بنوع جهازك وسنرسل لك بيانات التجربة المجانية الفورية لمدة 24 ساعة لاختبار السيرفر مجاناً.`],
        ],
      })
    );

    // 2. Best App Guide
    pages.push(
      createGulfPage({
        slug: `iptv-device-${d.id}-best-app`,
        title: `أفضل تطبيق IPTV لـ ${d.nameAr}: تطبيقات مجانية ومدفوعة 2026`,
        h1: `أفضل مشغل وتطبيق IPTV لجهاز ${d.nameAr}`,
        desc: `اكتشف أفضل تطبيقات IPTV المتوافقة مع ${d.nameAr}: سرعة تنقل فائقة، دليل برامج EPG، دعم الصوت المحيطي، وتشغيل فوري بدون تهنيج.`,
        lead: `نستعرض معك أفضل تطبيقات وبرامج IPTV المخصصة لـ ${d.nameAr} والتي توفر لك واجهة مستخدم سلسة وأسرع تجربة تنقل بين القنوات الرياضية والترفيهية.`,
        cat: "gulf-device",
        parent: "iptv-apps",
        crumb: `تطبيقات ${d.kw}`,
        kw2: `best iptv app ${d.id}`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، ما هو أفضل تطبيق IPTV موصى به لجهاز ${d.nameAr} مع التفعيل؟`,
        sections: [
          {
            h: `مقارنة أفضل التطبيقات المتوفرة لـ ${d.nameAr}`,
            body: `يعتمد اختيار التطبيق على نظام ${d.os}. يتميز تطبيق TiviMate و Smarters Pro بقدرتهما على إدارة آلاف القنوات والمفضلات وتنظيم مكتبة الأفلام والمسلسلات مع ترجمة عربية دقيقة.`,
          },
        ],
        faqs: [
          [`هل التطبيقات تحتاج اشتراكاً إضافياً؟`, `معظم التطبيقات توفر نسخة مجانية أو كود تجريبي كامل، ونحن نوفر لك السيرفر والبيانات لتشغيل التطبيق مباشرة.`],
        ],
      })
    );

    // 3. Saudi Arabia Setup
    pages.push(
      createGulfPage({
        slug: `iptv-device-${d.id}-saudi`,
        title: `تشغيل اشتراك IPTV على ${d.nameAr} في السعودية: سيرفر 4K`,
        h1: `تشغيل IPTV على ${d.nameAr} في المملكة العربية السعودية`,
        desc: `دليل تشغيل IPTV على ${d.nameAr} في السعودية على شبكات stc وموبايلي وزين: سرعة فائقة، بدون تقطيع، ودعم فني على مدار الساعة عبر واتساب.`,
        lead: `احصل على أفضل تجربة بث مباشر لسيرفر IPTV على جهاز ${d.nameAr} في السعودية لمتابعة دوري روشن السعودي وقنوات SSC و beIN Sports بجودة 4K فائقة الثبات.`,
        cat: "gulf-device",
        parent: "iptv-saudi-arabia",
        crumb: `${d.kw} السعودية`,
        kw2: `iptv saudi ${d.id}`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، أنا في السعودية وأرغب في تشغيل اشتراك IPTV على ${d.nameAr}`,
        sections: [
          {
            h: `توافق السيرفر مع شبكات الاتصال في السعودية`,
            body: `تم تحسين السيرفر ليعمل بأعلى كفاءة على ألياف stc بيتي فايبر، وشبكات موبايلي وزين 5G، مما يضمن تدفقاً سلساً بدون أي حاجة لبرامج VPN أو إعدادات معقدة.`,
          },
        ],
        faqs: [
          [`ما هي أفضل باقة لسكان السعودية على ${d.nameAr}؟`, `باقة السنة الكاملة VIP (45$) هي الأكثر طلباً وتوفيراً، حيث تمنحك استقراراً تاماً ودعماً فنياً على مدار العام.`],
        ],
      })
    );

    // 4. UAE Setup
    pages.push(
      createGulfPage({
        slug: `iptv-device-${d.id}-uae`,
        title: `تشغيل اشتراك IPTV على ${d.nameAr} في الإمارات (دبي وأبوظبي)`,
        h1: `تشغيل سيرفر IPTV على ${d.nameAr} في دولة الإمارات`,
        desc: `دليل تشغيل IPTV على ${d.nameAr} في الإمارات عبر شبكات e& و du: ثبات عالي، قنوات الدوري الإنجليزي والأفلام بدقة 4K، وتفعيل فوري عبر واتساب.`,
        lead: `دليل متخصص لسكان دبي وأبوظبي والإمارات لتشغيل خدمة IPTV على ${d.nameAr} بأعلى سرعة وأقل زمن استجابة على شبكات اتصالات ودو.`,
        cat: "gulf-device",
        parent: "iptv-uae",
        crumb: `${d.kw} الإمارات`,
        kw2: `iptv uae ${d.id}`,
        pricingCountry: "uae",
        waMsg: `السلام عليكم، أنا في الإمارات وأرغب في تشغيل سيرفر IPTV على ${d.nameAr}`,
        sections: [
          {
            h: `تشغيل القنوات العالمية والرياضية في الإمارات`,
            body: `استمتع بمتابعة القنوات الرياضية العالمية، باقات الأفلام والمسلسلات المترجمة، وقنوات الدول العربية والإنجليزية بدقة 4K فائقة الوضوح على ${d.nameAr}.`,
          },
        ],
        faqs: [
          [`هل يعمل السيرفر بدون تقطيع على شبكة du و e&؟`, `نعم، خوادمنا تدعم مسارات توجيه ذكية تتجاوز أي اختناق وتضمن لك ثباتاً 99.9% في كافة إمارات الدولة.`],
        ],
      })
    );

    // 5. Troubleshooting Guide
    pages.push(
      createGulfPage({
        slug: `iptv-device-${d.id}-troubleshoot`,
        title: `حل مشاكل IPTV على ${d.nameAr}: الصوت والتقطيع والتهنيج`,
        h1: `حل جميع مشاكل تشغيل سيرفر IPTV على ${d.nameAr}`,
        desc: `دليل إصلاح أعطال IPTV على ${d.nameAr}: حل مشكلة اختفاء الصوت، توقف البث، خروج التطبيق، وتهنيج القنوات 4K بخطوات سهلة ومضمونة.`,
        lead: `إذا كنت تواجه تقطيعاً أو مشاكل في الصوت أو بطء في استجابة جهاز ${d.nameAr} عند تشغيل IPTV، فهذا الدليل يمنحك الحلول الجذرية والنهائية لاستعادة البث السلس.`,
        cat: "gulf-device",
        parent: "iptv-troubleshooting",
        crumb: `مشاكل ${d.kw}`,
        kw2: `fix iptv ${d.id}`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، أواجه مشكلة في تشغيل IPTV على ${d.nameAr} وأحتاج مساعدة فنية سريعة`,
        sections: [
          {
            h: `حل مشكلة اختفاء الصوت على بعض القنوات`,
            body: `غالباً ما تعود مشكلة غياب الصوت إلى ترميز الصوت المحيطي (Dolby AC3). لحلها: افتح إعدادات تطبيق IPTV، وانتقل إلى قسم المشغل (Player)، وحوّل مشغل الصوت من Native إلى VLC أو Software Audio Decoder.`,
          },
          {
            h: `حل مشكلة التقطيع وبطء التحميل`,
            body: `1. أعد تشغيل الراوتر وجهاز ${d.nameAr} لتفريغ الذاكرة المؤقتة.\n2. قم بزيادة حجم التخزين المؤقت (Buffer Size) في التطبيق إلى Normal أو Large.\n3. استخدم كابل إيثرنت أو التردد 5GHz للواي فاي.`,
          },
        ],
        faqs: [
          [`ماذا أفعل إذا ظهرت رسالة خطأ في الخادم (Server Error)؟`, `تأكد من صحة بيانات الدخول ومن اتصال الإنترنت لديك، ثم تواصل مع فريق دعمنا عبر واتساب للتحقق الفوري من حالة السيرفر.`],
        ],
      })
    );
  }

  // App Matrix: 12 apps x 6 pages = 72 pages
  for (const a of GULF_APPS) {
    // 1. Download & Install
    pages.push(
      createGulfPage({
        slug: `iptv-app-${a.id}-download`,
        title: `تحميل وتثبيت ${a.nameAr} لتشغيل سيرفرات IPTV 2026`,
        h1: `تحميل تطبيق ${a.nameAr} وتشغيل اشتراك IPTV`,
        desc: `رابط وطريقة تحميل ${a.nameAr} على الشاشات الذكية والأندرويد والفاير ستيك: تثبيت آمن، إدخال اشتراك السيرفر، وتفعيل فوري عبر واتساب.`,
        lead: `دليل شامل لتحميل وتثبيت ${a.nameAr} المتميز (${a.platform})، لتشغيل كافة القنوات الرياضية والترفيهية بدقة 4K مع أقوى سيرفر IPTV في الخليج.`,
        cat: "gulf-app",
        parent: "iptv-apps",
        crumb: `تحميل ${a.kw}`,
        kw2: `download ${a.id}`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، قمت بتحميل ${a.nameAr} وأرغب في الحصول على اشتراك IPTV أو كود تجربة مجانية`,
        sections: [
          {
            h: `كيفية تحميل وتثبيت ${a.nameAr}`,
            body: `التطبيق متاح على المتاجر الرسمية (Google Play، Amazon Appstore، متجر شاشات سامسونج وإل جي). ابحث عن اسم التطبيق، اضغط على تثبيت، ثم افتحه لإدخال بيانات اشتراكك.`,
          },
        ],
        faqs: [
          [`هل تطبيق ${a.nameAr} آمن على جهازي؟`, `نعم، تثبيته من المتجر الرسمي يضمن سلامة جهازك 100% وخلوه من أي برمجيات ضارة.`],
        ],
      })
    );

    // 2. Xtream Codes Setup
    pages.push(
      createGulfPage({
        slug: `iptv-app-${a.id}-xtream-setup`,
        title: `إدخال كود اكستريم Xtream في تطبيق ${a.nameAr} IPTV`,
        h1: `كيفية ضبط اشتراك Xtream Codes على تطبيق ${a.nameAr}`,
        desc: `شرح إدخال اشتراك IPTV عبر كود اكستريم Xtream في ${a.nameAr}: اسم المستخدم، كلمة المرور، ورابط السيرفر، مع تشغيل فوري لكافة القنوات 4K.`,
        lead: `تعلم بالصور والشرح المبسط كيفية تفعيل اشتراك IPTV عبر Xtream Codes API على تطبيق ${a.nameAr} لتنظيم القنوات ومكتبة VOD بأعلى كفاءة.`,
        cat: "gulf-app",
        parent: "iptv-apps",
        crumb: `اكستريم ${a.kw}`,
        kw2: `xtream ${a.id}`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، أرغب في الحصول على بيانات كود اكستريم Xtream Codes لتطبيق ${a.nameAr}`,
        sections: [
          {
            h: `البيانات المطلوبة لتسجيل الدخول في ${a.nameAr}`,
            body: `عند فتح التطبيق اختر «Login with Xtream Codes API» وأدخل:\n- Any Name: دليل الخليج IPTV\n- Username: اسم المستخدم المخصص لاشتراكك\n- Password: كلمة المرور الخاصة بك\n- Server URL / Port: رابط السيرفر المعتمد\nثم اضغط على Add User أو Login.`,
          },
        ],
        faqs: [
          [`لماذا يعتبر Xtream أفضل من رابط M3U؟`, `لأن اكستريم يحمل القنوات والأفلام والمسلسلات في أقسام منظمة بشكل تلقائي مع دليل البرامج والبوسترات وتحديثات يومية مستمرة.`],
        ],
      })
    );

    // 3. M3U Playlist Setup
    pages.push(
      createGulfPage({
        slug: `iptv-app-${a.id}-m3u-playlist`,
        title: `تشغيل رابط M3U ومكتبة الأفلام في ${a.nameAr} IPTV`,
        h1: `طريقة تشغيل ملف ورابط M3U عبر تطبيق ${a.nameAr}`,
        desc: `دليل تشغيل ملف وقائمة M3U على تطبيق ${a.nameAr}: تحميل القنوات المشفرة والرياضية بدقة 4K، وحفظ المفضلة بسهولة وسرعة عبر واتساب.`,
        lead: `شرح تشغيل روابط وقوائم M3U Playlist على تطبيق ${a.nameAr} لمتابعة البث التلفزيوني المباشر بدقة 4K وبدون أي تأخير أو مشاكل في الروابط.`,
        cat: "gulf-app",
        parent: "iptv-apps",
        crumb: `رابط m3u ${a.kw}`,
        kw2: `m3u ${a.id}`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، أرغب في الحصول على رابط M3U لسيرفر IPTV يعمل على ${a.nameAr}`,
        sections: [
          {
            h: `كيفية إضافة رابط M3U في ${a.nameAr}`,
            body: `انسخ رابط M3U المرسل إليك عبر واتساب، وضعه في خانة Playlist URL في التطبيق، واضغط على حفظ ليتم تحميل القنوات وتصنيفها فوراً.`,
          },
        ],
        faqs: [
          [`هل يدعم رابط M3U قنوات 4K؟`, `نعم، يحتوي الرابط على كافة القنوات الرياضية والترفيهية بجودات متعددة تناسب سرعة اتصالك.`],
        ],
      })
    );

    // 4. Activation Code
    pages.push(
      createGulfPage({
        slug: `iptv-app-${a.id}-activation-code`,
        title: `كود تفعيل واشتراك IPTV لتطبيق ${a.nameAr}: أسعار 2026`,
        h1: `الحصول على كود تفعيل سيرفر IPTV لتطبيق ${a.nameAr}`,
        desc: `اطلب كود تفعيل IPTV رسمي لتطبيق ${a.nameAr} بأسعار تبدأ من 15$: قنوات رياضية 4K، أفلام مترجمة، وتفعيل فوري خلال دقائق عبر واتساب.`,
        lead: `وفّر أموالك واحصل على كود تفعيل سيرفر IPTV عالي الأداء لتطبيق ${a.nameAr} مع ضمان شامل ودعم فني متميز طوال فترة الاشتراك.`,
        cat: "gulf-app",
        parent: "iptv-apps",
        crumb: `كود تفعيل ${a.kw}`,
        kw2: `activation code ${a.id}`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، أرغب في شراء كود تفعيل اشتراك IPTV لتطبيق ${a.nameAr}`,
        sections: [
          {
            h: `باقات الاشتراك المتوفرة لتطبيق ${a.nameAr}`,
            body: `يمكنك تفعيل التطبيق مع أي من باقاتنا المعتمدة: شهر (15$)، 3 أشهر (20$)، 6 أشهر (30$)، أو باقة السنة الكاملة VIP بـ 45$ فقط (خصم 75%).`,
          },
        ],
        faqs: [
          [`كيف يصلني كود التفعيل بعد الطلب؟`, `يصلك الكود مباشرة عبر واتساب مع رابط السيرفر وإرشادات التشغيل في أقل من 5 دقائق.`],
        ],
      })
    );

    // 5. Audio & Subtitles
    pages.push(
      createGulfPage({
        slug: `iptv-app-${a.id}-audio-subs`,
        title: `ضبط الصوت والترجمة العربية في تطبيق ${a.nameAr} IPTV`,
        h1: `كيفية حل مشاكل الصوت وتشغيل الترجمة في ${a.nameAr}`,
        desc: `دليل ضبط الصوت والترجمة العربية في ${a.nameAr}: تشغيل الصوت المحيطي، تفعيل القناة الصوتية الثانية للمعلق، وضبط خط الترجمة للأفلام.`,
        lead: `شرح إعدادات الصوت ومسارات الترجمة العربية في تطبيق ${a.nameAr} للاستمتاع بالأفلام والمسلسلات الأجنبية ومباريات كرة القدم بأفضل جودة صوتية.`,
        cat: "gulf-app",
        parent: "iptv-troubleshooting",
        crumb: `صوت وترجمة ${a.kw}`,
        kw2: `audio subtitle ${a.id}`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، أحتاج مساعدة في ضبط الصوت والترجمة على تطبيق ${a.nameAr}`,
        sections: [
          {
            h: `خطوات تفعيل الترجمة العربية`,
            body: `أثناء تشغيل الفيلم، اضغط على زر الإعدادات في مشغل الفيديو، واختر Subtitles، ثم حدد اللغة العربية (Arabic) مع إمكانية تعديل حجم الخط واللون.`,
          },
        ],
        faqs: [
          [`ماذا أفعل إذا كانت الترجمة غير متزامنة مع الصوت؟`, `يمكنك تعديل توقيت الترجمة (Subtitle Delay) بتقديمه أو تأخيره بضع ثوانٍ داخل إعدادات المشغل ليصبح متطابقاً تماماً.`],
        ],
      })
    );

    // 6. Free Trial
    pages.push(
      createGulfPage({
        slug: `iptv-app-${a.id}-free-trial`,
        title: `تجربة مجانية 24 ساعة لتطبيق ${a.nameAr} عبر واتساب IPTV`,
        h1: `طلب تجربة مجانية لسيرفر IPTV على تطبيق ${a.nameAr}`,
        desc: `جرب سيرفر IPTV مجاناً لمدة 24 ساعة على تطبيق ${a.nameAr}: اختبر ثبات القنوات وجودة 4K على شاشتك بدون دفع أي مبلغ، وتفعيل فوري.`,
        lead: `نوفر لك كود تجربة مجانية لمدة 24 ساعة لتطبيق ${a.nameAr} لتختبر جودة السيرفر وثبات القنوات الرياضية ومكتبة الأفلام قبل اتخاذ قرار الاشتراك.`,
        cat: "gulf-app",
        parent: "iptv-apps",
        crumb: `تجربة ${a.kw}`,
        kw2: `free trial ${a.id}`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، أطلب تجربة مجانية لمدة 24 ساعة لسيرفر IPTV على تطبيق ${a.nameAr}`,
        sections: [
          {
            h: `كيف تطلب التجربة المجانية لتطبيق ${a.nameAr}؟`,
            body: `تواصل معنا عبر زر واتساب واذكر أنك تريد تجربة السيرفر على ${a.nameAr}، وسيقوم فريقنا بإرسال بيانات الدخول المباشرة لك في الحال.`,
          },
        ],
        faqs: [
          [`هل التجربة المجانية تلزمني بالدفع لاحقاً؟`, `لا، التجربة مجانية وغير ملزمة إطلاقاً، وتتيح لك الحكم على جودة وثبات الخدمة بنفسك بكل شفافية.`],
        ],
      })
    );
  }

  // Cross-Platform High Intent Guides: 38 pages
  const CROSS_GUIDES = [
    { id: "firestick-tivimate-saudi", dev: "Firestick", app: "TiviMate", country: "السعودية", title: "تشغيل تطبيق تيفي ميت على الفاير ستيك في السعودية IPTV" },
    { id: "samsung-ibo-player-uae", dev: "تلفزيون سامسونج", app: "IBO Player", country: "الإمارات", title: "تفعيل تطبيق آيبو بلاير على شاشات سامسونج في الإمارات IPTV" },
    { id: "lg-smart-iptv-kuwait", dev: "شاشات إل جي", app: "Smart IPTV", country: "الكويت", title: "تشغيل تطبيق سمارت آي بي تي في على شاشات LG في الكويت IPTV" },
    { id: "apple-tv-tivimate-qatar", dev: "Apple TV", app: "Smarters Lite", country: "قطر", title: "تشغيل IPTV على أجهزة Apple TV في قطر بدقة 4K فائقة" },
    { id: "xiaomi-box-xciptv-bahrain", dev: "شاومي بوكس", app: "XCIPTV", country: "البحرين", title: "تشغيل سيرفر IPTV على جهاز شاومي بوكس في البحرين بدون تقطيع" },
    { id: "android-smart-tv-oman", dev: "شاشات أندرويد", app: "TiviMate", country: "عُمان", title: "أفضل إعدادات IPTV على شاشات أندرويد الذكية في سلطنة عُمان" },
    { id: "firestick-smarters-riyadh", dev: "فاير ستيك", app: "Smarters Pro", country: "الرياض", title: "تثبيت IPTV Smarters Pro على جهاز Fire Stick في الرياض" },
    { id: "apple-ios-iphone-dubai", dev: "آيفون وآيباد", app: "Smarters Player", country: "دبي", title: "تشغيل سيرفر IPTV على هواتف آيفون في دبي والإمارات بدقة 4K" },
    { id: "samsung-bob-player-jeddah", dev: "سامسونج سمارت", app: "Bob Player", country: "جدة", title: "تشغيل بوب بلاير على شاشات سامسونج في جدة لمشاهدة IPTV" },
    { id: "lg-flix-iptv-dammam", dev: "شاشات LG", app: "Flix IPTV", country: "الدمام", title: "تفعيل فليكس آي بي تي في على تلفزيونات LG في الدمام والخبر" },
    { id: "windows-pc-vlc-gulf", dev: "كمبيوتر ويندوز", app: "VLC", country: "الخليج", title: "تشغيل سيرفر IPTV على أجهزة الكمبيوتر عبر برنامج VLC في الخليج" },
    { id: "mac-gse-smart-iptv", dev: "أجهزة ماك", app: "GSE IPTV", country: "الخليج", title: "تشغيل اشتراك IPTV على أجهزة Mac و MacBook في الخليج 4K" },
    { id: "formuler-mytvonline-saudi", dev: "فورمولر Z11", app: "MyTVOnline 3", country: "السعودية", title: "ضبط أجهزة فورمولر Formuler Z11 مع سيرفر IPTV في السعودية" },
    { id: "mag-portal-stalker-uae", dev: "ماغ بوكس", app: "Stalker Portal", country: "الإمارات", title: "تشغيل بوابات الماك أدرس لأجهزة MAG Box في الإمارات IPTV" },
    { id: "chromecast-google-tv-kuwait", dev: "كروم كاست", app: "TiviMate", country: "الكويت", title: "إعداد Chromecast مع Google TV لتشغيل قنوات IPTV في الكويت" },
    { id: "sony-bravia-4k-qatar", dev: "سوني برافيا", app: "TiviMate", country: "قطر", title: "تشغيل قنوات 4K الرياضية على شاشات سوني برافيا في قطر IPTV" },
    { id: "tcl-google-tv-bahrain", dev: "شاشات TCL", app: "IBO Player", country: "البحرين", title: "طريقة تفعيل سيرفر IPTV على شاشات TCL في البحرين بدقة عالية" },
    { id: "hisense-vidaa-oman", dev: "شاشات هايسنس", app: "Bay TV", country: "عُمان", title: "تشغيل تطبيق IPTV على شاشات هايسنس في عُمان بدون تهنيج" },
    { id: "firestick-buffer-fix-saudi", dev: "فاير ستيك", app: "TiviMate", country: "السعودية", title: "حل مشكلة البفرنج والتقطيع على الفاير ستيك في السعودية IPTV" },
    { id: "apple-tv-audio-sync-uae", dev: "Apple TV", app: "Smarters Lite", country: "الإمارات", title: "حل مشكلة تزامن الصوت والصورة على Apple TV في الإمارات IPTV" },
    { id: "smart-tv-mac-address-setup", dev: "الشاشات الذكية", app: "Smart IPTV", country: "الخليج", title: "طريقة رفع قائمة M3U عبر الماك أدرس Mac Address لشاشات IPTV" },
    { id: "tivimate-recording-guide", dev: "أندرويد تي في", app: "TiviMate", country: "الخليج", title: "طريقة تسجيل المباريات والبرامج التلفزيونية في تيفي ميت IPTV" },
    { id: "smarters-pro-external-player", dev: "جميع الأجهزة", app: "Smarters Pro", country: "الخليج", title: "تفعيل المشغل الخارجي في تطبيق IPTV Smarters Pro للثبات" },
    { id: "ibo-player-device-key-fix", dev: "شاشات سمارت", app: "IBO Player", country: "الخليج", title: "طريقة تجديد وتفعيل تطبيق IBO Player عبر Device Key و Mac" },
    { id: "firestick-developer-options", dev: "فاير ستيك", app: "Downloader", country: "الخليج", title: "تفعيل خيارات المطور وتثبيت تطبيقات IPTV على Amazon Firestick" },
    { id: "multi-room-home-setup", dev: "الأجهزة المتعددة", app: "IPTV Multi-Room", country: "الخليج", title: "طريقة تشغيل اشتراك IPTV على أكثر من تلفاز في نفس المنزل" },
    { id: "vpn-router-iptv-gulf", dev: "راوترات الإنترنت", app: "VPN Router", country: "الخليج", title: "هل تحتاج لتثبيت VPN على الراوتر لتشغيل سيرفر IPTV في الخليج؟" },
    { id: "smart-tv-cache-clear", dev: "شاشات التلفاز", app: "Clear Cache", country: "الخليج", title: "كيفية مسح الذاكرة المؤقتة للشاشات الذكية لتحسين سرعة IPTV" },
    { id: "android-box-storage-expand", dev: "أندرويد بوكس", app: "USB Storage", country: "الخليج", title: "طريقة توسيع ذاكرة أجهزة الأندرويد تي في بوكس لتشغيل IPTV" },
    { id: "epg-arabic-guide-sync", dev: "جميع المشغلات", app: "EPG XML", country: "الخليج", title: "رابط دليل البرامج الإلكتروني EPG العربي لسيرفرات IPTV الخليجية" },
    { id: "parental-lock-adult-hide", dev: "جميع التطبيقات", app: "Parental Control", country: "الخليج", title: "طريقة تفعيل القفل العائلي وحذف الباقات غير المرغوبة في IPTV" },
    { id: "favorite-channels-backup", dev: "تيفي ميت وسمارتيرز", app: "Backup Data", country: "الخليج", title: "طريقة حفظ نسخة احتياطية من قائمة القنوات المفضلة في تطبيق IPTV" },
    { id: "4k-hdr-color-settings", dev: "شاشات 4K HDR", app: "Display Setup", country: "الخليج", title: "أفضل ضبط لألوان الشاشة وميزة HDR لتشغيل قنوات IPTV الرياضية" },
    { id: "remote-control-shortcuts", dev: "ريموت التلفاز", app: "Key Mapping", country: "الخليج", title: "تخصيص أزرار ريموت التلفاز للانتقال السريع بين قنوات IPTV" },
    { id: "catchup-tv-replay-guide", dev: "المشغلات المتقدمة", app: "Catchup TV", country: "الخليج", title: "كيفية مشاهدة البرامج والمباريات الفائتة عبر ميزة Catch-up في IPTV" },
    { id: "dual-audio-stream-setup", dev: "مشغلات 4K", app: "Audio Stream", country: "الخليج", title: "طريقة تشغيل القنوات ذات التعليقين والاستماع للصوت الإنجليزي IPTV" },
    { id: "best-budget-tv-box-gulf", dev: "الأجهزة الاقتصادية", app: "Budget Box", country: "الخليج", title: "أفضل أجهزة تي في بوكس اقتصادية لتشغيل IPTV في الخليج 2026" },
    { id: "hdmi-cable-4k-uhd-speed", dev: "كابلات العرض", app: "HDMI 2.1", country: "الخليج", title: "أهمية كابل HDMI 2.1 في نقل بث قنوات 4K 60fps بسلاسة على IPTV" },
  ];

  for (const cg of CROSS_GUIDES) {
    pages.push(
      createGulfPage({
        slug: `iptv-guide-${cg.id}`,
        title: `${cg.title}`,
        h1: `${cg.title}`,
        desc: `دليل متخصص لـ ${cg.title}: خطوات الإعداد السريع، حل المشاكل، وأفضل إعدادات الصوت والصورة لسيرفر IPTV المعتمد في ${cg.country}.`,
        lead: `احصل على أقصى أداء وثبات لسيرفر IPTV عند تشغيله على ${cg.dev} باستخدام تطبيق ${cg.app} في ${cg.country} مع جودة 4K فائقة وبدون تقطيع.`,
        cat: "gulf-device",
        parent: "iptv-guides",
        crumb: cg.id.slice(0, 20),
        kw2: `${cg.dev} iptv`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، أرغب في الاستفسار عن إعداد ${cg.title} مع سيرفر IPTV`,
        sections: [
          {
            h: `خطوات التشغيل والتفعيل المثالية`,
            body: `لضمان أفضل أداء: قم بتثبيت أحدث إصدار من التطبيق، وتأكد من اتصال الجهاز بشبكة 5GHz أو كابل إيثرنت، ثم أدخل بيانات السيرفر بدقة للاستمتاع بأكثر من 18,000 قناة حية.`,
          },
        ],
        faqs: [
          [`هل تتوفر مساعدة فنية لتشغيل هذا الجهاز؟`, `نعم، فريق دعمنا متواجد 24/7 عبر واتساب لتوجيهك خطوة بخطوة حتى تعمل جميع القنوات على شاشتك بامتياز.`],
        ],
      })
    );
  }

  return pages;
}
