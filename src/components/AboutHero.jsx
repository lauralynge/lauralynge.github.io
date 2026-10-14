import RevealText from "./RevealText";
import MaskReveal from "./MaskReveal";
import WipeReveal from "./WipeReveal";
import "./AboutHero.css";

// Øverste del af Om mig: "Hej!", intro, Resume-link og portræt
export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-text">
        <RevealText as="h1" className="about-hero-title">
          Hej!
        </RevealText>

        <MaskReveal>
          <p className="about-hero-intro">
            Jeg hedder Laura. Jeg bliver glad, når noget digitalt føles levende
            — men mindst lige så glad for en lang gåtur, en ny by eller en god
            fodboldkamp.
          </p>
        </MaskReveal>

        <a
          className="about-hero-resume"
          href={`${import.meta.env.BASE_URL}pdf/resume-lauraLynge.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <img src="/menu-pil.svg" alt="" width="14" height="14" />
        </a>
      </div>

      <WipeReveal className="about-hero-portrait" once>
        <img src="/images/about/portraet.jpg" alt="Portræt af Laura" />
      </WipeReveal>
    </section>
  );
}
