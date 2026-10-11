import "./AboutNow.css";

// "Lige nu"-listen: label til venstre, værdi til højre
const ITEMS = [
  { label: "Studerer", value: "Multimediedesign på Erhvervsakademi Aarhus" },
  { label: "Søger", value: "Praktik fra 4. januar til 12. marts" },
  { label: "Bor", value: "Aarhus N" },
];

export default function AboutNow() {
  return (
    <dl className="about-now">
      {ITEMS.map(({ label, value }) => (
        <div key={label} className="about-now-row">
          <dt className="about-now-label">{label}</dt>
          <dd className="about-now-value">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
