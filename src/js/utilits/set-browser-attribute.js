import detectBrowser from './check-browser';

const setBrowserAttribute = () => {
  const browser = detectBrowser().name.toLowerCase();

  if (browser) {
    document.documentElement.setAttribute('data-browser', `${browser}`);
  }
};

export default setBrowserAttribute;
