(function () {
  "use strict";

  var STORAGE_KEY = "nutrition-lang";
  var SITE_ORIGIN = window.location.origin;
  var SITE_PATH = window.location.pathname.replace(/\/[^/]*$/, "/") || "/";

  var translations = {
    en: {
      "meta.description":
        "Nutrition — AI-powered meal logging, smart goals, and a personal coach. Track 8 nutrients. Your data stays on your device.",
      "meta.title": "Nutrition — Log smarter. Hit your targets.",
      "nav.features": "Features",
      "nav.nutrients": "Nutrients",
      "nav.help": "Help",
      "nav.privacy": "Privacy",
      "nav.terms": "Terms",
      "nav.getApp": "Get the app",
      "lang.toggle": "Language",
      "hero.title1": "Snap a meal.",
      "hero.title2a": "Track every ",
      "hero.title2b": ".",
      "hero.lead":
        "Photo, text, or conversation — get calories, protein, carbs, and five more nutrients in seconds. No database hunting.",
      "hero.highlight1": "8 nutrients",
      "hero.highlight2": "AI logging",
      "hero.highlight3": "Stays on iPhone",
      "hero.cta1": "Coming to App Store",
      "hero.cta2": "See features",
      "hero.trust1": "Photo logging",
      "hero.trust2": "On your iPhone",
      "hero.trust3": "Personal coach",
      "hero.preview.chip": "AI scan",
      "hero.preview.meal": "Salmon rice bowl",
      "hero.preview.logged": "520 kcal · logged",
      "hero.preview.protein": "Protein",
      "hero.preview.carbs": "Carbs",
      "hero.preview.fat": "Fat",
      "features.title": "Built for real life",
      "features.sub": "Quick logging, deep tracking, zero clutter.",
      "feature1.title": "AI meal logging",
      "feature1.desc":
        "Photo, camera, or text — get a full nutrition breakdown in seconds. No manual database hunting.",
      "feature2.title": "8 nutrients, color-coded",
      "feature2.desc":
        "Calories, protein, carbs, fat, fiber, sugar, saturated fat, and sodium — progress at a glance.",
      "feature3.title": "Personal coach",
      "feature3.desc":
        "Chat that knows your goals, logs, and habits. Attach photos or PDFs for context.",
      "feature4.title": "Recipes & quick items",
      "feature4.desc":
        "Save go-to meals once. Log them instantly from Home with a simple slash command.",
      "feature5.title": "Smart goals",
      "feature5.desc":
        "Targets tailored to your body, activity, and goal — fat loss, maintenance, muscle gain, or better habits.",
      "feature6.title": "History & export",
      "feature6.desc":
        "Browse any day on the calendar. Export meals, goals, recipes, and weight history as CSV anytime.",
      "nutrients.title": "Eight nutrients, one glance",
      "nutrients.lead":
        "Color-coded progress on Home and History — green on track, warming as you near your limit.",
      "nutrients.today": "Today's progress",
      "nutrients.calories": "Calories",
      "nutrients.protein": "Protein",
      "nutrients.carbs": "Carbs",
      "nutrients.fat": "Fat",
      "nutrients.fiber": "Fiber",
      "nutrients.sugar": "Sugar",
      "nutrients.satFat": "Sat. fat",
      "nutrients.sodium": "Sodium",
      "privacy.tagline": "Your journal stays yours",
      "privacy.title": "Private by design",
      "privacy.lead": "Your nutrition journal stays on your iPhone — not our servers. Built for privacy under Canadian law.",
      "privacy.item1.title": "On-device journal",
      "privacy.item1.desc":
        "Meals, goals, recipes, and weight history stay on your iPhone via Apple's local storage. No account required — we never receive your journal on our servers.",
      "privacy.item2.title": "No ads, no data sales",
      "privacy.item2.desc":
        "Nutrition doesn't sell your information or use it for advertising. This site uses no tracking cookies or analytics scripts.",
      "privacy.item3.title": "AI only when you ask",
      "privacy.item3.desc":
        "Photo analysis and coaching send content to Google Gemini only when you tap those features. Nothing runs in the background.",
      "privacy.item4.title": "You control your data",
      "privacy.item4.desc":
        "Export everything as CSV from Settings, or delete all app data by removing the app from your device.",
      "cta.title": "Ready to eat with clarity?",
      "cta.lead": "Coming soon to the App Store",
      "cta.badgeAlt": "Download on the App Store — coming soon",
      "waitlist.label": "Get notified at launch",
      "waitlist.placeholder": "you@example.com",
      "waitlist.button": "Notify me",
      "waitlist.success": "Thanks — you're on the list.",
      "waitlist.error": "Something went wrong. Please try again.",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.help": "Help",
      "footer.contact": "Contact",
    },
    fr: {
      "meta.description":
        "Nutrition — journal alimentaire avec IA, objectifs intelligents et coach personnel. Suivez 8 nutriments. Vos données restent sur votre appareil.",
      "meta.title": "Nutrition — Consignez mieux. Atteignez vos objectifs.",
      "nav.features": "Fonctionnalités",
      "nav.nutrients": "Nutriments",
      "nav.help": "Aide",
      "nav.privacy": "Confidentialité",
      "nav.terms": "Conditions",
      "nav.getApp": "Obtenir l'app",
      "lang.toggle": "Langue",
      "hero.title1": "Capturez un repas.",
      "hero.title2a": "Suivez chaque ",
      "hero.title2b": ".",
      "hero.lead":
        "Photo, texte ou conversation — obtenez calories, protéines, glucides et cinq autres nutriments en quelques secondes. Sans chercher dans une base de données.",
      "hero.highlight1": "8 nutriments",
      "hero.highlight2": "Journal IA",
      "hero.highlight3": "Reste sur iPhone",
      "hero.cta1": "Bientôt sur l'App Store",
      "hero.cta2": "Voir les fonctionnalités",
      "hero.trust1": "Journal photo",
      "hero.trust2": "Sur votre iPhone",
      "hero.trust3": "Coach personnel",
      "hero.preview.chip": "Analyse IA",
      "hero.preview.meal": "Bol saumon et riz",
      "hero.preview.logged": "520 kcal · enregistré",
      "hero.preview.protein": "Protéines",
      "hero.preview.carbs": "Glucides",
      "hero.preview.fat": "Lipides",
      "features.title": "Conçu pour la vraie vie",
      "features.sub": "Journalisation rapide, suivi approfondi, zéro encombrement.",
      "feature1.title": "Journal alimentaire IA",
      "feature1.desc":
        "Photo, caméra ou texte — obtenez une analyse nutritionnelle complète en quelques secondes. Sans recherche manuelle.",
      "feature2.title": "8 nutriments, code couleur",
      "feature2.desc":
        "Calories, protéines, glucides, lipides, fibres, sucres, gras saturés et sodium — progrès en un coup d'œil.",
      "feature3.title": "Coach personnel",
      "feature3.desc":
        "Une conversation qui connaît vos objectifs, journaux et habitudes. Joignez photos ou PDF pour le contexte.",
      "feature4.title": "Recettes et repas rapides",
      "feature4.desc":
        "Enregistrez vos repas favoris une fois. Consignez-les instantanément depuis l'accueil avec une simple commande.",
      "feature5.title": "Objectifs intelligents",
      "feature5.desc":
        "Cibles adaptées à votre corps, activité et objectif — perte de gras, maintien, prise de muscle ou meilleures habitudes.",
      "feature6.title": "Historique et export",
      "feature6.desc":
        "Consultez n'importe quel jour dans le calendrier. Exportez repas, objectifs, recettes et poids en CSV à tout moment.",
      "nutrients.title": "Huit nutriments, un coup d'œil",
      "nutrients.lead":
        "Progrès code couleur sur l'accueil et l'historique — vert dans la cible, plus chaud à l'approche de la limite.",
      "nutrients.today": "Progrès du jour",
      "nutrients.calories": "Calories",
      "nutrients.protein": "Protéines",
      "nutrients.carbs": "Glucides",
      "nutrients.fat": "Lipides",
      "nutrients.fiber": "Fibres",
      "nutrients.sugar": "Sucres",
      "nutrients.satFat": "Gras sat.",
      "nutrients.sodium": "Sodium",
      "privacy.tagline": "Votre journal vous appartient",
      "privacy.title": "Confidentialité intégrée",
      "privacy.lead": "Votre journal nutritionnel reste sur votre iPhone — pas sur nos serveurs. Conçu pour la confidentialité, conformément aux lois canadiennes.",
      "privacy.item1.title": "Journal sur l'appareil",
      "privacy.item1.desc":
        "Repas, objectifs, recettes et historique de poids restent sur votre iPhone via le stockage local d'Apple. Aucun compte requis — nous ne recevons jamais votre journal sur nos serveurs.",
      "privacy.item2.title": "Pas de pub, pas de vente de données",
      "privacy.item2.desc":
        "Nutrition ne vend pas vos renseignements et ne les utilise pas à des fins publicitaires. Ce site n'utilise aucun témoin de suivi ni script d'analyse.",
      "privacy.item3.title": "IA seulement sur demande",
      "privacy.item3.desc":
        "L'analyse photo et le coaching envoient du contenu à Google Gemini seulement lorsque vous utilisez ces fonctions. Rien ne s'exécute en arrière-plan.",
      "privacy.item4.title": "Vous contrôlez vos données",
      "privacy.item4.desc":
        "Exportez tout en CSV depuis Réglages, ou supprimez toutes les données en retirant l'app de votre appareil.",
      "cta.title": "Prêt à manger en toute clarté?",
      "cta.lead": "Bientôt sur l'App Store",
      "cta.badgeAlt": "Télécharger dans l'App Store — bientôt disponible",
      "waitlist.label": "Recevoir un avis au lancement",
      "waitlist.placeholder": "vous@exemple.com",
      "waitlist.button": "M'aviser",
      "waitlist.success": "Merci — vous êtes inscrit.",
      "waitlist.error": "Une erreur s'est produite. Veuillez réessayer.",
      "footer.privacy": "Confidentialité",
      "footer.terms": "Conditions",
      "footer.help": "Aide",
      "footer.contact": "Contact",
    },
  };

  function detectBrowserLang() {
    var langs = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < langs.length; i++) {
      var code = (langs[i] || "").toLowerCase();
      if (code.indexOf("fr") === 0) {
        return "fr";
      }
    }
    return "en";
  }

  function getLangFromUrl() {
    try {
      var params = new URLSearchParams(window.location.search);
      var lang = params.get("lang");
      if (lang === "en" || lang === "fr") {
        return lang;
      }
    } catch (e) {
      /* ignore */
    }
    return null;
  }

  function getStoredLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "fr") {
        return stored;
      }
    } catch (e) {
      /* ignore */
    }
    return null;
  }

  function getPreferredLang() {
    return getLangFromUrl() || getStoredLang() || detectBrowserLang();
  }

  function t(lang, key) {
    var table = translations[lang] || translations.en;
    return table[key] || translations.en[key] || key;
  }

  function localizeHref(href, lang) {
    if (!href || href.indexOf("mailto:") === 0 || href.indexOf("http") === 0) {
      return href;
    }

    var hashIndex = href.indexOf("#");
    var hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
    var pathQuery = hashIndex >= 0 ? href.slice(0, hashIndex) : href;

    if (lang === "fr") {
      if (pathQuery.indexOf("lang=fr") >= 0) {
        return pathQuery + hash;
      }
      pathQuery += pathQuery.indexOf("?") >= 0 ? "&lang=fr" : "?lang=fr";
      return pathQuery + hash;
    }

    pathQuery = pathQuery
      .replace(/([?&])lang=fr(&|$)/, function (_match, prefix, suffix) {
        return suffix === "&" ? prefix : "";
      })
      .replace(/\?&/, "?")
      .replace(/\?$/, "");

    return pathQuery + hash;
  }

  function updateLocaleLinks(lang) {
    document.querySelectorAll("[data-locale-link]").forEach(function (link) {
      var base = link.getAttribute("data-locale-link") || link.getAttribute("href");
      if (base) {
        link.setAttribute("href", localizeHref(base, lang));
      }
    });
  }

  function updateUrlLang(lang) {
    try {
      var url = new URL(window.location.href);
      if (lang === "fr") {
        url.searchParams.set("lang", "fr");
      } else {
        url.searchParams.delete("lang");
      }
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    } catch (e) {
      /* ignore */
    }
  }

  function updateHreflangTags() {
    var pagePath = window.location.pathname.split("/").pop() || "index.html";
    if (pagePath === "") {
      pagePath = "index.html";
    }

    var enLink = document.getElementById("hreflang-en");
    var frLink = document.getElementById("hreflang-fr");
    var defaultLink = document.getElementById("hreflang-default");

    if (!enLink || !frLink) {
      return;
    }

    var base = SITE_ORIGIN + SITE_PATH + (pagePath === "index.html" ? "" : pagePath);
    enLink.setAttribute("href", base.replace(/\?$/, ""));
    frLink.setAttribute("href", localizeHref(base, "fr"));
    if (defaultLink) {
      defaultLink.setAttribute("href", enLink.getAttribute("href"));
    }
  }

  function applyLegalContent(lang) {
    var page = document.body.getAttribute("data-legal-page");
    if (!page || !window.LegalContent || !window.LegalContent[page]) {
      return;
    }

    var content = window.LegalContent[page][lang] || window.LegalContent[page].en;
    var h1 = document.getElementById("legal-h1");
    var meta = document.getElementById("legal-meta");
    var summary = document.getElementById("legal-summary");
    var body = document.getElementById("legal-body");

    document.title = content.metaTitle;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", content.metaDescription);
    }
    if (h1) {
      h1.textContent = content.h1;
    }
    if (meta) {
      meta.textContent = content.meta;
    }
    if (summary) {
      summary.innerHTML = content.summaryHtml;
    }
    if (body) {
      body.innerHTML = localizeLegalHtml(content.bodyHtml, lang);
    }
  }

  function localizeLegalHtml(html, lang) {
    return html.replace(/href="([^"]+)"/g, function (_match, href) {
      return 'href="' + localizeHref(href, lang) + '"';
    });
  }

  function applyLang(lang) {
    if (lang !== "en" && lang !== "fr") {
      lang = "en";
    }

    document.documentElement.lang = lang === "fr" ? "fr-CA" : "en-CA";

    var titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      document.title = t(lang, titleEl.getAttribute("data-i18n"));
    }

    var metaDesc = document.querySelector('meta[name="description"][data-i18n]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t(lang, metaDesc.getAttribute("data-i18n")));
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (el.tagName === "TITLE" || el.tagName === "META") {
        return;
      }
      el.textContent = t(lang, el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(lang, el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(lang, el.getAttribute("data-i18n-aria")));
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(lang, el.getAttribute("data-i18n-placeholder")));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(lang, el.getAttribute("data-i18n-alt")));
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    document.querySelectorAll(".lang-toggle").forEach(function (group) {
      group.setAttribute("data-active-lang", lang);
    });

    document.querySelectorAll(".app-store-badge-img").forEach(function (img) {
      img.src = lang === "fr" ? "assets/app-store-badge-fr.svg" : "assets/app-store-badge-en.svg";
    });

    updateLocaleLinks(lang);
    updateUrlLang(lang);
    updateHreflangTags();
    applyLegalContent(lang);

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }

    document.dispatchEvent(new CustomEvent("nutrition:langchange", { detail: { lang: lang } }));
  }

  function initLangToggleKeyboard() {
    document.querySelectorAll(".lang-toggle").forEach(function (group) {
      group.addEventListener("keydown", function (event) {
        var buttons = group.querySelectorAll(".lang-btn");
        var currentIndex = Array.prototype.findIndex.call(buttons, function (btn) {
          return btn.classList.contains("active");
        });

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          event.preventDefault();
          var next = buttons[(currentIndex + 1) % buttons.length];
          next.focus();
          applyLang(next.getAttribute("data-lang"));
        }

        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          event.preventDefault();
          var prev = buttons[(currentIndex - 1 + buttons.length) % buttons.length];
          prev.focus();
          applyLang(prev.getAttribute("data-lang"));
        }
      });
    });
  }

  function initI18n() {
    var lang = getPreferredLang();
    applyLang(lang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });

    initLangToggleKeyboard();
  }

  window.NutritionI18n = {
    init: initI18n,
    apply: applyLang,
    getPreferredLang: getPreferredLang,
    localizeHref: localizeHref,
    t: t,
  };
})();
