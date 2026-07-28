export function initHeroAnimations() {
  const digital = document.querySelector(".digital");
  const designer = document.querySelector(".designer");
  const developer = document.querySelector(".developer");

  // 1) SLIDE IN VED LOAD
  window.addEventListener("load", () => {
    digital.classList.add("slide-in");
    designer.classList.add("slide-in");
    developer.classList.add("slide-in");
  });

  // 2) SLIDE UD VED SCROLL
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    if (scrolled > 20) {
      digital.classList.add("slide-right-out");
      designer.classList.add("slide-left-out");
      developer.classList.add("slide-right-out");
    } else {
      digital.classList.remove("slide-right-out");
      designer.classList.remove("slide-left-out");
      developer.classList.remove("slide-right-out");

      // Når man scroller op → slide ind igen
      digital.classList.add("slide-in");
      designer.classList.add("slide-in");
      developer.classList.add("slide-in");
    }
  });
}
