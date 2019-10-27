let defaultSettings = require('./nightwatch.json');

function setLocalRunSettings(settings) {
  let chromedriver = require('chromedriver');
  let geckodriver = require('geckodriver');
  let dotenv = require('dotenv');

  const dotenvConfig = dotenv.config()
  if (dotenvConfig.error) {
    throw dotenvConfig.error;
  }
  settings.test_settings.default.webdriver.server_path = chromedriver.path;
  settings.test_settings.firefox.webdriver.server_path = geckodriver.path;
  settings.dotenv = dotenvConfig;
  if (process.env.TARGET_BROWSER === 'firefox') {
    settings.test_settings.default = Object.assign({}, settings.test_settings.default, settings.test_settings.firefox);
  }
}

function updateSettings(settings) {
  if (process.env.RUN_ENV !== "ci") {
    setLocalRunSettings(settings);
  } else {
    settings.test_settings.default = Object.assign({}, settings.test_settings.default, settings.test_settings.ci)
  }
  settings.test_settings.default.launch_url = process.env.LAUNCH_URL.trim() || "https://google.com/";
  return settings;
}

module.exports = updateSettings(defaultSettings);
