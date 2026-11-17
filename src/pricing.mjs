import { SITE, waLink } from "./config.mjs";

export const PLANS = [
  {
    id: "1m",
    name: "اشتراك 1 شهر",
    nameEn: "1 Month Plan",
    duration: "1 شهر",
    durationEn: "1 Month",
    priceUsd: 15,
    origUsd: 25,
    sar: 56,
    origSar: 95,
    aed: 55,
    origAed: 92,
    kwd: 4.6,
    origKwd: 7.7,
    qar: 55,
    origQar: 91,
    badge: "تجربة مرنة",
    badgeEn: "Flexible",
    saveTag: "وفر 40%",
    saveTagEn: "Save 40%",
    popular: false,
    perMonth: "15$ / شهر",
    perMonthEn: "$15 / mo",
    checkoutUrl: "https://todedev.com/buy/1-month-digital-system",
    features: [
      "+18,000 قناة حية بجودة 4K و FHD فائقة الثبات",
      "+50,000 فيلم ومسلسل مترجم ومحدث يومياً",
      "بث جميع الدوريات والبطولات الرياضية بدون تقطيع",
      "دليل البرامج الإلكتروني EPG مع خاصية التسجيل",
      "تفعيل فوري خلال دقائق ودعم فني على مدار الساعة",
      "يعمل على جميع الأجهزة الذكية والتطبيقات"
    ],
    featuresEn: [
      "+18,000 Live 4K & FHD Channels with 99.9% Uptime",
      "+50,000 VOD Movies & Series (Updated Daily)",
      "All Sports Leagues & Premium Matches Without Freezing",
      "EPG TV Guide Included with Fast Channel Switching",
      "Instant 5-Minute Activation & 24/7 Technical Support",
      "Compatible with All Devices & IPTV Apps"
    ],
    waMsg: "السلام عليكم، أرغب في الاشتراك بباقة شهر واحد (15$) لخدمة IPTV مع التفعيل الفوري",
    waMsgEn: "Hello, I would like to subscribe to the 1 Month IPTV Plan ($15) with instant activation"
  },
  {
    id: "3m",
    name: "اشتراك 3 أشهر",
    nameEn: "3 Months Plan",
    duration: "3 أشهر",
    durationEn: "3 Months",
    priceUsd: 20,
    origUsd: 45,
    sar: 75,
    origSar: 170,
    aed: 73,
    origAed: 165,
    kwd: 6.2,
    origKwd: 13.8,
    qar: 73,
    origQar: 164,
    badge: "توفير 55%",
    badgeEn: "Save 55%",
    saveTag: "وفر 55%",
    saveTagEn: "Save 55%",
    popular: false,
    perMonth: "6.6$ / شهر",
    perMonthEn: "$6.6 / mo",
    checkoutUrl: "https://todedev.com/buy/3-months-digital-system",
    features: [
      "جميع مزايا باقة الشهر الكاملة بأعلى جودة",
      "خوادم فائقة السرعة مع تقنية Anti-Freeze 9.0 لمنع التقطيع",
      "قنوات beIN Sports و SSC Sports بجودة 4K حقيقية",
      "مكتبة مسلسلات رمضان وعروض نتفليكس وشاهد الحصرية",
      "تحديثات مجانية مستمرة طوال فترة الاشتراك",
      "دعم فني متميز وسريع عبر واتساب"
    ],
    featuresEn: [
      "All Features of the 1-Month Plan at Maximum Quality",
      "High-Speed Servers with Anti-Freeze 9.0 Technology",
      "beIN Sports, SSC Sports & World Channels in 4K",
      "Full Netflix, Shahid VIP & TOD On-Demand Library",
      "Free Continuous Playlist Updates Throughout Period",
      "Priority WhatsApp Fast Support"
    ],
    waMsg: "السلام عليكم، أرغب في الاشتراك بباقة 3 أشهر (20$) لخدمة IPTV مع التفعيل الفوري",
    waMsgEn: "Hello, I would like to subscribe to the 3 Months IPTV Plan ($20) with instant activation"
  },
  {
    id: "6m",
    name: "اشتراك 6 أشهر",
    nameEn: "6 Months Plan",
    duration: "6 أشهر",
    durationEn: "6 Months",
    priceUsd: 30,
    origUsd: 90,
    sar: 112,
    origSar: 340,
    aed: 110,
    origAed: 330,
    kwd: 9.2,
    origKwd: 27.6,
    qar: 109,
    origQar: 328,
    badge: "الأكثر طلباً - توفير 66% 🔥",
    badgeEn: "Most Popular - Save 66% 🔥",
    saveTag: "وفر 66%",
    saveTagEn: "Save 66%",
    popular: false,
    perMonth: "5.0$ / شهر",
    perMonthEn: "$5.0 / mo",
    checkoutUrl: "https://todedev.com/buy/6-months-digital-system",
    features: [
      "جميع مزايا الباقات السابقة مع خوادم احتياطية متوازية",
      "ثبات مطلق أثناء مباريات دوري أبطال أوروبا والكلاسيكو",
      "تغطية كاملة للموسم الرياضي والبطولات القارية والدولية",
      "مكتبة سينمائية بدقة 4K HDR وصوت محيطي Dolby Audio",
      "توافق تام مع Smart TV و Firestick و Android و Apple",
      "ضمان تشغيل وثبات 99.9% طوال الـ 6 أشهر"
    ],
    featuresEn: [
      "All Previous Features with Redundant Backup Servers",
      "Zero Freezing During Champions League & High-Traffic Matches",
      "Full Sports Season Coverage with Multi-Audio Commentary",
      "4K HDR Movies with Dolby Surround Audio",
      "Works on Smart TVs, Fire TV, Android TV, Apple TV, PC",
      "99.9% Continuous Uptime Guarantee for 6 Months"
    ],
    waMsg: "السلام عليكم، أرغب في الاشتراك بباقة 6 أشهر (30$) لخدمة IPTV مع التفعيل الفوري",
    waMsgEn: "Hello, I would like to subscribe to the 6 Months IPTV Plan ($30) with instant activation"
  },
  {
    id: "12m",
    name: "اشتراك 12 شهر (سنة كاملة)",
    nameEn: "12 Months VIP Plan (1 Year)",
    duration: "12 شهر",
    durationEn: "12 Months",
    priceUsd: 45,
    origUsd: 180,
    sar: 169,
    origSar: 675,
    aed: 165,
    origAed: 660,
    kwd: 13.8,
    origKwd: 55.2,
    qar: 164,
    origQar: 656,
    badge: "أفضل قيمة - العرض السنوي 🏆",
    badgeEn: "Best Value - Golden VIP 🏆",
    saveTag: "وفر 75% خصم ذهبي",
    saveTagEn: "Save 75% Golden Deal",
    popular: true,
    perMonth: "3.75$ / شهر فقط!",
    perMonthEn: "Only $3.75 / mo!",
    checkoutUrl: "https://todedev.com/buy/12-months-digital-system",
    features: [
      "سنة كاملة بأقوى سعر في الخليج (توفير 75% مقارنة بالشهري!)",
      "سيرفر VIP بريميوم بأعلى ثبات وجودة وسرعة استجابة في الخليج",
      "أكثر من 18,000 قناة حية + 50,000 فيلم ومسلسل بدقة 4K فائقة",
      "تغطية كاملة لدوري روشن السعودي، الدوري الإنجليزي، أبطال أوروبا والمونديال",
      "سيرفرات CDN محلية مخصصة للخليج مع Ping منخفض جداً",
      "ضمان ذهبي لاسترجاع الأموال واستبدال السيرفر ودعم فني VIP طوال العام"
    ],
    featuresEn: [
      "Full Year at the Lowest Rate in the Gulf (Save 75%!)",
      "VIP Premium High-Bandwidth Dedicated Server with 99.9% Uptime",
      "18,000+ Live Channels + 50,000 Movies & TV Series in 4K",
      "Complete Sports: Saudi League, Premier League, UEFA Champions League",
      "Dedicated Gulf Local CDN Edge Nodes with Ultra-Low Latency",
      "Golden 7-Day Money-Back Guarantee & Free VIP Support All Year"
    ],
    waMsg: "السلام عليكم، أرغب في الاشتراك بباقة السنة الكاملة 12 شهر (45$) [العرض الأقوى والأكثر طلباً] لخدمة IPTV مع التفعيل الفوري",
    waMsgEn: "Hello, I would like to subscribe to the 12 Months VIP IPTV Plan ($45) [Best Value - Most Popular] with instant activation"
  }
];

export const TRIAL_WA_MSG = "السلام عليكم، أرغب في طلب تجربة مجانية لمدة 24 ساعة لسيرفر IPTV قبل الاشتراك";
export const TRIAL_WA_MSG_EN = "Hello, I would like to request a 24-hour free IPTV trial before subscribing";

export function renderPricingSection(lang = "ar", countryCode = null) {
  const isEn = lang === "en";
  const trialLink = waLink(isEn ? TRIAL_WA_MSG_EN : TRIAL_WA_MSG);

  let cardsHtml = PLANS.map((plan) => {
    const waUrl = waLink(isEn ? plan.waMsgEn : plan.waMsg);
    const badgeText = isEn ? plan.badgeEn : plan.badge;
    const saveTagText = isEn ? plan.saveTagEn : plan.saveTag;
    const nameText = isEn ? plan.nameEn : plan.name;
    const perMonthText = isEn ? plan.perMonthEn : plan.perMonth;
    const featuresList = isEn ? plan.featuresEn : plan.features;
    const btnText = isEn ? "Subscribe Now · Instant Checkout" : "اشترك الآن · دفع إلكتروني فوري";
    const waText = isEn ? "Or order & pay via WhatsApp 💬" : "أو اطلب وتواصل عبر واتساب 💬";

    const localCurrency = countryCode === "saudi-arabia"
      ? `≈ ${plan.sar} ر.س`
      : countryCode === "uae"
      ? `≈ ${plan.aed} د.إ`
      : countryCode === "kuwait"
      ? `≈ ${plan.kwd} د.ك`
      : countryCode === "qatar"
      ? `≈ ${plan.qar} ر.ق`
      : `≈ ${plan.sar} ر.س / ${plan.aed} د.إ`;

    return `
    <div class="pricing-card${plan.popular ? " pricing-card-featured" : ""}" 
         data-plan="${plan.id}" 
         data-checkout="${plan.checkoutUrl}"
         data-usd="${plan.priceUsd}" 
         data-orig-usd="${plan.origUsd}"
         data-sar="${plan.sar}" 
         data-orig-sar="${plan.origSar}"
         data-aed="${plan.aed}" 
         data-orig-aed="${plan.origAed}"
         data-kwd="${plan.kwd}" 
         data-orig-kwd="${plan.origKwd}"
         data-qar="${plan.qar}"
         data-orig-qar="${plan.origQar}">
      ${plan.popular ? `<div class="pricing-badge-popular">${badgeText}</div>` : (badgeText ? `<div class="pricing-badge">${badgeText}</div>` : "")}
      <h3 class="pricing-title">${nameText}</h3>
      <div class="pricing-rate">${perMonthText}</div>
      <div class="pricing-old-price">
        <span class="old-price-strike" data-old-val="${plan.origUsd}">$${plan.origUsd}</span>
        <span class="save-tag">${saveTagText}</span>
      </div>
      <div class="pricing-price">
        <span class="price-currency" data-currency-symbol>$</span>
        <span class="price-val" data-price-value="${plan.priceUsd}">${plan.priceUsd}</span>
        <span class="price-period">${isEn ? "/ period" : "/ للفترة"}</span>
      </div>
      <div class="pricing-local-currency" data-local-currency>${localCurrency}</div>
      <ul class="pricing-features">
        ${featuresList.map((f) => `<li><span class="feat-check">✓</span> ${f}</li>`).join("\n        ")}
      </ul>
      <div class="pricing-actions">
        <a class="btn pricing-btn${plan.popular ? " btn-primary" : ""}" href="${plan.checkoutUrl}" rel="noopener" target="_blank">
          <span class="pb-ico"><svg class="pay-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></span>
          <span class="pb-text"><b>${isEn ? "Subscribe Now" : "اشترك الآن"}</b><small>${isEn ? "Instant secure checkout" : "دفع إلكتروني فوري وآمن"}</small></span>
          <span class="pb-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </a>
        <a class="pricing-wa-sublink pricing-wa-btn" href="${waUrl}" rel="noopener" target="_blank" title="${isEn ? "Order or chat via WhatsApp" : "اطلب أو استفسر عبر واتساب"}"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2zm5.8 14.1c-.25.7-1.45 1.33-2 1.4-.52.08-1.17.1-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.3-5-4.35-5.15-4.55-.15-.2-1.24-1.65-1.24-3.15s.78-2.23 1.06-2.53c.27-.3.6-.38.8-.38h.57c.18 0 .43-.07.67.5.25.6.85 2.08.93 2.23.07.15.12.33.02.52-.1.2-.15.32-.3.5-.15.17-.32.38-.45.52-.15.15-.3.3-.13.6.18.3.78 1.28 1.67 2.07 1.15 1.02 2.1 1.34 2.4 1.5.3.14.47.12.65-.07.17-.2.75-.88.95-1.18.2-.3.4-.25.67-.15.27.1 1.72.8 2.02.95.3.15.5.22.57.35.08.12.08.72-.17 1.4z"/></svg><span>${isEn ? "Order via WhatsApp" : "اطلب عبر واتساب"}</span></a>
      </div>
    </div>`;
  }).join("\n");

  const title = isEn
    ? "IPTV Subscription Packages & Pricing 2026"
    : "باقات وأسعار اشتراك IPTV في الخليج 2026";
  const subtitle = isEn
    ? "Choose the plan that suits you: 4K Ultra-Fast IPTV Servers, Zero Buffering, Anti-Freeze Technology, and 24/7 Dedicated Support."
    : "اختر الباقة المناسبة لاحتياجك: سيرفرات IPTV فائقة السرعة بجودة 4K وبدون تقطيع، مع تفعيل فوري وضمان شامل ودعم فني على مدار الساعة.";
  const trialHeading = isEn
    ? "Want to test our IPTV service first?"
    : "هل ترغب في تجربة خدمة IPTV أولاً مجاناً؟";
  const trialText = isEn
    ? "Request a free 24-hour IPTV trial right now on WhatsApp. Test all 4K sports channels and movies on your device before paying anything!"
    : "اطلب تجربة IPTV مجانية لمدة 24 ساعة عبر واتساب الآن. اختبر جميع قنوات IPTV الرياضية والترفيهية وجودة 4K على جهازك قبل دفع أي مبلغ!";
  const trialBtn = isEn
    ? "Request 24-Hour Free IPTV Trial 📲"
    : "اطلب تجربة IPTV مجانية 24 ساعة 📲";
  const trustHeading = isEn ? "Accepted Gulf & Global IPTV Payment Methods" : "طرق دفع اشتراك IPTV المعتمدة في دول الخليج";

  const reviewsHeading = isEn ? "⭐️ Verified Gulf IPTV Customer Reviews" : "⭐️ تقييمات وتجارب عملاء سيرفر IPTV في دول الخليج";
  const review1Name = isEn ? "Abu Fahad Al-Qahtani" : "أبو فهد القحطاني";
  const review1Loc = isEn ? "🇸🇦 Riyadh, Saudi Arabia" : "🇸🇦 الرياض، السعودية";
  const review1Text = isEn
    ? "Outstanding 4K IPTV streaming on stc fiber. Watched all Saudi Pro League and Champions League matches with zero freezing. Activated in 3 minutes via WhatsApp."
    : "أفضل سيرفر IPTV جربته في الرياض على فايبر stc. مباريات دوري روشن ودوري أبطال أوروبا بجودة 4K حقيقية وبدون أي تقطيع أثناء قمة الهلال والنصر. التفعيل تم في 3 دقائق عبر واتساب.";

  const review2Name = isEn ? "James R. (Dubai Expat)" : "محمد المنصوري (دبي)";
  const review2Loc = isEn ? "🇦🇪 Dubai, UAE" : "🇦🇪 دبي، الإمارات";
  const review2Text = isEn
    ? "Living in Dubai for 5 years, this is hands-down the best IPTV service on du fiber. Full 4K Premier League with English commentary and zero buffering. Great WhatsApp support."
    : "استخدم سيرفر IPTV في دبي على شبكة du منذ 6 أشهر، القنوات الإنجليزية وقنوات beIN الرياضية تعمل بجودة 4K فائقة الوضوح وبدون تأخير. الدعم الفني لخدمة IPTV متعاون وسريع.";

  const review3Name = isEn ? "Abdullah Al-Mutairi" : "عبدالله المطيري";
  const review3Loc = isEn ? "🇰🇼 Kuwait City" : "🇰🇼 مدينة الكويت";
  const review3Text = isEn
    ? "Subscribed to the 12-month VIP IPTV plan for $45. Fantastic value for money. Works smoothly on Samsung Smart TV and Firestick with thousands of movies."
    : "اشتركت في باقة سيرفر IPTV السنوية بـ 45 دولار، والله ممتازة وسعرها رمزي مقارنة بالجودة الخرافية. قنوات IPTV شغالة على شاشة سامسونج بالصالة بكل سلاسة ومكتبة المسلسلات والأفلام ضخمة.";

  return `
  <section class="pricing-section" id="pricing">
    <div class="pricing-header">
      <span class="eyebrow">${isEn ? "Guaranteed Gulf IPTV Service" : "أقوى اشتراك IPTV خليجي مضمون"}</span>
      <h2>${title}</h2>
      <p class="pricing-sub">${subtitle}</p>

      <div class="currency-tabs-wrapper">
        <span class="curr-label">${isEn ? "Select Currency:" : "اختر العملة:"}</span>
        <div class="currency-tabs">
          <button type="button" class="curr-tab active" data-curr="usd">💵 ${isEn ? "USD ($)" : "بالدولار ($)"}</button>
          <button type="button" class="curr-tab" data-curr="sar">🇸🇦 ${isEn ? "Saudi (SAR)" : "السعودية (ر.س)"}</button>
          <button type="button" class="curr-tab" data-curr="aed">🇦🇪 ${isEn ? "UAE (AED)" : "الإمارات (د.إ)"}</button>
          <button type="button" class="curr-tab" data-curr="kwd">🇰🇼 ${isEn ? "Kuwait (KWD)" : "الكويت (د.ك)"}</button>
          <button type="button" class="curr-tab" data-curr="qar">🇶🇦 ${isEn ? "Qatar (QAR)" : "قطر (ر.ق)"}</button>
        </div>
      </div>
    </div>

    <div class="pricing-grid">
      ${cardsHtml}
    </div>

    <div class="pricing-trial-box">
      <div class="trial-text">
        <h3>⚡️ ${trialHeading}</h3>
        <p>${trialText}</p>
      </div>
      <a class="btn btn-trial" href="${trialLink}" rel="noopener" target="_blank"><span class="bt-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2zm5.8 14.1c-.25.7-1.45 1.33-2 1.4-.52.08-1.17.1-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.3-5-4.35-5.15-4.55-.15-.2-1.24-1.65-1.24-3.15s.78-2.23 1.06-2.53c.27-.3.6-.38.8-.38h.57c.18 0 .43-.07.67.5.25.6.85 2.08.93 2.23.07.15.12.33.02.52-.1.2-.15.32-.3.5-.15.17-.32.38-.45.52-.15.15-.3.3-.13.6.18.3.78 1.28 1.67 2.07 1.15 1.02 2.1 1.34 2.4 1.5.3.14.47.12.65-.07.17-.2.75-.88.95-1.18.2-.3.4-.25.67-.15.27.1 1.72.8 2.02.95.3.15.5.22.57.35.08.12.08.72-.17 1.4z"/></svg></span><span>${trialBtn.replace(/\s*📲\s*$/, "")}</span></a>
    </div>

    <div class="pricing-trust">
      <h4>${trustHeading}</h4>
      <div class="payment-badges">
        <span class="pay-badge"><img src="/img/apple-pay-logo.webp" alt="Apple Pay" class="pay-badge-icon" loading="lazy"> Apple Pay</span>
        <span class="pay-badge"><img src="/img/visa-logo.webp" alt="Visa" class="pay-badge-icon" loading="lazy"> Visa</span>
        <span class="pay-badge"><img src="/img/mastercard-logo.webp" alt="Mastercard" class="pay-badge-icon" loading="lazy"> Mastercard</span>
        <span class="pay-badge"><img src="/img/google-pay-logo.webp" alt="Google Pay" class="pay-badge-icon" loading="lazy"> Google Pay</span>
        <span class="pay-badge"><img src="/img/paypal-logo.webp" alt="PayPal" class="pay-badge-icon" loading="lazy"> PayPal</span>
        <span class="pay-badge"><img src="/img/crypto-logo.webp" alt="USDT Crypto" class="pay-badge-icon" loading="lazy"> USDT Crypto</span>
        <span class="pay-badge">🇸🇦 مدى Mada</span>
        <span class="pay-badge">⚡️ STC Pay</span>
        <span class="pay-badge">🇰🇼 KNET</span>
        <span class="pay-badge">🇧🇭 BenefitPay</span>
      </div>
      <div class="secure-checkout-notice">
        🔒 <strong>${isEn ? "TODEDEV Secure IPTV Checkout" : "بوابة دفع اشتراك IPTV إلكترونية آمنة عبر TODEDEV"}</strong> — ${isEn ? "256-Bit SSL Encrypted Instant IPTV Activation" : "تشفير بنكي آمن 256-bit وتفعيل فوري لاشتراك IPTV"}
      </div>
      <div class="trust-guarantees">
        <span>⚡️ <strong>${isEn ? "Instant IPTV Setup in 5 Min" : "تفعيل فوري لاشتراك IPTV خلال 5 دقائق"}</strong></span>
        <span>🛡️ <strong>${isEn ? "7-Day Money-Back Guarantee" : "ضمان استرجاع 7 أيام لاشتراك IPTV"}</strong></span>
        <span>📶 <strong>${isEn ? "99.9% Uptime Anti-Freeze IPTV" : "ثبات سيرفر IPTV بنسبة 99.9% بدون تقطيع"}</strong></span>
        <span>💬 <strong>${isEn ? "24/7 VIP Gulf IPTV Support" : "دعم فني لاشتراك IPTV خليجي 24/7"}</strong></span>
      </div>
    </div>

    <div class="pricing-reviews">
      <h3 class="reviews-title">${reviewsHeading}</h3>
      <div class="reviews-grid">
        <div class="review-card">
          <div class="review-top">
            <div class="review-user">
              <img src="/img/avatar-1.webp" alt="${review1Name}" class="review-avatar-img" loading="lazy">
              <div>
                <strong>${review1Name}</strong>
                <span class="review-loc">${review1Loc}</span>
              </div>
            </div>
            <div class="review-stars">★★★★★</div>
          </div>
          <p class="review-msg">"${review1Text}"</p>
        </div>
        <div class="review-card">
          <div class="review-top">
            <div class="review-user">
              <img src="/img/avatar-2.webp" alt="${review2Name}" class="review-avatar-img" loading="lazy">
              <div>
                <strong>${review2Name}</strong>
                <span class="review-loc">${review2Loc}</span>
              </div>
            </div>
            <div class="review-stars">★★★★★</div>
          </div>
          <p class="review-msg">"${review2Text}"</p>
        </div>
        <div class="review-card">
          <div class="review-top">
            <div class="review-user">
              <img src="/img/avatar-3.webp" alt="${review3Name}" class="review-avatar-img" loading="lazy">
              <div>
                <strong>${review3Name}</strong>
                <span class="review-loc">${review3Loc}</span>
              </div>
            </div>
            <div class="review-stars">★★★★★</div>
          </div>
          <p class="review-msg">"${review3Text}"</p>
        </div>
      </div>
    </div>
  </section>`;
}

export function pricingSchemaLd(isEn = false) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": isEn ? "Gulf IPTV 4K Subscription Anti-Freeze" : "اشتراك IPTV الخليج 4K بدون تقطيع",
    "description": isEn
      ? "Top-rated 4K IPTV server in Saudi Arabia, UAE & Gulf with 18,000+ live channels, 50,000+ VOD and 99.9% anti-freeze guarantee."
      : "أفضل اشتراك سيرفر IPTV في السعودية ودول الخليج بجودة 4K و FHD مع أكثر من 18,000 قناة و 50,000 فيلم ومسلسل وتفعيل فوري وضمان تشغيل 99.9%.",
    "image": `${SITE.url}/img/provider-comparison.webp`,
    "sku": "GULF-IPTV-4K-SYSTEM",
    "mpn": "GULF-IPTV-2026",
    "brand": {
      "@type": "Brand",
      "name": isEn ? "Gulf IPTV" : SITE.name
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1840",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "15",
      "highPrice": "45",
      "offerCount": "4",
      "offers": PLANS.map((p) => ({
        "@type": "Offer",
        "name": isEn ? p.nameEn : p.name,
        "price": String(p.priceUsd),
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2027-12-31",
        "url": p.checkoutUrl || `${SITE.url}/iptv-prices/`
      }))
    }
  };
}
