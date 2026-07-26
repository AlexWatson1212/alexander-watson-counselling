(() => {
  const button = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('[data-site-navigation]');
  const label = document.querySelector('[data-menu-label]');
  const desktopQuery = window.matchMedia('(min-width: 1040px)');

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

  const getFocusableItems = () => [
    button,
    ...navigation.querySelectorAll(focusableSelector)
  ].filter((element) => (
    !element.hasAttribute('disabled') &&
    element.getAttribute('aria-hidden') !== 'true'
  ));

  const setButtonState = (open) => {
    button.setAttribute('aria-expanded', String(open));

    button.setAttribute(
      'aria-label',
      open
        ? 'Close primary navigation'
        : 'Open primary navigation'
    );

    if (label) {
      label.textContent = open ? 'Close' : 'Menu';
    }
  };

  const closeMenu = ({ returnFocus = true } = {}) => {
    document.body.classList.remove('nav-open');
    setButtonState(false);

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
    setButtonState(true);

    navigation.removeAttribute('aria-hidden');
    navigation.removeAttribute('inert');

    window.requestAnimationFrame(() => {
      navigation.querySelector('a[href]')?.focus();
    });
  };

  const synchroniseLayout = () => {
    document.body.classList.remove('nav-open');
    setButtonState(false);

    if (desktopQuery.matches) {
      navigation.removeAttribute('aria-hidden');
      navigation.removeAttribute('inert');
    } else {
      navigation.setAttribute('aria-hidden', 'true');
      navigation.setAttribute('inert', '');
    }
  };

  button.addEventListener('click', () => {
    menuIsOpen()
      ? closeMenu()
      : openMenu();
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
    if (
      !menuIsOpen() ||
      desktopQuery.matches
    ) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== 'Tab') return;

    const items = getFocusableItems();

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

  if (
    typeof desktopQuery.addEventListener === 'function'
  ) {
    desktopQuery.addEventListener(
      'change',
      synchroniseLayout
    );
  } else {
    desktopQuery.addListener(
      synchroniseLayout
    );
  }

  synchroniseLayout();
})();