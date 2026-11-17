# سوق الخليج - دليل واشتراك IPTV 4K (3,057 صفحة)

منصة رقمية رائدة موجهة للجمهور والمقيمين في دول مجلس التعاون الخليجي الست (السعودية، الإمارات، قطر، الكويت، البحرين، عُمان). تم بناء الموقع بالكامل وفق أعلى معايير **Technical SEO** والـ **Static Site Generation (SSG)** لتحقيق سرعة تحميل فائقة وتصدر نتائج محركات البحث لآلاف الكلمات المفتاحية.

* **الدومين الرسمي:** `https://souqkhalij.com`
* **إجمالي الصفحات:** 3,057 صفحة مفهرسة ومجهزة.
* **الباقات المعتمدة:** 15$ (شهر)، 20$ (3 أشهر)، 30$ (6 أشهر)، 45$ (سنة كاملة).

---

## 🚀 التشغيل والبناء المحلي

```bash
# بناء الموقع بالكامل لـ souqkhalij.com والتحقق من الجودة
node build.mjs

# تشغيل الفحص الآلي الشامل لـ Technical SEO (56 معيار جودة)
node scripts/audit_technical_seo.mjs

# معاينة الموقع محلياً على البورت 3025
node serve.mjs 3025
# افتح المتصفح على: http://localhost:3025/
```

---

## 🛠️ أدوات إدارة الموقع والـ SEO

| الأمر | الوظيفة |
| :--- | :--- |
| `node scripts/audit_technical_seo.mjs` | فحص آلي لـ 56 معياراً تقنياً (Sitemaps, 404s, Canonicals, OpenGraph, Schema). |
| `node scripts/set_domain.mjs <domain>` | تحديث الدومين وإعادة بناء الـ 3,057 صفحة والـ Sitemaps بضغطة زر واحدة. |
| `node scripts/seo_ping.mjs` | توليد حزم الفهرسة الفورية `dist/indexnow_payload.json` و `dist/google_indexing_batch.json`. |
| `node scripts/submit_indexnow.mjs <host> <key>` | إرسال كافة الروابط مباشرة لشبكة IndexNow (Bing, Yandex). |

---

## 📦 خطة النشر والاستضافة (Production Deployment)

راجع الدليل التفصيلي في [`deploy/DEPLOY.md`](deploy/DEPLOY.md):
1. **Cloudflare Pages (موصى به - مجاني 100%):** سحب وإسقاط مجلد `dist/` مباشرة، مع CDN محلي في السعودية والإمارات.
2. **سيرفر VPS خاص (Nginx):** إعدادات Nginx جاهزة ومحسنة في [`deploy/nginx.conf`](deploy/nginx.conf) مع Gzip/Brotli و Security Headers.
3. **Vercel / Netlify:** يدعم الرفع المباشر عبر السحب أو الـ CLI.

---

## 🎯 بنية الـ SEO المعتمدة في الموقع:
1. **Sitemap Index:** ملف `sitemap.xml` يضم 10 خرائط فرعية مصنفة حسب الصوامع الدلالية (المدن، الأحياء، الأجهزة، التطبيقات، الرياضة، الإنترنت).
2. **Focus Keyword:** كلمة **IPTV** ومصطلحات البحث المحلية مضمنة في 100% من عناوين `<title>`, `<h1>`, `<h2>` وبكثافة مثالية **3.43%**.
3. **Structured Data:** بيانات `Product`, `AggregateOffer`, `BreadcrumbList`, `FAQPage`, `Article` متوافقة مع متطلبات Google Rich Results.
4. **روابط الدفع المباشرة:** أزرار الشراء مرتبطة بروابط TODEDEV المعتمدة مع خيار التحويل الفوري إلى واتساب.
