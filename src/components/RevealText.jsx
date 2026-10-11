import useInView from "../hooks/useInView";
import "./RevealText.css";

export default function RevealText({
  children,
  as: Tag = "div",
  className = "",
  staggerDelay = 30, // ms forsinkelse pr. bogstav
}) {
  const [ref, isVisible] = useInView();
  // Bogstaverne samles i ord, så linjen kun kan brydes mellem ord – ikke midt i et ord
  const words = String(children).split(" ");
  let letterIndex = 0; // tæller på tværs af ord, så animationen kører i én bølge

  return (
    <Tag ref={ref} className={`reveal-text ${className}`}>
      {words.map((word, w) => (
        <span key={w}>
          {w > 0 && " "}
          <span className="reveal-word">
            {word.split("").map((letter) => {
              const index = letterIndex++;
              return (
                <span className="reveal-letter" key={index}>
                  <span
                    className={`reveal-letter-inner ${isVisible ? "is-visible" : ""}`}
                    style={{ transitionDelay: `${index * staggerDelay}ms` }}
                  >
                    {letter}
                  </span>
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </Tag>
  );
}
