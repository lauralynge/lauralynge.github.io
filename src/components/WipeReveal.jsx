import useInView from "../hooks/useInView";
import "./WipeReveal.css";

export default function WipeReveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  once = false, // true → wipe kun første gang, derefter forbliver den synlig
}) {
  const [ref, isVisible] = useInView({ once });

  return (
    <Tag
      ref={ref}
      className={`wipe-reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
