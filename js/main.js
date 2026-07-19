(function () {
  "use strict";

  if (window.NutritionI18n) {
    window.NutritionI18n.init();
  }

  var nav = document.getElementById("mainNav");
  if (!nav) {
    return;
  }

  function onScroll() {
    if (window.scrollY > 20) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var navLinks = document.querySelectorAll("#navMenu .nav-link, #navMenu .btn");
  var navCollapse = document.getElementById("navMenu");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navCollapse && navCollapse.classList.contains("show")) {
        var toggler = document.querySelector(".navbar-toggler");
        if (toggler) {
          toggler.click();
        }
      }
    });
  });

  var fadeTargets = document.querySelectorAll(
    ".feature-card, .nutrient-dashboard, .privacy-visual, .cta-card"
  );

  fadeTargets.forEach(function (el) {
    el.classList.add("fade-in");
  });

  var observer = new IntersectionObserver(
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

  var appStoreLink = document.querySelector(".app-store-badge-link");
  if (appStoreLink) {
    appStoreLink.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }

  var heroPreviewCard = document.querySelector(".hero-preview-card");
  if (heroPreviewCard && "IntersectionObserver" in window) {
    var heroObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-animated");
            heroObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );
    heroObserver.observe(heroPreviewCard);
  }

  var waitlistForm = document.querySelector(".waitlist-form");
  if (waitlistForm) {
    var feedback = waitlistForm.querySelector(".waitlist-feedback");

    waitlistForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var lang = window.NutritionI18n ? window.NutritionI18n.getPreferredLang() : "en";
      var submitBtn = waitlistForm.querySelector(".waitlist-btn");
      if (submitBtn) {
        submitBtn.disabled = true;
      }

      fetch(waitlistForm.action, {
        method: "POST",
        body: new FormData(waitlistForm),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("submit failed");
          }
          if (feedback) {
            feedback.hidden = false;
            feedback.textContent = window.NutritionI18n
              ? window.NutritionI18n.t(lang, "waitlist.success")
              : "Thanks — you're on the list.";
            feedback.classList.add("is-success");
          }
          waitlistForm.reset();
        })
        .catch(function () {
          if (feedback) {
            feedback.hidden = false;
            feedback.textContent = window.NutritionI18n
              ? window.NutritionI18n.t(lang, "waitlist.error")
              : "Something went wrong. Please try again.";
            feedback.classList.add("is-error");
          }
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
          }
        });
    });

    document.addEventListener("nutrition:langchange", function (event) {
      if (!feedback || feedback.hidden) {
        return;
      }
      var detailLang = event.detail && event.detail.lang ? event.detail.lang : "en";
      if (feedback.classList.contains("is-success")) {
        feedback.textContent = window.NutritionI18n.t(detailLang, "waitlist.success");
      }
      if (feedback.classList.contains("is-error")) {
        feedback.textContent = window.NutritionI18n.t(detailLang, "waitlist.error");
      }
    });
  }
})();
