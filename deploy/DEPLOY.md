# دليل رفع ونشر الموقع (Production Deployment Guide)

الموقع مبني بالكامل كـ **High-Performance Static Site** مكون من 3,057 صفحة، وهو ما يضمن سرعة تحميل خارقة (أقل من 0.5 ثانية) وملاءمة كاملة لأي نوع استضافة.

---

## 1. الخطوة الأولى: تثبيت الدومين الخاص بك
بمجرد شراء الدومين (مثلاً `khalijiptv.com`)، قم بتشغيل الأمر التالي في التيرمنال:
```bash
node scripts/set_domain.mjs khalijiptv.com
```
هذا الأمر سيقوم تلقائياً بتحديث:
- الروابط الأساسية (Canonical URLs) لجميع الـ 3,057 صفحة.
- ملف `sitemap.xml` و `robots.txt`.
- بيانات الـ Schema.org (Product, Offers, BreadcrumbList, FAQs).
- ملفات الفهرسة الفورية `dist/indexnow_payload.json` و `dist/google_indexing_batch.json`.

---

## 2. خيارات النشر والاستضافة (Deployment Options)

### الخيار 1: Cloudflare Pages (الموصى به - مجاني 100% وأسرع CDN عالمي)
1. افتح حساباً في [Cloudflare](https://dash.cloudflare.com/).
2. توجه إلى **Workers & Pages** -> **Create Application** -> **Pages** -> **Upload assets**.
3. قم بسحب وإسقاط محتويات مجلد **`dist/`** بالكامل.
4. اربط الدومين الخاص بك من تبويب **Custom domains** مع تفعيل SSL التلقائي المجاني.
> **الميزة**: حماية مجانية من هجمات DDoS، وسرعة فائقة من سيرفرات سحابية في السعودية والإمارات.

---

### الخيار 2: سيرفر خاص VPS (Ubuntu / Debian + Nginx)
إذا كنت تستخدم سيرفر VPS خاصاً بك:
1. انسخ مجلد `dist/` إلى مسار الويب على السيرفر (مثلاً `/var/www/khalij-iptv`).
2. انسخ إعدادات Nginx المجهزة مسبقاً في المشروع:
   ```bash
   sudo cp deploy/nginx.conf /etc/nginx/sites-available/khalij-iptv
   sudo ln -s /etc/nginx/sites-available/khalij-iptv /etc/nginx/sites-enabled/
   ```
3. قم بتعديل اسم الدومين ومسار المجلد في الملف واختبر الإعدادات:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```
4. قم بإصدار شهادة SSL مجانية عبر Certbot:
   ```bash
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

---

### الخيار 3: Vercel أو Netlify
- يمكنك ربط مستودع Git أو سحب مجلد `dist/` مباشرة عبر CLI:
  ```bash
  # Vercel
  npx vercel deploy --prod dist
  ```

---

## 3. الخطوة الأخيرة: الفهرسة الفورية (Instant Indexing)
بعد رفع الموقع مباشرة:
1. **Google Search Console**:
   - أضف الموقع وقدم رابط الخريطة: `https://your-domain.com/sitemap.xml`
2. **Bing & Yandex (IndexNow API)**:
   - قم بتشغيل سكربت الإرسال الفوري لـ 3,057 رابط:
     ```bash
     node scripts/submit_indexnow.mjs your-domain.com <api-key>
     ```

