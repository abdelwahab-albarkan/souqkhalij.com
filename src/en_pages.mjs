import { renderPricingSection } from "./pricing.mjs";
import { waLink } from "./config.mjs";

const mk = (o) => ({ faqs: [], related: [], sections: [], lang: "en", ...o });

const compareTableEnHtml = `
<table class="compare-table">
  <thead>
    <tr>
      <th>Streaming Feature</th>
      <th>Generic & Free IPTV ❌</th>
      <th>Gulf VIP IPTV Server (Our Service) 🏆</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Match-Day Stability</strong></td>
      <td class="bad">Freezes, buffering, and server crashes during big games</td>
      <td class="good">99.9% uptime with Anti-Freeze 9.0 & multi-edge CDN nodes</td>
    </tr>
    <tr>
      <td><strong>Picture Quality & Frame Rate</strong></td>
      <td class="bad">Compressed 720p streams at low 25fps frame rate</td>
      <td class="good">Pristine 4K UHD & 1080p FHD at smooth 60fps</td>
    </tr>
    <tr>
      <td><strong>Broadcast Delay</strong></td>
      <td class="bad">60 to 90 seconds delay (spoilers on social media)</td>
      <td class="good">Ultra-low latency edge delivery (3 to 5 seconds)</td>
    </tr>
    <tr>
      <td><strong>Channel & VOD Selection</strong></td>
      <td class="bad">Limited channels, broken links, no English subtitles</td>
      <td class="good">18,000+ live channels & 50,000+ daily updated movies/series</td>
    </tr>
    <tr>
      <td><strong>Gulf ISP Compatibility</strong></td>
      <td class="bad">Requires VPN and gets throttled by local telecom operators</td>
      <td class="good">100% direct streaming without VPN on du, e&, stc, & Ooredoo</td>
    </tr>
    <tr>
      <td><strong>Video Compression Codec</strong></td>
      <td class="bad">Outdated H.264 hogging bandwidth</td>
      <td class="good">Modern HEVC / H.265 saving 50% data while delivering 4K</td>
    </tr>
    <tr>
      <td><strong>Customer Support & Delivery</strong></td>
      <td class="bad">No support or automated bots with days of delay</td>
      <td class="good">24/7 dedicated human support & instant 5-min WhatsApp delivery</td>
    </tr>
    <tr>
      <td><strong>Trial & Money-Back Guarantee</strong></td>
      <td class="bad">No trial, no refund guarantee</td>
      <td class="good">24-hour free trial & 7-day money-back satisfaction guarantee</td>
    </tr>
  </tbody>
</table>`;

const activationStepsEnHtml = `
<div class="steps-grid">
  <div class="step-card">
    <span class="step-num">1</span>
    <h3>Choose Plan or Request Free Trial</h3>
    <p>Select your preferred subscription tier (1 Month $15, 3 Months $20, 6 Months $30, or 12 Months $45 VIP) and message our support team on WhatsApp to request your free 24-hour test.</p>
  </div>
  <div class="step-card">
    <span class="step-num">2</span>
    <h3>Install Player App on Your Device</h3>
    <p>Download your preferred player on your smart TV, streaming box, or phone (such as TiviMate, IPTV Smarters Pro, or IBO Player). We provide one-click download guides for all major platforms.</p>
  </div>
  <div class="step-card">
    <span class="step-num">3</span>
    <h3>Login & Start Streaming Instantly</h3>
    <p>Receive your personalized Xtream Codes credentials (Server URL, Username, and Password) or M3U playlist link via WhatsApp within 5 minutes. Enter the details and enjoy unlimited 4K entertainment.</p>
  </div>
</div>`;

const sportsGalleryEnHtml = `
<div class="visual-gallery">
  <div class="gallery-card">
    <div class="gallery-media"><img src="/img/premier-league-soccer.webp" alt="Premier League &amp; Champions League Football" loading="lazy"></div>
    <div class="gallery-overlay">
      <span class="gallery-badge">Premier League &amp; Champions League</span>
      <h3>Live Football in Ultra 4K 60fps</h3>
      <p>Stream all Premier League and UEFA matches with English commentary and crystal-clear motion.</p>
    </div>
  </div>
  <div class="gallery-card">
    <div class="gallery-media"><img src="/img/home-cinema.webp" alt="4K Home Cinema VOD" loading="lazy"></div>
    <div class="gallery-overlay">
      <span class="gallery-badge">50,000+ Movies &amp; Series</span>
      <h3>4K HDR Home Cinema</h3>
      <p>Top box office cinema, Netflix, and HBO hits with Dolby Atmos surround audio and English subtitles.</p>
    </div>
  </div>
  <div class="gallery-card">
    <div class="gallery-media"><img src="/img/formula-1-aus.webp" alt="Formula 1 Grand Prix" loading="lazy"></div>
    <div class="gallery-overlay">
      <span class="gallery-badge">Motorsport &amp; Speed</span>
      <h3>Formula 1 Grand Prix Live</h3>
      <p>Watch Bahrain, Saudi Arabia, Abu Dhabi, and worldwide GPs with Sky Sports F1 feed in 4K.</p>
    </div>
  </div>
  <div class="gallery-card">
    <div class="gallery-media"><img src="/img/ufc-boxing-main-event.webp" alt="UFC &amp; Boxing Events" loading="lazy"></div>
    <div class="gallery-overlay">
      <span class="gallery-badge">UFC &amp; Championship Boxing</span>
      <h3>Pay-Per-View Combat Sports</h3>
      <p>Stream live UFC fight nights, Riyadh Season mega-fights, and WWE PPV events with zero buffering.</p>
    </div>
  </div>
  <div class="gallery-card">
    <div class="gallery-media"><img src="/img/anti-freeze-tech.webp" alt="Anti-Freeze 9.0 Technology" loading="lazy"></div>
    <div class="gallery-overlay">
      <span class="gallery-badge">Smart Edge Infrastructure</span>
      <h3>Anti-Freeze 9.0 Servers</h3>
      <p>Distributed CDN clusters in Dubai and Riyadh guarantee 99.9% uptime during peak tournament finals.</p>
    </div>
  </div>
  <div class="gallery-card">
    <div class="gallery-media"><img src="/img/vod-dashboard.webp" alt="VOD Entertainment Interface" loading="lazy"></div>
    <div class="gallery-overlay">
      <span class="gallery-badge">Daily Catalog Updates</span>
      <h3>Interactive VOD Catalog</h3>
      <p>Fast category browsing for Hollywood cinema, British series, kids entertainment, and sports replays.</p>
    </div>
  </div>
</div>`;

const devicesShowcaseEnHtml = `
<div class="devices-showcase">
  <div class="device-card">
    <div class="device-img-wrap"><img src="/img/samsungsmarttv.webp" alt="Samsung Smart TV" loading="lazy"></div>
    <h4>Samsung Smart TV</h4>
    <p>Install IBO Player or IPTV Smarters Pro directly from Tizen App Store in minutes.</p>
    <span class="device-tag">Native 4K</span>
  </div>
  <div class="device-card">
    <div class="device-img-wrap"><img src="/img/lg-tv-webos.webp" alt="LG Smart TV" loading="lazy"></div>
    <h4>LG webOS TV</h4>
    <p>Flawless 60fps playback on LG OLED and NanoCell smart televisions.</p>
    <span class="device-tag">60fps Smooth</span>
  </div>
  <div class="device-card">
    <div class="device-img-wrap"><img src="/img/sony-tv-google-tv.webp" alt="Sony Google TV" loading="lazy"></div>
    <h4>Sony Google TV</h4>
    <p>Best paired with TiviMate player featuring complete EPG guide and Dolby sound.</p>
    <span class="device-tag">Dolby Atmos</span>
  </div>
  <div class="device-card">
    <div class="device-img-wrap"><img src="/img/firestick.webp" alt="Amazon Firestick" loading="lazy"></div>
    <h4>Amazon Fire TV Stick</h4>
    <p>The top choice across Gulf expats: ultra-fast navigation, zero lag, and portable setup.</p>
    <span class="device-tag">Most Popular 🏆</span>
  </div>
  <div class="device-card">
    <div class="device-img-wrap"><img src="/img/appletv.webp" alt="Apple TV 4K" loading="lazy"></div>
    <h4>Apple TV 4K</h4>
    <p>Cinema-grade color processing and tvOS app support with Siri remote control.</p>
    <span class="device-tag">tvOS / HDR10</span>
  </div>
  <div class="device-card">
    <div class="device-img-wrap"><img src="/img/androidtvbox.webp" alt="Xiaomi Android TV" loading="lazy"></div>
    <h4>Xiaomi &amp; Android Box</h4>
    <p>Smooth 4K performance on Mi Box S and Mi TV Sticks with quick sideloading.</p>
    <span class="device-tag">Fast Setup</span>
  </div>
  <div class="device-card">
    <div class="device-img-wrap"><img src="/img/iphone17.webp" alt="iPhone iPad" loading="lazy"></div>
    <h4>iPhone &amp; iPad</h4>
    <p>Stream anywhere on iOS devices with Smarters Player Lite and AirPlay support.</p>
    <span class="device-tag">iOS / iPadOS</span>
  </div>
  <div class="device-card">
    <div class="device-img-wrap"><img src="/img/windowspc.webp" alt="Windows PC Mac" loading="lazy"></div>
    <h4>Windows &amp; Mac</h4>
    <p>Direct streaming on desktop and laptops using VLC or dedicated Web Player portals.</p>
    <span class="device-tag">PC / Mac</span>
  </div>
</div>`;

const appsShowcaseEnHtml = `
<div class="apps-showcase">
  <div class="app-card">
    <img src="/img/tivimate-app-logo.webp" alt="TiviMate IPTV Player" class="app-icon" loading="lazy">
    <div class="app-info">
      <h4>TiviMate Player</h4>
      <p>The world's #1 player for Android TV &amp; Firestick with DVR and EPG guides.</p>
      <span class="app-badge-rec">Recommended ⭐</span>
    </div>
  </div>
  <div class="app-card">
    <img src="/img/ibo-player-pro-app-logo.webp" alt="IBO Player Pro" class="app-icon" loading="lazy">
    <div class="app-info">
      <h4>IBO Player Pro</h4>
      <p>Fast, lightweight, and responsive player for Samsung and LG Smart TVs.</p>
      <span class="app-badge">Ultra-Fast ⚡️</span>
    </div>
  </div>
  <div class="app-card">
    <img src="/img/smart-iptv-app-logo.webp" alt="Smart IPTV" class="app-icon" loading="lazy">
    <div class="app-info">
      <h4>Smart IPTV (SIPTV)</h4>
      <p>Classic smart television player with quick activation via MAC address portal.</p>
      <span class="app-badge">Smart TV</span>
    </div>
  </div>
  <div class="app-card">
    <img src="/img/smart-stb-app-logo.webp" alt="Smart STB" class="app-icon" loading="lazy">
    <div class="app-info">
      <h4>Smart STB</h4>
      <p>Emulates traditional set-top box portals for effortless family channel zapping.</p>
      <span class="app-badge">Stalker Portal</span>
    </div>
  </div>
</div>`;

export function englishPages() {
  const pages = [];

  // 1. English Homepage (/en/)
  pages.push(mk({
    slug: "en", cat: "home", parent: null, crumb: "Home", cta: true, arSlug: "",
    title: "Best IPTV Subscription in UAE & Gulf 2026: 4K Anti-Freeze Server",
    h1: "Best IPTV Subscription in UAE, Saudi Arabia & Gulf 2026",
    desc: "Premium IPTV subscription for UAE, Saudi Arabia, Qatar & Gulf: 18,000+ 4K channels, Premier League, Champions League, VOD movies, and instant activation.",
    lead: "Welcome to the premier IPTV subscription service in the Arabian Gulf. Enjoy over 18,000 live channels in true 4K and FHD, 50,000+ movies and TV series, and cutting-edge Anti-Freeze technology across all your smart devices.",
    kw2: "best iptv subscription",
    sections: [
      {
        h: "Subscription Packages & Flexible Pricing",
        html: renderPricingSection("en")
      },
      {
        h: "All Major Sports Leagues & Live Matches in 4K",
        body: "Watch every thrilling moment of the English Premier League, UEFA Champions League, La Liga, Serie A, Formula 1, NBA, and UFC with our dedicated high-speed sports streams.\n- Complete beIN Sports, SSC Sports, AD Sports, Sky Sports, TNT Sports, and DAZN channels.\n- Multi-commentary audio feeds in Arabic, English, French, and Spanish.\n- Ultra-low latency edge servers ensuring you see goals in real time without lag or delay.\n- Adaptive streaming bitrate with automatic fallback from 4K to Full HD if your connection fluctuates."
      },
      {
        h: "Live Sports & 4K Cinema Showcase",
        html: sportsGalleryEnHtml
      },
      {
        h: "Dedicated Channels for Gulf Expats (UK, US, European, Indian & Filipino)",
        body: "We understand that expats in Dubai, Abu Dhabi, Riyadh, and Doha need their home television without complications:\n- **British & Irish TV**: BBC One, BBC Two, ITV 1-4, Channel 4, Sky Sports Main Event, Sky Sports Premier League, and TNT Sports in full 4K.\n- **American TV**: NBC, CBS, ABC, FOX, HBO, ESPN, and CNN with live US time-zone broadcasts.\n- **Indian & South Asian TV**: Over 2,000 channels including Star Sports, Sony Ten, Zee Cinema, Colors, Asianet, and latest Bollywood movies on demand.\n- **Filipino TV**: GMA, ABS-CBN, TV5, and PBA sports live.\n- **European TV**: French, German, Italian, and Spanish bouquets in high resolution."
      },
      {
        h: "Over 50,000 Movies & TV Series on Demand (VOD)",
        body: "Never run out of entertainment for you and your family. Our regularly updated video-on-demand library brings the best international and regional productions directly to your living room.\n- Latest Hollywood blockbusters and European cinema in 4K HDR and Dolby Audio.\n- Full libraries from Netflix, Shahid VIP, TOD, Amazon Prime Video, Apple TV+, and OSN.\n- Dedicated sections for kids: Disney, Cartoon Network, Nickelodeon, and family-safe content.\n- Accurate multi-language subtitles and EPG electronic program guide."
      },
      {
        h: "Seamless Compatibility Across All Your Smart Devices",
        body: "Our IPTV service is engineered to work flawlessly on every platform and modern television:\n- Amazon Fire Stick, Fire TV 4K, and Fire TV Cube.\n- Samsung Smart TVs (Tizen OS) via IBO Player, Smart IPTV, or Flix IPTV.\n- LG Smart TVs (webOS) with one-click portal configuration.\n- Apple TV, iPhone, and iPad with Smarters Player Lite or GSE Smart IPTV.\n- Android TV, Google TV, and Nvidia Shield using TiviMate or IPTV Smarters Pro.\n- Windows PC and Mac via VLC Media Player or native IPTV applications."
      },
      {
        h: "Supported Hardware & Smart Screens Gallery",
        html: devicesShowcaseEnHtml
      },
      {
        h: "Recommended IPTV Player Applications for Gulf Users",
        html: appsShowcaseEnHtml
      },
      {
        h: "Gulf ISP Optimization & Zero-Buffering Anti-Freeze Technology",
        body: "1. **Direct Connection to GCC Telecoms**: Fully optimized for du home fiber and e& (Etisalat) in UAE, stc Baity fiber and Mobily in Saudi Arabia, and Ooredoo in Qatar.\n2. **No VPN Required**: Direct high-speed streaming through secure SSL ports without third-party VPN apps slowing down your speed.\n3. **Modern HEVC / H.265 Streaming**: Reduces data usage by 50% while maintaining crisp 4K visual fidelity, running seamlessly even on moderate 15 to 20 Mbps home internet connections.\n4. **Failover Cloud Clusters**: Automatic server redundancy guarantees zero downtime during crucial championship fixtures."
      },
      {
        h: "Detailed Comparison: Generic IPTV vs Our Gulf VIP IPTV Server",
        html: compareTableEnHtml
      },
      {
        h: "How to Subscribe & Activate in 3 Easy Steps",
        html: activationStepsEnHtml
      },
      {
        h: "Why Gulf Residents Trust Our IPTV Server",
        body: "1. 99.9% Server Uptime: Robust server clusters distributed across GCC data centers to handle huge match-day traffic.\n2. Anti-Freeze 9.0 Technology: Intelligent buffering buffers prevent the annoying freezes common on cheap providers.\n3. Instant WhatsApp Delivery: Receive your login details (Xtream Codes & M3U playlist) within 5 minutes of ordering.\n4. Golden 7-Day Guarantee: Risk-free subscription with helpful customer assistance around the clock."
      }
    ],
    faqs: [
      ["What internet speed do I need for 4K IPTV in the Gulf?", "We recommend a stable internet connection of at least 15 Mbps for Full HD and 25-30 Mbps for pristine 4K streaming. Our servers adapt dynamically to ensure smooth playback."],
      ["Can I test the IPTV service before making a payment?", "Yes! We provide a full 24-hour free trial with complete access to all sports and movie channels. Message our support team on WhatsApp to activate your test immediately."],
      ["Which payment methods are accepted in UAE and Saudi Arabia?", "We support Apple Pay, Mada (Saudi Arabia), STC Pay, Credit/Debit cards (Visa/Mastercard), PayPal, Bank Transfer, and USDT cryptocurrency."],
      ["Do I need a VPN to use this IPTV service in Dubai or Saudi Arabia?", "No, you do not need a VPN. Our servers connect directly to local UAE and Saudi networks through secure encrypted protocols with zero ISP throttling."],
      ["How many devices can I stream on simultaneously?", "Each standard subscription supports 1 active screen at a time. Multi-room and multi-screen packages for families are also available upon request via WhatsApp."],
      ["What is the difference between Xtream Codes API and M3U playlists?", "Xtream Codes API consists of a server URL, username, and password. It is the easiest to set up and loads faster with organized VOD categories and EPG. M3U is a direct stream URL compatible with all media players."],
      ["How frequently is the VOD movie and series catalog updated?", "Our VOD catalog is updated daily with new cinema releases, trending streaming platform episodes, and multi-language subtitles."]
    ],
    faqTopic: "Gulf IPTV Subscription"
  }));

  // 2. English Pricing Page (/en/iptv-prices/)
  pages.push(mk({
    slug: "en/iptv-prices", cat: "core", parent: "en", crumb: "Pricing", cta: true, arSlug: "iptv-prices",
    title: "IPTV Subscription Pricing & Plans in Gulf 2026: From $15",
    h1: "IPTV Subscription Pricing & Plans in Gulf 2026",
    desc: "Compare IPTV subscription prices in Gulf: 1 month ($15), 3 months ($20), 6 months ($30), 12 months ($45). Free 24h trial, 4K streams, instant setup.",
    lead: "Explore the most competitive and transparent IPTV subscription rates across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman. Premium 4K entertainment starting from just $15 with zero commitment.",
    kw2: "iptv price",
    sections: [
      {
        h: "Choose Your IPTV Subscription Package",
        html: renderPricingSection("en")
      },
      {
        h: "Comprehensive Plan Breakdown & Features",
        body: "- **1 Month ($15)**: Ideal for testing our server over a full monthly cycle, watching a tournament, or short-term stays.\n- **3 Months ($20)**: Tremendous value at only $6.60/month. Perfect for covering a major sports season with 55% savings.\n- **6 Months ($30)**: Semi-annual plan at just $5.00/month with VIP backup servers and priority match routing.\n- **12 Months ($45)** [Most Popular]: The unbeatable deal at only $3.75/month (Save 75%). Includes full VIP benefits, 4K channels, continuous updates, and 24/7 dedicated support."
      },
      {
        h: "What is Included in Every IPTV Subscription",
        body: "Regardless of the plan you choose, you receive our top-tier server tier without compromises:\n- Full access to 18,000+ live television channels worldwide.\n- Complete library of 50,000+ VOD films and TV episodes with English and Arabic subtitles.\n- Xtream Codes API login credentials and optional M3U playlist link.\n- EPG Electronic TV Guide support for live programming schedules.\n- Fast channel switching (< 0.5 seconds on fiber and 5G connections).\n- 24/7 technical assistance for setup on your preferred application."
      },
      {
        h: "How to Order and Activate Your IPTV in 3 Steps",
        body: "1. Select your preferred subscription plan from the pricing grid above.\n2. Click the WhatsApp button to connect directly with our friendly activation desk.\n3. Receive your credentials instantly, enter them into your IPTV player app, and start enjoying 4K television."
      }
    ],
    faqs: [
      ["Are there any hidden fees or automatic renewals?", "No. All our IPTV plans are one-time prepaid payments. You will never be charged automatically unless you choose to renew."],
      ["What happens if I change my TV or device later?", "Your IPTV subscription login details can be easily transferred to another device whenever you upgrade. Just log out of the previous device first."],
      ["Do you offer technical help setting up the application?", "Yes, our WhatsApp support team guides you step-by-step through installing and configuring apps like TiviMate, Smarters Pro, or IBO Player."]
    ],
    faqTopic: "IPTV Pricing and Packages"
  }));

  // 3. English UAE Page (/en/iptv-uae/)
  pages.push(mk({
    slug: "en/iptv-uae", cat: "country", parent: "en", crumb: "UAE IPTV", cta: true, arSlug: "iptv-uae",
    title: "Best IPTV in UAE & Dubai: 4K Channels & Sports for Expats 2026",
    h1: "Best IPTV Subscription in UAE & Dubai for Expats 2026",
    desc: "Discover the best IPTV subscription in UAE & Dubai: 18,000+ UK, US, Arabic, Indian channels, works smoothly on du and e& internet with zero buffering.",
    lead: "Looking for a reliable IPTV service in Dubai, Abu Dhabi, or Sharjah? Enjoy premium international television on du and e& fiber connections with zero lag, crystal-clear 4K sports, and instant setup.",
    kw2: "iptv uae",
    sections: [
      {
        h: "Top-Rated IPTV Service in UAE & Dubai",
        body: "The UAE has one of the world's most vibrant expatriate communities. Whether you are from the UK, Europe, India, the Philippines, or North America, our IPTV subscription keeps you connected to your home country's live broadcasts and news.\n- Complete UK & US channels: BBC, ITV, Sky Sports, BT Sport, HBO, Discovery, and ESPN.\n- Extensive Indian, Pakistani & Asian packages in Hindi, Urdu, Tamil, Malayalam, and Bengali.\n- Arabic entertainment and sports: beIN Sports, SSC, Shahid VIP, and OSN.\n- Dedicated CDN servers optimized specifically for e& (Etisalat) and du home fiber networks."
      },
      {
        h: "UAE IPTV Pricing & Exclusive Offers",
        html: renderPricingSection("en", "uae")
      },
      {
        h: "Optimized for du and e& Home Internet",
        body: "Home internet in Dubai and the UAE is among the fastest globally, yet some streaming providers suffer from evening throttling or ISP routing issues. Our infrastructure uses modern encrypted streaming protocols that bypass congestion and guarantee buffer-free viewing during prime-time evening hours."
      },
      {
        h: "Best Devices for UAE Homes and Apartments",
        body: "- **Amazon Fire TV Stick 4K Max**: Highly recommended for ease of use, portable, and runs TiviMate effortlessly.\n- **Apple TV 4K**: Superb image upscaling and fluid navigation with Smarters Player Lite or iPlayTV.\n- **Samsung & LG Smart TVs**: Download IBO Player or Flix IPTV directly from the regional App Store.\n- **Android TV Boxes**: Excellent versatility for expatriates with expandable storage."
      }
    ],
    faqs: [
      ["Does the IPTV subscription work on du and e& home WiFi?", "Yes, our service is fully compatible with both du and e& (Etisalat) fiber optic connections and 5G home routers."],
      ["Can I pay using UAE credit cards or Apple Pay?", "Yes, we accept Apple Pay, Visa, Mastercard, and international payment options with instant activation in UAE Dirhams (AED)."],
      ["Can I watch Premier League 3pm kick-offs in Dubai?", "Yes! We broadcast all Saturday 3pm Premier League fixtures with live English commentary in 4K and Full HD."]
    ],
    faqTopic: "IPTV UAE Dubai"
  }));

  // 4. English Saudi Arabia Page (/en/iptv-saudi-arabia/)
  pages.push(mk({
    slug: "en/iptv-saudi-arabia", cat: "country", parent: "en", crumb: "Saudi IPTV", cta: true, arSlug: "iptv-saudi-arabia",
    title: "Best IPTV in Saudi Arabia: 4K Sports & Global Channels 2026",
    h1: "Best IPTV Subscription in Saudi Arabia: Riyadh, Jeddah & Dammam",
    desc: "Top IPTV subscription in Saudi Arabia: Saudi Pro League, beIN Sports, 4K streams on stc, Mobily and Zain fiber & 5G. Fast activation via WhatsApp.",
    lead: "Experience the ultimate IPTV subscription across Saudi Arabia. Watch Roshn Saudi League, European football, and international movies on stc, Mobily, and Zain fiber with unmatched stability.",
    kw2: "iptv saudi arabia",
    sections: [
      {
        h: "Premier IPTV Streaming in the Kingdom of Saudi Arabia",
        body: "Saudi Arabia represents the largest and most passionate sports market in the region. Our IPTV infrastructure delivers the highest-rated live streams for football fans in Riyadh, Jeddah, Dammam, and across the Kingdom.\n- Full coverage of the Roshn Saudi League on SSC Sports channels in pristine 4K.\n- All European leagues: Premier League, UEFA Champions League, and AFC Champions League.\n- Optimized for Saudi telecommunication giants: stc, Mobily, and Zain 5G.\n- Arabic, Western, and Asian channels tailored for local families and multinational residents."
      },
      {
        h: "Saudi Arabia IPTV Pricing Packages",
        html: renderPricingSection("en", "saudi-arabia")
      },
      {
        h: "Internet Setup Tips for Saudi Arabian Villas and Apartments",
        body: "Saudi residences often feature expansive multi-floor layouts where standard WiFi signals can degrade across thick walls. For the best IPTV experience in Saudi Arabia:\n- Connect your primary living room TV via Ethernet cable directly to your stc or Mobily fiber router.\n- If using WiFi, connect to the 5GHz frequency band to avoid interference from neighbor routers.\n- For large villas, invest in a Mesh WiFi system to maintain high speeds across every bedroom."
      }
    ],
    faqs: [
      ["Is Mada or STC Pay accepted for payment in Saudi Arabia?", "Yes! You can pay easily using Mada, STC Pay, Urpay, Apple Pay, or standard cards, with instant setup within minutes."],
      ["Can I watch all Saudi Pro League matches live?", "Yes, every single Roshn Saudi League and King's Cup fixture is broadcast live with Arabic commentary in 4K and FHD."],
      ["How fast is activation after ordering on WhatsApp?", "Your login credentials and M3U playlist are delivered immediately on WhatsApp within 2 to 5 minutes."]
    ],
    faqTopic: "IPTV Saudi Arabia"
  }));

  // 5. English Free Trial Page (/en/free-trial/)
  pages.push(mk({
    slug: "en/free-trial", cat: "core", parent: "en", crumb: "Free Trial", cta: true, arSlug: "iptv-contact",
    title: "Free 24h IPTV Trial: Test Our 4K Premium Server in Gulf 2026",
    h1: "Request Your Free 24-Hour IPTV Trial in Gulf",
    desc: "Get an instant free 24-hour IPTV trial in UAE, Saudi Arabia, Qatar & Gulf. Test 18,000+ channels and 4K movies on your Smart TV or Firestick before buying.",
    lead: "Test our premium IPTV service with zero obligation and zero cost. Experience 24 hours of unrestricted 4K streaming, all live sports matches, and our complete on-demand library on your own screen.",
    kw2: "free iptv trial",
    sections: [
      {
        h: "Why We Offer a 100% Free 24-Hour IPTV Trial",
        body: "We believe confidence comes from firsthand experience. Many providers make exaggerated claims, but we want you to test our channel quality, zapping speed, and anti-freeze stability yourself during live matches before spending any money.\n- Full 24-hour access with no channel restrictions.\n- Test live sports, movies, documentaries, and kids channels.\n- No credit card required — simply connect on WhatsApp.\n- Compatible with your existing Smart TV, Firestick, phone, or computer."
      },
      {
        h: "How to Claim Your Free Trial in 3 Minutes",
        body: `1. Click the WhatsApp button below or message us at +${waLink().split("wa.me/")[1].split("?")[0]}.\n2. Let our support team know your device type (e.g. Firestick, Samsung TV, Apple TV) and your preferred app.\n3. We will immediately send you your trial credentials and simple setup steps so you can start watching right away.`
      },
      {
        h: "Ready to Test? Start Your Free Trial Now",
        html: `
        <div class="pricing-trial-box">
          <div class="trial-text">
            <h3>⚡️ Instant 24-Hour Trial Activation</h3>
            <p>Our activation team is online 24/7 on WhatsApp. Send us a message and receive your trial credentials in under 2 minutes.</p>
          </div>
          <a class="btn btn-trial" href="${waLink("Hello, I would like to request a 24-hour free IPTV trial before subscribing")}" rel="noopener" target="_blank">Claim Free Trial on WhatsApp 📲</a>
        </div>`
      },
      {
        h: "Affordable Plans When You Are Ready to Subscribe",
        html: renderPricingSection("en")
      }
    ],
    faqs: [
      ["Does the free trial require entering a credit card?", "No credit card or payment details are needed. The trial is completely free and automatically expires after 24 hours without any obligation."],
      ["Are sports channels available during the free trial?", "Yes! All live sports channels including beIN Sports, SSC, Sky Sports, and Premier League streams are fully unlocked."],
      ["Can I upgrade to an annual plan after the trial?", "Yes, you can easily upgrade to our $45 12-month VIP plan or any other duration directly with the same WhatsApp agent without reinstalling anything."]
    ],
    faqTopic: "Free IPTV Trial"
  }));

  return pages;
}

