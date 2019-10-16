const Nightwatch = require('nightwatch');
const nightwatchConfig = require('../nightwatch.conf.js');

module.exports = {
  customTestRunner(testSteps, data, done) {
    
    const settings = nightwatchConfig

    settings.globals.data = Object.assign({}, data);
    settings.filter = `**/*${testSteps}`;

    console.log(settings);

    const runner = Nightwatch
      .CliRunner({ 
        _source: ['./steps/ui'],
        config: './nightwatch.conf.js',
        env: 'default'
     });

    return runner
      .setup(settings)
      .startWebDriver()
      .then(() => runner.runTests(done))
      .then(() => runner.stopWebDriver())
  }
};
