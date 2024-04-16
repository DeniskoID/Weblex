const fixOpacity = () => {
  // Установить css переменную opacity для body, если браузер firefox

  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    document.body.style.setProperty('--blur-opacity', '0.3');
  } else {
    document.body.style.setProperty('--blur-opacity', '0.2');
  }
};

export default fixOpacity;
