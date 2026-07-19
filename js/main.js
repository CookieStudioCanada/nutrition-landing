(function () {
  "use strict";

  if (window.NutritionI18n) {
    window.NutritionI18n.init();
  }

  const nav = document.getElementById("mainNav");

  function onScroll() {
    if (window.scrollY > 20) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const navLinks = document.querySelectorAll("#navMenu .nav-link, #navMenu .btn");
  const navCollapse = document.getElementById("navMenu");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navCollapse.classList.contains("show")) {
        const toggler = document.querySelector(".navbar-toggler");
        if (toggler) toggler.click();
      }
    });
  });

  const fadeTargets = document.querySelectorAll(
    ".feature-card, .nutrient-dashboard, .privacy-visual, .cta-card"
  );

  fadeTargets.forEach(function (el) {
    el.classList.add("fade-in");
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  fadeTargets.forEach(function (el) {
    observer.observe(el);
  });

  document.querySelectorAll(".feature-card").forEach(function (card, i) {
    card.style.transitionDelay = i * 0.07 + "s";
  });

  const appStoreBtn = document.querySelector(".app-store-btn");
  if (appStoreBtn) {
    appStoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
})();
