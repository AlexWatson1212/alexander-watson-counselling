{% comment %}
Required _config.yml fields for a launch-ready Contact page:
email, contact_form_endpoint, enquiry_response_time, enquiry_retention_summary
Optional: contact_working_hours
{% endcomment %}

<section class="page-hero page-hero-simple">
  <div class="shell">
    <p class="eyebrow">Contact</p>
    <h1>Start with whatever feels easiest to say.</h1>
    <p class="lede">A short message is enough. Let me know what has prompted you to look for counselling and whether you prefer online or in-person sessions.</p>
    {% if site.enquiry_response_time %}
    <p>I reply within {{ site.enquiry_response_time }}.</p>
    {% endif %}
  </div>
</section>

<section class="contact-section">
  <div class="shell contact-grid">
    <aside class="contact-intro">
      <p class="eyebrow">Begin a conversation</p>
      <h2>You do not need to explain everything.</h2>
      <p>Share only what feels useful for an initial conversation. You can ask about availability, fees, format or how the process works.</p>

      {% if site.email %}
      <p class="direct-contact">Prefer email? <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
      {% endif %}
    </aside>

    {% if site.contact_form_endpoint %}
    <form
      class="contact-form"
      action="{{ site.contact_form_endpoint }}"
      method="post"
      accept-charset="UTF-8">

      <input type="hidden" name="source" value="Alexander Watson Counselling website">

      <div class="form-field">
        <label for="name">Name</label>
        <input id="name" name="name" autocomplete="name" required>
      </div>

      <div class="form-field">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" autocomplete="email" inputmode="email" required>
      </div>

      <div class="form-field">
        <label for="format">Preferred format</label>
        <select id="format" name="preferred_format">
          <option value="online">Online</option>
          <option value="in-person">In person</option>
          <option value="not-sure">Not sure</option>
        </select>
      </div>

      <div class="form-field">
        <label for="message">What would you like me to know?</label>
        <textarea id="message" name="message" rows="7" aria-describedby="message-guidance" required></textarea>
        <p id="message-guidance" class="field-guidance">A few sentences are plenty. There is no need to go into detail here; we can talk properly during the introductory conversation.</p>
      </div>

      <div class="hp" aria-hidden="true">
        <label for="website">Leave this field empty</label>
        <input id="website" name="website" tabindex="-1" autocomplete="off">
      </div>

      <label class="form-consent" for="contact-consent">
        <input id="contact-consent" name="contact_consent" type="checkbox" value="yes" required>
        <span>I understand that this form is for an initial enquiry and is not monitored as an emergency service.</span>
      </label>

      <button class="button button-accent" type="submit">Send enquiry</button>

      <p class="form-note">Your message is used only to respond to your enquiry{% if site.enquiry_retention_summary %} and {{ site.enquiry_retention_summary }}{% endif %}. Read the <a href="{{ '/privacy/' | relative_url }}">privacy notice</a> for details.</p>
    </form>
    {% elsif site.email %}
    <div class="contact-form contact-form-fallback">
      <p>The website form is not currently available.</p>
      <p>Email <a href="mailto:{{ site.email }}">{{ site.email }}</a> and include only what feels useful for an initial conversation.</p>
    </div>
    {% endif %}
  </div>
</section>

<section class="section section-border-top" aria-labelledby="after-send-title">
  <div class="shell split split-wide">
    <div>
      <p class="eyebrow">What happens next</p>
      <h2 id="after-send-title">After you send your message.</h2>
    </div>
    <div class="prose prose-large">
      <p>{% if site.enquiry_response_time %}I will reply to the email address you give within {{ site.enquiry_response_time }}.{% else %}I will reply to the email address you give as soon as I can during my working week.{% endif %}</p>
      {% if site.email %}
      <p>If you do not receive a reply, please email <a href="mailto:{{ site.email }}">{{ site.email }}</a> directly. Occasionally form messages can go astray.</p>
      {% endif %}
    </div>
  </div>
</section>

<section class="emergency-note" id="urgent-support" aria-labelledby="urgent-support-title">
  <div class="shell emergency-note-grid">
    <div>
      <p class="eyebrow">Urgent support</p>
      <h2 id="urgent-support-title">If you need help now.</h2>
    </div>
    <div class="prose">
      <p>This website and enquiry form are not emergency services{% if site.contact_working_hours %} and are not monitored outside {{ site.contact_working_hours }}{% endif %}.</p>
      <ul>
        <li>For urgent mental health support in England, call <strong>111</strong> and select the mental health option.</li>
        <li>Call <strong>Samaritans on 116 123</strong>, free, at any time of day or night.</li>
        <li>In Greater Manchester, you can text <strong>07480 635134</strong> for 24-hour urgent NHS mental health support.</li>
        <li>If someone is in immediate danger or cannot stay safe, call <strong>999</strong> or go to the nearest A&amp;E department.</li>
      </ul>
      <p><a href="https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/">NHS urgent mental health guidance</a> · <a href="https://www.samaritans.org/how-we-can-help/contact-samaritan/">Contact Samaritans</a></p>
    </div>
  </div>
</section>
