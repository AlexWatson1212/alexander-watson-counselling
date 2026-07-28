{% comment %}
Required _config.yml fields for a launch-ready Fees page:
session_length, session_fee, introductory_call, session_frequency,
practice_location, in_person_details, availability_summary,
payment_summary, cancellation_summary
Optional: reduced_fee_summary, online_platform, waiting_list_summary
{% endcomment %}

<section class="page-hero page-hero-fees">
  <div class="shell page-hero-grid">
    <div>
      <p class="eyebrow">Fees and practical details</p>
      <h1>Clear information, without hidden steps.</h1>
      <p class="lede">Everything you need in order to decide whether the arrangement is workable is set out on this page.</p>
    </div>

    <aside class="fees-hero-card" aria-label="Counselling details at a glance">
      <p class="eyebrow">At a glance</p>
      {% if site.session_length %}
      <div><span>Session length</span><strong>{{ site.session_length }} minutes</strong></div>
      {% endif %}
      {% if site.session_fee %}
      <div><span>Fee</span><strong>{{ site.session_fee }}</strong></div>
      {% endif %}
      {% if site.availability_summary %}
      <div><span>Availability</span><strong>{{ site.availability_summary }}</strong></div>
      {% endif %}
      {% if site.introductory_call %}
      <p class="fees-card-note">Introductory conversation: {{ site.introductory_call }}.</p>
      {% endif %}
    </aside>
  </div>
</section>

<section class="fees-section" aria-labelledby="fees-details-title">
  <div class="shell fees-grid">
    <div class="fees-intro">
      <p class="eyebrow">Practical details</p>
      <h2 id="fees-details-title">What to expect before booking.</h2>
      <p>These details apply unless we agree something different together before the counselling begins.</p>
    </div>

    <div>
      <dl class="facts facts-featured">
        {% if site.session_length %}
        <div>
          <dt>Session length</dt>
          <dd>{{ site.session_length }} minutes</dd>
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
          <dt>Introductory conversation</dt>
          <dd>{{ site.introductory_call }}</dd>
        </div>
        {% endif %}
        {% if site.session_frequency %}
        <div>
          <dt>Frequency</dt>
          <dd>{{ site.session_frequency }}</dd>
        </div>
        {% endif %}
        {% if site.practice_location %}
        <div>
          <dt>Format</dt>
          <dd>Online across the UK and in person in {{ site.practice_location }}</dd>
        </div>
        {% endif %}
        {% if site.in_person_details %}
        <div>
          <dt>In-person location</dt>
          <dd>{{ site.in_person_details }}</dd>
        </div>
        {% endif %}
        {% if site.availability_summary %}
        <div>
          <dt>Availability</dt>
          <dd>{{ site.availability_summary }}</dd>
        </div>
        {% endif %}
        {% if site.payment_summary %}
        <div>
          <dt>Payment</dt>
          <dd>{{ site.payment_summary }}</dd>
        </div>
        {% endif %}
        {% if site.cancellation_summary %}
        <div>
          <dt>Cancellation</dt>
          <dd>{{ site.cancellation_summary }}</dd>
        </div>
        {% endif %}
        {% if site.reduced_fee_summary %}
        <div>
          <dt>Reduced-fee places</dt>
          <dd>{{ site.reduced_fee_summary }}</dd>
        </div>
        {% endif %}
      </dl>
    </div>
  </div>
</section>

<section class="section section-border-top" aria-labelledby="fees-faq-title">
  <div class="shell split split-wide">
    <div>
      <p class="eyebrow">Common questions</p>
      <h2 id="fees-faq-title">Questions people often ask.</h2>
    </div>

    <div class="faq-list">
      <details class="faq-item">
        <summary>How many sessions will I need?</summary>
        <div class="prose">
          <p>There is no fixed number that suits everyone. We can agree an initial focus, notice how the work is developing and review together whether continuing feels useful.</p>
        </div>
      </details>

      <details class="faq-item">
        <summary>What happens in the first session?</summary>
        <div class="prose">
          <p>There is nothing to prepare. We talk about what has brought you, what you are hoping for and what would help the work feel safe and useful. There is also time for practical questions.</p>
        </div>
      </details>

      <details class="faq-item">
        <summary>Do I have to talk about my childhood?</summary>
        <div class="prose">
          <p>No. We begin with what feels present and relevant now. Earlier experiences may become useful to explore, but they are not imposed as a starting point.</p>
        </div>
      </details>

      <details class="faq-item">
        <summary>What if counselling does not feel right?</summary>
        <div class="prose">
          <p>You can say so, and you are free to stop. It is useful to tell me when something is not working; that conversation can itself become part of understanding what you need.</p>
        </div>
      </details>

      <details class="faq-item">
        <summary>Are you qualified?</summary>
        <div class="prose">
          <p>I am currently training as a counsellor and work under regular supervision. My current training and professional position are explained fully on the <a href="{{ '/about/' | relative_url }}">About page</a>.</p>
        </div>
      </details>

      <details class="faq-item">
        <summary>Is what I say confidential?</summary>
        <div class="prose">
          <p>Counselling is confidential within clearly explained ethical, safeguarding and legal limits. You can read the summary on the <a href="{{ '/working-together/' | relative_url }}#confidentiality-title">How I work page</a>, and we will discuss it before beginning.</p>
        </div>
      </details>

      <details class="faq-item">
        <summary>Do you offer online sessions?</summary>
        <div class="prose">
          <p>Yes.{% if site.online_platform %} Sessions take place using {{ site.online_platform }}.{% endif %} You will need a private space, a stable connection and somewhere you can speak without being overheard.</p>
        </div>
      </details>

      {% if site.waiting_list_summary %}
      <details class="faq-item">
        <summary>Is there a waiting list?</summary>
        <div class="prose">
          <p>{{ site.waiting_list_summary }}</p>
        </div>
      </details>
      {% endif %}
    </div>
  </div>
</section>

<section class="fees-reassurance">
  <div class="shell fees-reassurance-grid">
    <p class="eyebrow">Before you decide</p>
    <h2>You are welcome to ask practical questions first.</h2>
    <div>
      <p>Making contact does not commit you to counselling. It is a way to check current availability, ask about the process and decide whether the arrangement feels workable.</p>
      <a class="button button-primary" href="{{ '/contact/' | relative_url }}">Begin a conversation</a>
    </div>
  </div>
</section>
