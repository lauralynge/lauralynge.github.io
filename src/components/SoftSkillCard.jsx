import useInView from "../hooks/useInView";
import "./SoftSkillCard.css";

// Farvet kort i "Sådan arbejder jeg": nummer øverst, titel og tekst i bunden.
// Glider op, når det kommer ind på skærmen
export default function SoftSkillCard({ number, title, text, color, delay = 0 }) {
  const [ref, isVisible] = useInView({ once: true, threshold: 0.2 });

  return (
    <li
      ref={ref}
      className={`soft-skill-card soft-skill-card-${color} ${isVisible ? "is-visible" : ""}`}
      style={{ "--card-delay": `${delay}ms` }}
    >
      <span className="soft-skill-card-number">{number}</span>
      <div className="soft-skill-card-text">
        <h3 className="soft-skill-card-title">{title}</h3>
        <p className="soft-skill-card-desc">{text}</p>
      </div>
    </li>
  );
}
