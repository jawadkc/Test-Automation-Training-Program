let chromedriver = require('chromedriver');
let defaultSettings = require('./nightwatch.json');

function updateSettings(settings) {
    settings.webdriver.server_path = chromedriver.path;
    return settings;
}

module.exports = updateSettings(defaultSettings);
