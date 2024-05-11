const detectBrowser = () => {
  const userAgent = navigator.userAgent;
  const browser = {
    name: '',
    version: '',
  };

  if (userAgent.includes('Chrome')) {
    browser.name = 'Chrome';
    browser.version = userAgent.match(/Chrome\/([\d.]+)/)[1];
  } else if (userAgent.includes('Safari')) {
    browser.name = 'Safari';
    browser.version = userAgent.match(/Version\/([\d.]+)/)[1];
  } else if (userAgent.includes('Firefox')) {
    browser.name = 'Firefox';
    browser.version = userAgent.match(/Firefox\/([\d.]+)/)[1];
  } else if (userAgent.includes('MSIE')) {
    browser.name = 'InternetExplorer';
    browser.version = userAgent.match(/MSIE ([\d.]+)/)[1];
  } else if (userAgent.includes('Opera')) {
    browser.name = 'Opera';
    browser.version = userAgent.match(/Opera\/([\d.]+)/)[1];
  } else if (userAgent.includes('Edge')) {
    browser.name = 'Edge';
    browser.version = userAgent.match(/Edge\/([\d.]+)/)[1];
  }
  return browser;
};

export default detectBrowser;
