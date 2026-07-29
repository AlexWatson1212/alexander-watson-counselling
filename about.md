{% comment %}Optional _config.yml fields used on this page:training_course, training_provider, expected_qualification_date,professional_membership, supervision_summary, about_personal_note,practice_location, session_fee, session_length, enquiry_response_time{% endcomment %}

<section class="page-hero page-hero-about">
  <div class="shell page-hero-grid">
    <div>
      <p class="eyebrow">About</p>
      <h1>I am interested in what life is like beneath the ways you have learned to cope.</h1>
      <p class="lede">You may be the person other people rely on, while privately feeling overwhelmed, self-critical or unsure how to ask for what you need. Counselling offers somewhere you do not have to keep presenting the capable version of yourself.</p>
    </div>

<figure class="image-frame portrait-frame">
  <img
    src="{{ '/assets/images/portraits/home-about-alexander-watson-portrait.webp' | relative_url }}"
    width="1200"
    height="1500"
    alt="Portrait of Alexander Watson">
</figure>

  </div>
</section>

<section class="section section-border-top" aria-labelledby="training-title">
  <div class="shell split split-wide">
    <div>
      <p class="eyebrow">Professional position</p>
      <h2 id="training-title">Where I am in my training.</h2>
    </div>

<div class="prose prose-large">
  <p>I am currently training as a counsellor and work with adults under regular supervision. I believe you should have clear information about my professional position before deciding whether to contact me.</p>

  {% if site.training_course or site.training_provider or site.expected_qualification_date or site.professional_membership or site.supervision_summary %}
  <dl class="facts">
    {% if site.training_course %}
    <div>
      <dt>Training</dt>
      <dd>{{ site.training_course }}{% if site.training_provider %}, {{ site.training_provider }}{% endif %}</dd>
    </div>
    {% elsif site.training_provider %}
    <div>
      <dt>Training provider</dt>
      <dd>{{ site.training_provider }}</dd>
    </div>
    {% endif %}

    {% if site.expected_qualification_date %}
    <div>
      <dt>Expected qualification</dt>
      <dd>{{ site.expected_qualification_date }}</dd>
    </div>
    {% endif %}

    {% if site.professional_membership %}
    <div>
      <dt>Professional membership</dt>
      <dd>{{ site.professional_membership }}</dd>
    </div>
    {% endif %}

    {% if site.supervision_summary %}
    <div>
      <dt>Supervision</dt>
      <dd>{{ site.supervision_summary }}</dd>
    </div>
    {% endif %}
  </dl>
  {% endif %}
</div>

  </div>
</section>

<section class="section section-border-top">
  <div class="shell split split-wide">
    <div>
      <p class="eyebrow">How I am with clients</p>
      <h2>You do not have to make yourself easy to understand.</h2>
    </div>

<div class="prose prose-large">
  <p>You might arrive with a clear story, scattered thoughts, strong feelings or no idea where to begin. You may lose your train of thought, go quiet or find that the words do not quite match the experience. None of that means you are doing counselling badly.</p>
  <p>I bring curiosity, steadiness and honesty to the room. I listen closely, ask questions where they may help and offer what I notice without handing you a fixed theory about who you are.</p>
  <p>I value depth, but not unnecessary complexity. The work should eventually connect back to your life: how you speak to yourself, relate to other people, make decisions and respond when something feels difficult.</p>
</div>

  </div>
</section>

<section class="principles-band" aria-labelledby="about-principles-title">
  <div class="shell">
    <div class="principles-heading">
      <p class="eyebrow">What you can expect</p>
      <h2 id="about-principles-title">A relationship in which you can be more honest.</h2>
    </div>

<div class="principles-grid">
  <article>
    <h3>Room to be uncertain</h3>
    <p>You do not need a polished explanation or a fixed goal. We can begin with the part of the experience you can reach.</p>
  </article>
  <article>
    <h3>Shared understanding</h3>
    <p>You remain the authority on your experience. We work together to find language and meaning that genuinely fit.</p>
  </article>
  <article>
    <h3>Honest reflection</h3>
    <p>I will say what I notice carefully and directly. You can disagree, correct me or tell me when something does not feel useful.</p>
  </article>
</div>

  </div>
</section>

{% if site.about_personal_note %}

<section class="section section-border-top" aria-labelledby="personal-note-title">
  <div class="shell split split-wide">
    <div>
      <p class="eyebrow">A little more about me</p>
      <h2 id="personal-note-title">How I came to this work.</h2>
    </div>
    <div class="prose prose-large">
      <p>{{ site.about_personal_note }}</p>
    </div>
  </div>
</section>
{% endif %}

<section class="cta-section" aria-labelledby="about-cta-title">
  <div class="shell cta-grid">
    <div>
      <p class="eyebrow">Next step</p>
      <h2 id="about-cta-title">Deciding whether I may be the right person.</h2>
    </div>
    <div class="cta-copy">
      <p>Send a short message and we can arrange a no-obligation introductory conversation. You can tell me a little about what brings you, ask questions and notice how it feels to speak together.</p>
      {% if site.enquiry_response_time %}
      <p>I reply within {{ site.enquiry_response_time }}.</p>
      {% endif %}
      {% if site.session_fee or site.session_length or site.practice_location %}
      <p>
        {% if site.session_length %}Sessions are {{ site.session_length }} minutes{% endif %}
        {% if site.session_fee %}{% if site.session_length %} at {% endif %}{{ site.session_fee }} per session{% endif %}
        {% if site.practice_location %}{% if site.session_fee or site.session_length %}, {% endif %}online or in person in {{ site.practice_location }}{% endif %}.
      </p>
      {% endif %}
      <a class="button button-accent" href="{{ '/contact/' | relative_url }}">Begin a conversation</a>
    </div>
  </div>
</section>