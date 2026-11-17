(function () {
  var root = document.documentElement;
  var tb = document.querySelector(".theme-btn");
  if (tb) tb.addEventListener("click", function () {
    var cur = root.dataset.theme || "dark";
    var next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", next === "dark" ? "#07090e" : "#fffaf5");
  });
  // theme buttons (header + drawer)
  // (first handler above binds the first .theme-btn only, so bind the rest here)
  document.querySelectorAll(".theme-btn").forEach(function (b, i) {
    if (i === 0) return;
    b.addEventListener("click", function () { var f = document.querySelector(".theme-btn"); if (f) f.click(); });
  });
  // drawer
  var mb = document.querySelector(".menu-btn");
  var drawer = document.getElementById("drawer");
  var body = document.body;
  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle("open", open);
    body.classList.toggle("drawer-open", open);
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    if (mb) mb.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) { var a = drawer.querySelector("a,button"); if (a) a.focus({ preventScroll: true }); }
  }
  if (mb) mb.addEventListener("click", function () { setDrawer(!drawer.classList.contains("open")); });
  document.querySelectorAll("[data-close]").forEach(function (el) { el.addEventListener("click", function () { setDrawer(false); }); });
  if (drawer) drawer.addEventListener("click", function (e) { if (e.target.closest("a")) setDrawer(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setDrawer(false); closeMore(); } });
  var mq = window.matchMedia("(min-width: 1080px)");
  (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(function (e) { if (e.matches) setDrawer(false); });
  // "more" dropdown
  var more = document.querySelector(".nav-d .more");
  var moreBtn = more && more.querySelector(".more-btn");
  function closeMore() { if (more) { more.classList.remove("open"); if (moreBtn) moreBtn.setAttribute("aria-expanded", "false"); } }
  if (moreBtn) {
    moreBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var o = more.classList.toggle("open");
      moreBtn.setAttribute("aria-expanded", o ? "true" : "false");
    });
    document.addEventListener("click", function (e) { if (!more.contains(e.target)) closeMore(); });
  }
  // header shadow on scroll
  var hd = document.querySelector("header.site");
  function onScroll() { if (hd) hd.classList.toggle("scrolled", window.scrollY > 8); }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  var langBtn = document.querySelector(".lang-switch-btn");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var isEnNow = root.getAttribute("lang") === "en";
      try { localStorage.setItem("preferred_lang", isEnNow ? "ar" : "en"); } catch (e) {}
    });
  }
})();
(function () {
  var bar = document.querySelector(".progress i");
  if (!bar) return;
  function u() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0) + "%";
  }
  addEventListener("scroll", u, { passive: true });
  u();
})();
(function () {
  var tabs = document.querySelectorAll(".curr-tab");
  if (!tabs.length) return;
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      var curr = tab.dataset.curr;
      var cards = document.querySelectorAll(".pricing-card");
      cards.forEach(function (card) {
        var sym = card.querySelector("[data-currency-symbol]");
        var val = card.querySelector("[data-price-value]");
        var old = card.querySelector("[data-old-val]");
        var loc = card.querySelector("[data-local-currency]");
        var btn = card.querySelector(".pricing-btn");
        var waSub = card.querySelector(".pricing-wa-sublink");
        if (!sym || !val) return;
        var titleEl = card.querySelector(".pricing-title");
        var planName = titleEl ? titleEl.textContent.trim() : "";
        var isEn = document.documentElement.getAttribute("lang") === "en";

        if (btn && card.dataset.checkout) {
          btn.href = card.dataset.checkout;
        }

        var msg = "";
        if (curr === "sar") {
          sym.textContent = "ر.س";
          val.textContent = card.dataset.sar;
          if (old) old.textContent = card.dataset.origSar + " ر.س";
          if (loc) loc.textContent = "(≈ " + card.dataset.usd + " USD)";
          msg = isEn
            ? "Hello, I would like to subscribe to the " + planName + " (" + card.dataset.sar + " SAR) with instant activation"
            : "السلام عليكم، أرغب في الاشتراك بـ " + planName + " (" + card.dataset.sar + " ر.س) مع التفعيل الفوري";
        } else if (curr === "aed") {
          sym.textContent = "د.إ";
          val.textContent = card.dataset.aed;
          if (old) old.textContent = card.dataset.origAed + " د.إ";
          if (loc) loc.textContent = "(≈ " + card.dataset.usd + " USD)";
          msg = isEn
            ? "Hello, I would like to subscribe to the " + planName + " (" + card.dataset.aed + " AED) with instant activation"
            : "السلام عليكم، أرغب في الاشتراك بـ " + planName + " (" + card.dataset.aed + " د.إ) مع التفعيل الفوري";
        } else if (curr === "kwd") {
          sym.textContent = "د.ك";
          val.textContent = card.dataset.kwd;
          if (old) old.textContent = card.dataset.origKwd + " د.ك";
          if (loc) loc.textContent = "(≈ " + card.dataset.usd + " USD)";
          msg = isEn
            ? "Hello, I would like to subscribe to the " + planName + " (" + card.dataset.kwd + " KWD) with instant activation"
            : "السلام عليكم، أرغب في الاشتراك بـ " + planName + " (" + card.dataset.kwd + " د.ك) مع التفعيل الفوري";
        } else if (curr === "qar") {
          sym.textContent = "ر.ق";
          val.textContent = card.dataset.qar;
          if (old) old.textContent = card.dataset.origQar + " ر.ق";
          if (loc) loc.textContent = "(≈ " + card.dataset.usd + " USD)";
          msg = isEn
            ? "Hello, I would like to subscribe to the " + planName + " (" + card.dataset.qar + " QAR) with instant activation"
            : "السلام عليكم، أرغب في الاشتراك بـ " + planName + " (" + card.dataset.qar + " ر.ق) مع التفعيل الفوري";
        } else {
          sym.textContent = "$";
          val.textContent = card.dataset.usd;
          if (old) old.textContent = "$" + card.dataset.origUsd;
          if (loc) loc.textContent = "≈ " + card.dataset.sar + " ر.س / " + card.dataset.aed + " د.إ";
          msg = isEn
            ? "Hello, I would like to subscribe to the " + planName + " ($" + card.dataset.usd + ") with instant activation"
            : "السلام عليكم، أرغب في الاشتراك بـ " + planName + " (" + card.dataset.usd + "$) مع التفعيل الفوري";
        }

        if (waSub && msg) {
          waSub.href = "https://wa.me/212625218443?text=" + encodeURIComponent(msg);
        }
      });
    });
  });
})();
(function () {
  document.querySelectorAll(".to-top").forEach(function (b) {
    b.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  });
})();
(function () {
  var filter = document.getElementById("sitemapFilter");
  if (!filter) return;
  var countEl = document.getElementById("sitemapShownCount");
  var clearBtn = document.getElementById("sitemapClear");
  var sections = document.querySelectorAll(".sitemap-cat-section");

  filter.addEventListener("input", function () {
    var term = filter.value.trim().toLowerCase();
    if (clearBtn) clearBtn.style.display = term ? "block" : "none";
    var visible = 0;

    sections.forEach(function (sec) {
      var cards = sec.querySelectorAll("ul.cards li");
      var secVisible = 0;
      cards.forEach(function (li) {
        var txt = li.textContent.toLowerCase();
        if (!term || txt.indexOf(term) !== -1) {
          li.style.display = "";
          visible++;
          secVisible++;
        } else {
          li.style.display = "none";
        }
      });
      sec.style.display = secVisible > 0 ? "" : "none";
    });

    if (countEl) countEl.textContent = visible;
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      filter.value = "";
      filter.dispatchEvent(new Event("input"));
      filter.focus();
    });
  }
})();
