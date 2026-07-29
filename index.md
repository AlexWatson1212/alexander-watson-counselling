<section class="hero" aria-labelledby="home-hero-title">
  <div class="shell hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Greater Manchester · Online</p>
      <h1 id="home-hero-title">Counselling in Greater Manchester and online.</h1>
      <p class="hero-principle">A place where you do not have to keep holding everything together.</p>
      <p class="lede">Thoughtful, person-centred counselling for adults who look capable from the outside and feel overwhelmed, disconnected or stuck underneath.</p>

  {% if site.practice_location or site.session_fee or site.session_length or site.availability_summary %}
  <ul class="trust-list hero-practical-list" aria-label="Counselling practical details">
    {% if site.practice_location %}
    <li>In person in {{ site.practice_location }}</li>
    {% endif %}
    {% if site.session_fee and site.session_length %}
    <li>{{ site.session_fee }} per {{ site.session_length }}-minute session</li>
    {% elsif site.session_fee %}
    <li>{{ site.session_fee }} per session</li>
    {% elsif site.session_length %}
    <li>{{ site.session_length }}-minute sessions</li>
    {% endif %}
    {% if site.availability_summary %}
    <li>{{ site.availability_summary }}</li>
    {% endif %}
  </ul>
  {% endif %}

  <div class="actions">
    <a class="button button-accent" href="{{ '/contact/' | relative_url }}">Begin a conversation</a>
    <a class="button button-secondary" href="{{ '/working-together/' | relative_url }}">How I work</a>
  </div>
</div>

<figure class="hero-media">
  <img
    src="{{ '/assets/images/home/home-hero-winding-path-landscape.webp' | relative_url }}"
    width="1500"
    height="1200"
    alt="A quiet woodland path curving gently out of sight"
    fetchpriority="high"
    decoding="async">
</figure>

  </div>
</section>

<section class="recognition recognition-visual" aria-labelledby="recognition-title">
  <div class="shell">
    <div class="recognition-introduction">
      <div>
        <p class="eyebrow">You may recognise</p>
        <h2 id="recognition-title">Life is functioning, but it does not feel fully yours.</h2>
      </div>
      <p>You may keep up with work, relationships and ordinary responsibilities while privately feeling tense, exhausted or far away from yourself.</p>
    </div>

<div class="recognition-cards" role="list">
  <article role="listitem">
    <span class="signal-mark" aria-hidden="true"></span>
    <h3>Always analysing</h3>
    <p>You replay conversations, prepare for problems and struggle to let your mind become quiet.</p>
  </article>
  <article role="listitem">
    <span class="signal-mark" aria-hidden="true"></span>
    <h3>Appearing fine</h3>
    <p>Other people see someone capable and dependable. They may not see how much effort that takes.</p>
  </article>
  <article role="listitem">
    <span class="signal-mark" aria-hidden="true"></span>
    <h3>Knowing, but stuck</h3>
    <p>You may understand why you react as you do and still find yourself withdrawing, overthinking or repeating the same response.</p>
  </article>
</div>

<p class="section-link">
  <a href="{{ '/support/' | relative_url }}">More of what people bring</a>
</p>

  </div>
</section>

<section class="process-section process-section-visual" aria-labelledby="process-title">
  <div class="shell">
    <div class="process-introduction">
      <div>
        <p class="eyebrow">What counselling can offer</p>
        <h2 id="process-title">More room between what you feel and what you do next.</h2>
      </div>
      <p>Insight can be useful, but the aim is not simply to explain you. It is to help you recognise what happens in the moments that matter and discover responses that feel more like your own.</p>
    </div>

<div class="process-map" role="list" aria-label="A three-stage counselling process">
  <article role="listitem">
    <span class="process-node">01</span>
    <div>
      <h3>Put it into words</h3>
      <p>Begin with what is happening now: the worry, numbness, anger, pressure or sense of being stuck.</p>
    </div>
  </article>
  <article role="listitem">
    <span class="process-node">02</span>
    <div>
      <h3>Notice it happening</h3>
      <p>Recognise when self-criticism, people-pleasing, withdrawal or tension begins to take over.</p>
    </div>
  </article>
  <article role="listitem">
    <span class="process-node">03</span>
    <div>
      <h3>Respond with more choice</h3>
      <p>Create room to pause, express a need, set a boundary or meet yourself with less judgement.</p>
    </div>
  </article>
</div>

  </div>
</section>

<section class="about-preview" aria-labelledby="about-preview-title">
  <div class="shell about-preview-grid">
    <figure class="about-preview-media">
      <img
        src="{{ '/assets/images/portraits/home-about-alexander-watson-portrait.webp' | relative_url }}"
        width="1200"
        height="1500"
        alt="Portrait of Alexander Watson"
        loading="lazy"
        decoding="async">
    </figure>

<div class="about-preview-copy">
  <p class="eyebrow">About Alexander</p>
  <h2 id="about-preview-title">You do not need to arrive with the right words.</h2>
  <p>I am a counsellor in training, working with adults in Greater Manchester and online. I listen closely, ask useful questions and help you stay with experiences that may be difficult to explain on your own.</p>

  <ul class="trust-list" aria-label="What you can expect">
    <li>Time to think without being hurried</li>
    <li>Honest reflection connected to your everyday life</li>
    <li>Space to disagree, go quiet or change direction</li>
  </ul>

  <a class="button button-secondary button-compact" href="{{ '/about/' | relative_url }}">More about me</a>
</div>

  </div>
</section>

<section class="quote-section" aria-label="Counselling philosophy">
  <div class="shell quote-inner">
    <p class="eyebrow">A guiding principle</p>
    <blockquote>“The aim is not to turn you into someone else. It is to help you become more able to live as yourself.”</blockquote>
  </div>
</section>

{% if site.session_fee or site.session_length or site.introductory_call or site.practice_location or site.availability_summary %}

<section class="section section-border-top" aria-labelledby="home-practical-title">
  <div class="shell split split-wide">
    <div>
      <p class="eyebrow">Practical details</p>
      <h2 id="home-practical-title">At a glance.</h2>
    </div>

<div>
  <dl class="facts facts-featured">
    {% if site.session_length %}
    <div>
      <dt>Sessions</dt>
      <dd>{{ site.session_length }} minutes{% if site.session_frequency %}, {{ site.session_frequency }}{% endif %}</dd>
    </div>
    {% endif %}
    {% if site.session_fee %}
    <div>
      <dt>Fee</dt>
      <dd>{{ site.session_fee }} per session</dd>
    </div>
    {% endif %}
    {% if site.introductory_call %}
    <div>
      <dt>Introductory call</dt>
      <dd>{{ site.introductory_call }}</dd>
    </div>
    {% endif %}
    {% if site.practice_location %}
    <div>
      <dt>Where</dt>
      <dd>Online and in person in {{ site.practice_location }}</dd>
    </div>
    {% endif %}
    {% if site.availability_summary %}
    <div>
      <dt>Availability</dt>
      <dd>{{ site.availability_summary }}</dd>
    </div>
    {% endif %}
  </dl>

  <p class="section-link">
    <a href="{{ '/fees/' | relative_url }}">Full fees and practical details</a>
  </p>
</div>

  </div>
</section>
{% endif %}

<section class="cta-section" aria-labelledby="cta-title">
  <div class="shell cta-grid">
    <div>
      <p class="eyebrow">Next step</p>
      <h2 id="cta-title">We can begin with a conversation.</h2>
    </div>
    <div class="cta-copy">
      <p>A few sentences are enough. You can tell me what has prompted you to look for counselling, ask practical questions and decide whether speaking together feels right.</p>
      {% if site.enquiry_response_time %}
      <p>I reply to enquiries within {{ site.enquiry_response_time }}.</p>
      {% endif %}
      <a class="button button-primary" href="{{ '/contact/' | relative_url }}">Begin a conversation</a>
    </div>
  </div>
</section>