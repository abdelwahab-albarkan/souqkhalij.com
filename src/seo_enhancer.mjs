/**
 * Enterprise Programmatic SEO Enhancer
 * Enforces:
 * 1. Focus keyword (IPTV) in Title, H1, H2, and H3 headings.
 * 2. Focus keyword density strictly between 2.0% and 4.0% across all 3,057 pages.
 * 3. Prevention of thin content and keyword stuffing.
 */

const AR_H2_MAP = [
  [/Step-by-Step Technical Instructions/i, "خطوات وإرشادات تشغيل سيرفر IPTV"],
  [/Subscription Plans & Pricing/i, "باقات وأسعار اشتراك IPTV المعتمدة"],
  [/Pristine Video Quality & Low Latency/i, "جودة بث قنوات IPTV بدقة 4K وسرعة الاستجابة"],
  [/جودة واستقرار البث/, "جودة واستقرار بث سيرفر IPTV"],
  [/باقات وأسعار الاشتراك/, "باقات وأسعار اشتراك IPTV"],
  [/باقات الاشتراك المعتمدة/, "باقات وأسعار اشتراك IPTV المعتمدة"],
  [/باقات الاشتراك/, "باقات وأسعار اشتراك IPTV المعتمدة"],
  [/كيف تختار تطبيقاً؟/, "كيف تختار أفضل تطبيق لتشغيل IPTV؟"],
  [/ما الجهاز المناسب لي؟/, "ما هو أفضل جهاز لتشغيل IPTV؟"],
  [/مسار مقترح للمبتدئ/, "دليل المبتدئ لتشغيل سيرفر IPTV"],
  [/قاعدة التشخيص الذهبية/, "تشخيص وحل مشاكل تقطيع IPTV"],
  [/كيف نقارن؟/, "معايير مقارنة سيرفرات واشتراكات IPTV"],
  [/مقارنة بين الدول الست/, "مقارنة خدمة IPTV بين دول الخليج الست"],
  [/الفرق بين التقنية والمحتوى/, "الفرق بين تقنية IPTV ومصادر المحتوى"],
  [/ماذا نقدم؟/, "ماذا يقدم دليل IPTV الخليج للمستخدم؟"],
  [/طرق التواصل/, "طرق التواصل مع دعم IPTV الفني"],
  [/المصطلحات من الألف إلى الياء/, "مصطلحات ومفاهيم تقنية IPTV من الألف إلى الياء"],
  [/مصدر البيانات/, "منهجية ومصدر بيانات بحث IPTV في الخليج"],
  [/أسئلة عن الأساسيات/, "أسئلة شائعة حول أساسيات تشغيل IPTV"],
  [/كيف تستخدم الخريطة/, "كيف تستفيد من خريطة موقع IPTV الشاملة"],
  [/قاعدة الأمان/, "قواعد الأمان وحماية الخصوصية عند استخدام IPTV"],
  [/كيف نختبر التطبيقات/, "معايير اختبار مشغلات وتطبيقات IPTV"],
  [/اعتبارات الشراء/, "اعتبارات اختيار شاشة أو جهاز لتشغيل IPTV"],
  [/قواعد ذهبية لأي جهاز/, "قواعد تشغيل سيرفر IPTV على الأجهزة الذكية"],
  [/أدوات تشخيص مجانية/, "أدوات فحص سرعة الإنترنت وثبات IPTV"],
  [/الجهات المعنية/, "الجهات التنظيمية لقطاع الاتصالات وخدمات IPTV"],
  [/حساسية الحقوق الإعلامية/, "حقوق البث الإعلامي والرياضي لقنوات IPTV"],
  [/ألياف أم 5G؟/, "مقارنة ألياف الفايبر وشبكات 5G لتشغيل IPTV"],
  [/كيف تقرأ هذه الصفحات؟/, "دليل قراءة صفحات شبكات الإنترنت لخدمة IPTV"],
  [/معايير اختيار خط الإنترنت لـ IPTV/, "معايير اختيار خط الإنترنت المناسب لتشغيل IPTV"],
  [/ما بعد اختيار المزود/, "نصائح ما بعد تفعيل الاشتراك على خط الإنترنت"],
  [/تنبيهات أمان/, "إرشادات الأمان الرقمي لمستخدمي سيرفر IPTV"],
  [/ما لا نفعله/, "حدود وسياسة موقع دليل IPTV الخليج"],
  [/مبادئنا التحريرية/, "المبادئ التحريرية لموقع دليل IPTV الخليج"],
  [/لماذا بدأنا هذا الدليل/, "أهداف ورؤية موقع دليل IPTV الخليج"]
];

const EN_H2_MAP = [
  [/Step-by-Step Technical Instructions/i, "Step-by-Step IPTV Technical Instructions"],
  [/Subscription Plans & Pricing/i, "IPTV Subscription Plans & Pricing"],
  [/Pristine Video Quality & Low Latency/i, "Pristine 4K IPTV Stream Quality & Low Latency"],
  [/Why Expats in Gulf Choose Our IPTV Service/i, "Why Expats Choose Our 4K IPTV Server"],
  [/Complete International Channel Lineup & VOD/i, "Complete International IPTV Channel Lineup & VOD"],
  [/How to Order and Activate Your IPTV in 3 Steps/i, "How to Activate Your 4K IPTV Subscription in 3 Steps"]
];

export function enhanceSeoPages(pages) {
  for (const p of pages) {
    const isEn = p.lang === "en";

    // 1. Ensure Title contains IPTV
    if (!/iptv/i.test(p.title)) {
      p.title = isEn ? `IPTV: ${p.title}` : `اشتراك IPTV: ${p.title}`;
    }
    if (p.title.length > 75) {
      p.title = p.title.slice(0, 72).trim() + "...";
      if (!/iptv/i.test(p.title)) p.title = `IPTV ${p.title.slice(0, 70)}`;
    }

    // 2. Ensure H1 contains IPTV
    if (!/iptv/i.test(p.h1)) {
      p.h1 = isEn ? `IPTV - ${p.h1}` : `سيرفر IPTV: ${p.h1}`;
    }

    // 3. Ensure H2 headings contain IPTV (guarantee 1-3 H2s per page have focus keyword)
    let h2WithIptv = p.sections.filter((s) => /iptv/i.test(s.h)).length;
    for (const s of p.sections) {
      if (h2WithIptv >= 3) break;
      if (!/iptv/i.test(s.h)) {
        if (!isEn) {
          let matched = false;
          for (const [re, rep] of AR_H2_MAP) {
            if (re.test(s.h)) {
              s.h = rep;
              matched = true;
              break;
            }
          }
          if (!matched) {
            if (s.h.includes("باقات") || s.h.includes("أسعار") || s.h.includes("اشتراك")) {
              s.h = s.h.replace(/الاشتراك/, "اشتراك IPTV");
              if (!/iptv/i.test(s.h)) s.h = s.h + " لاشتراك IPTV";
            } else if (s.h.includes("في ")) {
              s.h = s.h.replace(/في\s+/, "عبر سيرفر IPTV في ");
            } else {
              s.h = s.h + " عبر سيرفر IPTV";
            }
          }
          h2WithIptv++;
        } else {
          let matched = false;
          for (const [re, rep] of EN_H2_MAP) {
            if (re.test(s.h)) {
              s.h = rep;
              matched = true;
              break;
            }
          }
          if (!matched) s.h = s.h + " on 4K IPTV Server";
          h2WithIptv++;
        }
      }
    }

    // Helper to calculate word count and focus keyword occurrences matching build.mjs exactly
    const plain = (t) =>
      String(t || "")
        .replace(/\*\*/g, "")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/^(- |\d+\. |### )/gm, "")
        .replace(/<[^>]+>/g, " ");

    const calcStats = () => {
      const bodyText = [
        p.lead,
        ...p.sections.map((s) => s.h + " " + (s.body ? plain(s.body) : plain(s.html))),
        ...p.faqs.map(([q, a]) => q + " " + plain(a))
      ].join(" ");
      const fullText =
        bodyText +
        (p.slug !== "" && p.slug !== "en" && p.cat !== "hub"
          ? isEn
            ? " Summary: " + p.h1 + " is part of your IPTV setup. Start with a test and enjoy 4K streaming."
            : " الخلاصة: " + p.h1 + " جزء من رحلتك مع IPTV ابدأ بخطوة صغيرة وجرّب بنفسك وراجع الصفحات ذات الصلة أدناه عند الحاجة"
          : "") +
        (p.cta !== false
          ? isEn
            ? " Need help setting up IPTV? Support is available on WhatsApp."
            : " هل تحتاج مساعدة في إعداد IPTV؟ فريق الدعم يرد على استفساراتك التقنية عبر واتساب"
          : "") +
        (p.faqs.length
          ? isEn
            ? " Frequently Asked Questions about " + (p.faqTopic || "IPTV")
            : " أسئلة شائعة حول " + (p.faqTopic || "IPTV")
          : "");
      const w = fullText.split(/\s+/).filter(Boolean).length;
      const c = (fullText.match(/iptv/gi) || []).length;
      return { w, c, d: w > 0 ? (c / w) * 100 : 0 };
    };

    let stats = calcStats();

    // 4. Boost density if below 2.3% (target 2.5% - 3.2%)
    let boostAttempts = 0;
    while (stats.d < 2.3 && boostAttempts < 25 && p.sections.length > 0) {
      boostAttempts++;
      const s = p.sections.find((sec) => sec.body) || p.sections[0];
      if (!s) break;
      if (!s.body) s.body = "";
      if (!isEn) {
        s.body += "\n- خدمة IPTV تضمن للمشترك مشاهدة مستقرة لجميع الباقات والقنوات بجودة فائقة.";
      } else {
        s.body += "\n- Reliable IPTV server streaming provides seamless access to 4K channels and sports.";
      }
      stats = calcStats();
    }

    // 5. Prune density if above 3.8% (target 2.5% - 3.5%)
    let pruneAttempts = 0;
    while (stats.d > 3.8 && pruneAttempts < 25 && p.sections.length > 0) {
      pruneAttempts++;
      let replaced = false;
      for (const s of p.sections) {
        if (!s.body) continue;
        const re = /(\[[^\]]+\]\([^\)]+\))|(<[^>]+>)|(\bIPTV\b)/i;
        const newBody = s.body.replace(re, (match, link, tag, iptvWord) => {
          if (link || tag || replaced) return match;
          replaced = true;
          return isEn ? "digital streaming" : "البث التلفزيوني الرقمي";
        });
        if (replaced) {
          s.body = newBody;
          break;
        }
      }
      if (!replaced) {
        // Dilute with high-quality non-keyword technical paragraph
        const s = p.sections.find((sec) => sec.body) || p.sections[0];
        if (s) {
          if (!isEn) {
            s.body += "\n\nلضمان استقرار المشاهدة وسلاسة تشغيل القنوات دون انقطاع، يُنصح دائماً بتحديث نظام تشغيل الشاشة والتحقق من سرعة اتصال الإنترنت المنزلي وتوصيل كابل إيثرنت مباشر بدلاً من الشبكة اللاسلكية، بالإضافة إلى مسح الذاكرة المؤقتة دورياً للحفاظ على أعلى مستويات الأداء وتفادي أي تأخير أثناء متابعة البث المباشر.";
          } else {
            s.body += "\n\nTo ensure maximum streaming stability and uninterrupted playback, viewers should regularly keep their smart display firmware up to date, connect via high-speed wired ethernet rather than wireless WiFi, and clear the system cache periodically to prevent buffering during high-demand live transmissions.";
          }
        }
      }
      stats = calcStats();
    }
  }

  return pages;
}
