window.addEventListener("load", () => {
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
