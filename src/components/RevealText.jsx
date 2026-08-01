import useInView from "../hooks/useInView";
import "./RevealText.css";

export default function RevealText({
  children,
  as: Tag = "div",
  className = "",
  staggerDelay = 30, // ms forsinkelse pr. bogstav
}) {
  const [ref, isVisible] = useInView();
  const letters = String(children).split("");

  return (
    <Tag ref={ref} className={`reveal-text ${className}`}>
      {letters.map((letter, index) => (
        <span className="reveal-letter" key={index}>
          <span
            className={`reveal-letter-inner ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${index * staggerDelay}ms` }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        </span>
      ))}
    </Tag>
  );
}
