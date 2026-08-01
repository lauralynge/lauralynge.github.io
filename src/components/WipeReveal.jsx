import useInView from "../hooks/useInView";
import "./WipeReveal.css";

export default function WipeReveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}) {
  const [ref, isVisible] = useInView({ threshold: 0 });

  console.log("WipeReveal:", className, "isVisible:", isVisible);

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
