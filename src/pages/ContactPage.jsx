function ContactPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Kontakt</p>
      <h1>Lad os tale sammen.</h1>
      <p className="lead">
        Tilpas links og mailadresse, så siden peger på dine egne profiler.
      </p>

      <ul className="contact-list">
        <li>
          <a href="mailto:dinmail@example.com">dinmail@example.com</a>
        </li>
        <li>
          <a href="https://github.com/username" rel="noreferrer" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactPage;
