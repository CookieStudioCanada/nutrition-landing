(function () {
  "use strict";

  var STORAGE_KEY = "nutrition-lang";

  var translations = {
    en: {
      "meta.description":
        "Nutrition — AI-powered meal logging, smart goals, and a personal coach. Track 8 nutrients. Your data stays on your device.",
      "meta.title": "Nutrition — Log smarter. Hit your targets.",
      "nav.features": "Features",
      "nav.nutrients": "Nutrients",
      "nav.help": "Help",
      "nav.privacy": "Privacy",
      "nav.getApp": "Get the app",
      "lang.toggle": "Language",
      "hero.title1": "Picture your plate.",
      "hero.title2a": "Track every ",
      "hero.title2b": ".",
      "hero.lead":
        "Photo, text, or chat — get calories, protein, carbs, and five more nutrients in seconds. No database hunting.",
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
      "privacy.lead": "Your journal stays on your iPhone — not our servers.",
      "privacy.item1.title": "On-device storage",
      "privacy.item1.desc":
        "Your nutrition journal lives on your phone, under your control.",
      "privacy.item2.title": "AI when you need it",
      "privacy.item2.desc":
        "Meal analysis and coaching use Google's Gemini API only when you trigger them.",
      "privacy.item3.title": "Export anytime",
      "privacy.item3.desc":
        "Download a CSV of your data from Settings whenever you want.",
      "cta.title": "Ready to eat with clarity?",
      "cta.lead": "Coming soon to the App Store",
      "cta.button": "App Store — Coming soon",
      "cta.aria": "Download on the App Store — coming soon",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.help": "Help",
      "footer.contact": "Contact",
    },
    fr: {
      "meta.description":
        "Nutrition — journal alimentaire avec IA, objectifs intelligents et coach personnel. Suivez 8 nutriments. Vos données restent sur votre appareil.",
      "meta.title": "Nutrition — Journalisez mieux. Atteignez vos objectifs.",
      "nav.features": "Fonctionnalités",
      "nav.nutrients": "Nutriments",
      "nav.help": "Aide",
      "nav.privacy": "Confidentialité",
      "nav.getApp": "Obtenir l'app",
      "lang.toggle": "Langue",
      "hero.title1": "Photographiez votre assiette.",
      "hero.title2a": "Suivez chaque ",
      "hero.title2b": ".",
      "hero.lead":
        "Photo, texte ou clavardage — obtenez calories, protéines, glucides et cinq autres nutriments en quelques secondes. Sans chercher dans une base de données.",
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
        "Un clavardage qui connaît vos objectifs, journaux et habitudes. Joignez photos ou PDF pour le contexte.",
      "feature4.title": "Recettes et repas rapides",
      "feature4.desc":
        "Enregistrez vos repas favoris une fois. Journalisez-les instantanément depuis l'accueil avec une simple commande.",
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
      "privacy.lead": "Votre journal reste sur votre iPhone — pas sur nos serveurs.",
      "privacy.item1.title": "Stockage sur l'appareil",
      "privacy.item1.desc":
        "Votre journal nutritionnel vit sur votre téléphone, sous votre contrôle.",
      "privacy.item2.title": "IA quand vous en avez besoin",
      "privacy.item2.desc":
        "L'analyse des repas et le coaching utilisent l'API Gemini de Google seulement lorsque vous les déclenchez.",
      "privacy.item3.title": "Export à tout moment",
      "privacy.item3.desc":
        "Téléchargez un CSV de vos données depuis Réglages quand vous le souhaitez.",
      "cta.title": "Prêt à manger en toute clarté?",
      "cta.lead": "Bientôt sur l'App Store",
      "cta.button": "App Store — Bientôt disponible",
      "cta.aria": "Télécharger sur l'App Store — bientôt disponible",
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
    return getStoredLang() || detectBrowserLang();
  }

  function t(lang, key) {
    var table = translations[lang] || translations.en;
    return table[key] || translations.en[key] || key;
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

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(lang, el.getAttribute("data-i18n-aria")));
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
  }

  function initI18n() {
    var lang = getPreferredLang();
    applyLang(lang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  window.NutritionI18n = {
    init: initI18n,
    apply: applyLang,
    getPreferredLang: getPreferredLang,
  };
})();
