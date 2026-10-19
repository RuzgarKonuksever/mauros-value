/* Mauro's Value — renders the whole site from window.GD_DATA (data.js). */
(() => {
  "use strict";

  const DATA = window.GD_DATA;
  const PHOTOS = window.GD_PHOTOS || {};
  const STATS = window.GD_STATS || {};
  const STAT_ROWS = STATS.players || {};
  const HISTORY = (window.GD_HISTORY && window.GD_HISTORY.players) || {};
  const $ = (sel) => document.querySelector(sel);

  /* ---------- Text ---------- */

  const STR = {
    en: {
      tagline: "Fair market values for Turkey's Big Four",
      navHome: "Overview",
      navHomeShort: "Home",
      navPlayers: "All players",
      navPlayersShort: "Players",
      navPredictions: "Predictions",
      navPredictionsShort: "Guess",
      predEyebrow: "Europe · {season}",
      predLede: "Guess the score of our clubs' European matches. Played or upcoming, you can guess any match at any time.",
      predNameLabel: "Your username",
      predNamePlaceholder: "e.g. Ruzgar10",
      predContinue: "Continue",
      predHello: "Hi, {name}!",
      predChange: "Change name",
      predUpcoming: "Upcoming matches",
      predPlayed: "Played matches",
      predSave: "Save",
      predSaved: "Saved",
      predYour: "Your guess: {score}",
      predWall: "Guess wall",
      predWallNote: "Guesses made on this device.",
      predWallEmpty: "No guesses yet. Be the first!",
      predWallShared: "Everyone's guesses, newest first.",
      predRefresh: "Refresh",
      predLoading: "Loading guesses…",
      predLoadError: "Couldn't load the guesses right now. Try Refresh in a moment.",
      predSaveError: "Your guess was saved on this device but couldn't be sent. Try saving again in a moment.",
      predGuessed: "{name} guessed",
      predExact: "Exact score!",
      predResult: "Right result",
      predMiss: "Missed",
      predNone: "No matches for this club.",
      stage_qualifying: "Qualifying",
      stage_league: "League phase",
      stage_knockout: "Knockout",
      search: "Search players",
      language: "Language",
      heroTitle: "The real value of the Big Four",
      heroText: "Our own market value for every player at Galatasaray, Fenerbahçe, Beşiktaş and Trabzonspor.",
      valuesPending: "Market values entered: {n} of {total} players",
      sectionClubs: "The four clubs",
      sectionTotals: "Squad values",
      sectionTop: "Most valuable players",
      seeAll: "All players",
      noValuesTitle: "Market values are on the way",
      noValuesText: "As soon as values are entered, this page ranks the most valuable players and compares the four squads.",
      founded: "Founded {y}",
      titles: "{n} league titles",
      seats: "{n} seats",
      squadSize: "Squad",
      avgAge: "Avg. age",
      foreign: "Foreign",
      totalValue: "Total value",
      mostValuable: "Most valuable",
      valuedOf: "{n} of {total} players valued",
      squad: "Squad",
      playersCount: "{n} players",
      sortBy: "Sort by",
      sortPos: "Position",
      sortValue: "Value",
      sortAge: "Age",
      sortName: "Name",
      colPlayer: "Player",
      colAge: "Age",
      colNat: "Nationality",
      colValue: "Market value",
      colClub: "Club",
      colRank: "Rank",
      allClubs: "All clubs",
      allPos: "All positions",
      group_gk: "Goalkeepers",
      group_def: "Defenders",
      group_mid: "Midfielders",
      group_fwd: "Forwards",
      playersLede: "Every player from the four squads in one list.",
      resultsFor: "{n} players match “{q}”",
      noResults: "No players match “{q}”.",
      clearSearch: "Clear search",
      notValued: "Not valued yet",
      age: "Age",
      born: "Born",
      nationality: "Nationality",
      position: "Position",
      marketValue: "Market value",
      voteQuestion: "Is this value right?",
      voteLow: "Too low",
      voteFair: "Fair",
      voteHigh: "Too high",
      voteCount: "Fan votes: {n}",
      voteFirst: "No votes yet. Be the first!",
      voteLoading: "Loading votes…",
      voteError: "Votes couldn't be loaded right now.",
      voteSaveError: "Your vote couldn't be saved. Please try again.",
      themeDark: "Dark mode",
      themeLight: "Light mode",
      rankClub: "#{n} in the squad",
      rankAll: "#{n} overall",
      close: "Close",
      photoBy: "Photo:",
      statsTitle: "This season",
      statsNote: "{season} · all competitions",
      statApps: "Games",
      statMins: "Minutes",
      statMinsShort: "Min",
      statAssistsShort: "Ast",
      colComp: "Competition",
      statGoals: "Goals",
      statAssists: "Assists",
      statYellow: "Yellow",
      statRed: "Red",
      statsUpdated: "Updated {date}",
      statsNone: "no stats found for this player",
      sectionScorers: "Top scorers",
      formTitle: "Last 5 matches",
      formLetter_w: "W",
      formLetter_d: "D",
      formLetter_l: "L",
      form_w: "Win",
      form_d: "Draw",
      form_l: "Loss",
      nextTitle: "Next match",
      liveNow: "Match in progress",
      cdUnits: "d,h,m,s",
      formNote: "Results are added with the weekly update.",
      bdayButton: "Today's birthdays",
      bdayTitle: "Happy birthday!",
      bdayLine: "turns {n} today",
      sectionRisers: "Biggest risers",
      sectionFallers: "Biggest fallers",
      changeNote: "vs. previous value",
      changeUp: "Value went up",
      changeDown: "Value went down",
      changeWas: "Previously {v} · changed {date}",
      sectionAssists: "Most assists",
      goal1: "goal",
      goalN: "goals",
      assist1: "assist",
      assistN: "assists",
      game1: "{n} game",
      gameN: "{n} games",
      noLeaders: "Nothing to show yet.",
      footerNote: "A fan-made site. Every market value here is our own estimate. Not affiliated with any club or with Transfermarkt.",
      footerPhotos: "Player photos come from Wikimedia Commons under free licences. Each player's popup credits the photographer.",
      footerBg: "Background photo of Mauro Icardi: Vyacheslav Evdokimov (edited), {license}, Wikimedia Commons.",
      footerStats: "Match stats: {source}, updated {date}.",
      footerUpdated: "Last updated {date}.",
      cookieSettings: "Cookie settings"
    },
    tr: {
      tagline: "Dört Büyüklerin gerçek piyasa değerleri",
      navHome: "Genel bakış",
      navHomeShort: "Özet",
      navPlayers: "Tüm oyuncular",
      navPlayersShort: "Oyuncular",
      navPredictions: "Tahminler",
      navPredictionsShort: "Tahmin",
      predEyebrow: "Avrupa · {season}",
      predLede: "Kulüplerimizin Avrupa maçlarının skorunu tahmin et. Oynanmış ya da oynanacak, istediğin maçı istediğin zaman tahmin edebilirsin.",
      predNameLabel: "Kullanıcı adın",
      predNamePlaceholder: "ör. Ruzgar10",
      predContinue: "Devam",
      predHello: "Merhaba, {name}!",
      predChange: "Adı değiştir",
      predUpcoming: "Oynanacak maçlar",
      predPlayed: "Oynanan maçlar",
      predSave: "Kaydet",
      predSaved: "Kaydedildi",
      predYour: "Tahminin: {score}",
      predWall: "Tahmin duvarı",
      predWallNote: "Bu cihazda yapılan tahminler.",
      predWallEmpty: "Henüz tahmin yok. İlk tahmini sen yap!",
      predWallShared: "Herkesin tahminleri, en yenisi en üstte.",
      predRefresh: "Yenile",
      predLoading: "Tahminler yükleniyor…",
      predLoadError: "Tahminler şu an yüklenemedi. Biraz sonra Yenile'ye bas.",
      predSaveError: "Tahminin bu cihaza kaydedildi ama gönderilemedi. Biraz sonra tekrar kaydet.",
      predGuessed: "{name} tahmin etti",
      predExact: "Tam skor!",
      predResult: "Doğru sonuç",
      predMiss: "Tutmadı",
      predNone: "Bu kulübün maçı yok.",
      stage_qualifying: "Ön eleme",
      stage_league: "Lig aşaması",
      stage_knockout: "Eleme turu",
      search: "Oyuncu ara",
      language: "Dil",
      heroTitle: "Dört Büyüklerin gerçek değeri",
      heroText: "Galatasaray, Fenerbahçe, Beşiktaş ve Trabzonspor kadrolarındaki her oyuncu için kendi piyasa değeri tahminimiz.",
      valuesPending: "Piyasa değeri girilen oyuncu: {n}/{total}",
      sectionClubs: "Dört kulüp",
      sectionTotals: "Kadro değerleri",
      sectionTop: "En değerli oyuncular",
      seeAll: "Tüm oyuncular",
      noValuesTitle: "Piyasa değerleri yolda",
      noValuesText: "Değerler girildiği anda bu sayfa en değerli oyuncuları sıralayacak ve dört kadroyu karşılaştıracak.",
      founded: "Kuruluş {y}",
      titles: "{n} şampiyonluk",
      seats: "{n} kişilik",
      squadSize: "Kadro",
      avgAge: "Yaş ort.",
      foreign: "Yabancı",
      totalValue: "Toplam değer",
      mostValuable: "En değerli",
      valuedOf: "{n}/{total} oyuncuya değer girildi",
      squad: "Kadro",
      playersCount: "{n} oyuncu",
      sortBy: "Sırala",
      sortPos: "Mevki",
      sortValue: "Değer",
      sortAge: "Yaş",
      sortName: "İsim",
      colPlayer: "Oyuncu",
      colAge: "Yaş",
      colNat: "Uyruk",
      colValue: "Piyasa değeri",
      colClub: "Kulüp",
      colRank: "Sıra",
      allClubs: "Tüm kulüpler",
      allPos: "Tüm mevkiler",
      group_gk: "Kaleciler",
      group_def: "Defans",
      group_mid: "Orta saha",
      group_fwd: "Forvet",
      playersLede: "Dört kadronun tüm oyuncuları tek listede.",
      resultsFor: "“{q}” ile eşleşen {n} oyuncu",
      noResults: "“{q}” ile eşleşen oyuncu yok.",
      clearSearch: "Aramayı temizle",
      notValued: "Henüz değer girilmedi",
      age: "Yaş",
      born: "Doğum tarihi",
      nationality: "Uyruk",
      position: "Mevki",
      marketValue: "Piyasa değeri",
      voteQuestion: "Bu değer doğru mu?",
      voteLow: "Düşük",
      voteFair: "Doğru",
      voteHigh: "Yüksek",
      voteCount: "Taraftar oyu: {n}",
      voteFirst: "Henüz oy yok. İlk oyu sen ver!",
      voteLoading: "Oylar yükleniyor…",
      voteError: "Oylar şu an yüklenemedi.",
      voteSaveError: "Oyun kaydedilemedi. Lütfen tekrar dene.",
      themeDark: "Koyu mod",
      themeLight: "Açık mod",
      rankClub: "Kadroda {n}. sırada",
      rankAll: "Genelde {n}. sırada",
      close: "Kapat",
      photoBy: "Fotoğraf:",
      statsTitle: "Bu sezon",
      statsNote: "{season} · tüm turnuvalar",
      statApps: "Maç",
      statMins: "Dakika",
      statMinsShort: "Dk",
      statAssistsShort: "Asist",
      colComp: "Turnuva",
      statGoals: "Gol",
      statAssists: "Asist",
      statYellow: "Sarı",
      statRed: "Kırmızı",
      statsUpdated: "Güncelleme: {date}",
      statsNone: "bu oyuncu için veri bulunamadı",
      sectionScorers: "Gol krallığı",
      formTitle: "Son 5 maç",
      formLetter_w: "G",
      formLetter_d: "B",
      formLetter_l: "M",
      form_w: "Galibiyet",
      form_d: "Beraberlik",
      form_l: "Mağlubiyet",
      nextTitle: "Sıradaki maç",
      liveNow: "Maç oynanıyor",
      cdUnits: "g,sa,dk,sn",
      formNote: "Sonuçlar haftalık güncellemeyle eklenir.",
      bdayButton: "Bugün doğum günü olanlar",
      bdayTitle: "İyi ki doğdun!",
      bdayLine: "bugün {n} yaşında",
      sectionRisers: "En çok yükselenler",
      sectionFallers: "En çok düşenler",
      changeNote: "önceki değere göre",
      changeUp: "Değeri yükseldi",
      changeDown: "Değeri düştü",
      changeWas: "Önceki değer: {v} · değişiklik: {date}",
      sectionAssists: "Asist krallığı",
      goal1: "gol",
      goalN: "gol",
      assist1: "asist",
      assistN: "asist",
      game1: "{n} maç",
      gameN: "{n} maç",
      noLeaders: "Henüz gösterilecek veri yok.",
      footerNote: "Taraftar yapımı bir sitedir. Buradaki tüm piyasa değerleri kendi tahminimizdir. Hiçbir kulüp veya Transfermarkt ile bağlantısı yoktur.",
      footerPhotos: "Oyuncu fotoğrafları özgür lisanslarla Wikimedia Commons'tan alınmıştır. Fotoğrafçı bilgisi her oyuncunun penceresinde yer alır.",
      footerBg: "Arka plandaki Mauro Icardi fotoğrafı: Vyacheslav Evdokimov (düzenlenmiş), {license}, Wikimedia Commons.",
      footerStats: "Maç istatistikleri: {source}, son güncelleme {date}.",
      footerUpdated: "Son güncelleme: {date}.",
      cookieSettings: "Çerez ayarları"
    }
  };

  // code: [group, English, Turkish] — the order here is the order on squad pages.
  const POSITIONS = {
    GK: ["gk", "Goalkeeper", "Kaleci"],
    CB: ["def", "Centre-Back", "Stoper"],
    LB: ["def", "Left-Back", "Sol bek"],
    RB: ["def", "Right-Back", "Sağ bek"],
    DM: ["mid", "Defensive Midfield", "Defansif orta saha"],
    CM: ["mid", "Central Midfield", "Merkez orta saha"],
    AM: ["mid", "Attacking Midfield", "Ofansif orta saha"],
    LM: ["mid", "Left Midfield", "Sol orta saha"],
    RM: ["mid", "Right Midfield", "Sağ orta saha"],
    LW: ["fwd", "Left Winger", "Sol kanat"],
    RW: ["fwd", "Right Winger", "Sağ kanat"],
    SS: ["fwd", "Second Striker", "Forvet arkası"],
    CF: ["fwd", "Centre-Forward", "Santrafor"]
  };
  const POS_ALIASES = { ST: "CF", FW: "CF", CDM: "DM", CAM: "AM", LWB: "LB", RWB: "RB", DF: "CB", MF: "CM" };
  const POS_KEYS = Object.keys(POSITIONS);
  const GROUPS = ["gk", "def", "mid", "fwd"];

  // code: [English, Turkish]. Codes missing here fall back to the browser's own country names.
  const COUNTRIES = {
    al: ["Albania", "Arnavutluk"], ao: ["Angola", "Angola"], ar: ["Argentina", "Arjantin"],
    at: ["Austria", "Avusturya"], au: ["Australia", "Avustralya"], az: ["Azerbaijan", "Azerbaycan"],
    ba: ["Bosnia-Herzegovina", "Bosna-Hersek"], be: ["Belgium", "Belçika"], bf: ["Burkina Faso", "Burkina Faso"],
    bg: ["Bulgaria", "Bulgaristan"], bj: ["Benin", "Benin"], br: ["Brazil", "Brezilya"],
    ca: ["Canada", "Kanada"], cd: ["DR Congo", "Kongo DC"], cg: ["Congo", "Kongo"],
    ch: ["Switzerland", "İsviçre"], ci: ["Ivory Coast", "Fildişi Sahili"], cl: ["Chile", "Şili"],
    cm: ["Cameroon", "Kamerun"], co: ["Colombia", "Kolombiya"], cv: ["Cape Verde", "Yeşil Burun Adaları"],
    cz: ["Czechia", "Çekya"], de: ["Germany", "Almanya"], dk: ["Denmark", "Danimarka"],
    dz: ["Algeria", "Cezayir"], ec: ["Ecuador", "Ekvador"], eg: ["Egypt", "Mısır"],
    es: ["Spain", "İspanya"], fi: ["Finland", "Finlandiya"], fr: ["France", "Fransa"],
    ga: ["Gabon", "Gabon"], "gb-eng": ["England", "İngiltere"], "gb-nir": ["Northern Ireland", "Kuzey İrlanda"],
    "gb-sct": ["Scotland", "İskoçya"], "gb-wls": ["Wales", "Galler"], ge: ["Georgia", "Gürcistan"],
    gh: ["Ghana", "Gana"], gn: ["Guinea", "Gine"], gr: ["Greece", "Yunanistan"],
    gw: ["Guinea-Bissau", "Gine-Bissau"], hr: ["Croatia", "Hırvatistan"], hu: ["Hungary", "Macaristan"],
    ie: ["Ireland", "İrlanda"], ir: ["Iran", "İran"], is: ["Iceland", "İzlanda"],
    it: ["Italy", "İtalya"], jm: ["Jamaica", "Jamaika"], jp: ["Japan", "Japonya"],
    kr: ["South Korea", "Güney Kore"], ma: ["Morocco", "Fas"], me: ["Montenegro", "Karadağ"],
    mk: ["North Macedonia", "Kuzey Makedonya"], ml: ["Mali", "Mali"], mq: ["Martinique", "Martinik"],
    mx: ["Mexico", "Meksika"], ng: ["Nigeria", "Nijerya"], nl: ["Netherlands", "Hollanda"],
    no: ["Norway", "Norveç"], pa: ["Panama", "Panama"], pe: ["Peru", "Peru"],
    pl: ["Poland", "Polonya"], pt: ["Portugal", "Portekiz"], py: ["Paraguay", "Paraguay"],
    ro: ["Romania", "Romanya"], rs: ["Serbia", "Sırbistan"], ru: ["Russia", "Rusya"],
    se: ["Sweden", "İsveç"], si: ["Slovenia", "Slovenya"], sk: ["Slovakia", "Slovakya"],
    sn: ["Senegal", "Senegal"], sr: ["Suriname", "Surinam"], tn: ["Tunisia", "Tunus"],
    tr: ["Türkiye", "Türkiye"], ua: ["Ukraine", "Ukrayna"], us: ["United States", "ABD"],
    uy: ["Uruguay", "Uruguay"], ve: ["Venezuela", "Venezuela"], xk: ["Kosovo", "Kosova"],
    za: ["South Africa", "Güney Afrika"]
  };

  const MARK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 16.5l5-5 3.5 3 8-8.5"/><path d="M14.5 6h5.5v5.5"/></svg>';

  /* ---------- Language + formatting ---------- */

  const LANG_KEY = "gercek-deger.lang";
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* storage unavailable */ } }
  };

  let lang = (() => {
    const saved = store.get(LANG_KEY);
    if (saved === "tr" || saved === "en") return saved;
    const pref = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    return /^tr\b/i.test(pref) ? "tr" : "en";
  })();

  const loc = () => (lang === "tr" ? "tr-TR" : "en-GB");

  const t = (key, vars) => {
    let s = STR[lang][key] ?? STR.en[key] ?? key;
    if (vars) for (const k of Object.keys(vars)) s = s.split("{" + k + "}").join(String(vars[k]));
    return s;
  };

  // Light/dark: follows the device until the visitor picks one with the header button (index.html applies a saved
  // choice before the page draws, so it doesn't flash).
  const THEME_KEY = "mauros-value.theme";
  const darkQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>';
  const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
  {
    const saved = store.get(THEME_KEY);
    if (saved === "light" || saved === "dark") document.documentElement.dataset.theme = saved;
  }
  const currentTheme = () => document.documentElement.dataset.theme || (darkQuery && darkQuery.matches ? "dark" : "light");

  function renderThemeButton() {
    const btn = document.getElementById("theme");
    if (!btn) return;
    const dark = currentTheme() === "dark";
    const label = t(dark ? "themeLight" : "themeDark");
    btn.innerHTML = dark ? SUN : MOON;
    btn.setAttribute("aria-label", label);
    btn.title = label;
  }

  function toggleTheme() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    store.set(THEME_KEY, next);
    renderThemeButton();
  }

  if (darkQuery && darkQuery.addEventListener) darkQuery.addEventListener("change", renderThemeButton);

  // Birthday corner: a black-and-white cake button beside the theme button that only appears when a player's
  // birthday is today (Turkey time). It opens a small list of today's birthdays.
  const CAKE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.8c1 1 1.3 2 .9 2.7a1 1 0 0 1-1.8 0c-.4-.7-.1-1.7.9-2.7z" fill="currentColor"/><path d="M12 7.6v2.4"/><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M4 14.5q2 1.5 4 0t4 0t4 0t4 0"/></svg>';

  function birthdaysToday() {
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
    const [y, mo, d] = today.split("-").map(Number);
    const leap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
    return players
      .filter((p) => {
        if (!p.born) return false;
        const [, bm, bd] = p.born.split("-").map(Number);
        // Players born on 29 February celebrate on the 28th in other years.
        return (bm === mo && bd === d) || (!leap && bm === 2 && bd === 29 && mo === 2 && d === 28);
      })
      .map((p) => ({ p, age: y - Number(p.born.slice(0, 4)) }));
  }

  function renderBirthday() {
    const btn = document.getElementById("bday");
    const pop = document.getElementById("bday-pop");
    if (!btn || !pop) return;
    const list = birthdaysToday();
    btn.hidden = !list.length;
    if (!list.length) {
      pop.hidden = true;
      return;
    }
    btn.innerHTML = CAKE;
    btn.setAttribute("aria-label", t("bdayButton"));
    btn.title = t("bdayButton");
    pop.setAttribute("aria-label", t("bdayButton"));
    pop.innerHTML = `
      <p class="bday-title">${CAKE}${esc(t("bdayTitle"))}</p>
      <ul>${list.map(({ p, age }) => `
        <li class="club-scope" style="${p.club.vars}">
          ${avatar(p)}
          <span class="top-who">
            <button type="button" class="pname" data-player="${p.id}">${esc(p.name)}</button>
            <span class="sub">${badge(p.club, 16)}${esc(p.club.name)} · ${esc(t("bdayLine", { n: age }))}</span>
          </span>
        </li>`).join("")}
      </ul>`;
  }

  function toggleBirthdays(open) {
    const btn = document.getElementById("bday");
    const pop = document.getElementById("bday-pop");
    if (!btn || !pop || btn.hidden) return;
    const show = open ?? pop.hidden;
    pop.hidden = !show;
    btn.setAttribute("aria-expanded", String(show));
  }

  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const numberFormats = new Map();
  function nf(n, max = 2, min = 0) {
    const key = loc() + "|" + max + "|" + min;
    if (!numberFormats.has(key)) {
      numberFormats.set(key, new Intl.NumberFormat(loc(), { minimumFractionDigits: min, maximumFractionDigits: max }));
    }
    return numberFormats.get(key).format(n);
  }

  // Values are stored in millions of euros.
  function money(m) {
    if (m == null) return "—";
    const tr = lang === "tr";
    if (m >= 1000) return tr ? nf(m / 1000) + " mlr. €" : "€" + nf(m / 1000) + "bn";
    if (m >= 1) return tr ? nf(m) + " mil. €" : "€" + nf(m) + "m";
    if (m > 0) return tr ? nf(Math.round(m * 1000), 0) + " bin €" : "€" + nf(Math.round(m * 1000), 0) + "k";
    return tr ? "0 €" : "€0";
  }

  // A value that effects.js counts up from zero when its page opens.
  const countingMoney = (m) => `<span class="counting" data-count="${m}">${money(m)}</span>`;

  function fmtDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Intl.DateTimeFormat(loc(), { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
      .format(new Date(Date.UTC(y, m - 1, d)));
  }

  const NOW = new Date();

  function ageFrom(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    let age = NOW.getFullYear() - y;
    const month = NOW.getMonth() + 1;
    if (month < m || (month === m && NOW.getDate() < d)) age -= 1;
    return age;
  }

  function exactAge(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return (NOW.getTime() - Date.UTC(y, m - 1, d)) / 31556952000;
  }

  const collators = {};
  const collator = () => collators[lang] || (collators[lang] = new Intl.Collator(loc(), { sensitivity: "base" }));

  // Folds Turkish and accented letters so "ugurcan" finds "Uğurcan" and "skriniar" finds "Škriniar".
  const fold = (s) => String(s)
    .replace(/ı/g, "i").replace(/İ/g, "I")
    .replace(/[øØ]/g, "o").replace(/ß/g, "ss").replace(/[æÆ]/g, "ae").replace(/[đĐ]/g, "d").replace(/[łŁ]/g, "l")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase();

  const slug = (s) => fold(s).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  function initials(name) {
    const parts = String(name).trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "?";
    const raw = parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : parts[0].slice(0, 2);
    return raw.toLocaleUpperCase(loc());
  }

  function flagChar(code) {
    const c = code.toLowerCase();
    if (c === "gb-nir") return flagChar("gb");
    if (c.startsWith("gb-")) {
      const tags = [...("gb" + c.slice(3))].map((ch) => String.fromCodePoint(0xe0000 + ch.charCodeAt(0))).join("");
      return "\u{1F3F4}" + tags + "\u{E007F}";
    }
    if (!/^[a-z]{2}$/.test(c)) return "\u{1F3F3}";
    return String.fromCodePoint(...[...c.toUpperCase()].map((ch) => 0x1f1e6 + ch.charCodeAt(0) - 65));
  }

  function countryName(code) {
    const c = code.toLowerCase();
    if (COUNTRIES[c]) return COUNTRIES[c][lang === "tr" ? 1 : 0];
    try {
      return new Intl.DisplayNames([loc()], { type: "region" }).of(c.toUpperCase()) || c.toUpperCase();
    } catch (e) {
      return c.toUpperCase();
    }
  }

  const flag = (code) => {
    const name = esc(countryName(code));
    return `<span class="flag" role="img" aria-label="${name}" title="${name}">${flagChar(code)}</span>`;
  };

  const posLabel = (code) => (POSITIONS[code] ? POSITIONS[code][lang === "tr" ? 2 : 1] : code);

  /* ---------- Data ---------- */

  function toNumber(v) {
    if (typeof v === "number") return Number.isFinite(v) ? v : null;
    if (typeof v === "string" && v.trim()) {
      const n = parseFloat(v.replace(",", "."));
      return Number.isFinite(n) ? n : null;
    }
    return null;
  }

  const clubs = DATA.clubs.map((raw) => {
    const club = { ...raw };
    club.vars = `--c1:${raw.colors.main};--c2:${raw.colors.second};--cd:${raw.colors.dark || raw.colors.second}`;
    club.players = raw.players.map((p, i) => {
      const code = String(p.pos || "").toUpperCase();
      const pos = POSITIONS[code] ? code : POS_ALIASES[code] || code;
      const nat = (Array.isArray(p.nat) ? p.nat : p.nat ? [p.nat] : []).map((n) => String(n).toLowerCase());
      const key = slug(p.name);
      // A photo set in data.js wins; otherwise use the free photo from photos.js, if there is one.
      const own = typeof p.photo === "string" ? p.photo.trim() : "";
      const free = own ? null : PHOTOS[key] || null;
      return {
        ...p,
        pos,
        nat,
        club,
        order: i,
        id: raw.id + "--" + key,
        group: POSITIONS[pos] ? POSITIONS[pos][0] : "mid",
        age: p.born ? ageFrom(p.born) : toNumber(p.age),
        exactAge: p.born ? exactAge(p.born) : toNumber(p.age),
        value: toNumber(p.value),
        photo: own || (free ? free.file : ""),
        credit: free,
        stats: STAT_ROWS[key] || null,
        change: lastChange(HISTORY[key], toNumber(p.value))
      };
    });
    return club;
  });

  const players = clubs.flatMap((c) => c.players);
  const playerById = new Map(players.map((p) => [p.id, p]));
  const clubById = new Map(clubs.map((c) => [c.id, c]));
  const valued = players.filter((p) => p.value != null);
  const MAX_VALUE = valued.reduce((max, p) => Math.max(max, p.value), 0);

  // Ties share a rank (1, 2, 2, 4).
  function assignRanks(list, key) {
    const ranked = list.filter((p) => p.value != null).sort((a, b) => b.value - a.value);
    ranked.forEach((p, i) => {
      p[key] = i > 0 && p.value === ranked[i - 1].value ? ranked[i - 1][key] : i + 1;
    });
    return ranked;
  }

  assignRanks(players, "rank");

  for (const c of clubs) {
    const ranked = assignRanks(c.players, "clubRank");
    const ages = c.players.map((p) => p.exactAge).filter((a) => a != null);
    c.stats = {
      size: c.players.length,
      avgAge: ages.length ? ages.reduce((sum, a) => sum + a, 0) / ages.length : null,
      foreign: c.players.filter((p) => !p.nat.includes("tr")).length,
      total: ranked.reduce((sum, p) => sum + p.value, 0),
      valued: ranked.length,
      top: ranked[0] || null
    };
  }

  const posIndex = (p) => {
    const i = POS_KEYS.indexOf(p.pos);
    return i < 0 ? POS_KEYS.length : i;
  };
  const clubIndex = (p) => clubs.indexOf(p.club);
  const valueDesc = (a, b) => (b.value ?? -1) - (a.value ?? -1);

  const SORTS = {
    pos: (a, b) => posIndex(a) - posIndex(b) || valueDesc(a, b) || a.order - b.order,
    value: (a, b) => valueDesc(a, b) || clubIndex(a) - clubIndex(b) || posIndex(a) - posIndex(b) || a.order - b.order,
    age: (a, b) => (a.exactAge ?? 999) - (b.exactAge ?? 999) || SORTS.value(a, b),
    name: (a, b) => collator().compare(a.name, b.name)
  };

  /* ---------- Pieces ---------- */

  const state = { clubSort: "pos", club: "all", group: "all", sort: "value", q: "" };

  // League titles (titles in data.js) with a small trophy, shown after "Founded … · city".
  const TROPHY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 3h10v2h3v3a4 4 0 0 1-4 4h-.3A5 5 0 0 1 13 14.9V18h3v2H8v-2h3v-3.1A5 5 0 0 1 8.3 12H8a4 4 0 0 1-4-4V5h3V3zm0 4H6v1a2 2 0 0 0 1 1.7V7zm10 0v2.7A2 2 0 0 0 18 8V7h-1z"/></svg>';
  const titlesTag = (c, ownLine) => {
    if (!c.titles) return "";
    const tag = `<span class="titles">${TROPHY}${esc(t("titles", { n: c.titles }))}</span>`;
    return ownLine ? `<br>${tag}` : ` · ${tag}`;
  };

  // The club's crest (logo in data.js); clubs without one get a round badge in their colours.
  function badge(c, size) {
    if (c.logo) {
      return `<img class="badge badge-logo" src="${esc(assetUrl(c.logo))}" width="${size}" height="${size}" alt="" aria-hidden="true" decoding="async">`;
    }
    const fontSize = c.short.length > 2 ? 12 : 15;
    return `<svg class="badge" width="${size}" height="${size}" viewBox="0 0 40 40" aria-hidden="true" focusable="false">` +
      `<circle class="badge-edge" cx="20" cy="20" r="19.3" fill="${c.colors.second}"/>` +
      `<circle cx="20" cy="20" r="15.6" fill="${c.colors.main}"/>` +
      `<text x="20" y="20.8" text-anchor="middle" dominant-baseline="central" font-size="${fontSize}" fill="${c.colors.second}">${esc(c.short)}</text>` +
      `</svg>`;
  }

  function avatar(p, cls = "avatar") {
    // Photos carry the upload's ?v= stamp, so a replaced photo shows straight away instead of an old saved copy.
    const src = /^(https?:|data:)/.test(p.photo) ? p.photo : assetUrl(p.photo);
    const img = p.photo ? `<img src="${esc(src)}" alt="" loading="lazy" decoding="async">` : "";
    return `<span class="${cls}" style="${p.club.vars}" aria-hidden="true">${esc(initials(p.name))}${img}</span>`;
  }

  const shirt = (p) => (p.no != null && p.no !== ""
    ? `<span class="shirt">${esc(p.no)}</span>`
    : `<span class="shirt none">–</span>`);

  function valueCell(p) {
    if (p.value == null) {
      return `<span class="no-val" title="${esc(t("notValued"))}">—<span class="vh">${esc(t("notValued"))}</span></span>`;
    }
    const width = MAX_VALUE ? Math.max(3, (p.value / MAX_VALUE) * 100) : 0;
    return `<span class="amt">${money(p.value)}${changeTag(p)}</span><span class="vbar" aria-hidden="true"><i style="width:${width.toFixed(1)}%"></i></span>`;
  }

  // The latest change in a player's value history (history.js), as long as it's still their current value.
  function lastChange(list, value) {
    if (!Array.isArray(list) || list.length < 2 || value == null) return null;
    const [date, to] = list[list.length - 1];
    const from = list[list.length - 2][1];
    if (Math.abs(to - value) > 0.0005 || Math.abs(to - from) < 0.0005) return null;
    return { from, to, diff: to - from, date };
  }

  // Green up / red down arrow. Short form (tables) is just the arrow with the details in its tooltip.
  function changeTag(p, full) {
    const ch = p.change;
    if (!ch) return "";
    const up = ch.diff > 0;
    const arrow = up ? "▲" : "▼";
    const amount = (up ? "+" : "−") + money(Math.abs(ch.diff));
    if (full) return `<span class="chg ${up ? "up" : "down"}"><span aria-hidden="true">${arrow}</span> ${esc(amount)}</span>`;
    const label = `${t(up ? "changeUp" : "changeDown")} (${amount}). ${t("changeWas", { v: money(ch.from), date: fmtDate(ch.date) })}`;
    return `<span class="chg ${up ? "up" : "down"}" title="${esc(label)}"><span aria-hidden="true">${arrow}</span><span class="vh">${esc(label)}</span></span>`;
  }

  function pendingNote() {
    if (valued.length === players.length) return "";
    return `<p class="pending">${esc(t("valuesPending", { n: valued.length, total: players.length }))}</p>`;
  }

  function seg(key, options) {
    const buttons = options.map(([val, label]) =>
      `<button type="button" data-set="${key}" data-val="${val}" aria-pressed="${state[key] === val}">${esc(label)}</button>`).join("");
    return `<div class="seg" role="group" aria-label="${esc(t("sortBy"))}"><span class="seg-label" aria-hidden="true">${esc(t("sortBy"))}</span>${buttons}</div>`;
  }

  // "Market value" is too wide for a phone-sized table, so phones get the short "Value".
  const valueHeader = () =>
    `<th class="c-val" scope="col"><span class="th-long">${esc(t("colValue"))}</span><span class="th-short">${esc(t("sortValue"))}</span></th>`;

  const chip = (key, val, html, title) =>
    `<button type="button" class="chip" data-set="${key}" data-val="${val}" aria-pressed="${state[key] === val}"${title ? ` title="${esc(title)}"` : ""}>${html}</button>`;

  function playerRow(p, showClub) {
    const flags = p.nat.map(flag).join("");
    const lead = showClub ? `<td class="c-rank">${p.rank ?? "–"}</td>` : `<td class="c-no">${shirt(p)}</td>`;
    const clubCell = showClub
      ? `<td class="c-club"><a class="club-chip" href="#${p.club.id}" title="${esc(p.club.name)}">${badge(p.club, 24)}<span>${esc(p.club.name)}</span></a></td>`
      : "";
    const nat = p.nat.length
      ? `<span class="nat">${flags}<span class="nat-name">${esc(countryName(p.nat[0]))}</span></span>`
      : "–";
    return `
      <tr class="prow club-scope" data-player="${p.id}" style="${p.club.vars}">
        ${lead}
        <td class="c-player">
          <div class="pcell">
            ${avatar(p)}
            <div class="ptext">
              <button type="button" class="pname" data-player="${p.id}">${esc(p.name)}</button>
              <span class="sub">${esc(posLabel(p.pos))}${flags ? `<span class="sub-flags">${flags}</span>` : ""}</span>
            </div>
          </div>
        </td>
        ${clubCell}
        <td class="c-age">${p.age ?? "–"}</td>
        <td class="c-nat">${nat}</td>
        <td class="c-val">${valueCell(p)}</td>
      </tr>`;
  }

  /* ---------- Pages ---------- */

  function clubCard(c) {
    const s = c.stats;
    const foot = s.top
      ? `<span>${esc(t("mostValuable"))}: <b>${esc(s.top.name)}</b> · ${money(s.top.value)}</span>`
      : `<span>${esc(t("valuedOf", { n: s.valued, total: s.size }))}</span>`;
    return `
      <a class="club-card club-scope" href="#${c.id}" style="${c.vars}">
        <div class="cc-top" data-short="${esc(c.short)}">
          ${badge(c, 84)}
          <div><h3>${esc(c.name)}</h3><p>${esc(t("founded", { y: c.founded }))} · ${esc(c.city)}${titlesTag(c, true)}</p></div>
        </div>
        <dl class="cc-stats">
          <div><dt>${esc(t("squadSize"))}</dt><dd>${s.size}</dd></div>
          <div><dt>${esc(t("avgAge"))}</dt><dd>${s.avgAge != null ? nf(s.avgAge, 1, 1) : "–"}</dd></div>
          <div><dt>${esc(t("foreign"))}</dt><dd>${s.foreign}</dd></div>
          <div class="cc-total"><dt>${esc(t("totalValue"))}</dt><dd>${s.valued ? countingMoney(s.total) : "—"}</dd></div>
        </dl>
        <div class="cc-foot">${foot}<span class="cc-go" aria-hidden="true">→</span></div>
      </a>`;
  }

  function totalsPanel() {
    const rows = clubs.slice().sort((a, b) => b.stats.total - a.stats.total || clubs.indexOf(a) - clubs.indexOf(b));
    const max = Math.max(...rows.map((c) => c.stats.total)) || 1;
    const items = rows.map((c) => {
      const partial = c.stats.valued < c.stats.size
        ? `<small>${esc(t("valuedOf", { n: c.stats.valued, total: c.stats.size }))}</small>`
        : "";
      return `
        <li class="club-scope" style="${c.vars}">
          <a class="tot-name" href="#${c.id}">${badge(c, 44)}<span>${esc(c.name)}</span></a>
          <span class="tot-val">${c.stats.valued ? countingMoney(c.stats.total) : "—"}${partial}</span>
          <span class="tot-track"><i style="width:${((c.stats.total / max) * 100).toFixed(1)}%"></i></span>
        </li>`;
    }).join("");
    return `
      <section class="panel" aria-labelledby="totals-title">
        <div class="panel-head"><h2 id="totals-title">${esc(t("sectionTotals"))}</h2></div>
        <ol class="totals">${items}</ol>
      </section>`;
  }

  function topPanel() {
    const items = valued.slice().sort(SORTS.value).slice(0, 10).map((p) => `
      <li class="club-scope" data-player="${p.id}" style="${p.club.vars}">
        <span class="top-rank">${p.rank}</span>
        ${avatar(p)}
        <span class="top-who">
          <button type="button" class="pname" data-player="${p.id}">${esc(p.name)}</button>
          <span class="sub">${badge(p.club, 16)}${esc(p.club.name)} · ${esc(posLabel(p.pos))}</span>
        </span>
        <span class="top-val">${countingMoney(p.value)}${changeTag(p)}</span>
      </li>`).join("");
    return `
      <section class="panel" aria-labelledby="top-title">
        <div class="panel-head"><h2 id="top-title">${esc(t("sectionTop"))}</h2><a class="more" href="#players">${esc(t("seeAll"))} →</a></div>
        <ol class="top">${items}</ol>
      </section>`;
  }

  // Top 10 by goals or assists across the four clubs. Ties share a rank; fewer games ranks first.
  function leaderPanel(key, titleKey, unitOne, unitMany) {
    const list = players
      .filter((p) => p.stats && p.stats[key] > 0)
      .sort((a, b) => b.stats[key] - a.stats[key] || a.stats.apps - b.stats.apps || collator().compare(a.name, b.name));
    let rank = 0;
    let previous = null;
    const items = list.slice(0, 10).map((p, i) => {
      const n = p.stats[key];
      if (n !== previous) { rank = i + 1; previous = n; }
      const games = t(p.stats.apps === 1 ? "game1" : "gameN", { n: p.stats.apps });
      return `
        <li class="club-scope" data-player="${p.id}" style="${p.club.vars}">
          <span class="top-rank">${rank}</span>
          ${avatar(p)}
          <span class="top-who">
            <button type="button" class="pname" data-player="${p.id}">${esc(p.name)}</button>
            <span class="sub">${badge(p.club, 16)}${esc(p.club.name)} · ${esc(games)}</span>
          </span>
          <span class="top-val">${n} <small>${esc(t(n === 1 ? unitOne : unitMany))}</small></span>
        </li>`;
    }).join("");
    const id = "leaders-" + key;
    return `
      <section class="panel" aria-labelledby="${id}">
        <div class="panel-head">
          <h2 id="${id}">${esc(t(titleKey))}</h2>
          <span class="panel-note">${esc(t("statsNote", { season: STATS.season || DATA.season }))}</span>
        </div>
        ${items ? `<ol class="top">${items}</ol>` : `<p class="results">${esc(t("noLeaders"))}</p>`}
      </section>`;
  }

  // Top 5 risers (dir 1) or fallers (dir -1) by their latest value change.
  function changePanel(dir) {
    const list = players
      .filter((p) => p.change && Math.sign(p.change.diff) === dir)
      .sort((a, b) => Math.abs(b.change.diff) - Math.abs(a.change.diff) || b.value - a.value)
      .slice(0, 5);
    if (!list.length) return "";
    const id = dir > 0 ? "risers-title" : "fallers-title";
    const items = list.map((p, i) => `
      <li class="club-scope" data-player="${p.id}" style="${p.club.vars}">
        <span class="top-rank">${i + 1}</span>
        ${avatar(p)}
        <span class="top-who">
          <button type="button" class="pname" data-player="${p.id}">${esc(p.name)}</button>
          <span class="sub">${badge(p.club, 16)}${esc(money(p.change.from))} → ${esc(money(p.change.to))}</span>
        </span>
        <span class="top-val">${changeTag(p, true)}</span>
      </li>`).join("");
    return `
      <section class="panel" aria-labelledby="${id}">
        <div class="panel-head">
          <h2 id="${id}">${esc(t(dir > 0 ? "sectionRisers" : "sectionFallers"))}</h2>
          <span class="panel-note">${esc(t("changeNote"))}</span>
        </div>
        <ol class="top">${items}</ol>
      </section>`;
  }

  function homePage() {
    const lower = valued.length
      ? `<div class="split">${totalsPanel()}${topPanel()}</div>`
      : `<section class="empty-values">
           <span class="ev-icon" aria-hidden="true">€</span>
           <div><h2>${esc(t("noValuesTitle"))}</h2><p>${esc(t("noValuesText"))}</p></div>
         </section>`;
    const leaders = STATS.updated
      ? `<div class="split split-even">${leaderPanel("goals", "sectionScorers", "goal1", "goalN")}${leaderPanel("assists", "sectionAssists", "assist1", "assistN")}</div>`
      : "";
    const changes = changePanel(1) + changePanel(-1);
    return `
      <section class="hero">
        <p class="eyebrow">Süper Lig · ${esc(DATA.season)}</p>
        <h1>${esc(t("heroTitle"))}</h1>
        <p class="lede">${esc(t("heroText"))}</p>
        ${pendingNote()}
      </section>
      <section aria-labelledby="clubs-title">
        <div class="section-head"><h2 id="clubs-title">${esc(t("sectionClubs"))}</h2></div>
        <div class="club-grid">${clubs.map(clubCard).join("")}</div>
      </section>
      ${lower}
      ${changes ? `<div class="split split-even">${changes}</div>` : ""}
      ${leaders}`;
  }

  /* ---------- Club pages: last 5 results and the next-match countdown (fixtures.js "clubs") ---------- */

  const CLUB_FORM = (window.GD_FIXTURES || {}).clubs || {};
  // The data provider writes Turkish club names without Turkish letters.
  const TEAM_NAMES = {
    Fenerbahce: "Fenerbahçe", Besiktas: "Beşiktaş", Genclerbirligi: "Gençlerbirliği", Kasimpasa: "Kasımpaşa",
    Eyupspor: "Eyüpspor", Goztepe: "Göztepe", Basaksehir: "Başakşehir", "Istanbul Basaksehir": "İstanbul Başakşehir",
    Karagumruk: "Karagümrük", "Fatih Karagumruk": "Fatih Karagümrük", "Caykur Rizespor": "Çaykur Rizespor"
  };
  const teamName = (n) => TEAM_NAMES[n] || n;
  const MATCH_LENGTH = 2 * 60 * 60 * 1000;
  const shortDate = (iso) => new Intl.DateTimeFormat(loc(), { day: "numeric", month: "short" }).format(new Date(iso));

  function resultOf(m) {
    const us = m.ourSide === "home" ? m.hs : m.as;
    const them = m.ourSide === "home" ? m.as : m.hs;
    return us > them ? "w" : us < them ? "l" : "d";
  }

  // The first scheduled match that hasn't finished yet (the data is refreshed weekly, so skip ones already played).
  function nextMatch(c) {
    const now = Date.now();
    return ((CLUB_FORM[c.id] || {}).next || []).find((m) => Date.parse(m.kickoff) + MATCH_LENGTH > now) || null;
  }

  function compLogoImg(id) {
    const logo = ((STATS.competitions || {})[id] || {}).logo;
    return logo ? `<span class="comp-logo"><img src="${esc(assetUrl(logo))}" alt="" loading="lazy"></span>` : "";
  }

  function countdownHtml(iso) {
    const left = Date.parse(iso) - Date.now();
    if (left <= 0) return `<span class="cd-live">${esc(t("liveNow"))}</span>`;
    const units = t("cdUnits").split(",");
    const sec = Math.floor(left / 1000);
    const parts = [Math.floor(sec / 86400), Math.floor(sec / 3600) % 24, Math.floor(sec / 60) % 60, sec % 60];
    return parts.map((n, i) => `<span class="cd-part"><b>${i ? String(n).padStart(2, "0") : n}</b>${esc(units[i])}</span>`).join("");
  }

  function matchStrip(c) {
    const form = CLUB_FORM[c.id];
    if (!form) return "";
    const results = (form.last || []).map((m) => {
      const r = resultOf(m);
      const home = m.ourSide === "home";
      const us = home ? m.hs : m.as;
      const them = home ? m.as : m.hs;
      const opponent = teamName(home ? m.away : m.home);
      const label = `${t("form_" + r)}: ${teamName(m.home)} ${m.hs}–${m.as} ${teamName(m.away)} · ${compName(m.comp)} · ${shortDate(m.kickoff)}`;
      return `
        <li class="fm fm-${r}" title="${esc(label)}">
          <span class="fm-dot" aria-hidden="true">${esc(t("formLetter_" + r))}</span>
          <span class="fm-score" aria-hidden="true">${us}–${them}</span>
          <span class="fm-opp" aria-hidden="true">${esc(opponent)}</span>
          <span class="vh">${esc(label)}</span>
        </li>`;
    }).join("");
    const next = nextMatch(c);
    const nextBox = next ? `
      <div class="next-match">
        <p class="strip-title">${esc(t("nextTitle"))}</p>
        <p class="nm-teams">${compLogoImg(next.comp)}<span>${esc(teamName(next.home))} – ${esc(teamName(next.away))}</span></p>
        <p class="nm-when">${esc(compName(next.comp))} · ${esc(kickoffText(next.kickoff))}</p>
        <p class="countdown" data-countdown="${esc(next.kickoff)}">${countdownHtml(next.kickoff)}</p>
      </div>` : "";
    if (!results && !nextBox) return "";
    return `
      <section class="match-strip club-scope" style="${c.vars}">
        ${results ? `
        <div class="form">
          <p class="strip-title">${esc(t("formTitle"))}</p>
          <ol class="form-list">${results}</ol>
          <p class="strip-note">${esc(t("formNote"))}</p>
        </div>` : ""}
        ${nextBox}
      </section>`;
  }

  // The bar under the header: the soonest match of any of the four clubs (a derby counts once).
  function closestMatch() {
    const now = Date.now();
    let best = null;
    for (const c of clubs) {
      for (const m of (CLUB_FORM[c.id] || {}).next || []) {
        const at = Date.parse(m.kickoff);
        if (at + MATCH_LENGTH > now && (!best || at < Date.parse(best.m.kickoff))) best = { m, club: c };
      }
    }
    return best;
  }

  const ourClub = (name) => clubs.find((c) => fold(c.name) === fold(teamName(name)));

  function renderNextBar() {
    const bar = document.getElementById("next-bar");
    if (!bar) return;
    const best = closestMatch();
    bar.hidden = !best;
    if (!best) {
      bar.innerHTML = "";
      return;
    }
    const { m, club } = best;
    const side = (name) => {
      const c = ourClub(name);
      return `<span class="nb-team">${c ? badge(c, 20) : ""}${esc(teamName(name))}</span>`;
    };
    bar.innerHTML = `
      <a class="nb-inner" href="#${club.id}">
        <span class="nb-label">${esc(t("nextTitle"))}</span>
        <span class="nb-match">${side(m.home)}<span class="nb-dash">–</span>${side(m.away)}</span>
        <span class="nb-when">${compLogoImg(m.comp)}${esc(compName(m.comp))} · ${esc(kickoffText(m.kickoff))}</span>
        <span class="countdown nb-cd" data-countdown="${esc(m.kickoff)}">${countdownHtml(m.kickoff)}</span>
      </a>`;
  }

  // The faded Icardi picture in the background starts just below the header and next-match bar, whose height
  // changes with the screen width, so his face is never hidden behind them.
  function placeBackdrop() {
    const bar = document.getElementById("next-bar");
    const ref = bar && !bar.hidden ? bar : document.querySelector(".site-header");
    if (!ref) return;
    const bottom = ref.getBoundingClientRect().bottom + window.scrollY;
    document.body.style.setProperty("--mauro-top", Math.round(bottom + 14) + "px");
  }
  window.addEventListener("resize", placeBackdrop);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeBackdrop);

  // Tick every countdown on the page once a second, and move the top bar on once a match is over.
  setInterval(() => {
    document.querySelectorAll("[data-countdown]").forEach((el) => { el.innerHTML = countdownHtml(el.dataset.countdown); });
  }, 1000);
  setInterval(renderNextBar, 60000);

  function clubPage(c) {
    const s = c.stats;
    const list = c.players.slice().sort(SORTS[state.clubSort] || SORTS.pos);
    let rows = "";
    let group = null;
    for (const p of list) {
      if (state.clubSort === "pos" && p.group !== group) {
        group = p.group;
        rows += `<tr class="group"><th colspan="5" scope="colgroup">${esc(t("group_" + group))}</th></tr>`;
      }
      rows += playerRow(p, false);
    }
    return `
      <div class="club-page">
        <section class="club-band club-scope" style="${c.vars}" data-short="${esc(c.short)}">
          ${badge(c, 92)}
          <div class="cb-id">
            <p class="cb-eyebrow">Süper Lig · ${esc(DATA.season)}</p>
            <h1>${esc(c.name)}</h1>
            <p class="cb-meta">${esc(t("founded", { y: c.founded }))} · ${esc(c.city)} · ${esc(c.stadium)} (${esc(t("seats", { n: nf(c.seats, 0) }))})${titlesTag(c)}</p>
          </div>
          <dl class="cb-stats">
            <div><dt>${esc(t("squadSize"))}</dt><dd>${s.size}</dd></div>
            <div><dt>${esc(t("avgAge"))}</dt><dd>${s.avgAge != null ? nf(s.avgAge, 1, 1) : "–"}</dd></div>
            <div><dt>${esc(t("foreign"))}</dt><dd>${s.foreign}</dd></div>
            <div><dt>${esc(t("totalValue"))}</dt><dd>${s.valued ? countingMoney(s.total) : "—"}</dd></div>
          </dl>
        </section>
        ${matchStrip(c)}
        ${pendingNote()}
        <div class="toolbar">
          <h2>${esc(t("squad"))} <span class="count">${esc(t("playersCount", { n: s.size }))}</span></h2>
          ${seg("clubSort", [["pos", t("sortPos")], ["value", t("sortValue")], ["age", t("sortAge")]])}
        </div>
        <div class="table-wrap">
          <table class="squad club-scope" style="${c.vars}">
            <thead><tr>
              <th class="c-no" scope="col">#</th>
              <th scope="col">${esc(t("colPlayer"))}</th>
              <th class="c-age" scope="col">${esc(t("colAge"))}</th>
              <th class="c-nat" scope="col">${esc(t("colNat"))}</th>
              ${valueHeader()}
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  }

  function playersPage() {
    const query = state.q.trim();
    const folded = fold(query);
    const list = players
      .filter((p) => (state.club === "all" || p.club.id === state.club)
        && (state.group === "all" || p.group === state.group)
        && (!folded || fold(p.name).includes(folded)))
      .sort(SORTS[state.sort] || SORTS.value);

    const clubChips = [chip("club", "all", esc(t("allClubs")))]
      .concat(clubs.map((c) => chip("club", c.id, `${badge(c, 20)}<span>${esc(c.short)}</span>`, c.name)))
      .join("");
    const groupChips = [chip("group", "all", esc(t("allPos")))]
      .concat(GROUPS.map((g) => chip("group", g, esc(t("group_" + g)))))
      .join("");

    const summary = folded
      ? `<p class="results">${esc(list.length ? t("resultsFor", { n: list.length, q: query }) : t("noResults", { q: query }))}
           <button type="button" class="link" data-action="clear-search">${esc(t("clearSearch"))}</button></p>`
      : `<p class="results">${esc(t("playersCount", { n: list.length }))}</p>`;

    const table = list.length ? `
      <div class="table-wrap">
        <table class="squad">
          <thead><tr>
            <th class="c-rank" scope="col">${esc(t("colRank"))}</th>
            <th scope="col">${esc(t("colPlayer"))}</th>
            <th class="c-club" scope="col">${esc(t("colClub"))}</th>
            <th class="c-age" scope="col">${esc(t("colAge"))}</th>
            <th class="c-nat" scope="col">${esc(t("colNat"))}</th>
            ${valueHeader()}
          </tr></thead>
          <tbody>${list.map((p) => playerRow(p, true)).join("")}</tbody>
        </table>
      </div>` : "";

    return `
      <section class="page-head">
        <p class="eyebrow">Süper Lig · ${esc(DATA.season)}</p>
        <h1>${esc(t("navPlayers"))}</h1>
        <p class="lede">${esc(t("playersLede"))}</p>
        ${pendingNote()}
      </section>
      <div class="filters">
        <div class="chips" role="group" aria-label="${esc(t("colClub"))}">${clubChips}</div>
        <div class="chips" role="group" aria-label="${esc(t("position"))}">${groupChips}</div>
        ${seg("sort", [["value", t("sortValue")], ["age", t("sortAge")], ["name", t("sortName")]])}
      </div>
      ${summary}
      ${table}`;
  }

  /* ---------- Player dialog ---------- */

  const dialog = $("#player");
  let openId = null;

  // Competition ids come from stats.js; these give short names in both languages and the display order.
  const COMPETITIONS = [
    ["super-lig", "Süper Lig", "Süper Lig"],
    ["turkish-cup", "Turkish Cup", "Türkiye Kupası"],
    ["turkiye-kupasi", "Turkish Cup", "Türkiye Kupası"],
    ["turkish-super-cup", "Super Cup", "Süper Kupa"],
    ["super-cup", "Super Cup", "Süper Kupa"],
    ["uefa-champions-league", "Champions League", "Şampiyonlar Ligi"],
    ["uefa-europa-league", "Europa League", "Avrupa Ligi"],
    ["uefa-conference-league", "Conference League", "Konferans Ligi"],
    ["uefa-europa-conference-league", "Conference League", "Konferans Ligi"]
  ];
  const compOrder = (id) => {
    const i = COMPETITIONS.findIndex((c) => c[0] === id);
    return i < 0 ? COMPETITIONS.length : i;
  };
  const compName = (id) => {
    const known = COMPETITIONS.find((c) => c[0] === id);
    if (known) return known[lang === "tr" ? 2 : 1];
    return ((STATS.competitions || {})[id] || {}).name || id;
  };

  // Logos reuse the ?v= stamp that each upload puts on app.js, so a changed logo is never shown from an old saved copy.
  const ASSET_STAMP = (() => {
    const tag = document.querySelector('script[src*="app.js"]');
    const m = tag && /[?&]v=(\w+)/.exec(tag.getAttribute("src"));
    return m ? m[1] : "";
  })();
  const assetUrl = (path) => (ASSET_STAMP ? `${path}?v=${ASSET_STAMP}` : path);

  // One row per competition: logo, name, then games, minutes, goals, assists, yellow, red.
  function compTable(s) {
    const ids = Object.keys((s && s.comps) || {}).sort((a, b) => compOrder(a) - compOrder(b));
    if (!ids.length) return "";
    const card = (cls, key) => `<span class="card-icon ${cls}" aria-hidden="true"></span><span class="vh">${esc(t(key))}</span>`;
    const rows = ids.map((id) => {
      const c = s.comps[id];
      const logo = ((STATS.competitions || {})[id] || {}).logo;
      return `
        <tr>
          <th scope="row"><span class="comp">${logo ? `<span class="comp-logo"><img src="${esc(assetUrl(logo))}" alt="" loading="lazy"></span>` : ""}${esc(compName(id))}</span></th>
          <td>${c[0]}</td><td>${nf(c[1], 0)}</td><td>${c[2]}</td><td>${c[3]}</td><td>${c[4]}</td><td>${c[5]}</td>
        </tr>`;
    }).join("");
    return `
      <div class="pm-comps">
        <table>
          <thead><tr>
            <th scope="col">${esc(t("colComp"))}</th>
            <th scope="col">${esc(t("statApps"))}</th>
            <th scope="col">${esc(t("statMinsShort"))}</th>
            <th scope="col">${esc(t("statGoals"))}</th>
            <th scope="col">${esc(t("statAssistsShort"))}</th>
            <th scope="col">${card("yellow", "statYellow")}</th>
            <th scope="col">${card("red", "statRed")}</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }

  // Season stats from stats.js: games, minutes, goals, assists, cards. Hidden until stats.js has data.
  function statsBlock(p) {
    if (!STATS.updated) return "";
    const s = p.stats;
    const num = (k) => (s ? (Number.isFinite(s[k]) ? s[k] : 0) : "–");
    const mins = s && Number.isFinite(s.mins) ? nf(s.mins, 0) : "–";
    const card = (cls) => `<span class="card-icon ${cls}" aria-hidden="true"></span>`;
    const foot = esc(t("statsUpdated", { date: fmtDate(STATS.updated) })) + (s ? "" : " · " + esc(t("statsNone")));
    return `
      <section class="pm-stats" aria-labelledby="pm-stats-title">
        <div class="pm-stats-head">
          <h3 id="pm-stats-title">${esc(t("statsTitle"))}</h3>
          <span>${esc(t("statsNote", { season: STATS.season || DATA.season }))}</span>
        </div>
        <dl class="pm-stat-grid">
          <div><dt>${esc(t("statApps"))}</dt><dd>${num("apps")}</dd></div>
          <div><dt>${esc(t("statMins"))}</dt><dd>${mins}</dd></div>
          <div><dt>${esc(t("statGoals"))}</dt><dd>${num("goals")}</dd></div>
          <div><dt>${esc(t("statAssists"))}</dt><dd>${num("assists")}</dd></div>
          <div><dt>${card("yellow")}<span class="card-label">${esc(t("statYellow"))}</span></dt><dd>${num("yellow")}</dd></div>
          <div><dt>${card("red")}<span class="card-label">${esc(t("statRed"))}</span></dt><dd>${num("red")}</dd></div>
        </dl>
        ${compTable(s)}
        <p class="pm-stats-foot">${foot}</p>
      </section>`;
  }

  function openPlayer(id) {
    const p = playerById.get(id);
    if (!p) return;
    const c = p.club;
    const fresh = openId !== id;
    if (fresh) votes.saveError = false;
    openId = id;
    dialog.className = "player-dialog club-scope";
    dialog.setAttribute("style", c.vars);
    const change = p.change
      ? `<span class="pm-change">${changeTag(p, true)}<span>${esc(t("changeWas", { v: money(p.change.from), date: fmtDate(p.change.date) }))}</span></span>`
      : "";
    const value = p.value != null
      ? `<strong>${money(p.value)}</strong>${change}<span class="ranks">${esc(t("rankClub", { n: p.clubRank }))} · ${esc(t("rankAll", { n: p.rank }))}</span>`
      : `<strong class="none">—</strong><span class="ranks">${esc(t("notValued"))}</span>`;
    const nats = p.nat.map((n) => `<span class="nat-line">${flag(n)}${esc(countryName(n))}</span>`).join("") || "–";
    const link = (href, text) => (href ? `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(text)}</a>` : esc(text));
    const author = String(p.credit && p.credit.by || "").replace(/^User:/i, "").trim() || "Wikimedia Commons";
    const credit = p.credit
      ? `<p class="pm-credit">${esc(t("photoBy"))} ${link(p.credit.source, author)}${p.credit.license ? " · " + link(p.credit.licenseUrl, p.credit.license) : ""}</p>`
      : "";
    dialog.innerHTML = `
      <div class="pm-head">
        ${badge(c, 30)}
        <a class="pm-club" href="#${c.id}" data-action="close">${esc(c.name)}</a>
        <button type="button" class="pm-close" data-action="close" aria-label="${esc(t("close"))}">×</button>
      </div>
      <div class="pm-body">
        <div class="pm-side">${avatar(p, "pm-photo")}${credit}</div>
        <div class="pm-info">
          <p class="pm-pos">${shirt(p)}${esc(posLabel(p.pos))}</p>
          <h2 id="pm-name">${esc(p.name)}</h2>
          <div class="pm-value">
            <div class="pm-value-main"><span class="label">${esc(t("marketValue"))}</span>${value}</div>
            ${voteBox(p)}
          </div>
          ${statsBlock(p)}
          <dl class="pm-facts">
            <div><dt>${esc(t("age"))}</dt><dd>${p.age ?? "–"}</dd></div>
            ${p.born ? `<div><dt>${esc(t("born"))}</dt><dd>${esc(fmtDate(p.born))}</dd></div>` : ""}
            <div><dt>${esc(t("nationality"))}</dt><dd>${nats}</dd></div>
          </dl>
        </div>
      </div>`;
    if (!dialog.open) dialog.showModal();
    const close = dialog.querySelector(".pm-close");
    if (close) close.focus();
    if (fresh && window.MVFx) MVFx.flip(dialog.querySelector(".pm-value strong:not(.none)"));
    if (SHARED && Date.now() - votes.loadedAt > 60000) loadVotes();
  }

  /* ---------- "Is this value right?" ---------- */

  // Fans vote each value too low / fair / too high. Votes live in the owner's Supabase table "value_votes",
  // one per browser per player (a random id in localStorage, no accounts); the view "value_vote_counts" adds them up.
  const VOTER_KEY = "mauros-value.voter";
  const MY_VOTES_KEY = "mauros-value.votes";
  const VOTE_KINDS = [[-1, "voteLow"], [0, "voteFair"], [1, "voteHigh"]];
  const votes = {
    counts: new Map(),
    loadedAt: 0,
    error: false,
    saveError: false,
    mine: (() => { try { return JSON.parse(store.get(MY_VOTES_KEY) || "{}") || {}; } catch (e) { return {}; } })()
  };

  function voterId() {
    let id = store.get(VOTER_KEY);
    if (!id) {
      id = window.crypto && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2);
      store.set(VOTER_KEY, id);
    }
    return id;
  }

  function voteBox(p) {
    if (!SHARED || p.value == null) return "";
    const c = votes.counts.get(p.id) || { "-1": 0, "0": 0, "1": 0 };
    const total = c["-1"] + c["0"] + c["1"];
    const mine = votes.mine[p.id];
    const buttons = VOTE_KINDS.map(([v, key]) => {
      const pct = total ? Math.round((c[v] / total) * 100) : 0;
      return `<button type="button" class="vote vote-${v < 0 ? "low" : v > 0 ? "high" : "fair"}" data-vote="${v}" aria-pressed="${mine === v}" style="--pct: ${pct}%">
          <span>${esc(t(key))}</span>${total ? `<span class="vote-pct">${pct}%</span>` : ""}
        </button>`;
    }).join("");
    const note = votes.saveError ? t("voteSaveError")
      : votes.error ? t("voteError")
      : !votes.loadedAt ? t("voteLoading")
      : total ? t("voteCount", { n: total.toLocaleString(loc()) })
      : t("voteFirst");
    return `<div class="pm-vote">
        <p class="pm-vote-q">${esc(t("voteQuestion"))}</p>
        <div class="vote-row" role="group" aria-label="${esc(t("voteQuestion"))}">${buttons}</div>
        <p class="pm-vote-note" aria-live="polite">${esc(note)}</p>
      </div>`;
  }

  // Redraw only the vote box of the open popup, keeping focus on the button that was focused.
  function refreshVoteBox() {
    const box = dialog.open && dialog.querySelector(".pm-vote");
    const p = openId && playerById.get(openId);
    if (!box || !p) return;
    const focused = document.activeElement && document.activeElement.closest && document.activeElement.closest("[data-vote]");
    box.outerHTML = voteBox(p);
    if (focused) {
      const again = dialog.querySelector(`[data-vote="${focused.dataset.vote}"]`);
      if (again) again.focus();
    }
  }

  async function loadVotes() {
    try {
      const r = await fetch(`${SUPABASE.url}/rest/v1/value_vote_counts?select=player,low,fair,high`, { headers: sbHeaders() });
      if (!r.ok) throw new Error("HTTP " + r.status);
      const rows = await r.json();
      votes.counts = new Map(rows.map((x) => [x.player, { "-1": Number(x.low) || 0, "0": Number(x.fair) || 0, "1": Number(x.high) || 0 }]));
      votes.error = false;
    } catch (e) {
      votes.error = true;
    }
    votes.loadedAt = Date.now();
    refreshVoteBox();
  }

  async function castVote(p, v) {
    if (!p || !SHARED || votes.mine[p.id] === v) return;
    const prev = votes.mine[p.id];
    // Show it straight away, then store it; a new vote replaces this browser's old one.
    const c = { "-1": 0, "0": 0, "1": 0, ...votes.counts.get(p.id) };
    if (prev != null) c[prev] = Math.max(0, c[prev] - 1);
    c[v] += 1;
    votes.counts.set(p.id, c);
    votes.mine[p.id] = v;
    store.set(MY_VOTES_KEY, JSON.stringify(votes.mine));
    votes.saveError = false;
    refreshVoteBox();
    try {
      const r = await fetch(`${SUPABASE.url}/rest/v1/value_votes?on_conflict=voter,player`, {
        method: "POST",
        headers: { ...sbHeaders(), "Content-Type": "application/json", Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify({ voter: voterId(), player: p.id, vote: v, updated_at: new Date().toISOString() })
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
    } catch (e) {
      if (prev == null) delete votes.mine[p.id]; else votes.mine[p.id] = prev;
      store.set(MY_VOTES_KEY, JSON.stringify(votes.mine));
      votes.saveError = true;
    }
    loadVotes();
  }

  dialog.addEventListener("close", () => { openId = null; });
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

  /* ---------- Predictions ---------- */

  // Shared guesses live in the owner's Supabase table "guesses" (public read/insert/update by design: a fan game
  // with no accounts). The publishable key is meant to be public. Until it's filled in, guesses stay in this browser.
  const SUPABASE = { url: "https://mthczixjdmepkqlkuxjw.supabase.co", key: "sb_publishable_kEPXQjr4U_q8yGlsztQUhQ_i_J22HHE" };
  const SHARED = Boolean(SUPABASE.url && SUPABASE.key);
  const GUESS_KEY = "mauros-value.guesses";
  const USER_KEY = "mauros-value.user";

  const localGuesses = {
    all() {
      try { return JSON.parse(store.get(GUESS_KEY) || "[]").filter((g) => g && g.user && g.match); } catch (e) { return []; }
    },
    save(entry) {
      const list = this.all().filter((g) => !(g.user === entry.user && g.match === entry.match));
      list.push(entry);
      store.set(GUESS_KEY, JSON.stringify(list.slice(-500)));
    }
  };

  const remote = { list: [], loaded: false, error: "" };
  const sbHeaders = () => ({ apikey: SUPABASE.key, Authorization: `Bearer ${SUPABASE.key}` });

  async function loadSharedGuesses() {
    try {
      const r = await fetch(`${SUPABASE.url}/rest/v1/guesses?select=username,match_id,home,away,updated_at&order=updated_at.desc&limit=1000`, { headers: sbHeaders() });
      if (!r.ok) throw new Error("HTTP " + r.status);
      const rows = await r.json();
      remote.list = rows.map((x) => ({ user: x.username, match: x.match_id, h: x.home, a: x.away, at: x.updated_at }));
      remote.error = "";
    } catch (e) {
      remote.error = "load";
    }
    remote.loaded = true;
    rerenderPredictions();
  }

  async function saveSharedGuess(entry) {
    // Show it straight away, then store it; one guess per username per match (a new guess replaces the old one).
    remote.list = remote.list.filter((g) => !(g.user === entry.user && g.match === entry.match));
    remote.list.unshift(entry);
    try {
      const r = await fetch(`${SUPABASE.url}/rest/v1/guesses?on_conflict=username,match_id`, {
        method: "POST",
        headers: { ...sbHeaders(), "Content-Type": "application/json", Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify({ username: entry.user, match_id: entry.match, home: entry.h, away: entry.a, updated_at: entry.at })
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      remote.error = "";
    } catch (e) {
      remote.error = "save";
    }
    loadSharedGuesses();
  }

  const guessStore = {
    all() { return SHARED ? remote.list : localGuesses.all(); },
    save(entry) {
      localGuesses.save(entry);
      if (SHARED) saveSharedGuess(entry);
    }
  };

  // Re-render the predictions page without jumping, and never while someone is typing a score.
  function rerenderPredictions() {
    if (currentRoute().page !== "predictions") return;
    const active = document.activeElement;
    if (active && active.closest && active.closest(".mt-guess")) return;
    const y = window.scrollY;
    renderMain();
    window.scrollTo(0, y);
  }
  let predUser = (store.get(USER_KEY) || "").trim();
  let justSaved = null;

  const FIXTURES = ((window.GD_FIXTURES || {}).matches || []).slice();
  const clubName = (id) => (clubById.get(id) || {}).name;

  // Our club shows with its proper name and badge; the opponent as the provider names it.
  function teamLabel(m, side) {
    const ours = m.ourSide === side;
    const club = clubById.get(m.club);
    const name = ours && club ? club.name : m[side];
    return `<span class="mt-team${ours ? " ours" : ""}">${ours && club ? badge(club, 22) : ""}<span>${esc(name)}</span></span>`;
  }

  const stageLabel = (stage) => {
    if (/qualif/i.test(stage)) return t("stage_qualifying");
    if (/league/i.test(stage)) return t("stage_league");
    if (/knock|play-?off|final|round of/i.test(stage)) return t("stage_knockout");
    return stage;
  };

  const kickoffText = (iso) =>
    new Intl.DateTimeFormat(loc(), { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(iso));

  // Exact score, right result (win/draw/loss), or a miss.
  function verdict(m, g) {
    if (m.status !== "played" || m.hs == null || g == null) return "";
    if (g.h === m.hs && g.a === m.as) return `<span class="verdict exact">${esc(t("predExact"))}</span>`;
    if (Math.sign(g.h - g.a) === Math.sign(m.hs - m.as)) return `<span class="verdict right">${esc(t("predResult"))}</span>`;
    return `<span class="verdict miss">${esc(t("predMiss"))}</span>`;
  }

  function matchCard(m, mine) {
    const meta = (STATS.competitions || {})[m.comp] || {};
    const logo = meta.logo || `images/leagues/${m.comp}.png`;
    const played = m.status === "played" && m.hs != null;
    const g = mine[m.id];
    const centre = played
      ? `<span class="mt-score">${m.hs}<i>–</i>${m.as}</span>`
      : `<span class="mt-vs">vs</span>`;
    return `
      <article class="match club-scope" style="${clubById.get(m.club) ? clubById.get(m.club).vars : ""}">
        <header class="mt-head">
          <span class="comp"><span class="comp-logo"><img src="${esc(assetUrl(logo))}" alt="" loading="lazy"></span>${esc(compName(m.comp))} · ${esc(stageLabel(m.stage))}</span>
          <time datetime="${esc(m.kickoff)}">${esc(kickoffText(m.kickoff))}</time>
        </header>
        <div class="mt-row">${teamLabel(m, "home")}${centre}${teamLabel(m, "away")}</div>
        <form class="mt-guess" data-match="${esc(m.id)}">
          <input type="number" inputmode="numeric" min="0" max="20" name="h" aria-label="${esc(m.home)}" value="${g ? g.h : ""}" required>
          <span aria-hidden="true">–</span>
          <input type="number" inputmode="numeric" min="0" max="20" name="a" aria-label="${esc(m.away)}" value="${g ? g.a : ""}" required>
          <button type="submit">${esc(justSaved === m.id ? t("predSaved") + " ✓" : t("predSave"))}</button>
          ${g ? `<span class="mt-mine">${esc(t("predYour", { score: g.h + "–" + g.a }))}</span>` : ""}
          ${verdict(m, g)}
        </form>
      </article>`;
  }

  function predictionsPage() {
    const head = `
      <section class="page-head">
        <p class="eyebrow">${esc(t("predEyebrow", { season: DATA.season }))}</p>
        <h1>${esc(t("navPredictions"))}</h1>
        <p class="lede">${esc(t("predLede"))}</p>
      </section>`;
    if (!predUser) {
      return head + `
        <form class="pred-name" id="pred-name-form">
          <label for="pred-user">${esc(t("predNameLabel"))}</label>
          <div class="pred-name-row">
            <input id="pred-user" type="text" maxlength="20" autocomplete="nickname" placeholder="${esc(t("predNamePlaceholder"))}" required>
            <button type="submit">${esc(t("predContinue"))}</button>
          </div>
        </form>`;
    }
    const all = guessStore.all();
    const mine = {};
    all.filter((g) => g.user === predUser).forEach((g) => { mine[g.match] = g; });
    const list = FIXTURES.filter((m) => state.club === "all" || m.club === state.club);
    const upcoming = list.filter((m) => m.status !== "played").sort((a, b) => a.kickoff.localeCompare(b.kickoff));
    const played = list.filter((m) => m.status === "played").sort((a, b) => b.kickoff.localeCompare(a.kickoff));
    const clubChips = [chip("club", "all", esc(t("allClubs")))]
      .concat(clubs.map((c) => chip("club", c.id, `${badge(c, 20)}<span>${esc(c.short)}</span>`, c.name)))
      .join("");
    const byId = new Map(FIXTURES.map((m) => [m.id, m]));
    const wall = all.filter((g) => byId.has(g.match)).sort((a, b) => (b.at || "").localeCompare(a.at || "")).slice(0, 60);
    const wallItems = wall.map((g) => {
      const m = byId.get(g.match);
      const home = m.ourSide === "home" ? clubName(m.club) : m.home;
      const away = m.ourSide === "away" ? clubName(m.club) : m.away;
      return `
        <li>
          <p class="wall-who"><b>${esc(g.user)}</b> ${esc(t("predGuessed", { name: "" }).trim())}</p>
          <p class="wall-guess">${esc(home)} <b>${g.h}–${g.a}</b> ${esc(away)} ${verdict(m, g)}</p>
          <p class="wall-meta">${esc(compName(m.comp))} · ${esc(kickoffText(m.kickoff))}</p>
        </li>`;
    }).join("");
    return head + `
      <div class="pred-bar">
        <p>${esc(t("predHello", { name: predUser }))}</p>
        <button type="button" class="link" data-action="pred-change">${esc(t("predChange"))}</button>
      </div>
      <div class="filters"><div class="chips" role="group" aria-label="${esc(t("colClub"))}">${clubChips}</div></div>
      <div class="pred-layout">
        <div class="pred-matches">
          ${upcoming.length ? `<h2 class="pred-h">${esc(t("predUpcoming"))}</h2>${upcoming.map((m) => matchCard(m, mine)).join("")}` : ""}
          ${played.length ? `<h2 class="pred-h">${esc(t("predPlayed"))}</h2>${played.map((m) => matchCard(m, mine)).join("")}` : ""}
          ${!upcoming.length && !played.length ? `<p class="results">${esc(t("predNone"))}</p>` : ""}
        </div>
        <aside class="panel pred-wall" aria-labelledby="wall-title">
          <div class="panel-head">
            <h2 id="wall-title">${esc(t("predWall"))}</h2>
            ${SHARED ? `<button type="button" class="link" data-action="pred-refresh">${esc(t("predRefresh"))}</button>` : ""}
          </div>
          <p class="wall-note">${esc(t(SHARED ? "predWallShared" : "predWallNote"))}</p>
          ${remote.error ? `<p class="wall-error">${esc(t(remote.error === "save" ? "predSaveError" : "predLoadError"))}</p>` : ""}
          ${SHARED && !remote.loaded ? `<p class="results">${esc(t("predLoading"))}</p>`
            : wallItems ? `<ol class="wall">${wallItems}</ol>` : `<p class="results">${esc(t("predWallEmpty"))}</p>`}
        </aside>
      </div>`;
  }

  // Username form and guess forms on the predictions page.
  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (form.id === "pred-name-form") {
      e.preventDefault();
      const name = form.querySelector("#pred-user").value.replace(/\s+/g, " ").trim().slice(0, 20);
      if (!name) return;
      predUser = name;
      store.set(USER_KEY, name);
      renderMain();
      return;
    }
    if (form.classList && form.classList.contains("mt-guess")) {
      e.preventDefault();
      const h = parseInt(form.elements.h.value, 10);
      const a = parseInt(form.elements.a.value, 10);
      if (!Number.isFinite(h) || !Number.isFinite(a) || h < 0 || a < 0 || h > 20 || a > 20) return;
      const id = form.dataset.match;
      guessStore.save({ user: predUser, match: id, h, a, at: new Date().toISOString() });
      justSaved = id;
      const y = window.scrollY;
      renderMain();
      window.scrollTo(0, y);
    }
  });

  /* ---------- Render + routing ---------- */

  const searchInput = $("#q");
  let lastPageKey = null;

  function currentRoute() {
    const hash = decodeURIComponent(location.hash.replace(/^#/, "")).toLowerCase();
    if (clubById.has(hash)) return { page: "club", club: clubById.get(hash) };
    if (hash === "players") return { page: "players" };
    if (hash === "predictions") return { page: "predictions" };
    return { page: "home" };
  }

  function renderTabs(route) {
    const tab = (href, inner, current, extra = "") =>
      `<a href="${href}"${current ? ' aria-current="page"' : ""}${extra}>${inner}</a>`;
    const items = [
      tab("#home", `<span class="tab-full">${esc(t("navHome"))}</span><span class="tab-short" aria-hidden="true">${esc(t("navHomeShort"))}</span>`, route.page === "home"),
      ...clubs.map((c) => tab(
        "#" + c.id,
        `${badge(c, 22)}<span class="tab-full">${esc(c.name)}</span>`,
        route.page === "club" && route.club === c,
        ` class="club-scope" style="${c.vars}" title="${esc(c.name)}"`
      )),
      tab("#players", `<span class="tab-full">${esc(t("navPlayers"))}</span><span class="tab-short" aria-hidden="true">${esc(t("navPlayersShort"))}</span>`, route.page === "players"),
      tab("#predictions", `<span class="tab-full">${esc(t("navPredictions"))}</span><span class="tab-short" aria-hidden="true">${esc(t("navPredictionsShort"))}</span>`, route.page === "predictions")
    ];
    $("#tabs").innerHTML = `<div class="tabs-inner">${items.join("")}</div>`;
  }

  function renderChrome() {
    document.documentElement.lang = lang;
    $("#tagline").textContent = t("tagline");
    searchInput.placeholder = t("search");
    searchInput.setAttribute("aria-label", t("search"));
    $("#lang").setAttribute("aria-label", t("language"));
    document.querySelectorAll("#lang [data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    renderThemeButton();
    renderBirthday();
    renderNextBar();
    placeBackdrop();
    $("#footer").innerHTML = `
      <div class="foot-inner">
        <div class="foot-brand"><span class="brand-mark">${MARK}</span>Mauro's Value</div>
        <p>${esc(t("footerNote"))}</p>
        ${players.some((p) => p.credit) ? `<p>${esc(t("footerPhotos"))}</p>` : ""}
        <p>${esc(t("footerBg")).replace("{license}", '<a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener">CC BY-SA 3.0</a>').replace("Wikimedia Commons", '<a href="https://commons.wikimedia.org/wiki/File:Zen-Int_(2)_-_Mauro_Icardi_(cropped).jpg" target="_blank" rel="noopener">Wikimedia Commons</a>')}</p>
        ${STATS.updated && STATS.source ? `<p>${esc(t("footerStats", { source: STATS.source, date: fmtDate(STATS.updated) }))}</p>` : ""}
        <p>${esc(t("footerUpdated", { date: fmtDate(DATA.updated) }))}</p>
        ${window.MVAnalytics ? `<p><button type="button" class="link" data-action="cookie-settings">${esc(t("cookieSettings"))}</button></p>` : ""}
      </div>`;
  }

  function renderMain() {
    const route = currentRoute();
    if (route.page !== "players" && state.q) {
      state.q = "";
      searchInput.value = "";
    }
    renderTabs(route);
    if (route.page !== "predictions") justSaved = null;
    $("#main").innerHTML = route.page === "club" ? clubPage(route.club)
      : route.page === "players" ? playersPage()
      : route.page === "predictions" ? predictionsPage()
      : homePage();
    document.title = route.page === "club" ? `${route.club.name} · Mauro's Value`
      : route.page === "players" ? `${t("navPlayers")} · Mauro's Value`
      : route.page === "predictions" ? `${t("navPredictions")} · Mauro's Value`
      : "Mauro's Value";
    if (route.page === "predictions" && !predUser) {
      const input = $("#pred-user");
      if (input) input.focus();
    }
    const key = route.page + (route.club ? ":" + route.club.id : "");
    if (key !== lastPageKey) {
      if (lastPageKey !== null) window.scrollTo(0, 0);
      lastPageKey = key;
      if (window.MVFx) {
        const main = $("#main");
        MVFx.enter(main);
        MVFx.countUp(main, money);
        if (route.page === "club") {
          const c = route.club;
          MVFx.confetti([c.colors.main, c.colors.second], main.querySelector(".club-band .badge, .club-band svg"));
        }
      }
      // Fetch everyone's guesses each time the predictions page is opened.
      if (route.page === "predictions" && SHARED) loadSharedGuesses();
    }
  }

  function setLang(next) {
    if ((next !== "tr" && next !== "en") || next === lang) return;
    lang = next;
    store.set(LANG_KEY, lang);
    renderChrome();
    renderMain();
    if (dialog.open && openId) openPlayer(openId);
  }

  /* ---------- Events ---------- */

  document.addEventListener("click", (e) => {
    const el = e.target instanceof Element ? e.target : null;
    if (!el) return;

    const setter = el.closest("[data-set]");
    if (setter) {
      state[setter.dataset.set] = setter.dataset.val;
      renderMain();
      const again = document.querySelector(`[data-set="${setter.dataset.set}"][data-val="${setter.dataset.val}"]`);
      if (again) again.focus();
      return;
    }

    if (el.closest("#theme")) {
      toggleTheme();
      return;
    }

    if (el.closest("#bday")) {
      toggleBirthdays();
      return;
    }
    // Any other click closes the birthday list (a name in it still opens that player below).
    if (!el.closest("#bday-pop") || el.closest("[data-player]")) toggleBirthdays(false);

    const voteButton = el.closest("[data-vote]");
    if (voteButton && openId) {
      castVote(playerById.get(openId), Number(voteButton.dataset.vote));
      return;
    }

    const langButton = el.closest("[data-lang]");
    if (langButton) {
      setLang(langButton.dataset.lang);
      return;
    }

    const action = el.closest("[data-action]");
    if (action) {
      if (action.dataset.action === "close") dialog.close();
      if (action.dataset.action === "pred-refresh") loadSharedGuesses();
      if (action.dataset.action === "cookie-settings") window.MVAnalytics.ask();
      if (action.dataset.action === "pred-change") {
        predUser = "";
        store.set(USER_KEY, "");
        renderMain();
      }
      if (action.dataset.action === "clear-search") {
        state.q = "";
        searchInput.value = "";
        renderMain();
        searchInput.focus();
      }
      return;
    }

    if (el.closest("a")) return;
    const row = el.closest("[data-player]");
    if (row) openPlayer(row.dataset.player);
  });

  searchInput.addEventListener("input", () => {
    state.q = searchInput.value;
    if (currentRoute().page !== "players") {
      state.club = "all";
      state.group = "all";
      location.hash = "players";
    } else {
      renderMain();
    }
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchInput.value) {
      searchInput.value = "";
      state.q = "";
      renderMain();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleBirthdays(false);
    if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey || dialog.open) return;
    const tag = document.activeElement ? document.activeElement.tagName : "";
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;
    e.preventDefault();
    searchInput.focus();
  });

  // A photo path that doesn't load falls back to the initials underneath it (and drops its credit).
  document.addEventListener("error", (e) => {
    const el = e.target;
    if (!(el instanceof HTMLImageElement) || !el.closest(".avatar, .pm-photo")) return;
    const side = el.closest(".pm-side");
    const credit = side && side.querySelector(".pm-credit");
    if (credit) credit.remove();
    el.remove();
  }, true);

  window.addEventListener("hashchange", () => {
    if (dialog.open) dialog.close();
    renderMain();
  });

  // Two white fireworks, top-left and top-right, once when the site opens.
  function fireworks() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = document.createElement("canvas");
    canvas.className = "fireworks";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const W = window.innerWidth;
    const H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    // White sparks need a soft shadow on the light background and a soft glow on the dark one.
    const bg = getComputedStyle(document.body).backgroundColor.match(/\d+/g) || [255, 255, 255];
    const darkBg = (0.3 * bg[0] + 0.59 * bg[1] + 0.11 * bg[2]) < 128;
    ctx.shadowColor = darkBg ? "rgba(255, 255, 255, 0.9)" : "rgba(16, 26, 20, 0.65)";
    ctx.shadowBlur = darkBg ? 8 : 5;
    ctx.strokeStyle = "#FFFFFF";
    ctx.fillStyle = "#FFFFFF";
    ctx.lineCap = "round";

    const unit = Math.max(0.7, Math.min(W, H) / 700);
    const rockets = [
      { x: W * 0.16, delay: 0 },
      { x: W * 0.84, delay: 280 }
    ].map((r) => ({ ...r, y0: H + 10, y1: H * (W < 720 ? 0.22 : 0.2), rise: 750, burst: false, sparks: [] }));

    const start = performance.now();
    let last = start;
    function frame(now) {
      const dt = Math.min(2.5, (now - last) / 16.7);
      last = now;
      ctx.clearRect(0, 0, W, H);
      let alive = false;
      for (const r of rockets) {
        const t = now - start - r.delay;
        if (t < 0) { alive = true; continue; }
        if (!r.burst) {
          // Rising rocket with a short tail, easing out as it reaches the top.
          const k = Math.min(1, t / r.rise);
          const ease = 1 - Math.pow(1 - k, 3);
          const y = r.y0 + (r.y1 - r.y0) * ease;
          ctx.globalAlpha = 1;
          ctx.lineWidth = 2.2;
          ctx.beginPath();
          ctx.moveTo(r.x, y + 26 * (1 - ease) + 6);
          ctx.lineTo(r.x, y);
          ctx.stroke();
          alive = true;
          if (k >= 1) {
            r.burst = true;
            for (let i = 0; i < 80; i++) {
              const a = (Math.PI * 2 * i) / 80 + Math.random() * 0.08;
              const s = (1.6 + Math.random() * 3.2) * unit;
              r.sparks.push({ x: r.x, y: r.y1, px: r.x, py: r.y1, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, fade: 0.010 + Math.random() * 0.008 });
            }
          }
          continue;
        }
        for (const p of r.sparks) {
          if (p.life <= 0) continue;
          alive = true;
          p.px = p.x; p.py = p.y;
          p.vx *= Math.pow(0.975, dt);
          p.vy = p.vy * Math.pow(0.975, dt) + 0.045 * unit * dt;
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.life -= p.fade * dt;
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(p.px, p.py);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
          // A little twinkle near the end.
          if (p.life < 0.35 && Math.random() < 0.25) ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
        }
      }
      if (alive && now - start < 4500) requestAnimationFrame(frame);
      else canvas.remove();
    }
    requestAnimationFrame(frame);
    // Safety net: never leave the canvas behind, even if the browser pauses animations.
    setTimeout(() => canvas.remove(), 6000);
  }

  // Opening show: the floodlights come on, a ball rolls up to the logo, then the two fireworks go off.
  function opening() {
    if (window.MVFx) {
      MVFx.floodlights();
      MVFx.rollingBall();
    }
    setTimeout(fireworks, window.MVFx ? 700 : 0);
  }

  renderChrome();
  renderMain();
  // If the site was opened in a background tab, wait until it's actually on screen.
  if (document.hidden) {
    document.addEventListener("visibilitychange", function show() {
      if (document.hidden) return;
      document.removeEventListener("visibilitychange", show);
      opening();
    });
  } else {
    opening();
  }
})();
