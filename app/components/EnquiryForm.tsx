"use client";

import { FormEvent, useState } from "react";

export function EnquiryForm() {
  const [status, setStatus] = useState("");

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("Please complete all three fields before preparing your email.");
      return;
    }

    const subject = encodeURIComponent(`Counselling enquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Alexander,\n\n${message}\n\nMy email address is ${email}.\n\nBest wishes,\n${name}`,
    );

    setStatus("Your email app should open now. You can review everything before sending.");
    window.location.href = `mailto:alexanderclivewatson@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="enquiry-form" onSubmit={prepareEmail}>
      <div className="form-heading">
        <p className="eyebrow">A few sentences are enough</p>
        <p>You do not need to tell your whole story here.</p>
      </div>

      <div className="form-field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>

      <div className="form-field">
        <label htmlFor="email">Your email address</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="form-field">
        <label htmlFor="message">
          What would you like me to know? <span>(It can be unfinished.)</span>
        </label>
        <textarea id="message" name="message" required />
      </div>

      <button className="button button-primary" type="submit">Prepare my email</button>
      <p className="form-note">
        This opens your own email app. Nothing entered here is sent to or stored by this website.
      </p>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
