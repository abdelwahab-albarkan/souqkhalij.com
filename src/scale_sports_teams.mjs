import { createGulfPage } from "./gulf_helpers.mjs";

export const CLUBS_DATA = [
  { id: "al-hilal", name: "الهلال السعودي", league: "دوري روشن السعودي", kw: "الهلال" },
  { id: "al-nassr", name: "النصر السعودي", league: "دوري روشن السعودي", kw: "النصر" },
  { id: "al-ittihad", name: "الاتحاد السعودي", league: "دوري روشن السعودي", kw: "الاتحاد" },
  { id: "al-ahli-saudi", name: "الأهلي السعودي", league: "دوري روشن السعودي", kw: "الاهلي السعودي" },
  { id: "al-shabab-saudi", name: "الشباب السعودي", league: "دوري روشن السعودي", kw: "الشباب السعودي" },
  { id: "al-taawoun", name: "التعاون السعودي", league: "دوري روشن السعودي", kw: "التعاون" },
  { id: "al-ettifaq", name: "الاتفاق السعودي", league: "دوري روشن السعودي", kw: "الاتفاق" },
  { id: "al-fateh", name: "الفتح السعودي", league: "دوري روشن السعودي", kw: "الفتح" },
  { id: "al-ain-uae", name: "العين الإماراتي", league: "دوري أدنوك الإماراتي", kw: "العين الاماراتي" },
  { id: "al-wasl-uae", name: "الوصل الإماراتي", league: "دوري أدنوك الإماراتي", kw: "الوصل الاماراتي" },
  { id: "shabab-al-ahli", name: "شباب الأهلي دبي", league: "دوري أدنوك الإماراتي", kw: "شباب الاهلي" },
  { id: "al-wahda-uae", name: "الوحدة الإماراتي", league: "دوري أدنوك الإماراتي", kw: "الوحدة الاماراتي" },
  { id: "al-sadd-qatar", name: "السد القطري", league: "دوري نجوم قطر", kw: "السد القطري" },
  { id: "al-duhail-qatar", name: "الدحيل القطري", league: "دوري نجوم قطر", kw: "الدحيل" },
  { id: "al-rayyan-qatar", name: "الريان القطري", league: "دوري نجوم قطر", kw: "الريان" },
  { id: "al-qadsia-kuwait", name: "القادسية الكويتي", league: "الدوري الكويتي الممتاز", kw: "القادسية الكويتي" },
  { id: "al-kuwait-club", name: "الكويت الكويتي", league: "الدوري الكويتي الممتاز", kw: "الكويت الكويتي" },
  { id: "al-arabi-kuwait", name: "العربي الكويتي", league: "الدوري الكويتي الممتاز", kw: "العربي الكويتي" },
  { id: "al-muharraq-bahrain", name: "المحرق البحريني", league: "دوري ناصر بن حمد", kw: "المحرق البحريني" },
  { id: "al-riffa-bahrain", name: "الرفاع البحريني", league: "دوري ناصر بن حمد", kw: "الرفاع البحريني" },
  { id: "al-seeb-oman", name: "السيب العُماني", league: "دوري عمانتل", kw: "السيب العماني" },
  { id: "real-madrid", name: "ريال مدريد الإسباني", league: "الدوري الإسباني وأبطال أوروبا", kw: "ريال مدريد" },
  { id: "barcelona", name: "برشلونة الإسباني", league: "الدوري الإسباني وأبطال أوروبا", kw: "برشلونة" },
  { id: "manchester-city", name: "مانشستر سيتي", league: "الدوري الإنجليزي الممتاز", kw: "مانشستر سيتي" },
  { id: "liverpool", name: "ليفربول الإنجليزي", league: "الدوري الإنجليزي الممتاز", kw: "ليفربول" },
  { id: "arsenal", name: "أرسنال الإنجليزي", league: "الدوري الإنجليزي الممتاز", kw: "ارسنال" },
  { id: "manchester-united", name: "مانشستر يونايتد", league: "الدوري الإنجليزي الممتاز", kw: "مانشستر يونايتد" },
  { id: "bayern-munich", name: "بايرن ميونخ الألماني", league: "الدوري الألماني وأبطال أوروبا", kw: "بايرن ميونخ" },
  { id: "psg-paris", name: "باريس سان جيرمان", league: "الدوري الفرنسي وأبطال أوروبا", kw: "باريس سان جيرمان" },
  { id: "inter-milan", name: "إنتر ميلان الإيطالي", league: "الدوري الإيطالي الممتاز", kw: "انتر ميلان" },
];

const GULF_6 = [
  { id: "saudi-arabia", ar: "السعودية" },
  { id: "uae", ar: "الإمارات" },
  { id: "kuwait", ar: "الكويت" },
  { id: "qatar", ar: "قطر" },
  { id: "bahrain", ar: "البحرين" },
  { id: "oman", ar: "عُمان" },
];

export function generateScaleSportsTeamsPages() {
  const pages = [];

  // 1. Teams across 6 Gulf Countries: 30 teams x 6 countries = 180 pages
  for (const t of CLUBS_DATA) {
    for (const c of GULF_6) {
      pages.push(
        createGulfPage({
          slug: `iptv-team-${t.id}-${c.id}`,
          title: `مشاهدة مباريات ${t.name} في ${c.ar} بث مباشر IPTV 4K`,
          h1: `بث مباشر لمباريات ${t.name} في ${c.ar} عبر سيرفر IPTV`,
          desc: `شاهد جميع مباريات نادي ${t.name} في ${t.league} من داخل ${c.ar}: بث مباشر بدقة 4K فائقة الثبات بدون تقطيع مع تفعيل فوري عبر واتساب.`,
          lead: `تابع كافة مواجهات نادي ${t.name} في البطولات المحلية والقارية بجودة Ultra HD 4K عبر أقوى سيرفر IPTV مخصص لمتابعي الرياضة في ${c.ar}.`,
          cat: "gulf-sports",
          parent: "iptv-guides",
          crumb: `${t.kw} ${c.ar}`,
          kw2: `${t.kw} iptv`,
          pricingCountry: c.id,
          waMsg: `السلام عليكم، أنا في ${c.ar} وأرغب في الاشتراك بسيرفر IPTV لمتابعة مباريات نادي ${t.name}`,
          sections: [
            {
              h: `تغطية مباريات ${t.name} بدقة 4K صوت وصورة`,
              body: `نوفر بثاً عالي الجودة لكافة مباريات ${t.name} بتعليق عربي ممتع عبر قنوات SSC و beIN Sports مع توفير روابط وسيرفرات احتياطية تمنع أي انقطاع.`,
            },
          ],
          faqs: [
            [`هل يمكن تجربة السيرفر قبل انطلاق مباراة ${t.name}؟`, `نعم، اطلب تجربة مجانية لمدة 24 ساعة عبر واتساب وسنزودك ببيانات التفعيل الفوري لاختبار القناة على شاشتك.`],
          ],
        })
      );
    }
  }

  // 2. Specific Rivalries & Derbies: 40 pages
  const RIVALRIES = [
    { id: "clasico-madrid-barca", name: "الكلاسيكو بين ريال مدريد وبرشلونة", kw: "كلاسيكو الارض" },
    { id: "riyadh-derby-hilal-nassr", name: "ديربي الرياض بين الهلال والنصر", kw: "ديربي الرياض" },
    { id: "saudi-clasico-hilal-ittihad", name: "كلاسيكو السعودية بين الهلال والاتحاد", kw: "كلاسيكو السعودية" },
    { id: "jeddah-derby-ittihad-ahli", name: "ديربي جدة بين الاتحاد والأهلي", kw: "ديربي جدة" },
    { id: "manchester-derby-city-united", name: "ديربي مانشستر بين السيتي واليونايتد", kw: "ديربي مانشستر" },
    { id: "liverpool-man-united-clash", name: "كلاسيكو إنجلترا بين ليفربول واليونايتد", kw: "كلاسيكو انجلترا" },
    { id: "liverpool-man-city-title", name: "قمة الدوري الإنجليزي بين ليفربول والسيتي", kw: "ليفربول والسيتي" },
    { id: "north-london-derby-arsenal", name: "ديربي شمال لندن بين أرسنال وتوتنهام", kw: "ديربي لندن" },
    { id: "derby-della-madonnina", name: "ديربي ميلانو بين الإنتر والميلان", kw: "ديربي ميلانو" },
    { id: "derby-d-italia-inter-juve", name: "كلاسيكو إيطاليا بين يوفنتوس والإنتر", kw: "كلاسيكو ايطاليا" },
    { id: "der-klassiker-bayern-bvb", name: "كلاسيكو ألمانيا بين بايرن ميونخ ودورتموند", kw: "كلاسيكو المانيا" },
    { id: "le-classique-psg-om", name: "كلاسيكو فرنسا بين باريس ومارسيليا", kw: "كلاسيكو فرنسا" },
    { id: "ucl-final-live-stream", name: "نهائي بطولة دوري أبطال أوروبا الحاسم", kw: "نهائي الشامبيونزليغ" },
    { id: "afc-elite-final-stream", name: "نهائي دوري أبطال آسيا للنخبة", kw: "نهائي ابطال اسيا" },
    { id: "king-cup-saudi-final", name: "نهائي كأس خادم الحرمين الشريفين", kw: "نهائي كاس الملك" },
    { id: "super-cup-saudi-final", name: "نهائي كأس السوبر السعودي في الخليج", kw: "نهائي السوبر السعودي" },
    { id: "uae-super-cup-live", name: "نهائي كأس السوبر الإماراتي للمحترفين", kw: "السوبر الاماراتي" },
    { id: "qatar-emir-cup-live", name: "نهائي كأس أمير دولة قطر لكرة القدم", kw: "كاس امير قطر" },
    { id: "kuwait-crown-prince-cup", name: "نهائي كأس ولي العهد الكويتي", kw: "كاس ولي العهد الكويتي" },
    { id: "bahrain-king-cup-live", name: "نهائي كأس ملك البحرين لكرة القدم", kw: "كاس ملك البحرين" },
    { id: "oman-sultan-cup-live", name: "نهائي كأس جلالة السلطان المعظم في عُمان", kw: "كاس سلطان عمان" },
    { id: "hilal-vs-ain-afc-clash", name: "قمة آسيا بين الهلال السعودي والعين الإماراتي", kw: "الهلال والعين" },
    { id: "nassr-vs-ittihad-clash", name: "قمة الدوري السعودي بين النصر والاتحاد", kw: "النصر والاتحاد" },
    { id: "arsenal-vs-man-city-title", name: "صراع لقب الدوري الإنجليزي أرسنال والسيتي", kw: "ارسنال والسيتي" },
    { id: "real-madrid-vs-man-city", name: "قمة دوري الأبطال ريال مدريد ومانشستر سيتي", kw: "الريال والسيتي" },
    { id: "barca-vs-psg-ucl-night", name: "مواجهة الأبطال بين برشلونة وباريس سان جيرمان", kw: "برشلونة وباريس" },
    { id: "bayern-vs-real-madrid-ucl", name: "كلاسيكو أوروبا بين بايرن ميونخ وريال مدريد", kw: "الريال والبايرن" },
    { id: "liverpool-vs-real-madrid", name: "ثأر نهائي الأبطال بين ليفربول وريال مدريد", kw: "ليفربول وريال مدريد" },
    { id: "madrid-derby-atletico", name: "ديربي العاصمة مدريد بين الريال وأتلتيكو", kw: "ديربي مدريد" },
    { id: "turin-derby-juventus", name: "ديربي تورينو بين يوفنتوس وتورينو", kw: "ديربي تورينو" },
    { id: "chelsea-vs-tottenham-london", name: "ديربي لندن المشتعل بين تشيلسي وتوتنهام", kw: "تشيلسي وتوتنهام" },
    { id: "chelsea-vs-arsenal-london", name: "قمة لندن الكبرى بين تشيلسي وأرسنال", kw: "تشيلسي وارسنال" },
    { id: "ahli-saudi-vs-hilal-clasico", name: "كلاسيكو الكرة السعودية الهلال والأهلي", kw: "الهلال والاهلي" },
    { id: "shabab-vs-nassr-riyadh", name: "ديربي الرياض المثير بين الشباب والنصر", kw: "الشباب والنصر" },
    { id: "sadd-vs-duhail-qatar-summit", name: "قمة الكرة القطرية بين السد والدحيل", kw: "السد والدحيل" },
    { id: "qadsia-vs-arabi-kuwait-derby", name: "ديربي الكرة الكويتية القادسية والعربي", kw: "القادسية والعربي" },
    { id: "wasl-vs-nasr-bur-dubai", name: "ديربي بر دبي بين الوصل والنصر الإماراتي", kw: "ديربي بر دبي" },
    { id: "ain-vs-wahda-classic-uae", name: "كلاسيكو الإمارات التاريخي بين العين والوحدة", kw: "العين والوحدة" },
    { id: "seeb-vs-dhofar-oman-derby", name: "كلاسيكو السلطنة بين السيب وظفار العُماني", kw: "السيب وظفار" },
    { id: "muharraq-vs-riffa-bahrain", name: "كلاسيكو مملكة البحرين المحرق والرفاع", kw: "المحرق والرفاع" },
  ];

  for (const r of RIVALRIES) {
    pages.push(
      createGulfPage({
        slug: `iptv-rivalry-${r.id}`,
        title: `مشاهدة ${r.name} بث مباشر 4K عبر سيرفر IPTV`,
        h1: `بث مباشر لـ ${r.name} بجودة Ultra HD 4K عبر IPTV`,
        desc: `شاهد قمة ${r.name} مباشرة وبدقة 4K عبر سيرفر IPTV فائق الثبات بدون تقطيع مع تعليق عربي، سيرفرات احتياطية، وتفعيل فوري عبر واتساب.`,
        lead: `استمتع بأقوى إثارة كروية عند مشاهدة ${r.name} عبر سيرفر IPTV المطور المجهز بتقنية Anti-Freeze لمنع التقطيع في المباريات الكبرى.`,
        cat: "gulf-sports",
        parent: "iptv-guides",
        crumb: r.kw,
        kw2: `${r.kw} iptv`,
        pricingCountry: "saudi-arabia",
        waMsg: `السلام عليكم، أرغب في الاشتراك بسيرفر IPTV لمشاهدة ${r.name} وطلب تجربة مجانية فورية`,
        sections: [
          {
            h: `مزايا مشاهدة القمة الكروية عبر سيرفرنا`,
            body: `نضمن لك بثاً مستقراً بدون شاشة سوداء أو بطء بفضل السيرفرات المتوازية، مع إمكانية الاختيار بين المعلقين الرياضيين وتوفير جودات متعددة من 4K إلى SD.`,
          },
        ],
        faqs: [
          [`هل يتحمل السيرفر ضغط وقت هذه المباراة؟`, `نعم، سيرفراتنا السحابية مجهزة بنطاق ترددي ضخم يستوعب ملايين المشاهدين في نفس اللحظة بدون أي تأخير.`],
        ],
      })
    );
  }

  // 3. Channels across 6 Countries: 20 channels x 6 countries = 120 pages
  const CHANNELS_LIST = [
    { id: "bein-sports-1-prem", name: "قناة beIN Sports 1 Premium", kw: "بين سبورت 1" },
    { id: "bein-sports-2-prem", name: "قناة beIN Sports 2 Premium", kw: "بين سبورت 2" },
    { id: "bein-sports-3-prem", name: "قناة beIN Sports 3 Premium", kw: "بين سبورت 3" },
    { id: "bein-sports-4k-uhd", name: "قناة beIN Sports 4K Ultra HD", kw: "بين سبورت 4k" },
    { id: "ssc-sports-1-hd", name: "قناة SSC Sports 1 HD السعودية", kw: "قناة ssc 1" },
    { id: "ssc-extra-1-hd", name: "قناة SSC Extra 1 HD الرياضية", kw: "قناة ssc اكسترا" },
    { id: "ssc-sports-5-hd", name: "قناة SSC Sports 5 HD الناقلة للمسابقات", kw: "قناة ssc 5" },
    { id: "ad-sports-1-prem", name: "قناة أبوظبي الرياضية 1 بريميوم", kw: "ابو ظبي 1 بريميوم" },
    { id: "ad-sports-2-prem", name: "قناة أبوظبي الرياضية 2 بريميوم", kw: "ابو ظبي 2 بريميوم" },
    { id: "alkass-one-hd", name: "قناة الكأس 1 HD القطرية", kw: "الكاس 1" },
    { id: "alkass-two-hd", name: "قناة الكأس 2 HD القطرية", kw: "الكاس 2" },
    { id: "alkass-four-hd", name: "قناة الكأس 4 HD المشفرة", kw: "الكاس 4" },
    { id: "sky-sports-main-uk", name: "قناة Sky Sports Main Event البريطانية", kw: "سكاي سبورت بريطانيا" },
    { id: "sky-sports-premier-uk", name: "قناة Sky Sports Premier League", kw: "سكاي سبورت بريميرليغ" },
    { id: "tnt-sports-1-uk", name: "قناة TNT Sports 1 UK الرياضية", kw: "تي ان تي سبورت" },
    { id: "canal-plus-sport-fr", name: "قناة Canal+ Sport الفرنسية 4K", kw: "كنال بلوس سبورت" },
    { id: "dazn-one-sports", name: "قناة DAZN 1 Sports العالمية", kw: "قناة دازن" },
    { id: "supersport-premier", name: "قناة SuperSport Premier League", kw: "سوبر سبورت" },
    { id: "sony-sports-ten-1", name: "قناة Sony Sports Ten 1 لمباريات الكريكيت", kw: "سوني سبورت تين" },
    { id: "wwe-network-live", name: "قناة WWE Network لعروض المصارعة الحرة", kw: "قناة wwe نتورك" },
  ];

  for (const ch of CHANNELS_LIST) {
    for (const c of GULF_6) {
      pages.push(
        createGulfPage({
          slug: `iptv-channel-${ch.id}-${c.id}`,
          title: `بث مباشر ${ch.name} في ${c.ar} عبر سيرفر IPTV بدقة 4K`,
          h1: `تشغيل ${ch.name} بث مباشر في ${c.ar} عبر IPTV`,
          desc: `شاهد ${ch.name} في ${c.ar}: بث مباشر فائق الجودة 4K و FHD بدون تقطيع، صوت محيطي نقي، وسيرفرات سريعة مع تفعيل فوري عبر واتساب.`,
          lead: `استمتع بمشاهدة ${ch.name} من داخل ${c.ar} بأعلى دقة وضوح وثبات تام على كافة شاشات التلفاز والأجهزة الذكية عبر سيرفر IPTV المطور.`,
          cat: "gulf-sports",
          parent: "iptv-guides",
          crumb: `${ch.kw} ${c.ar}`,
          kw2: `${ch.kw} iptv`,
          pricingCountry: c.id,
          waMsg: `السلام عليكم، أنا في ${c.ar} وأرغب في الاشتراك بسيرفر IPTV لمشاهدة ${ch.name}`,
          sections: [
            {
              h: `مواصفات بث ${ch.name} عبر سيرفرنا`,
              body: `تبث القناة بمعدل تدفق فائق الدقة وبدون أي ضغط مفرط، مما يمنحك تفاصيل رياضية واضحة وصوتاً متزامناً مع الصورة بدون أي تأخير مقارنة بالبث الفضائي.`,
            },
          ],
          faqs: [
            [`هل القناة تعمل على مدار 24 ساعة؟`, `نعم، تعمل القناة ببث مستمر على مدار الساعة مع دليل برامج إلكتروني لمعرفة مواعيد البرامج.`],
          ],
        })
      );
    }
  }

  // 4. Extended Sports Guides: 160 pages
  const EXTENDED_SPORTS_GUIDES = [
    { id: "ronaldo-al-nassr-matches", title: "مشاهدة مباريات كريستيانو رونالدو مع النصر السعودي IPTV", kw: "مباريات رونالدو" },
    { id: "benzema-al-ittihad-matches", title: "مشاهدة مباريات كريم بنزيما مع نادي الاتحاد السعودي IPTV", kw: "مباريات بنزيما" },
    { id: "neymar-al-hilal-matches", title: "مشاهدة مباريات نيمار ونجوم الهلال السعودي عبر IPTV 4K", kw: "مباريات الهلال نيمار" },
    { id: "mahrez-al-ahli-matches", title: "مشاهدة مباريات رياض محرز مع الأهلي السعودي عبر IPTV", kw: "مباريات رياض محرز" },
    { id: "mohamed-salah-liverpool-matches", title: "مشاهدة مباريات محمد صلاح مع ليفربول في الدوري الإنجليزي IPTV", kw: "مباريات محمد صلاح" },
    { id: "haaland-man-city-goals", title: "مشاهدة أهداف ومباريات إيرلينغ هالاند ومانشستر سيتي IPTV", kw: "مباريات هالاند" },
    { id: "mbappe-real-madrid-goals", title: "مشاهدة مباريات كيليان مبابي مع ريال مدريد في الليغا IPTV", kw: "مباريات مبابي الريال" },
    { id: "yamal-barcelona-skills", title: "مشاهدة مهارات ومباريات لامين يامال مع برشلونة عبر IPTV", kw: "مباريات لامين يامال" },
    { id: "vinicius-real-madrid-live", title: "مشاهدة مباريات فينيسيوس جونيور وريال مدريد بث مباشر IPTV", kw: "مباريات فينيسيوس" },
    { id: "bellingham-real-madrid-live", title: "مشاهدة مباريات جود بيلينغهام وريال مدريد في أبطال أوروبا IPTV", kw: "مباريات بيلينغهام" },
    { id: "de-bruyne-man-city-passes", title: "مشاهدة مباريات كيفين دي بروين ومانشستر سيتي عبر IPTV", kw: "مباريات دي بروين" },
    { id: "saka-arsenal-live-stream", title: "مشاهدة مباريات بوكايو ساكا وأرسنال في الدوري الإنجليزي IPTV", kw: "مباريات ارسنال ساكا" },
    { id: "kane-bayern-munich-goals", title: "مشاهدة مباريات هاري كين مع بايرن ميونخ في البوندسليغا IPTV", kw: "مباريات هاري كين" },
    { id: "martinez-inter-milan-live", title: "مشاهدة مباريات لاوتارو مارتينيز مع إنتر ميلان في الكالتشيو IPTV", kw: "مباريات انتر ميلان" },
    { id: "mitrovic-hilal-goals", title: "مشاهدة أهداف ألكسندر ميتروفيتش مع الهلال السعودي عبر IPTV", kw: "اهداف ميتروفيتش الهلال" },
    { id: "militinkovic-savic-hilal", title: "مشاهدة مباريات سافيتش وروبن نيفيز مع الهلال عبر IPTV", kw: "مباريات سافيتش الهلال" },
    { id: "kante-ittihad-midfield", title: "مشاهدة مباريات نغولو كانتي مع الاتحاد السعودي بث مباشر IPTV", kw: "مباريات كانتي الاتحاد" },
    { id: "mane-nassr-live-stream", title: "مشاهدة مباريات ساديو ماني مع النصر السعودي بدقة 4K عبر IPTV", kw: "مباريات ساديو ماني" },
    { id: "bounou-hilal-saves", title: "مشاهدة تصديات ياسين بونو مع نادي الهلال السعودي عبر IPTV", kw: "تصديات ياسين بونو" },
    { id: "mendy-ahli-saves", title: "مشاهدة تصديات إدوارد ميندي مع الأهلي السعودي عبر IPTV", kw: "تصديات ميندي الاهلي" },
  ];

  // Repeat for 8 variants each to hit 160 pages cleanly
  const GULF_SUB_TOPICS = [
    { suf: "ksa-fiber", titleAr: "على فايبر stc وموبايلي في السعودية", country: "saudi-arabia" },
    { suf: "uae-fiber", titleAr: "على شبكات du و e& في دولة الإمارات", country: "uae" },
    { suf: "kuwait-net", titleAr: "على شبكات زين وأوريدو في الكويت", country: "kuwait" },
    { suf: "qatar-fiber", titleAr: "على ألياف Ooredoo وفودافون في قطر", country: "qatar" },
    { suf: "bahrain-net", titleAr: "على شبكة بيون وزين في مملكة البحرين", country: "bahrain" },
    { suf: "oman-net", titleAr: "على ألياف عمانتل وأوريدو في سلطنة عُمان", country: "oman" },
    { suf: "smart-tv", titleAr: "على شاشات التلفزيون الذكية سمارت تي في 4K", country: "saudi-arabia" },
    { suf: "firestick", titleAr: "على أجهزة أمازون فاير ستيك Firestick بدقة فائقة", country: "uae" },
  ];

  for (const eg of EXTENDED_SPORTS_GUIDES) {
    for (const gst of GULF_SUB_TOPICS) {
      pages.push(
        createGulfPage({
          slug: `iptv-guide-${eg.id}-${gst.suf}`,
          title: `IPTV: ${eg.kw} - ${gst.titleAr}`,
          h1: `IPTV: ${eg.title} - ${gst.titleAr}`,
          desc: `دليل مشاهدة ${eg.kw} بدقة 4K عبر سيرفر IPTV ${gst.titleAr} بدون تقطيع مع تفعيل فوري واستقرار فائق لجميع المباريات.`,
          lead: `استمتع بمتابعة ${eg.title} ${gst.titleAr} مع أقوى سيرفر IPTV في الخليج المجهز بتقنيات مكافحة التقطيع ومسارات البث المباشر السريعة.`,
          cat: "gulf-sports",
          parent: "iptv-guides",
          crumb: eg.kw,
          kw2: `${eg.kw} iptv`,
          pricingCountry: gst.country,
          waMsg: `السلام عليكم، أرغب في الاستفسار عن ${eg.title} وطلب تجربة مجانية لسيرفر IPTV`,
          sections: [
            {
              h: `تفاصيل البث والمشاهدة بأعلى جودة`,
              body: `نوفر سيرفرات محلية متقدمة تضمن لك مشاهدة مباريات كرة القدم بأعلى وضوح ونعومة حركة (60fps) لتستمتع بكل هجمة وهدف بدون تأخير.`,
            },
          ],
          faqs: [
            [`كيف أبدأ المشاهدة الآن؟`, `تواصل معنا عبر واتساب لطلب كود التفعيل الفوري أو التجربة المجانية 24 ساعة لتشغيل القناة على جهازك في دقائق.`],
          ],
        })
      );
    }
  }

  return pages;
}

