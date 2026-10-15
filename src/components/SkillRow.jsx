import RowReveal from "./RowReveal";
import "./SkillRow.css";

// Række i "Det kan jeg": nummer, fagområde og tags
export default function SkillRow({ number, title, tags, delay }) {
  return (
    <RowReveal as="li" className="skill-row" delay={delay}>
      <span className="skill-row-number">{number}</span>
      <h3 className="skill-row-title">{title}</h3>
      <p className="skill-row-tags">{tags.join(" · ")}</p>
    </RowReveal>
  );
}
