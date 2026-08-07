"use client";
import { FormEvent } from "react";

export function EnquiryForm() {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Counselling enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:alexanderclivewatson@gmail.com?subject=${subject}&body=${body}`;
  }
  return (
    <form className="enquiry-form" onSubmit={prepareEmail}>
      <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required /></div>
      <div className="form-field"><label htmlFor="email">Your email address</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div className="form-field"><label htmlFor="message">What would you like me to know? <span>(A few sentences are enough.)</span></label><textarea id="message" name="message" required /></div>
      <button className="button button-primary" type="submit">Prepare my email</button>
      <p className="form-note">This opens your email app so you can review the message before sending. Nothing entered here is stored by this website.</p>
    </form>
  );
}
