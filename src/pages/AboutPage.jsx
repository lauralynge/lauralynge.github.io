import RevealText from "../components/RevealText";
import MaskReveal from "../components/MaskReveal";

function AboutPage() {
  return (
    <div className="page">
      <section className="section-title">
        <RevealText as="h1">Hvem er jeg?</RevealText>
      </section>
      <section className="section-intro">
        <div className="section-intro-image">
          <img src="/images/billede-laura.png" alt="Billede af Laura" />
        </div>
        <div className="section-intro-text">
          <div className="resume-link">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <p>Resume</p>
              <img src="/link-ikon.svg" alt="Link ikon" />
            </a>
          </div>
          <RevealText as="h2">Hej!</RevealText>

          <MaskReveal delay={0}>
            <p>
              {" "}
              Mit navn er Laura, og jeg eg er en digital designer og udvikler,
              der holder af at skabe digitale oplevelser, der føles levende.
            </p>
          </MaskReveal>

          <MaskReveal delay={150}>
            <p>
              {" "}
              For mig handler design ikke kun om det visuelle, men om den
              følelse, der opstår, når noget fungerer naturligt og inviterer til
              at blive udforsket.
            </p>
          </MaskReveal>
        </div>
      </section>

      <section className="info-list" aria-label="Om mig detaljer">
        <div>
          <MaskReveal delay={0}>
            <p>
              Jeg har altid været meget betaget af design og dens evne til at
              formidle og skabe oplevelser – både de gode og de mindre gode. Det
              er ofte de små detaljer, der fanger mig: en knap der føles rigtig,
              en interaktion der glider, eller en løsning der gør noget lidt
              nemmere for brugeren.
            </p>
          </MaskReveal>
          <MaskReveal delay={150}>
            <p>
              Jeg arbejder både visuelt og teknisk og bevæger mig mellem
              prototyping, brugerrejser og kode, fordi det giver mig en
              forståelse for hele processen — fra idé til noget, der fungerer i
              praksis.
            </p>
          </MaskReveal>
          <MaskReveal delay={300}>
            <p>
              Gennem projekter og jobs har jeg arbejdet med webshops,
              interaktive touchskærme, contentproduktion og kundekontakt. Det
              har lært mig, at gode digitale oplevelser starter med at forstå
              mennesker og deres behov.
            </p>
          </MaskReveal>

          <MaskReveal delay={450}>
            <p>
              Jeg er nysgerrig af natur, elsker at lære nye ting og trives i
              samarbejde, hvor man bygger videre på hinandens idéer. For mig er
              design ikke kun æstetik, men en måde at skabe noget, der føles
              intuitivt, brugbart og meningsfuldt.
            </p>
          </MaskReveal>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
