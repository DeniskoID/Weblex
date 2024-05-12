import lenis from './lenis';

const mobileMenuInteraction = function () {
  const menu = document.querySelector('.header__menu');
  const menuButton = document.querySelector('.mobile-nav-btn');
  const menuIcon = document.querySelector('.nav-icon');
  // const phone = document.querySelector('.header__phone');
  // const socialsBlock = document.querySelector('.header__soc1als');

  let isOpen = false;

  menuButton.setAttribute('aria-expanded', false);
  menuButton.addEventListener('click', function () {
    if (!isOpen) {
      isOpen = true;
      menuButton.setAttribute('aria-expanded', true);
      menuButton.setAttribute('aria-label', 'Закрыть меню');
      document.body.classList.add('no-scroll');
      menu.classList.add('header__menu--open');
      menuIcon.classList.add('nav-icon--active');
      lenis.stop();
    } else {
      isOpen = false;
      menuButton.setAttribute('aria-expanded', false);
      menuButton.setAttribute('aria-label', 'Открыть меню');
      document.body.classList.remove('no-scroll');
      menu.classList.remove('header__menu--open');
      menuIcon.classList.remove('nav-icon--active');
      lenis.start();
    }
  });
};

export default mobileMenuInteraction;
