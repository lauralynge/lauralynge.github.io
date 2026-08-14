import { useEffect, useRef, useState } from "react";

export default function useScrollInView() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();

      // Sektionen er i view når dens top er synlig
      const fullyInView = rect.top < window.innerHeight && rect.bottom > 0;

      setIsInView(fullyInView);
    };

    onScroll(); // initial check
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return [ref, isInView];
}
