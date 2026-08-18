export function initHeroAnimations() {
  const digital = document.querySelector(".digital");
  const designer = document.querySelector(".designer");
  const developer = document.querySelector(".developer");

  if (!digital || !designer || !developer) return () => {};

  // 1) SLIDE IN — kør med det samme (ikke afhængig af window "load")
  //    requestAnimationFrame sikrer at "reset"-tilstanden bliver malet først,
  //    så transitionen faktisk trigges
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      digital.classList.add("slide-in");
      designer.classList.add("slide-in");
      developer.classList.add("slide-in");
    });
  });

  // 2) SLIDE UD VED SCROLL
  function handleScroll() {
    const scrolled = window.scrollY;

    if (scrolled > 20) {
      digital.classList.add("slide-right-out");
      designer.classList.add("slide-left-out");
      developer.classList.add("slide-right-out");
    } else {
      digital.classList.remove("slide-right-out");
      designer.classList.remove("slide-left-out");
      developer.classList.remove("slide-right-out");

      digital.classList.add("slide-in");
      designer.classList.add("slide-in");
      developer.classList.add("slide-in");
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Returnér cleanup, så gamle listeners fjernes ved unmount/route-skift
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}
