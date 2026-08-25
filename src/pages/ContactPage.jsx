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
            lauralynge@gmail.com
          </a>
          <a className="contact-line" href="tel:+4523406755">
            23 40 67 55
          </a>
          <p className="contact-line">Aarhus N</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
