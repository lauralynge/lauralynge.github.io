import "./ToolPill.css";

// Grøn pille med navnet på et værktøj – popper ind, når "visible" bliver true
export default function ToolPill({ name, visible = true, delay = 0 }) {
  return (
    <span
      className={`tool-pill ${visible ? "is-visible" : ""}`}
      style={{ "--pill-delay": `${delay}ms` }}
    >
      {name}
    </span>
  );
}
