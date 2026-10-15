import useInView from "../hooks/useInView";
import "./RowReveal.css";

// Række, hvor indholdet glider op, når rækken kommer ind på skærmen.
// Stregen under rækken står fast som resten af sitets streger
export default function RowReveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}) {
  const [ref, isVisible] = useInView({ once: true, threshold: 0.2 });

  return (
    <Tag
      ref={ref}
      className={`row-reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
