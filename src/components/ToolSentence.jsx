import ToolPill from "./ToolPill";
import "./ToolSentence.css";

// Sætning, hvor værktøjerne står som piller midt i teksten
export default function ToolSentence({ parts }) {
  return (
    <p className="tool-sentence">
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && " "}
          {typeof part === "string" ? (
            part
          ) : (
            // Pille og tegnsætning holdes sammen, så "." aldrig står alene på en linje
            <span className="tool-sentence-pill">
              <ToolPill name={part.tool} />
              {part.after}
            </span>
          )}
        </span>
      ))}
    </p>
  );
}
