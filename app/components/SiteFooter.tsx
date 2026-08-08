const links = [
  ["Home", "#home"],
  ["Is this you?", "#is-this-you"],
  ["How I work", "#how-i-work"],
  ["About", "#about"],
  ["Practical information", "#practical"],
  ["Frequently asked questions", "#faqs"],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-mark" aria-hidden="true">
          <Image src="/alexander-watson-alternate-logo.svg" alt="" width={2000} height={500} unoptimized />
        </div>

        <div className="footer-grid">
          <div className="footer-intro">
            <p className="footer-statement">
              Thoughtful counselling for people who want to understand themselves without treating themselves like a problem to solve.
            </p>
          </div>

          <nav className="footer-column" aria-label="Footer navigation">
            <h2>Navigate</h2>
            {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>

          <div className="footer-column">
            <h2>Enquiries</h2>
            <a href="mailto:alexanderclivewatson@gmail.com">alexanderclivewatson@gmail.com</a>
            <a href="#contact">Begin a conversation</a>
            <a href="#urgent-support">Urgent support information</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Alexander Watson</span>
          <span>Counsellor in training · Supervised client work</span>
        </div>
      </div>
    </footer>
  );
}
import Image from "next/image";
