// Google Analytics for the public site. Nothing is loaded or stored until the visitor presses
// "Accept" in the cookie notice; "No thanks" is remembered and the notice doesn't come back.
// Loaded from <head> above the page markers, so the Artifact preview never includes it.
(function () {
  "use strict";

  const ID = "G-QNZWPELLR9";
  const CHOICE_KEY = "mauros-value.analytics";
  const LANG_KEY = "gercek-deger.lang";

  const TEXT = {
    tr: {
      note: "Kaç kişinin siteye girdiğini görmek için Google Analytics çerezlerini kullanmak istiyoruz. İzin veriyor musun?",
      yes: "Kabul et",
      no: "Hayır"
    },
    en: {
      note: "We'd like to use Google Analytics cookies to count how many people visit. Is that OK?",
      yes: "Accept",
      no: "No thanks"
    }
  };

  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* storage unavailable */ } }
  };

  // Same rule as app.js: the saved language, otherwise the browser's.
  function lang() {
    const saved = store.get(LANG_KEY);
    if (saved === "tr" || saved === "en") return saved;
    const pref = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    return /^tr\b/i.test(pref) ? "tr" : "en";
  }

  // The site switches pages with #links, which Google doesn't see as new pages,
  // so each page is reported as its own path (#predictions -> /mauros-value/predictions).
  function pageView() {
    const page = location.hash.replace(/^#/, "");
    window.gtag("event", "page_view", {
      page_location: location.origin + location.pathname + (page && page !== "home" ? page : ""),
      page_title: document.title
    });
  }

  let started = false;
  function start() {
    window["ga-disable-" + ID] = false;
    if (started) return;
    started = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", ID, { send_page_view: false });
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
    document.head.appendChild(s);
    // app.js sets the page title while it draws, so report once it has finished.
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", pageView);
    else pageView();
    window.addEventListener("hashchange", () => setTimeout(pageView, 0));
  }

  function stop() {
    window["ga-disable-" + ID] = true;
    for (const c of document.cookie.split(";")) {
      const name = c.split("=")[0].trim();
      if (!/^_ga/.test(name)) continue;
      document.cookie = name + "=; max-age=0; path=/";
      document.cookie = name + "=; max-age=0; path=/; domain=" + location.hostname;
    }
  }

  let banner = null;
  function fillBanner() {
    if (!banner) return;
    const s = TEXT[lang()];
    banner.innerHTML = `
      <p>${s.note}</p>
      <div class="consent-actions">
        <button type="button" class="consent-btn" data-consent="denied">${s.no}</button>
        <button type="button" class="consent-btn consent-yes" data-consent="granted">${s.yes}</button>
      </div>`;
  }

  function showBanner() {
    if (banner) return;
    banner = document.createElement("div");
    banner.className = "consent";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Cookies");
    fillBanner();
    document.body.appendChild(banner);
  }

  document.addEventListener("click", (e) => {
    const el = e.target instanceof Element ? e.target : null;
    if (!el) return;
    const choice = el.closest("[data-consent]");
    if (choice) {
      const value = choice.dataset.consent;
      store.set(CHOICE_KEY, value);
      if (value === "granted") start(); else stop();
      banner.remove();
      banner = null;
      return;
    }
    // Keep the notice in the language the visitor just picked.
    if (el.closest("#lang [data-lang]")) setTimeout(fillBanner, 0);
  });

  // The footer's "Cookie settings" link calls this to ask again.
  window.MVAnalytics = { ask: showBanner };

  if (store.get(CHOICE_KEY) === "granted") start();
  else if (store.get(CHOICE_KEY) !== "denied") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", showBanner);
    else showBanner();
  }
})();
