import useInView from "../hooks/useInView";
import "./FadeIn.css";

export default function FadeIn({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  distance = 20, // hvor mange px den glider op fra, sæt til 0 for ren fade uden bevægelse
}) {
  const [ref, isVisible] = useInView();

  return (
    <Tag
      ref={ref}
      className={`fade-in ${isVisible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        "--fade-distance": `${distance}px`,
      }}
    >
      {children}
    </Tag>
  );
}
