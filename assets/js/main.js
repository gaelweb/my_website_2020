window.addEventListener("load", () => {
  /* Initialisation */
  initScrollReveal();
  initYearWebsite();
  /* Scroll display navbar */
  let scrollPosition = 0;

  document.addEventListener("scroll", () => {
    let documentPos = document.body.getBoundingClientRect().top;
    let navbarElem = document.getElementById("navbar");

    if (documentPos < scrollPosition) {
      navbarElem.style.display = "none";
    } else {
      navbarElem.style.display = "flex";
    }

    if (window.scrollY > 30) {
      navbarElem.classList.add("navbar-shadow");
    } else {
      navbarElem.classList.remove("navbar-shadow");
    }

    scrollPosition = document.body.getBoundingClientRect().top;
  });
});

/* JS Lib scrollReveal() animation */
function initScrollReveal() {
  window.sr = ScrollReveal();

  sr.reveal(".header-section__main-title", {
    duration: 2000,
    scale: 2,
    distance: "4rem"
  });
  sr.reveal(".service-section__extras__list", {
    duration: 2000,
    origin: "right",
    distance: "10rem",
    reset: true
  });
  sr.reveal(".about-section__profil__img", {
    duration: 2500,
    origin: "left",
    distance: "15rem",
    reset: true
  });
  sr.reveal(".title_scalable", {
    duration: 2000,
    scale: 2,
    reset: true
  });
  sr.reveal(".portfolio-reveal-left", {
    duration: 2000,
    origin: "left",
    distance: "14rem",
    reset: true
  });
  sr.reveal(".portfolio-reveal-right", {
    duration: 2000,
    origin: "right",
    distance: "14rem",
    reset: true
  });
  sr.reveal(".skill-underline", {
    beforeReveal: function(domEl) {
      domEl.style.width = "0%";
      domEl.style.transition = "width 0.5s";
    },
    afterReveal: function(domEl) {
      domEl.style.width = domEl.dataset.width + "%";
    },
    reset: true
  });
  sr.reveal(".skills-section__more", {
    duration: 2000,
    distance: "14rem",
    origin: "right",
    reset: true
  });
  sr.reveal(".service-section__name", {
    origin: "top",
    distance: "4rem",
    duration: 2000,
    reset: true
  });
}

/* Update year */
function initYearWebsite() {
  var year = new Date().getFullYear();
  document.getElementById("year").innerHTML =
    "Copyright Gaël Monbrault" + " " + year;
}
