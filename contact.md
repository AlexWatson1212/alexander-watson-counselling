<section class="page-hero page-hero-simple">
  <div class="shell">
    <p class="eyebrow">Contact</p>
    <h1>Start with whatever feels easiest to say.</h1>
    <p class="lede">A short message is enough. Let me know what has prompted you to look for counselling and whether you prefer online or in-person sessions.</p>
  </div>
</section>

<section class="contact-section">
  <div class="shell contact-grid">
    <aside class="contact-intro">
      <p class="eyebrow">Send an enquiry</p>
      <h2>You do not need to explain everything.</h2>
      <p>Share only what feels useful for an initial conversation. You can ask about availability, format or how the process works.</p>

      {% if site.email %}
      <p class="direct-contact">Prefer email? <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
      {% endif %}

      {% unless site.contact_form_endpoint %}
      <div class="contact-note">
        <h3>Before launch</h3>
        <p>Add <code>contact_form_endpoint</code> to <code>_config.yml</code>, then test delivery, spam protection and the confirmation experience.</p>
      </div>
      {% endunless %}
    </aside>

    <form
      class="contact-form"
      action="{% if site.contact_form_endpoint %}{{ site.contact_form_endpoint }}{% else %}#{% endif %}"
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
        <p id="message-guidance" class="field-guidance">A few sentences are enough. Please avoid highly sensitive clinical information.</p>
      </div>

      <div class="hp" aria-hidden="true">
        <label for="website">Leave this field empty</label>
        <input id="website" name="website" tabindex="-1" autocomplete="off">
      </div>

      <label class="form-consent" for="contact-consent">
        <input id="contact-consent" name="contact_consent" type="checkbox" value="yes" required>
        <span>I understand that this form is for an initial enquiry and is not monitored as an emergency service.</span>
      </label>

      <button
        class="button button-accent"
        type="submit"
        {% unless site.contact_form_endpoint %}disabled aria-disabled="true"{% endunless %}>
        {% if site.contact_form_endpoint %}Send enquiry{% else %}Connect form before launch{% endif %}
      </button>

      <p class="form-note">Your message should only be used to respond to your enquiry. Confirm the final privacy wording and retention process before launch.</p>
    </form>
  </div>
</section>

<section class="emergency-note">
  <div class="shell emergency-note-grid">
    <p class="eyebrow">Urgent support</p>
    <p>This website and enquiry form are not emergency services. Add the appropriate crisis and emergency guidance for the intended location before launch.</p>
  </div>
</section>
