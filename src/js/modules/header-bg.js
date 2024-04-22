import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function menuBgAnimation() {
  let mm = gsap.matchMedia();

  const header = document.querySelector('.header');
  const menu = document.querySelector('.header__inner');

  mm.add('(min-width: 1024px)', () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: 'top+=100',
        end: 'bottom+=100',
        toggleActions: 'play none none reverse',
        toggleClass: { targets: menu, className: 'is-active' },
        markers: false,
      },
    });
    tl.to(
      header,
      {
        top: 0,
        duration: 0.5,
      },
      '<',
    );
  });
}

export default menuBgAnimation;
