# First Nightwatch Test

## Set Up Project

1. Create a folder and navigate to that folder

2. Create a package.json file and add following to it

```json
{
  "name": "trello-test-proj",
  "version": "0.0.0",
  "description": "TrelloTestProj",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git://github.com/jawadkc/-Test-Automation-Training-Program.git"
  },
  "author": {
    "name": "Jawad Cheema"
  },
  "scripts": {
    "test": "nightwatch"
  },
  "dependencies": {
    "nightwatch": "1.2.4",
    "chromedriver": "77.0.0"
  }
}
```

3. run following command to install dependencies

```bash
npm install
```

## Setup Nightwatch Config

Nightwatch configs are defined either in `nightwatch.json` or `nightwatch.conf.js`. We are going to use both to understand them

1. Create a `nightwatch.json` file in root directory and add following text;

```json
{
    "src_folders" : ["tests"],

    "webdriver" : {
        "start_process": true,
        "server_path": "node_modules/.bin/chromedriver.cmd",
        "port": 9515
    },

    "test_settings" : {
        "default" : {
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }
}
```


2. Create a `nightwatch.conf.js` and add following to update the `server_path` by dynamically obtaining its path

```js
let chromedriver = require('chromedriver');
let defaultSettings = require('./nightwatch.json');

function updateSettings(settings) {
    settings.webdriver.server_path = chromedriver.path;
    return settings;
}

module.exports = updateSettings(defaultSettings);
```

## Add a test and run it

1. Create a directory with name `tests` and navigate to it

2. Create a test file with any name like `FirstTest.js` and add following content in it

```js
module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
```

3. To run the test, open the command prompt and navigate to root folder of the Sample Project.

4. Run following command to run the tests
```
npm test
```

## Update the test to use Page objects

1. Create a folder with any name e.g. `pages`

2. Add `"page_objects_path": ["pages"],` in `nightwatch.json` as follows

```json
{
    "src_folders" : ["tests"],
    "page_objects_path": ["pages"],

    "webdriver" : {
        "start_process": true,
        "server_path": "node_modules/.bin/chromedriver.cmd",
        "port": 9515
    },

    "test_settings" : {
        "default" : {
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }
}
```

3. In the pages create following two files with respective content
  * `searchPage.js`
  ```js
  module.exports = {
      url: 'https://google.com',
      elements: {
          body: 'body',
          searchField: 'input[type=text]',
          searchButton: 'input[name=btnK]'
      },
      commands: [
          {
              searchAndSubmit: function(searchString) {
                  return this
                      .waitForElementVisible('@searchField')
                      .setValue('@searchField', searchString)
                      .waitForElementVisible('@searchButton', 1000)
                      .click('@searchButton')
                      .waitForElementNotPresent('@searchButton');
              }
          }
      ]

    };
  ```
  * `searchResults.js`
  ```js
  module.exports = {
    elements: {
      main: '#main'
    },
    commands: [
      {
        verifyResultsContain: function(searchString) {
          this
            .waitForElementVisible('@main')
            .expect.element('@main').text.to.be.contain(searchString);
          return this;
        }
      }
    ]
  };
  ```

  4. Update the test to use page object and its commands as follows

  ```js
  module.exports = {
      'Demo test Google' : function (browser) {
        const searchPage = browser.page.searchPage();
        const searchResults = browser.page.searchResults();

        searchPage
          .navigate()
          .searchAndSubmit('nightwatch');

        searchResults
          .verifyResultsContain('Nightwatch');

        browser
          .end();
      }
    };  
  ```

  5. To run the test, open the command prompt and navigate to root folder of the Sample Project.

  6. Run following command to run the tests

  ```
  npm test
  ```

## Further Reading Material
* https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_module_exports
* https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_require
* https://www.npmjs.com/package/nightwatch
* https://www.npmjs.com/package/chromedriver
* https://nightwatchjs.org/gettingstarted/configuration/#nightwatch-json
* https://nightwatchjs.org/guide#writing-tests
* https://nightwatchjs.org/guide/working-with-page-objects/#defining-elements
* https://nightwatchjs.org/guide/working-with-page-objects/#writing-commands
* https://nightwatchjs.org/api/commands/#waitForElementVisible
* https://nightwatchjs.org/api/commands/#click
* https://nightwatchjs.org/api/commands/#setValue
* https://nightwatchjs.org/api/expect/#expect-text
* https://nightwatchjs.org/api/#assert-containsText
