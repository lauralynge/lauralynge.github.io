import { useEffect, useRef, useState } from "react";

export default function useInView(options = { threshold: 0 }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}
