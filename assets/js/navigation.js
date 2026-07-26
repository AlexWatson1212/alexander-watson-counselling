(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!button || !nav) return;
  const links = [...nav.querySelectorAll('a')];
  const setOpen = (open) => {
    document.body.classList.toggle('nav-open', open);
    button.setAttribute('aria-expanded', String(open));
    if (open) links[0]?.focus(); else button.focus();
  };
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  links.forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') setOpen(false);
  });
  window.matchMedia('(min-width: 960px)').addEventListener('change', e => { if (e.matches) setOpen(false); });
})();
