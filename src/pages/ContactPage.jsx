import RevealText from "../components/RevealText";

function ContactPage() {
  return (
    <div className="page contact-page-grid">
      <section className="section-title">
        <RevealText as="h1">Lad os tale sammen</RevealText>
      </section>

      <div className="contact-row">
        <div className="contact-details">
          <h3>Kontakt</h3>
          <a className="contact-line" href="mailto:laurablynge@gmail.com">
            laurablynge@gmail.com
          </a>
          <a className="contact-line" href="tel:+4522406855">
            22 40 68 55
          </a>
          <p className="contact-line">Silkeborg</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
