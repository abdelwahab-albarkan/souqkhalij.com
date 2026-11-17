import { createGulfPage } from "./gulf_helpers.mjs";

export const EXPAT_DISTRICTS_31 = [
  // Dubai (11)
  { id: "dubai-marina", name: "Dubai Marina", city: "Dubai", c: "uae" },
  { id: "dubai-jbr", name: "Jumeirah Beach Residence (JBR)", city: "Dubai", c: "uae" },
  { id: "dubai-downtown", name: "Downtown Dubai", city: "Dubai", c: "uae" },
  { id: "dubai-business-bay", name: "Business Bay Dubai", city: "Dubai", c: "uae" },
  { id: "dubai-palm-jumeirah", name: "Palm Jumeirah", city: "Dubai", c: "uae" },
  { id: "dubai-jlt", name: "Jumeirah Lakes Towers (JLT)", city: "Dubai", c: "uae" },
  { id: "dubai-hills", name: "Dubai Hills Estate", city: "Dubai", c: "uae" },
  { id: "dubai-arabian-ranches", name: "Arabian Ranches", city: "Dubai", c: "uae" },
  { id: "dubai-al-barsha", name: "Al Barsha Dubai", city: "Dubai", c: "uae" },
  { id: "dubai-silicon-oasis", name: "Dubai Silicon Oasis", city: "Dubai", c: "uae" },
  { id: "dubai-motor-city", name: "Motor City Dubai", city: "Dubai", c: "uae" },

  // Abu Dhabi (5)
  { id: "abudhabi-al-reem", name: "Al Reem Island", city: "Abu Dhabi", c: "uae" },
  { id: "abudhabi-yas-island", name: "Yas Island", city: "Abu Dhabi", c: "uae" },
  { id: "abudhabi-saadiyat", name: "Saadiyat Island", city: "Abu Dhabi", c: "uae" },
  { id: "abudhabi-raha-beach", name: "Al Raha Beach", city: "Abu Dhabi", c: "uae" },
  { id: "abudhabi-khalifa-city", name: "Khalifa City", city: "Abu Dhabi", c: "uae" },

  // Saudi Arabia (6)
  { id: "riyadh-al-olaya", name: "Al Olaya District", city: "Riyadh", c: "saudi-arabia" },
  { id: "riyadh-diplomatic-quarter", name: "Diplomatic Quarter (DQ)", city: "Riyadh", c: "saudi-arabia" },
  { id: "riyadh-al-nakheel", name: "Al Nakheel District", city: "Riyadh", c: "saudi-arabia" },
  { id: "riyadh-al-malqa", name: "Al Malqa District", city: "Riyadh", c: "saudi-arabia" },
  { id: "riyadh-al-narjis", name: "Al Narjis District", city: "Riyadh", c: "saudi-arabia" },
  { id: "jeddah-al-shati", name: "Al Shati District", city: "Jeddah", c: "saudi-arabia" },

  // Qatar (4)
  { id: "doha-the-pearl", name: "The Pearl Qatar", city: "Doha", c: "qatar" },
  { id: "doha-west-bay", name: "West Bay Doha", city: "Doha", c: "qatar" },
  { id: "qatar-lusail-city", name: "Lusail Marina District", city: "Lusail", c: "qatar" },
  { id: "doha-al-waab", name: "Al Waab District", city: "Doha", c: "qatar" },

  // Kuwait (2)
  { id: "kuwait-salmiya", name: "Salmiya District", city: "Kuwait City", c: "kuwait" },
  { id: "kuwait-capital", name: "Kuwait City Center", city: "Kuwait City", c: "kuwait" },

  // Bahrain (2)
  { id: "bahrain-juffair", name: "Juffair District", city: "Manama", c: "bahrain" },
  { id: "bahrain-amwaj", name: "Amwaj Islands", city: "Muharraq", c: "bahrain" },

  // Oman (1)
  { id: "oman-al-mouj", name: "Al Mouj Muscat", city: "Muscat", c: "oman" },
];

export function generateScaleEnglishExpatsPages() {
  const pages = [];

  // 1. 31 Districts x 3 Intents = 93 pages
  for (const d of EXPAT_DISTRICTS_31) {
    // Intent A: Best Service
    pages.push(
      createGulfPage({
        slug: `en/iptv-${d.id}-best-service`,
        title: `Best IPTV Service in ${d.name} ${d.city}: 4K Ultra HD 2026`,
        h1: `Premium 4K IPTV Subscription in ${d.name} (${d.city})`,
        desc: `Top-rated 4K IPTV in ${d.name} ${d.city}: 18,000+ live UK, US & sports channels, Anti-Freeze servers, 50k movies, and instant WhatsApp delivery.`,
        lead: `Stream buffer-free international TV channels in ${d.name} ${d.city}. Compatible with all Smart TVs and Firesticks with 99.9% guaranteed uptime.`,
        cat: "gulf-expat",
        parent: "en",
        crumb: `${d.name} IPTV`,
        kw2: `${d.name} iptv`,
        lang: "en",
        pricingCountry: d.c,
        waMsg: `Hello, I live in ${d.name} (${d.city}) and would like to subscribe to the 4K IPTV service with instant activation.`,
        sections: [
          {
            h: `High-Performance IPTV for Residents in ${d.name}`,
            body: `Our high-speed servers connect directly with local telecom networks, ensuring crystal-clear 4K streams and zero buffering during peak Premier League matches.`,
          },
        ],
        faqs: [
          [`Can I test the service in ${d.name} before paying?`, `Yes, contact us on WhatsApp to receive a free 24-hour test code and test the service on your own device immediately.`],
        ],
      })
    );

    // Intent B: Free Trial
    pages.push(
      createGulfPage({
        slug: `en/iptv-${d.id}-free-trial-4k`,
        title: `Free 24h IPTV Trial in ${d.name} ${d.city}: Test 4K Now`,
        h1: `Request a Free 24-Hour IPTV Trial in ${d.name} (${d.city})`,
        desc: `Get your 24-hour free IPTV trial in ${d.name} ${d.city}: Watch all Premier League & Champions League matches in 4K with no credit card required.`,
        lead: `Test our VIP IPTV servers in ${d.name} ${d.city} for a full 24 hours free of charge. Experience true 4K resolution on your smart TV right now.`,
        cat: "gulf-expat",
        parent: "en",
        crumb: `Free Trial ${d.name}`,
        kw2: `free trial ${d.id}`,
        lang: "en",
        pricingCountry: d.c,
        waMsg: `Hello, I would like to request a free 24-hour 4K IPTV trial for my home in ${d.name} (${d.city}).`,
        sections: [
          {
            h: `What is Included in Your 24-Hour Free Trial?`,
            body: `Full unrestricted access to over 18,000 live channels (Sky Sports, TNT, BBC, US Networks) and 50,000+ VOD movies with English audio and subtitles.`,
          },
        ],
        faqs: [
          [`Do I need to provide credit card details?`, `No, our trial is 100% free with zero commitments or credit card requirements.`],
        ],
      })
    );

    // Intent C: Setup Firestick / Smart TV
    pages.push(
      createGulfPage({
        slug: `en/iptv-${d.id}-setup-firestick-tv`,
        title: `Setup IPTV on Firestick & Smart TV in ${d.name} ${d.city}`,
        h1: `Easy Setup: Watch 4K IPTV in ${d.name} on Firestick & TV`,
        desc: `How to setup IPTV in ${d.name} ${d.city}: Fast 5-minute installation on Amazon Firestick, Apple TV, and Samsung/LG TVs with instant WhatsApp support.`,
        lead: `Step-by-step setup guide for residents of ${d.name} in ${d.city}. Start streaming 18,000+ channels in true 4K quality in less than 5 minutes.`,
        cat: "gulf-expat",
        parent: "en",
        crumb: `Setup ${d.name}`,
        kw2: `setup iptv ${d.id}`,
        lang: "en",
        pricingCountry: d.c,
        waMsg: `Hello, I need assistance setting up IPTV on my TV in ${d.name} (${d.city}).`,
        sections: [
          {
            h: `Quick 5-Minute Setup Steps`,
            body: `Install TiviMate or IPTV Smarters Pro from your app store, enter your Xtream Codes credentials sent via WhatsApp, and enjoy seamless streaming immediately.`,
          },
        ],
        faqs: [
          [`What internet speed do I need in ${d.name}?`, `A stable connection of 25 Mbps is recommended for ultra-crisp 4K streaming.`],
        ],
      })
    );
  }

  // 2. Expat Sports & Leagues: 26 pages
  const EXPAT_SPORTS_26 = [
    { id: "watch-liverpool-fc-gulf", name: "Liverpool FC Matches in 4K", kw: "Liverpool IPTV" },
    { id: "watch-man-city-gulf", name: "Manchester City Matches Live", kw: "Man City IPTV" },
    { id: "watch-arsenal-fc-gulf", name: "Arsenal FC Premier League Matches", kw: "Arsenal IPTV" },
    { id: "watch-man-united-gulf", name: "Manchester United Live Streams", kw: "Man United IPTV" },
    { id: "watch-chelsea-fc-gulf", name: "Chelsea FC Matches in 4K", kw: "Chelsea IPTV" },
    { id: "watch-real-madrid-gulf", name: "Real Madrid La Liga & Champions League", kw: "Real Madrid IPTV" },
    { id: "watch-barcelona-gulf", name: "FC Barcelona Matches in 4K", kw: "Barcelona IPTV" },
    { id: "watch-bayern-munich-gulf", name: "Bayern Munich Bundesliga Matches", kw: "Bayern Munich IPTV" },
    { id: "watch-celtic-rangers-gulf", name: "Scottish Premiership & Old Firm Derby", kw: "Old Firm IPTV" },
    { id: "watch-six-nations-rugby-gulf", name: "Six Nations Rugby Championship Live", kw: "Six Nations IPTV" },
    { id: "watch-super-rugby-gulf", name: "Super Rugby Pacific Matches in 4K", kw: "Super Rugby IPTV" },
    { id: "watch-nfl-super-bowl-gulf", name: "NFL Games & Super Bowl Live Stream", kw: "NFL Super Bowl IPTV" },
    { id: "watch-nba-finals-gulf", name: "NBA Basketball Games & Finals Live", kw: "NBA Finals IPTV" },
    { id: "watch-mlb-baseball-gulf", name: "MLB Baseball Games Live Stream", kw: "MLB Baseball IPTV" },
    { id: "watch-pga-golf-majors-gulf", name: "PGA Tour Golf & The Masters in 4K", kw: "PGA Golf IPTV" },
    { id: "watch-cricket-ashes-gulf", name: "The Ashes Test Cricket Live Stream", kw: "Ashes Cricket IPTV" },
    { id: "watch-t20-world-cup-gulf", name: "ICC T20 Cricket World Cup Matches", kw: "T20 Cricket IPTV" },
    { id: "watch-afl-australian-rules-gulf", name: "AFL Australian Rules Football in 4K", kw: "AFL Football IPTV" },
    { id: "watch-nrl-rugby-league-gulf", name: "NRL Rugby League Matches Live", kw: "NRL Rugby IPTV" },
    { id: "watch-ufc-numbered-fights-gulf", name: "UFC Main Card PPV Fights in 4K", kw: "UFC PPV IPTV" },
    { id: "watch-wwe-pay-per-view-gulf", name: "WWE WrestleMania & Royal Rumble", kw: "WWE PPV IPTV" },
    { id: "watch-f1-qualifying-race-gulf", name: "Formula 1 Practice, Qualifying & Race", kw: "F1 Race IPTV" },
    { id: "watch-motogp-live-gulf", name: "MotoGP Grand Prix Motorcycle Racing", kw: "MotoGP IPTV" },
    { id: "watch-tour-de-france-gulf", name: "Tour de France Cycling Live in 4K", kw: "Tour de France IPTV" },
    { id: "watch-wimbledon-tennis-gulf", name: "Wimbledon Tennis Championships Live", kw: "Wimbledon IPTV" },
    { id: "watch-us-open-tennis-gulf", name: "US Open Tennis Tournament in 4K", kw: "US Open Tennis IPTV" },
  ];

  for (const s of EXPAT_SPORTS_26) {
    pages.push(
      createGulfPage({
        slug: `en/iptv-${s.id}`,
        title: `Watch ${s.name} in Dubai & Gulf via 4K IPTV`,
        h1: `Stream ${s.name} Live in 4K Across the Gulf`,
        desc: `Watch ${s.name} in Dubai, Saudi Arabia & Gulf: 4K 60fps streams, English commentary, Anti-Freeze servers, and instant 24-hour free trial on WhatsApp.`,
        lead: `Never miss a moment of ${s.name}. Our high-bandwidth Gulf IPTV servers deliver smooth 4K streams with zero buffering on all your smart devices.`,
        cat: "gulf-expat",
        parent: "en",
        crumb: s.kw,
        kw2: s.kw,
        lang: "en",
        pricingCountry: "uae",
        waMsg: `Hello, I would like to subscribe to the IPTV service to watch ${s.name} in 4K.`,
        sections: [
          {
            h: `Why Sports Fans in the Gulf Choose Our 4K IPTV`,
            body: `We deliver dedicated 60fps streams with redundant backup channels, ensuring seamless playback without delays or server freezes during high-traffic events.`,
          },
        ],
        faqs: [
          [`Can I choose English audio commentary?`, `Yes, all major sports streams feature multi-audio support including English commentary.`],
        ],
      })
    );
  }

  // 3. International Expat TV Channels: 26 pages
  const EXPAT_CHANNELS_26 = [
    { id: "bbc-one-two-hd-dubai", name: "BBC One & BBC Two HD", kw: "BBC One IPTV" },
    { id: "itv-1-itvx-hd-gulf", name: "ITV 1 & ITVX Live Channels", kw: "ITV 1 IPTV" },
    { id: "channel-4-uk-gulf", name: "Channel 4 & Film4 UK Live", kw: "Channel 4 IPTV" },
    { id: "sky-sports-f1-gulf", name: "Sky Sports F1 HD & UHD", kw: "Sky Sports F1 IPTV" },
    { id: "sky-sports-football-gulf", name: "Sky Sports Football & Premier League", kw: "Sky Sports Football IPTV" },
    { id: "tnt-sports-champions-gulf", name: "TNT Sports 1, 2, 3 & 4 UK", kw: "TNT Sports IPTV" },
    { id: "sky-cinema-uk-gulf", name: "Sky Cinema Premiere & Action UK", kw: "Sky Cinema IPTV" },
    { id: "nbc-sports-usa-gulf", name: "NBC & NBC Sports USA Live", kw: "NBC Sports IPTV" },
    { id: "cbs-sports-usa-gulf", name: "CBS & CBS Sports Network USA", kw: "CBS Sports IPTV" },
    { id: "espn-plus-usa-gulf", name: "ESPN, ESPN2 & ESPNews USA", kw: "ESPN USA IPTV" },
    { id: "fox-sports-usa-gulf", name: "FOX & FS1 Sports USA", kw: "FOX Sports IPTV" },
    { id: "abc-australia-gulf", name: "ABC News & ABC TV Australia", kw: "ABC Australia IPTV" },
    { id: "optus-sport-gulf", name: "Optus Sport 1 & 2 Australia", kw: "Optus Sport IPTV" },
    { id: "star-sports-cricket-gulf", name: "Star Sports 1 & Select Cricket", kw: "Star Sports IPTV" },
    { id: "sony-ten-cricket-gulf", name: "Sony Sports Ten 1, 2 & 3", kw: "Sony Ten IPTV" },
    { id: "zee-cinema-hindi-gulf", name: "Zee TV & Zee Cinema Hindi HD", kw: "Zee TV IPTV" },
    { id: "tf1-france-gulf", name: "TF1 & TMC France HD Live", kw: "TF1 France IPTV" },
    { id: "m6-france-gulf", name: "M6 & W9 France HD Live", kw: "M6 France IPTV" },
    { id: "canal-plus-cinema-gulf", name: "Canal+ & Canal+ Cinema 4K", kw: "Canal Plus IPTV" },
    { id: "ard-zdf-germany-gulf", name: "ARD Das Erste & ZDF HD Germany", kw: "ARD ZDF IPTV" },
    { id: "rai-1-italia-gulf", name: "Rai 1, Rai 2 & Rai Sport Italy", kw: "Rai 1 IPTV" },
    { id: "rtp-portugal-gulf", name: "RTP 1, RTP 2 & SIC Portugal", kw: "RTP Portugal IPTV" },
    { id: "ert-greece-gulf", name: "ERT 1 & Mega Channel Greece", kw: "ERT Greece IPTV" },
    { id: "npo-netherlands-gulf", name: "NPO 1, NPO 2 & Ziggo Sport Dutch", kw: "NPO Dutch IPTV" },
    { id: "svt-sweden-gulf", name: "SVT 1 & SVT 2 Sweden HD", kw: "SVT Sweden IPTV" },
    { id: "nrk-norway-gulf", name: "NRK 1 & NRK 2 Norway HD", kw: "NRK Norway IPTV" },
  ];

  for (const c of EXPAT_CHANNELS_26) {
    pages.push(
      createGulfPage({
        slug: `en/iptv-channel-${c.id}`,
        title: `Watch ${c.name} in Dubai & UAE Live via 4K IPTV`,
        h1: `Stream ${c.name} in 4K Quality Across the Gulf`,
        desc: `Watch ${c.name} in Dubai and the Gulf: Crystal-clear 4K streams, zero buffering on du and e& fiber, and instant 5-minute setup via WhatsApp.`,
        lead: `Stay connected with your home country television. Stream ${c.name} with true 4K quality and 99.9% uptime on all your smart devices.`,
        cat: "gulf-expat",
        parent: "en",
        crumb: c.kw,
        kw2: c.kw,
        lang: "en",
        pricingCountry: "uae",
        waMsg: `Hello, I am interested in watching ${c.name} on my TV in the Gulf.`,
        sections: [
          {
            h: `Pristine Video Quality & Low Latency`,
            body: `Our high-performance streams deliver unaltered HD and 4K picture quality with responsive playback and instant channel zapping.`,
          },
        ],
        faqs: [
          [`Do I need a VPN to watch ${c.name}?`, `No, our IPTV servers stream directly on local Gulf networks without requiring VPN software.`],
        ],
      })
    );
  }

  // 4. Expat Device & Setup Guides: 26 pages
  const EXPAT_DEVICES_26 = [
    { id: "firestick-4k-tivimate-expats", title: "Setup TiviMate on Amazon Firestick 4K in Gulf", kw: "Firestick TiviMate" },
    { id: "firestick-smarters-pro-expats", title: "Setup IPTV Smarters Pro on Firestick in UAE", kw: "Firestick Smarters" },
    { id: "apple-tv-tivimate-expats", title: "Best IPTV Setup for Apple TV 4K in Dubai", kw: "Apple TV IPTV" },
    { id: "apple-tv-smarters-lite-expats", title: "Install Smarters Player Lite on Apple TV in Gulf", kw: "Apple TV Smarters" },
    { id: "samsung-tv-ibo-player-expats", title: "Install IBO Player Pro on Samsung TV in UAE", kw: "Samsung IBO Player" },
    { id: "lg-tv-smart-iptv-expats", title: "How to Setup IPTV on LG webOS Smart TV in Gulf", kw: "LG Smart IPTV" },
    { id: "android-box-xciptv-expats", title: "Setup XCIPTV Player on Android TV Box in Saudi", kw: "Android Box XCIPTV" },
    { id: "xiaomi-box-tivimate-expats", title: "Configure Xiaomi Mi Box S for 4K IPTV in UAE", kw: "Xiaomi Box IPTV" },
    { id: "windows-pc-iptv-player-expats", title: "Stream 4K IPTV on Windows 10 & 11 PC in Gulf", kw: "Windows PC IPTV" },
    { id: "macbook-iptv-streamer-expats", title: "Stream IPTV on Apple MacBook & iMac in Dubai", kw: "MacBook IPTV" },
    { id: "iphone-ipad-iptv-smarters-expats", title: "Watch 4K IPTV on iPhone & iPad with AirPlay", kw: "iPhone iPad IPTV" },
    { id: "android-phone-iptv-setup-expats", title: "Stream Live TV on Android Mobile & Tablets", kw: "Android Mobile IPTV" },
    { id: "chromecast-google-tv-expats", title: "Setup Chromecast with Google TV for 4K IPTV", kw: "Chromecast IPTV" },
    { id: "formuler-mytvonline-expats", title: "Configure Formuler Z11 with MyTVOnline 3 in Gulf", kw: "Formuler Z11 IPTV" },
    { id: "shield-tv-pro-iptv-expats", title: "Setup NVIDIA Shield TV Pro for 4K 60fps IPTV", kw: "NVIDIA Shield IPTV" },
    { id: "mag-box-portal-url-expats", title: "Configure MAG 540 Stalker Portal URL in Gulf", kw: "MAG Box IPTV" },
    { id: "router-dns-1111-setup-expats", title: "How to Change Router DNS to 1.1.1.1 for IPTV", kw: "Router DNS IPTV" },
    { id: "mesh-wifi-optimization-expats", title: "Optimize Mesh Wi-Fi in Large Villas for IPTV", kw: "Mesh WiFi IPTV" },
    { id: "multi-device-family-setup-expats", title: "How to Use Multi-Room Family IPTV on 3 TVs", kw: "Multi Room IPTV" },
    { id: "audio-sync-troubleshoot-expats", title: "How to Fix Audio Sync & Delay Issues in IPTV", kw: "Audio Sync IPTV" },
    { id: "4k-hdr-buffer-settings-expats", title: "Best Buffer Size Settings for 4K HDR IPTV", kw: "Buffer Settings IPTV" },
    { id: "epg-tv-guide-timezone-expats", title: "How to Sync EPG TV Guide with Gulf Local Time", kw: "EPG Timezone IPTV" },
    { id: "m3u-playlist-url-setup-expats", title: "How to Add M3U Playlist URL in Any IPTV App", kw: "M3U Playlist IPTV" },
    { id: "xtream-codes-api-login-expats", title: "How to Login with Xtream Codes API on IPTV", kw: "Xtream Codes IPTV" },
    { id: "anti-freeze-cdn-explained-expats", title: "How Anti-Freeze CDN Keeps Live Sports Smooth", kw: "Anti Freeze CDN" },
    { id: "7-day-money-back-refund-expats", title: "Our 7-Day Money-Back Guarantee Policy Explained", kw: "IPTV Refund Guarantee" },
  ];

  for (const dev of EXPAT_DEVICES_26) {
    pages.push(
      createGulfPage({
        slug: `en/iptv-${dev.id}`,
        title: `${dev.title}: 4K Streaming Guide 2026`,
        h1: `${dev.title}`,
        desc: `Expert guide: ${dev.title}. Enjoy buffer-free 4K streaming, 18,000+ live channels, and instant 5-minute activation on WhatsApp.`,
        lead: `Get maximum performance out of your streaming setup with our comprehensive guide to ${dev.title} across the Gulf region.`,
        cat: "gulf-expat",
        parent: "en",
        crumb: dev.kw,
        kw2: dev.kw,
        lang: "en",
        pricingCountry: "uae",
        waMsg: `Hello, I would like to inquire about ${dev.title} for my IPTV setup.`,
        sections: [
          {
            h: `Step-by-Step Technical Instructions`,
            body: `Follow these verified guidelines to configure your device, reduce latency, and ensure pristine 4K video playback during live sporting events.`,
          },
        ],
        faqs: [
          [`Need live technical support?`, `Our technical team is available 24/7 on WhatsApp to assist with app installation and instant credential delivery.`],
        ],
      })
    );
  }

  return pages;
}

