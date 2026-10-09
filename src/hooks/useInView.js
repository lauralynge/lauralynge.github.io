import { useEffect, useRef, useState } from "react";

// once: true → forbliver synlig efter første gang, elementet har været i view
// rootMargin: udløs lidt før elementet når skærmen (fx "0px 0px 100px 0px")
export default function useInView({
  threshold = 0,
  rootMargin = "0px",
  once = false,
} = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect(); // stop med at lytte, så den ikke skjules igen
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isInView];
}
