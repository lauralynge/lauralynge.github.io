import "./SkillRow.css";

// Række i "Det kan jeg": nummer, fagområde og tags
export default function SkillRow({ number, title, tags }) {
  return (
    <li className="skill-row">
      <span className="skill-row-number">{number}</span>
      <h3 className="skill-row-title">{title}</h3>
      <p className="skill-row-tags">{tags.join(" · ")}</p>
    </li>
  );
}
