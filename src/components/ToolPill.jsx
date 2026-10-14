import "./ToolPill.css";

// Grøn pille med navnet på et værktøj
export default function ToolPill({ name }) {
  return <span className="tool-pill">{name}</span>;
}
