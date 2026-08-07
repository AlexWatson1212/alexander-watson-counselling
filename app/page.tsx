import { EnquiryForm } from "./components/EnquiryForm";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const recognitions = [
  ["You understand the pattern. It still has hold of you.", "You may be able to explain where a response comes from, yet find yourself living it again when the pressure returns."],
  ["You look capable because you have become very good at coping.", "Other people may not see the effort, the exhaustion or how much of yourself you edit to keep everything working."],
  ["You are tired of treating yourself like a problem to solve.", "You want to understand what is happening without reducing your life to a label, checklist or another demand to improve."],
  ["Something matters, even if you cannot explain it neatly.", "It might be grief, loneliness, anger, self-criticism or simply the sense that you have drifted away from yourself."],
];

const principles = [
  ["I listen for more than the polished version.", "You do not need to make the story coherent for me. We can notice the pauses, contradictions and changes in tone as well as the words themselves."],
  ["I will offer something back.", "I am not there to nod through fifty minutes and leave you alone with the work. I ask careful questions, notice patterns and share what I am seeing."],
  ["You remain the authority on your life.", "I will not tell you who to become. We can test ideas together, but the meaning—and the choices that follow—need to belong to you."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to the main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Counselling in Greater Manchester and online</p>
              <h1 id="hero-title">You have probably thought about it enough.</h1>
              <p className="hero-intro">Counselling for adults who understand themselves in theory, keep functioning in public, and still feel stuck underneath.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Begin a conversation</a>
                <a className="text-link" href="#how-i-work">See how I work <span aria-hidden="true">↘</span></a>
              </div>
            </div>
            <aside className="hero-aside" aria-label="A note before you begin">
              <span className="hero-monogram" aria-hidden="true">A</span>
              <p className="eyebrow">Before you begin</p>
              <p>You do not need a better explanation, the right diagnosis or a convincing reason for finding things difficult.</p>
              <p>We can begin with what feels most present.</p>
            </aside>
          </div>
        </section>

        <section className="section recognition" id="for-you" aria-labelledby="recognition-title">
          <div className="site-shell">
            <div className="split-heading">
              <p className="eyebrow">You may recognise this</p>
              <div>
                <h2 id="recognition-title">Knowing why has not made it stop.</h2>
                <p className="section-intro">Self-awareness can be useful. It can also become one more way to stay at a distance from what you actually feel.</p>
              </div>
            </div>
            <div className="recognition-list">
              {recognitions.map(([title, body], index) => (
                <article className="recognition-item" key={title}>
                  <span className="item-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="statement" aria-label="A central counselling principle">
          <div className="site-shell statement-inner">
            <p className="eyebrow eyebrow-light">A different kind of conversation</p>
            <p className="statement-text">You do not have to turn yourself into a clear, manageable case before another person is allowed to take you seriously.</p>
          </div>
        </section>

        <section className="section" id="how-i-work" aria-labelledby="approach-title">
          <div className="site-shell approach-grid">
            <div className="sticky-heading">
              <p className="eyebrow">How I work</p>
              <h2 id="approach-title">Counselling that can think—and still stay human.</h2>
              <p className="section-intro">I bring attention, curiosity and honesty. Not a script. Not a performance of expertise. Not silence presented as depth.</p>
            </div>
            <div className="principles">
              {principles.map(([title, body], index) => (
                <article className="principle" key={title}>
                  <span className="item-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fit-section" aria-labelledby="fit-title">
          <div className="site-shell fit-grid">
            <div><p className="eyebrow eyebrow-light">A useful fit matters</p><h2 id="fit-title">This will not suit everyone.</h2></div>
            <div className="fit-copy">
              <p>If you want a counsellor to give you a programme, tell you how to live or promise a rapid transformation, I may not be the right person.</p>
              <p>If you want a thoughtful relationship in which we can be warm, honest and curious without rushing towards an answer, we may work well together.</p>
              <a className="text-link text-link-light" href="#contact">Consider a first conversation <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="site-shell about-grid">
            <div className="about-mark" aria-hidden="true"><span>A</span><small>Alexander Watson</small></div>
            <div className="about-copy">
              <p className="eyebrow">About Alexander</p>
              <h2 id="about-title">Serious about the work. Not solemn about being a counsellor.</h2>
              <p className="lead-copy">I listen carefully, think deeply and tend to notice the pattern underneath what is being said. I am warm, direct and willing to stay with a difficult conversation rather than tidy it up too quickly.</p>
              <p>I am neurodivergent. I know what it can be like to process differently, monitor how you are coming across and be misunderstood despite trying very hard to be clear. I will not assume that difference is a flaw to edit out—or that every part of your experience needs to be explained through a label.</p>
              <p>I am a counsellor in training, working with adults through a supervised placement in Greater Manchester. I am transparent about where I am professionally, and I take the responsibility of the work seriously.</p>
              <blockquote>“Care that does not need to be performed. Honesty that does not need to be harsh.”</blockquote>
            </div>
          </div>
        </section>

        <section className="section practical" id="practical" aria-labelledby="practical-title">
          <div className="site-shell">
            <div className="practical-heading">
              <p className="eyebrow">Practical information</p>
              <h2 id="practical-title">Clarity before you commit to anything.</h2>
              <p className="section-intro">An enquiry is simply a way to find out whether a conversation makes sense. It does not commit you to ongoing counselling.</p>
            </div>
            <dl className="details-grid">
              <div><dt>Who I work with</dt><dd>Adults aged 18 and over</dd></div>
              <div><dt>Where</dt><dd>Greater Manchester and online</dd></div>
              <div><dt>Session length</dt><dd>50 minutes</dd></div>
              <div><dt>Current fee</dt><dd>Confirmed clearly when you enquire</dd></div>
              <div><dt>Communication</dt><dd>Email for enquiries and practical arrangements</dd></div>
              <div><dt>Professional status</dt><dd>Counsellor in training; supervised client work</dd></div>
            </dl>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="site-shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Begin a conversation</p>
              <h2 id="contact-title">The first message can be unfinished.</h2>
              <p>A few honest sentences are enough. Tell me what has prompted you to look for counselling, ask a practical question, or simply say that you are not sure where to begin.</p>
              <p>I will reply by email with current availability, the fee and what a first session would involve.</p>
            </div>
            <EnquiryForm />
          </div>
        </section>

        <section className="support" id="support" aria-labelledby="support-title">
          <div className="site-shell support-grid">
            <div><p className="eyebrow">Urgent support</p><h2 id="support-title">This practice is not a crisis service.</h2></div>
            <div className="support-copy">
              <p>If you or someone else is in immediate danger, call 999 or go to A&amp;E. If you need urgent mental-health help, use NHS 111 online or call 111 and select the mental-health option.</p>
              <p>You can also call Samaritans free on 116 123 at any time.</p>
              <div className="support-links">
                <a href="https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/">NHS urgent mental-health help</a>
                <a href="https://www.samaritans.org/how-we-can-help/contact-samaritan/">Contact Samaritans</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
