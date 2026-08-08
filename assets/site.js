(() => {
  const button = document.querySelector(".menu-button");
  const panel = document.querySelector(".mobile-panel");

  const setMenu = (open) => {
    if (!button || !panel) return;
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    panel.dataset.open = String(open);
  };

  button?.addEventListener("click", () => {
    setMenu(button.getAttribute("aria-expanded") !== "true");
  });

  panel?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenu(false);
      button?.focus();
    }
  });

  // The header rule only appears once the page has moved, so the opening
  // composition stays uninterrupted.
  const header = document.querySelector(".site-header");

  if (header) {
    const setScrolled = () => {
      header.dataset.scrolled = String(window.scrollY > 8);
    };
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });
  }

  const form = document.querySelector("#enquiry-form");
  const status = form?.querySelector(".form-status");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      if (status) status.textContent = "Please complete all three fields before preparing your email.";
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Counselling enquiry from ${name}`);
    const body = encodeURIComponent(`Hello Alexander,\n\n${message}\n\nMy email address is ${email}.\n\nBest wishes,\n${name}`);

    if (status) status.textContent = "Your email app should open now. You can review everything before sending.";
    window.location.href = `mailto:alexanderclivewatson@gmail.com?subject=${subject}&body=${body}`;
  });
})();
