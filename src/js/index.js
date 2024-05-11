// import slider from './modules/reviews-slider';
// slider.mount();

import lenis from './modules/lenis.js';
lenis.start();

import checkScrolbarWidth from './utilits/scrollbar-width-test.js';
checkScrolbarWidth();

import detectBrowser from './utilits/check-browser.js';
detectBrowser();

import setBrowserAttribute from './utilits/set-browser-attribute.js';
setBrowserAttribute();

import mobileMenuInteraction from './modules/mobile-menu.js';
mobileMenuInteraction();

import fixOpacity from './utilits/fix-opacity.js';
fixOpacity();

import VideoPlayer from './modules/yt-player-alt.js';
new VideoPlayer(document.querySelector('.yt-video-intro')).init();

import menuBgAnimation from './modules/header-bg.js';
menuBgAnimation();

import accordion from './modules/accordion.js';
accordion('.accordion', '.accordion__panel', '.accordion__panel-content');

import startDialog from './modules/dialog-actions.js';
startDialog();

import initTabs from './modules/tabs.js';
initTabs();
