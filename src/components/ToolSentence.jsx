import useInView from "../hooks/useInView";
import ToolPill from "./ToolPill";
import "./ToolSentence.css";

// Sætning, hvor værktøjerne står som piller midt i teksten.
// Pillerne popper ind én ad gangen, mens sætningen glider op
export default function ToolSentence({ parts }) {
  const [ref, isVisible] = useInView({ once: true, threshold: 0.3 });
  let pillIndex = 0;

  return (
    <p ref={ref} className="tool-sentence">
      {parts.map((part, i) => {
        if (typeof part === "string") {
          return (
            <span key={i}>
              {i > 0 && " "}
              {part}
            </span>
          );
        }

        const index = pillIndex++;
        return (
          <span key={i}>
            {i > 0 && " "}
            {/* Pille og tegnsætning holdes sammen, så "." aldrig står alene på en linje */}
            <span className="tool-sentence-pill">
              <ToolPill
                name={part.tool}
                visible={isVisible}
                delay={150 + index * 60}
              />
              {part.after}
            </span>
          </span>
        );
      })}
    </p>
  );
}
