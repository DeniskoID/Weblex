import { gsap } from 'gsap';

const mobileMenuInteraction = function () {
  const menu = document.querySelector('.header__menu');
  const menuButton = document.querySelector('.mobile-nav-btn');
  const menuIcon = document.querySelector('.nav-icon');
  const menuItems = gsap.utils.toArray('.header__nav-link');
  const phone = document.querySelector('.header__phone');
  const socialsBlock = document.querySelector('.header__soc1als');

  let isOpen = false;

  gsap.set(menu, {
    // opacity: 0,
    // xPercent: 100,
  });

  gsap.set(menuItems, {
    // yPercent: 100,
  });

  gsap.set(phone, {
    // opacity: 0,
  });

  gsap.set(socialsBlock, {
    // opacity: 0,
  });

  const navTl = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: 'power4.inOut',
      // paused: true,
    },
  });

  navTl
    .to(menu, {
      duration: 0.4,
      opacity: 1,
      xPercent: 0,
      visibility: 'visible',
    })
    .to(
      menuItems,
      {
        yPercent: 0,
        stagger: 0.07,
        duration: 1.5,
      },
      '-=0.8',
    )
    .to(
      phone,
      {
        opacity: 1,
        duration: 1.1,
      },
      '-=1',
    )
    .to(
      socialsBlock,
      {
        opacity: 1,
        duration: 1,
      },
      '-=1',
    );

  navTl.pause();

  menuButton.setAttribute('aria-expanded', false);
  menuButton.addEventListener('click', function () {
    if (!isOpen) {
      navTl.play();
      isOpen = true;
      menuButton.setAttribute('aria-expanded', true);
      menuButton.setAttribute('aria-label', 'Закрыть меню');
      document.body.classList.add('no-scroll');
      menuIcon.classList.add('nav-icon--active');
    } else {
      navTl.reverse();
      isOpen = false;
      menuButton.setAttribute('aria-expanded', false);
      menuButton.setAttribute('aria-label', 'Открыть меню');
      document.body.classList.remove('no-scroll');
      menuIcon.classList.remove('nav-icon--active');
    }
  });
};

export default mobileMenuInteraction;
