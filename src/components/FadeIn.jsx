import useInView from "../hooks/useInView";
import "./FadeIn.css";

export default function FadeIn({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  duration = 600, // ms, hvor lang tid selve fade-animationen tager
  distance = 20, // hvor mange px den glider op fra, sæt til 0 for ren fade uden bevægelse
  once = false, // true → fade kun første gang, derefter forbliver den synlig
  rootMargin = "0px",
}) {
  const [ref, isVisible] = useInView({ once, rootMargin });

  return (
    <Tag
      ref={ref}
      className={`fade-in ${isVisible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        "--fade-distance": `${distance}px`,
        "--fade-duration": `${duration}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
