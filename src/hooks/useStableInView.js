import { useEffect, useRef, useState } from "react";

export default function useStableInView(options = { threshold: 0 }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Holder styr på sidste state — så vi kun reagerer på ÆGTE transitions
  const last = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      const now = entry.isIntersecting;

      // Kun hvis vi går FRA ude → inde eller FRA inde → ude
      if (now !== last.current) {
        last.current = now;
        setIsInView(now);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}
