import RevealText from "../components/RevealText";
import "./ContactPage.css";

// Kontaktrækker – href: null = ingen link og ingen pil
const CONTACTS = [
  { label: "Mail", value: "lauralynge@gmail.com", href: "mailto:lauralynge@gmail.com" },
  { label: "Telefon", value: "23 40 67 55", href: "tel:+4523406755" },
  {
    label: "LinkedIn",
    value: "Laura Lynge Nielsen",
    href: "https://linkedin.com/in/lauralyngenielsen",
    external: true,
  },
  { label: "By", value: "Aarhus N", href: null },
];

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-heading">
        {/* To linjer som i Figma – hver linje holdes samlet */}
        <h1 className="contact-title">
          <RevealText as="span" className="contact-title-line">
            Lad os tale
          </RevealText>
          <RevealText as="span" className="contact-title-line contact-title-italic">
            sammen
          </RevealText>
        </h1>

        <p className="contact-invitation">
          Jeg søger praktik fra 4. januar til 12. marts. Skriv, hvis du har en
          plads, et projekt — eller bare en god idé.
        </p>
      </div>

      <ul className="contact-rows">
        {CONTACTS.map(({ label, value, href, external }) => {
          const content = (
            <>
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
              {href && (
                <img
                  className="contact-arrow"
                  src="/menu-pil.svg"
                  alt=""
                  width="20"
                  height="20"
                />
              )}
            </>
          );

          return (
            <li key={label}>
              {href ? (
                <a
                  className="contact-row"
                  href={href}
                  {...(external && { target: "_blank", rel: "noreferrer" })}
                >
                  {content}
                </a>
              ) : (
                <div className="contact-row">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactPage;
