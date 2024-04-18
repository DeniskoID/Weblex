// import slider from './modules/reviews-slider';
// slider.mount();

import lenis from './modules/lenis.js';
lenis.start();

import mobileMenuInteraction from './modules/mobile-menu.js';
mobileMenuInteraction();

import fixOpacity from './utilits/fix-opacity.js';
fixOpacity();

import videoSmartStart from './modules/yt-player.js';
videoSmartStart();

import menuBgAnimation from './modules/header-bg.js';
menuBgAnimation();

import accordion from './modules/accordion.js';
accordion('.accordion', '.accordion__panel', '.accordion__panel-content');
