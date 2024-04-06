const fixOpacity = () => {
  // Установить css переменную opacity для body, если браузер firefox

  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    document.body.style.setProperty('--blur-opacity', '0.2');
  } else {
    document.body.style.setProperty('--blur-opacity', '0.7');
  }
};

export default fixOpacity;
