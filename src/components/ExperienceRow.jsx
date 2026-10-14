import "./ExperienceRow.css";

// Række i erfaringslisten: periode, jobtitel og hvad jobbet har lært mig
export default function ExperienceRow({ period, title, text }) {
  return (
    <li className="experience-row">
      <span className="experience-row-period">{period}</span>
      <h3 className="experience-row-title">{title}</h3>
      <p className="experience-row-text">{text}</p>
    </li>
  );
}
