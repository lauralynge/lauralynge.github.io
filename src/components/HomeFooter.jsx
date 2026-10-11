import "./HomeFooter.css";

export default function HomeFooter() {
  return (
    <footer className="home-footer">
      <div className="home-footer-top">
        <div className="home-footer-text">
          <h1>
            Mangler i
            <br />
            Praktikant?
          </h1>
        </div>

        <div className="home-footer-contact">
          <p>Jeg søger praktikplads fra 4. januar til 12. marts.</p>
          <p>
            I kan altid fange mig på mail:
            <br />
            lauralynge@gmail.com
          </p>
          <p>Lad os skabe noget sammen.</p>
        </div>

        <div className="home-footer-socials">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <img src="/insta-ikon.svg" alt="Instagram ikon" />
          </a>
          <a
            href="https://linkedin.com/in/lauralyngenielsen" 
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/linkedin-ikon.svg" alt="LinkedIn ikon" />
          </a>
          <a
            href="https://github.com/lauralynge"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img src="/github-ikon.svg" alt="GitHub ikon" />
          </a>
        </div>
      </div>

      <div className="home-footer-bottom">© 2026 Laura Lynge Nielsen</div>
    </footer>
  );
}
