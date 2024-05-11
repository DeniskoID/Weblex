import detectBrowser from './check-browser';

const fixOpacity = () => {
  // Установить css переменную opacity для body, если браузер firefox
  if (detectBrowser().name === 'Firefox') {
    document.body.style.setProperty('--blur-opacity', '0.3');
  } else {
    document.body.style.setProperty('--blur-opacity', '0.2');
  }
};

export default fixOpacity;
