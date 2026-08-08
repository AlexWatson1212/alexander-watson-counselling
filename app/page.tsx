import { EnquiryForm } from "./components/EnquiryForm";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import Image from "next/image";

const recognitions = [
  {
    title: "You understand the pattern. It still has hold of you.",
    body: "You may be able to explain exactly where a response comes from, yet find yourself living it again when the pressure returns.",
  },
  {
    title: "You look capable because you have become very good at coping.",
    body: "Other people may not see the effort, the exhaustion or how much of yourself you edit to keep everything working.",
  },
  {
    title: "You are tired of treating yourself like a problem to solve.",
    body: "Another label, strategy or demand to improve may explain something without helping you feel more at home in your own life.",
  },
  {
    title: "Something matters, even if you cannot explain it neatly.",
    body: "It might be grief, anger, loneliness, responsibility, a loss of purpose—or simply the sense that you have drifted away from yourself.",
  },
];

const principles = [
  {
    title: "I listen for more than the polished version.",
    body: "You do not need to make your story coherent for me. We can notice the pauses, contradictions and changes in tone as well as the words themselves.",
  },
  {
    title: "I will offer something back.",
    body: "I am not there to nod through fifty minutes and leave you alone with the work. I ask careful questions, notice patterns and share what I am seeing.",
  },
  {
    title: "We will not rush to tidy things up.",
    body: "Understanding can take patience. I am willing to stay with uncertainty, complexity and difficult feelings without forcing a neat answer.",
  },
  {
    title: "You remain the authority on your life.",
    body: "I will not tell you who to become. We can test ideas together, but the meaning—and the choices that follow—need to belong to you.",
  },
];

const practicalDetails = [
  ["Who I work with", "Adults aged 18 and over"],
  ["Where", "Greater Manchester and online"],
  ["Session length", "50 minutes"],
  ["Current fee", "Confirmed clearly when you enquire"],
  ["Communication", "Email for enquiries and arrangements"],
  ["Professional status", "Counsellor in training; supervised client work"],
];

const faqs = [
  {
    question: "Do I need a diagnosis—or a clear explanation of what is wrong?",
    answer: "No. You can arrive with a diagnosis, a question, a complicated story or no clear explanation at all. We can begin with what feels most present and work from there.",
  },
  {
    question: "Will you give me advice or tell me what to do?",
    answer: "I will be active and honest, but I will not prescribe a life for you. I may ask a direct question, offer an observation or help you look at a choice from another angle. The decisions remain yours.",
  },
  {
    question: "What happens in a first session?",
    answer: "We will talk about what has brought you to counselling, what you hope might be different and what you need to know about working with me. It is also a chance to notice how the conversation feels. You do not have to commit to ongoing work on the spot.",
  },
  {
    question: "What does ‘counsellor in training’ mean?",
    answer: "I am completing professional counselling training and my client work is supervised. I am open about my stage of practice and take the ethical responsibility, preparation and reflection involved seriously.",
  },
  {
    question: "Is counselling confidential?",
    answer: "Counselling is private, with specific limits around serious safety concerns and legal requirements. I will explain confidentiality clearly before we begin so you know how information is handled and can ask questions.",
  },
  {
    question: "How will I know if we are a useful fit?",
    answer: "You do not need to decide from a polished biography. Notice whether the way I describe the work feels recognisable and whether you can imagine speaking honestly with me. An initial exchange and first session can help us both decide without pressure.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Alexander Watson Counselling",
  url: "https://alexanderwatsoncounselling.co.uk",
  image: "https://alexanderwatsoncounselling.co.uk/alexander-watson-counsellor-hero.webp",
  email: "alexanderclivewatson@gmail.com",
  areaServed: "Greater Manchester",
  description: "Thoughtful, honest counselling for adults in Greater Manchester and online.",
};

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
              <p className="hero-intro">
                Counselling for adults who understand themselves in theory, keep functioning in public, and still feel stuck underneath.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Begin a conversation</a>
                <a className="text-link" href="#how-i-work">See how I work <span aria-hidden="true">↘</span></a>
              </div>
              <p className="hero-reassurance">No polished explanation required. A few honest sentences are enough.</p>
            </div>

            <figure className="hero-portrait">
              <div className="image-frame">
                <Image
                  src="/alexander-watson-counsellor-hero.webp"
                  alt="Alexander Watson seated in a calm counselling room"
                  width={1448}
                  height={1086}
                  priority
                  sizes="(max-width: 760px) calc(100vw - 2.7rem), (max-width: 1240px) 42vw, 520px"
                  unoptimized
                />
              </div>
              <figcaption>
                <span>Alexander Watson</span>
                <span>Counsellor in training</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="opening-note" aria-label="A note before you begin">
          <div className="site-shell opening-note-grid">
            <p className="eyebrow eyebrow-light">Before you begin</p>
            <p>You do not have to turn yourself into a clear, manageable case before another person is allowed to take you seriously.</p>
          </div>
        </section>

        <section className="section recognition" id="is-this-you" aria-labelledby="recognition-title">
          <div className="site-shell">
            <div className="split-heading">
              <p className="eyebrow">You may recognise this</p>
              <div>
                <h2 id="recognition-title">Knowing why has not made it stop.</h2>
                <p className="section-intro">
                  Self-awareness can be useful. It can also become one more way to stay at a distance from what you actually feel.
                </p>
              </div>
            </div>

            <div className="recognition-list">
              {recognitions.map((item, index) => (
                <article className="recognition-item" key={item.title}>
                  <span className="item-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-statement" aria-labelledby="statement-title">
          <div className="site-shell editorial-statement-grid">
            <div>
              <p className="eyebrow eyebrow-light">A different kind of conversation</p>
              <h2 id="statement-title">Insight matters. But insight is not the same as change.</h2>
            </div>
            <p>
              Counselling can create enough room to move beyond explaining yourself and begin noticing what happens between the explanation and the life you are actually living.
            </p>
          </div>
        </section>

        <section className="section approach" id="how-i-work" aria-labelledby="approach-title">
          <div className="site-shell approach-grid">
            <div className="sticky-heading">
              <p className="eyebrow">How I work</p>
              <h2 id="approach-title">Counselling that can think—and still stay human.</h2>
              <p className="section-intro">
                I bring attention, curiosity and honesty. Not a script. Not a performance of expertise. Not silence presented as depth.
              </p>
            </div>

            <div className="principles">
              {principles.map((item, index) => (
                <article className="principle" key={item.title}>
                  <span className="item-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fit-section" aria-labelledby="fit-title">
          <div className="site-shell fit-grid">
            <div>
              <p className="eyebrow eyebrow-light">A useful fit matters</p>
              <h2 id="fit-title">This will not suit everyone.</h2>
            </div>
            <div className="fit-copy">
              <p>If you want a counsellor to give you a programme, tell you how to live or promise a rapid transformation, I may not be the right person.</p>
              <p>If you want a thoughtful relationship in which we can be warm, honest and curious without rushing towards an answer, we may work well together.</p>
              <a className="text-link text-link-light" href="#contact">Consider a first conversation <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="site-shell about-grid">
            <figure className="about-portrait">
              <Image
                src="/alexander-watson-counsellor-portrait.webp"
                alt="Portrait of Alexander Watson"
                width={1254}
                height={1254}
                sizes="(max-width: 760px) calc(100vw - 2.7rem), (max-width: 1240px) 36vw, 450px"
                unoptimized
              />
              <figcaption>Warm enough to be human. Honest enough to be useful.</figcaption>
            </figure>

            <div className="about-copy">
              <p className="eyebrow">The person in the room</p>
              <h2 id="about-title">Warm, direct and genuinely engaged.</h2>
              <p className="lead-copy">
                I listen carefully, think deeply and tend to notice the pattern underneath what is being said. I am willing to stay with a difficult conversation rather than tidy it up too quickly.
              </p>
              <p>
                I know what it can be like to process differently, monitor how you are coming across and be misunderstood despite trying very hard to be clear. I have ADHD, and that lived experience informs my sensitivity to difference without becoming a lens I impose on everyone.
              </p>
              <p>
                I will not assume that difference is a flaw to edit out—or that every part of your experience needs to be explained through a label. What matters is understanding how life is for you and what becomes possible when you no longer have to perform a more acceptable version of it.
              </p>
              <div className="training-note">
                <Image src="/alexander-watson-submark.svg" alt="" width={2000} height={1890} aria-hidden="true" unoptimized />
                <div>
                  <h3>Training and accountability</h3>
                  <p>I am a counsellor in training, working with adults through supervised client work in Greater Manchester. I am transparent about where I am professionally and take the responsibility of the work seriously.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="practical section" id="practical" aria-labelledby="practical-title">
          <div className="site-shell">
            <div className="practical-heading">
              <p className="eyebrow">The facts, plainly</p>
              <h2 id="practical-title">Clarity before you commit to anything.</h2>
              <p className="section-intro">
                An enquiry is simply a way to find out whether a conversation makes sense. It does not commit you to ongoing counselling.
              </p>
            </div>

            <dl className="details-grid">
              {practicalDetails.map(([term, detail]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section faq-section" id="faqs" aria-labelledby="faq-title">
          <div className="site-shell faq-grid">
            <div className="sticky-heading faq-heading">
              <p className="eyebrow">Frequently asked questions</p>
              <h2 id="faq-title">You are allowed to want the details.</h2>
              <p className="section-intro">Knowing how something works can make it easier to decide whether you want to begin.</p>
            </div>

            <div className="faq-list">
              {faqs.map((item, index) => (
                <details className="faq-item" key={item.question}>
                  <summary>
                    <span className="item-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.question}</span>
                    <span className="faq-toggle" aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="site-shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light">Begin a conversation</p>
              <h2 id="contact-title">The first message can be unfinished.</h2>
              <p>
                Tell me what has prompted you to look for counselling, ask a practical question, or simply say that you are not sure where to begin.
              </p>
              <p>I will reply by email with current availability, the fee and what a first session would involve.</p>
              <a className="direct-email" href="mailto:alexanderclivewatson@gmail.com">Or email me directly</a>
            </div>
            <EnquiryForm />
          </div>
        </section>

        <section className="urgent-support" id="urgent-support" aria-labelledby="support-title">
          <div className="site-shell support-grid">
            <div>
              <p className="eyebrow">Urgent support</p>
              <h2 id="support-title">This practice is not a crisis service.</h2>
            </div>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
