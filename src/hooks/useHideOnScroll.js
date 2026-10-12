import { useEffect, useState } from "react";

// Returnerer true, når man scroller ned (headeren skal skjules),
// og false, så snart man scroller op igen eller er i toppen af siden.
// hideAbove: valgfri funktion, der giver en scroll-position, hvor headeren
// altid er skjult ovenover (fx forsidens hero, der har sin egen header)
export default function useHideOnScroll({
  enabled = true,
  offset = 80,
  hideAbove,
} = {}) {
  const [hidden, setHidden] = useState(
    () => enabled && !!hideAbove && window.scrollY < hideAbove(),
  );

  useEffect(() => {
    if (!enabled) return;

    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      if (hideAbove && y < hideAbove()) {
        setHidden(true);
        lastY = y;
      } else if (Math.abs(delta) > 5) {
        // Ignorer små bevægelser, så headeren ikke blinker.
        // Altid synlig i toppen (også ved iOS' "bounce" over toppen)
        setHidden(delta > 0 && y > offset);
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      setHidden(false);
    };
  }, [enabled, offset, hideAbove]);

  return hidden;
}
