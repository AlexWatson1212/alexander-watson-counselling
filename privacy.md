---
layout: default
permalink: /privacy/
title: Privacy
description: How Alexander Watson Counselling handles website visits and initial enquiries.
---

<section class="page-hero page-hero-simple">
  <div class="shell">
    <p class="eyebrow">Privacy</p>
    <h1>Privacy notice.</h1>
    <p class="lede">This page explains what information may be processed when you visit this website or make an initial enquiry.</p>
    {% if site.privacy_last_updated %}
    <p class="muted">Last updated: {{ site.privacy_last_updated }}</p>
    {% endif %}
  </div>
</section>

<section class="section section-border-top legal-page">
  <div class="shell legal-layout">
    <nav class="legal-contents" aria-label="Privacy notice contents">
      <p class="eyebrow">On this page</p>
      <a href="#who-is-responsible">Who is responsible</a>
      <a href="#website-visits">Website visits</a>
      <a href="#cookies">Cookies and analytics</a>
      <a href="#enquiries">Initial enquiries</a>
      <a href="#sharing">Who information is shared with</a>
      <a href="#retention">How long information is kept</a>
      <a href="#rights">Your rights</a>
    </nav>

    <div class="legal-content prose prose-large">
      <section id="who-is-responsible">
        <p class="eyebrow">Who is responsible</p>
        <h2>About this notice.</h2>
        <p>Alexander Watson Counselling is responsible for the personal information described on this page.</p>
        {% if site.email %}
        <p>For privacy questions or requests, email <a href="mailto:{{ site.email }}">{{ site.email }}</a>.</p>
        {% else %}
        <p>Privacy contact details will be published alongside the public enquiry route before the website is used to accept enquiries.</p>
        {% endif %}
      </section>

      <section id="website-visits">
        <p class="eyebrow">Website visits</p>
        <h2>Technical information.</h2>
        <p>The company that hosts this website may automatically process standard technical information needed to deliver and protect the site. This can include an IP address, browser and device information, requested pages, dates and times, and security logs.</p>
        {% if site.hosting_provider %}
        <p>This website is hosted by {{ site.hosting_provider }}.</p>
        {% endif %}
        <p>I do not use this information to create visitor profiles or to identify people who are simply browsing the site.</p>

        {% if site.use_google_fonts %}
        <h3>Google Fonts</h3>
        <p>This site currently loads its typefaces through the Google Fonts service. When the page loads, the visitor’s browser requests the font files from Google. That request includes technical information such as the visitor’s IP address, browser information and the page making the request. Google states that the Google Fonts Web API does not set or log cookies and does not use the information to create end-user profiles or for targeted advertising.</p>
        <p>Remote font loading can be switched off in the site configuration. If it is disabled, the site will use the fallback fonts already defined in the stylesheet.</p>
        {% endif %}
      </section>

      <section id="cookies">
        <p class="eyebrow">Cookies and analytics</p>
        <h2>No tracking or analytics.</h2>
        {% if site.analytics_enabled or site.non_essential_cookies %}
        <p>This notice must be reviewed before analytics or non-essential cookies are enabled. Appropriate information and consent controls must be in place before those tools load.</p>
        {% else %}
        <p>This website does not currently use visitor analytics, advertising pixels or non-essential cookies. There is therefore no optional cookie consent banner.</p>
        <p>A hosting or form provider may use a cookie only where it is strictly necessary for security or to provide a feature that a visitor has requested. If the site later introduces analytics or any other optional tracking technology, this notice and the consent controls will be updated before that technology is enabled.</p>
        {% endif %}
      </section>

      <section id="enquiries">
        <p class="eyebrow">Initial enquiries</p>
        <h2>Information you choose to send.</h2>
        <p>If you make an enquiry, I may receive your name, email address, preferred session format and whatever you choose to include in your message. You do not need to provide a detailed personal or clinical history in an initial message.</p>
        <p>I use this information to reply, answer practical questions, consider whether I may be able to offer an appropriate service, and arrange an introductory conversation if suitable.</p>
        <p>The ordinary contact information you provide is processed because it is necessary to respond to the steps you have asked me to take before any counselling agreement is made. If you choose to include information about your health or wellbeing, the enquiry form asks for your explicit consent to use that information only for responding to the enquiry.</p>
        <p>You can withdraw that consent before counselling begins by contacting me. This may mean I can no longer assess or respond to the enquiry.</p>
        <p>If counselling begins, I will provide separate information about counselling records, confidentiality, supervision and the agreement governing the work.</p>
      </section>

      <section id="sharing">
        <p class="eyebrow">Sharing information</p>
        <h2>Who may process an enquiry.</h2>
        <p>I do not sell personal information and do not share enquiry details for advertising.</p>
        <p>Information may be processed by the services needed to operate the website and communication route, such as the website host, email provider and, once connected, the secure contact-form provider.</p>
        {% if site.contact_form_endpoint %}
        <p>The contact form is connected through the provider associated with the configured form endpoint. The named provider and its processing location should be recorded here before the form is made public.</p>
        {% endif %}
        <p>Information may also be shared where there is a serious and immediate safety concern, a safeguarding obligation or a legal requirement. Where possible and appropriate, I would discuss this with the person concerned first.</p>
      </section>

      <section id="retention">
        <p class="eyebrow">Retention</p>
        <h2>How long enquiry information is kept.</h2>
        <p>Enquiry information is kept only for as long as it is reasonably needed to respond, manage any follow-up and meet relevant safety or legal responsibilities. If counselling does not begin, it is deleted when there is no longer a reasonable need to retain it.</p>
        <p>If counselling begins, relevant information may become part of the counselling record and will be covered by the separate client privacy information and counselling agreement.</p>
      </section>

      <section id="rights">
        <p class="eyebrow">Your rights</p>
        <h2>Accessing or changing your information.</h2>
        <p>Depending on the circumstances, you may have rights to ask for access to your personal information, request correction or deletion, restrict how it is used, object to processing, or ask for information you provided in a portable format.</p>
        <p>You also have the right to withdraw consent where consent is the basis being used. Some rights are not absolute, and a request may need to be balanced against legal, safeguarding or record-keeping duties.</p>
        {% if site.email %}
        <p>To make a request, email <a href="mailto:{{ site.email }}">{{ site.email }}</a>.</p>
        {% endif %}
        <p>If you remain concerned about how your information has been handled, you can complain to the <a href="https://ico.org.uk/make-a-complaint/">Information Commissioner’s Office</a>.</p>
      </section>

      <section>
        <p class="eyebrow">Changes</p>
        <h2>Keeping this notice accurate.</h2>
        <p>This notice will be reviewed whenever the website’s hosting, fonts, contact form, analytics or other data-processing arrangements change.</p>
      </section>
    </div>
  </div>
</section>
