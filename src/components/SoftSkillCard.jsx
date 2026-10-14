import "./SoftSkillCard.css";

// Farvet kort i "Sådan arbejder jeg": nummer øverst, titel og tekst i bunden
export default function SoftSkillCard({ number, title, text, color }) {
  return (
    <li className={`soft-skill-card soft-skill-card-${color}`}>
      <span className="soft-skill-card-number">{number}</span>
      <div className="soft-skill-card-text">
        <h3 className="soft-skill-card-title">{title}</h3>
        <p className="soft-skill-card-desc">{text}</p>
      </div>
    </li>
  );
}
