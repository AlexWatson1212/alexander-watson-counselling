{% comment %}
Optional _config.yml fields used on this page:
training_course, training_provider, expected_qualification_date,
professional_membership, supervision_summary, about_personal_note,
practice_location, session_fee, session_length, enquiry_response_time
{% endcomment %}

<section class="page-hero page-hero-about">
  <div class="shell page-hero-grid">
    <div>
      <p class="eyebrow">About</p>
      <h1>I am interested in the person beneath the coping strategies.</h1>
      <p class="lede">How you learned to survive, what those adaptations have protected, and what might become possible when you no longer have to carry everything in the same way.</p>
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
      <p>I am currently training as a counsellor and work with adults under regular supervision. I have placed this information near the top of the page because you should know who you would be sitting with before deciding whether to contact me.</p>

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
      <p class="eyebrow">How I work</p>
      <h2>Careful attention, useful questions and honest reflection.</h2>
    </div>

    <div class="prose prose-large">
      <p>I bring curiosity, steadiness and honesty to the room. I will not hand you a theory about who you are. We work out together what is actually happening, in language that feels accurate to you.</p>
      <p>I value depth, but not unnecessary complexity. Sometimes the most meaningful change begins with finding simple language for something you have felt for years.</p>
    </div>
  </div>
</section>

<section class="principles-band" aria-labelledby="about-principles-title">
  <div class="shell">
    <div class="principles-heading">
      <p class="eyebrow">What you can expect</p>
      <h2 id="about-principles-title">What it is like to work with me.</h2>
    </div>

    <div class="principles-grid">
      <article>
        <h3>Thoughtful</h3>
        <p>We slow down enough to notice what is actually happening rather than reaching for a quick explanation.</p>
      </article>
      <article>
        <h3>Collaborative</h3>
        <p>You remain the authority on your experience. My role is to help you see it from new and useful angles.</p>
      </article>
      <article>
        <h3>Direct</h3>
        <p>I will say what I notice: honest without being harsh, and clear without reducing you to a simple answer.</p>
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
      <h2 id="about-cta-title">If you would like to talk.</h2>
    </div>
    <div class="cta-copy">
      <p>Send a short message and we can arrange a no-obligation introductory conversation.</p>
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
