const links = [["Home", "#home"], ["For you", "#for-you"], ["How I work", "#how-i-work"], ["About", "#about"], ["Practical", "#practical"]];

export function SiteFooter() {
  return (
    <footer className="site-footer"><div className="site-shell">
      <div className="footer-grid">
        <div className="footer-intro"><div><span className="footer-monogram" aria-hidden="true">A</span><span className="footer-wordmark">Alexander<br />Watson</span></div><p>Thoughtful counselling for adults who want to understand themselves without turning themselves into a problem to solve.</p></div>
        <nav className="footer-column" aria-label="Footer navigation"><h2>Navigate</h2>{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
        <div className="footer-column"><h2>Enquiries</h2><a href="mailto:alexanderclivewatson@gmail.com">alexanderclivewatson@gmail.com</a><a href="#contact">Begin a conversation</a><a href="#support">Urgent support information</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Alexander Watson</span><span>Counsellor in training · Supervised client work</span></div>
    </div></footer>
  );
}
