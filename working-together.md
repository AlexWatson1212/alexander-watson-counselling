{% comment %}
This page combines the former Approach and Working together pages.
Optional _config.yml fields used here:
enquiry_response_time, introductory_call_length, introductory_call_format,
session_length, session_fee, session_frequency, review_frequency
{% endcomment %}

<section class="page-hero page-hero-working">
  <div class="shell page-hero-grid">
    <div>
      <p class="eyebrow">How I work</p>
      <h1>Space to explore, not pressure to perform.</h1>
      <p class="lede">You set the pace. My role is to listen carefully, notice what may be happening between and beneath the words, and help you stay close to what feels important.</p>
    </div>

    <figure class="image-frame image-frame-landscape">
      <img
        src="{{ '/assets/images/working-together/working-together-two-chairs-soft-light.webp' | relative_url }}"
        width="1400"
        height="1000"
        alt="Two comfortable chairs in a calm, softly lit counselling room">
    </figure>
  </div>
</section>

<section class="section section-border-top">
  <div class="shell split split-wide">
    <div>
      <p class="eyebrow">What I believe about change</p>
      <h2>Your experience does not need to fit a fixed method.</h2>
    </div>

    <div class="prose prose-large">
      <p>I believe people change when they have enough safety, honesty and acceptance to encounter their experience without immediately defending against it.</p>
      <p>This is not passive listening. It means paying close attention, offering reflections, questioning assumptions where it is useful, and staying alongside you as new understanding emerges.</p>
    </div>
  </div>
</section>

<section class="approach-principles" aria-labelledby="approach-principles-title">
  <div class="shell approach-principles-grid">
    <div class="approach-principles-intro">
      <p class="eyebrow">Working principles</p>
      <h2 id="approach-principles-title">Three things I try to hold onto.</h2>
    </div>

    <div class="approach-principles-list">
      <article>
        <div>
          <h3>Acceptance</h3>
          <p>Your experience does not have to be tidy or reasonable before it deserves attention.</p>
        </div>
      </article>
      <article>
        <div>
          <h3>Curiosity</h3>
          <p>We replace judgement with a genuine interest in why your mind and body respond as they do.</p>
        </div>
      </article>
      <article>
        <div>
          <h3>Responsibility</h3>
          <p>Understanding the past can create more choice in the present without blaming you for how you learned to survive.</p>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="journey-section" aria-labelledby="journey-title">
  <div class="shell journey-grid">
    <div class="journey-intro">
      <p class="eyebrow">The process</p>
      <h2 id="journey-title">A clear beginning, with room for the work to develop.</h2>
    </div>

    <div class="journey-steps journey-steps-visual">
      <article>
        <span>01</span>
        <div>
          <h3>You get in touch</h3>
          <p>Send a short message. You do not need to disclose your whole story.{% if site.enquiry_response_time %} I reply within {{ site.enquiry_response_time }}.{% endif %}</p>
        </div>
      </article>
      <article>
        <span>02</span>
        <div>
          <h3>An introductory conversation</h3>
          <p>{% if site.introductory_call_length %}Around {{ site.introductory_call_length }} minutes{% else %}A short conversation{% endif %}{% if site.introductory_call_format %}, {{ site.introductory_call_format }}{% endif %}. You can say a little about what brings you, ask anything practical, and decide whether you would like to continue. There is no obligation either way.</p>
        </div>
      </article>
      <article>
        <span>03</span>
        <div>
          <h3>First session</h3>
          <p>We explore what has brought you, what you hope for, and what would help the work feel safe and useful.{% if site.session_length or site.session_fee %} {% if site.session_length %}Sessions last {{ site.session_length }} minutes{% endif %}{% if site.session_fee %}{% if site.session_length %} and cost {% endif %}{{ site.session_fee }}{% endif %}.{% endif %}</p>
        </div>
      </article>
      <article>
        <span>04</span>
        <div>
          <h3>Ongoing work</h3>
          <p>{% if site.session_frequency %}Sessions are usually {{ site.session_frequency }}. {% endif %}Over time there is enough space to recognise patterns, experience feelings more fully and develop a different relationship with yourself.{% if site.review_frequency %} We review how the work is going {{ site.review_frequency }}.{% endif %}</p>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="working-note">
  <div class="shell working-note-grid">
    <p class="eyebrow">The pace is collaborative</p>
    <blockquote>“You do not have to perform insight. We can begin with what is actually present.”</blockquote>
  </div>
</section>

<section class="section section-border-top" aria-labelledby="confidentiality-title">
  <div class="shell split split-wide">
    <div>
      <p class="eyebrow">Confidentiality</p>
      <h2 id="confidentiality-title">What stays in the room.</h2>
    </div>

    <div class="prose prose-large">
      <p>What you share is treated as confidential. I discuss my client work in regular supervision, with care taken to protect your identity. Supervision helps me work safely, ethically and thoughtfully.</p>
      <p>There are limited circumstances in which I may need to share information, including serious risk of harm, safeguarding concerns or a legal requirement. We will go through these limits clearly before the counselling begins.</p>
    </div>
  </div>
</section>

<section class="cta-section" aria-labelledby="working-cta-title">
  <div class="shell cta-grid">
    <div>
      <p class="eyebrow">Next step</p>
      <h2 id="working-cta-title">Begin with a short message.</h2>
    </div>
    <div class="cta-copy">
      <p>Tell me a little about what brings you here and ask whatever you need to know about availability, fees or the way I work.</p>
      <a class="button button-accent" href="{{ '/contact/' | relative_url }}">Begin a conversation</a>
    </div>
  </div>
</section>
