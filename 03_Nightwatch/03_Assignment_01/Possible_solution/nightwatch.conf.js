let chromedriver = require('chromedriver');
let geckodriver = require('geckodriver');
let defaultSettings = require('./nightwatch.json');

function updateSettings(settings) {
  settings.test_settings.default.webdriver.server_path = chromedriver.path;
  settings.test_settings.firefox.webdriver.server_path = geckodriver.path;
  settings.test_settings.default.launch_url = process.env.LAUNCH_URL.trim() || "https://google.com/";
  return settings;
}

module.exports = updateSettings(defaultSettings);
