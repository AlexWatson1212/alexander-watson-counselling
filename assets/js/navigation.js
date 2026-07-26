(() => {
  const button = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('[data-site-navigation]');
  const label = document.querySelector('[data-menu-label]');
  const desktopQuery = window.matchMedia('(min-width: 960px)');

  if (!button || !navigation) return;

  const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(',');

  const menuIsOpen = () =>
    button.getAttribute('aria-expanded') === 'true';

  const focusableItems = () => [
    button,
    ...navigation.querySelectorAll(focusableSelector)
  ].filter((element) => {
    return (
      !element.hasAttribute('disabled') &&
      element.getAttribute('aria-hidden') !== 'true'
    );
  });

  const closeMenu = ({ returnFocus = true } = {}) => {
    document.body.classList.remove('nav-open');

    button.setAttribute('aria-expanded', 'false');
    button.setAttribute(
      'aria-label',
      'Open primary navigation'
    );

    if (label) {
      label.textContent = 'Menu';
    }

    if (!desktopQuery.matches) {
      navigation.setAttribute('aria-hidden', 'true');
      navigation.setAttribute('inert', '');
    }

    if (returnFocus) {
      button.focus();
    }
  };

  const openMenu = () => {
    if (desktopQuery.matches) return;

    document.body.classList.add('nav-open');

    button.setAttribute('aria-expanded', 'true');
    button.setAttribute(
      'aria-label',
      'Close primary navigation'
    );

    if (label) {
      label.textContent = 'Close';
    }

    navigation.removeAttribute('aria-hidden');
    navigation.removeAttribute('inert');

    window.requestAnimationFrame(() => {
      navigation.querySelector('a[href]')?.focus();
    });
  };

  const synchroniseLayout = () => {
    if (desktopQuery.matches) {
      document.body.classList.remove('nav-open');

      button.setAttribute('aria-expanded', 'false');
      button.setAttribute(
        'aria-label',
        'Open primary navigation'
      );

      if (label) {
        label.textContent = 'Menu';
      }

      navigation.removeAttribute('aria-hidden');
      navigation.removeAttribute('inert');
    } else if (!menuIsOpen()) {
      navigation.setAttribute('aria-hidden', 'true');
      navigation.setAttribute('inert', '');
    }
  };

  button.addEventListener('click', () => {
    if (menuIsOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navigation.addEventListener('click', (event) => {
    if (
      !desktopQuery.matches &&
      event.target.closest('a')
    ) {
      closeMenu({ returnFocus: false });
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!menuIsOpen() || desktopQuery.matches) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== 'Tab') return;

    const items = focusableItems();

    if (!items.length) return;

    const first = items[0];
    const last = items[items.length - 1];

    if (
      event.shiftKey &&
      document.activeElement === first
    ) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === last
    ) {
      event.preventDefault();
      first.focus();
    }
  });

  desktopQuery.addEventListener(
    'change',
    synchroniseLayout
  );

  synchroniseLayout();
})();