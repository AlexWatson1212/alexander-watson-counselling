"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navigation = [
  ["Is this you?", "#is-this-you"],
  ["How I work", "#how-i-work"],
  ["About", "#about"],
  ["Practical", "#practical"],
  ["FAQs", "#faqs"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a
          className="brand-link"
          href="#home"
          aria-label="Alexander Watson Counselling, home"
          onClick={() => setOpen(false)}
        >
          <Image src="/alexander-watson-primary-logo.svg" alt="" width={2000} height={500} unoptimized />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>

        <a className="button button-primary header-cta" href="#contact">
          Begin a conversation
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="menu-icon" aria-hidden="true" />
        </button>
      </div>

      <div className="mobile-panel" data-open={open} id="mobile-navigation">
        <nav className="site-shell mobile-nav" aria-label="Mobile navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="button button-primary" href="#contact" onClick={() => setOpen(false)}>
            Begin a conversation
          </a>
        </nav>
      </div>
    </header>
  );
}
