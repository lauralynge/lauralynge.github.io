import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import AboutGallery from "../components/AboutGallery";
import AboutNow from "../components/AboutNow";
import MaskReveal from "../components/MaskReveal";
import PageCta from "../components/PageCta";
import "./AboutPage.css";

// "Om mig – personlig – desktop" i Figma
function AboutPage() {
  return (
    <>
      <div className="about-page">
        <AboutHero />

        <AboutSection
          title="Lidt mere om mig"
          aside={
            <div className="about-page-story">
              <MaskReveal>
                <p>
                  Jeg har altid lagt mærke til de små ting. Et skilt, der er
                  svært at forstå. En dør, man skubber til, selvom den skal
                  trækkes. Jeg kan ikke lade være med at tænke: det kunne godt
                  være lidt nemmere. Det er nok derfor, jeg endte med design.
                </p>
              </MaskReveal>
              <MaskReveal delay={150}>
                <p>
                  Jeg vil hellere prøve noget og fejle end aldrig at prøve. Det
                  gælder i et projekt, og det gælder, når jeg pakker rygsækken.
                </p>
              </MaskReveal>
            </div>
          }
        />

        <AboutSection
          title="Når jeg ikke designer"
          aside={
            <MaskReveal>
              <p>
                …er jeg tit på farten. Jeg har gået Caminoen, interrailet gennem
                Europa og stået med ørepropper til Le Mans. Og der er ikke
                meget, der slår en campingtur med familien.
              </p>
            </MaskReveal>
          }
        >
          <AboutGallery />
        </AboutSection>

        <AboutSection title="Lige nu">
          <AboutNow />
        </AboutSection>
      </div>

      <PageCta
        intro="Søger I en praktikant fra januar?"
        label="Lad os tage en snak"
        to="/contact"
        secondaryLabel="Eller se mine projekter"
        secondaryTo="/projects"
      />
    </>
  );
}

export default AboutPage;
