import { useEffect, useRef, useState } from "react";
import "./MaskReveal.css";

function MaskReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // kør kun animationen én gang
        }
      },
      { threshold: 0.2 }, // trigger når 20% af elementet er synligt
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mask-reveal-wrapper" ref={ref}>
      <div
        className={`mask-reveal-inner ${visible ? "is-visible" : ""}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}

export default MaskReveal;
