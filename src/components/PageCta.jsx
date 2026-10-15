import { Link } from "react-router-dom";
import MaskReveal from "./MaskReveal";
import "./PageCta.css";

// Grønt bånd nederst på en side, der sender brugeren videre
// Stort hovedlink + et lille sekundært link under
export default function PageCta({
  intro,
  label,
  to,
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="page-cta">
      <MaskReveal>
        <p className="page-cta-intro">{intro}</p>
      </MaskReveal>

      <MaskReveal delay={100}>
        <Link to={to} className="page-cta-link">
          {label}
          <img
            src={`${import.meta.env.BASE_URL}arrow-long.svg`}
            alt=""
            className="page-cta-arrow"
          />
        </Link>
      </MaskReveal>

      {secondaryLabel && (
        <MaskReveal delay={200}>
          <Link to={secondaryTo} className="page-cta-secondary">
            {secondaryLabel}
          </Link>
        </MaskReveal>
      )}
    </section>
  );
}
