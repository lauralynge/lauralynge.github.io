import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a
          href="https://github.com/dit-brugernavn"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Github</h3>
        </a>
        <a href="mailto:lauralynge@gmail.com">
          <h3>Email</h3>
        </a>
        <a
          href="https://linkedin.com/in/dit-brugernavn"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Linkedin</h3>
        </a>
      </div>

      <div className="footer-bottom">© 2026 Laura Lynge Nielsen</div>
    </footer>
  );
}
