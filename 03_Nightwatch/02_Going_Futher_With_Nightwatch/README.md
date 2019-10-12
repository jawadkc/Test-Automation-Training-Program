# Going further with Nightwatch

## Setup global launch URL

In [test settings](https://nightwatchjs.org/gettingstarted/configuration/#test-settings), we can define `launch_url` property so that we can define a base url globally.

You need to add `"launchUrl": "https://google.com",` in `testing settings` defined in `nightwatch.json` as follows

```json
    "test_settings" : {
        "default" : {
            "launchUrl": "https://google.com",
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }
```

Then you can use the launchUrl in test and page objects. In test file you can use `browser.launchUrl` e.g.
```js
module.exports = {
  'Demo test' : function (browser) {
    browser
      .url(browser.launchUrl)
      // ...
      .end();
  }
};
```

In page objects you can will update the url property of page object as function to dynamically compute page URL

i.e. in our `searchPage.js` we update url property as
```js
url: function() {
    return this.api.launchUrl;
},
```

## Explore different locate strategies

Nightwatch uses `css selector` as locate strategy by default but we can switch to xpath selector anytime between the test. To switch between xpath/css selectors, we can use functions `[useXpath()](https://nightwatchjs.org/api/useXpath.html)`, `[useCss()](https://nightwatchjs.org/api/useCss.html)`

In test files you can use these as follows:
```js
browser
    .useXpath() // every selector now must be xpath
    .click("//tr[@data-recordid]/span[text()='Search Text']")
    .useCss() // we're back to CSS now
    .setValue('input[type=text]', 'nightwatch')
```

Typically, we define selectors as elements in page objects and therefore, we may not need to use the above in most cases. In page objects, we can define `locateStrategy` per each element i.e. for search field in searchPage.js we change the selector `searchField: 'input[type=text]'` to following in case we want to use xpath
```js
searchField: {
  selector: '//input[@type="text"]',
  locateStrategy: "xpath"
},
```

For elements you can also define other properties as mentioned in [here](https://nightwatchjs.org/guide/working-with-page-objects/#element-properties)

## Explore page object sections

Based on the page layout and different visual section in a page, you can group related elements and commands as [sections](https://nightwatchjs.org/guide/working-with-page-objects/#defining-sections) so that you can find elements relative to the section parent itself.

i.e. we add a section to interact with sub elements of the complete search field that includes search icon, input field and voice icon as follows. We add this in `searchPage.js` page object.

Also, note how we can use xpath for section selector and css for section elements' selectors.

```js
sections: {
  inputSection: {
    selector: "//div[@class='SDkEP']",
    locateStrategy: 'xpath',
    elements: {
      searchIcon: '.iblpc',
      searchinput: 'input',
      speakIcon: '[aria-label="Search by voice"]'
    }
  }
},
```

We then need to refer to these section elements and commands as `this.section.inputSection`. e.g we update the `searchAndSubmit` command to use the section as follows
```js
searchAndSubmit: function(searchString) {
    this.section.inputSection
        .waitForElementVisible('@searchinput')
        .setValue('@searchinput', searchString)
    return this.submitClick();
},
```

## Chaining of commands
Note, how we are able to chain our nightwatch commands in our tests and/or page objects. i.e. when we first started, we refered the `browser` parameter (nightwatch instance) only once and performed all operations using `.` notation:

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

This is possible because most of the nightwatch commands return the nightwatch instance when used in tests.

The same chaining of commands is also possible in page objects like we did in our `searchPage.js`
```js
searchAndSubmit: function(searchString) {
    return this
        .waitForElementVisible('@searchField')
        .setValue('@searchField', searchString)
        .waitForElementVisible('@searchButton', 1000)
        .click('@searchButton')
        .waitForElementNotPresent('@searchButton');
}
```

However, in case of page objects each nighwatch api returns a page object instance and not the whole nigthwatch instance.

## Explore this object

* https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API#enhanced-page-object-instance-properties
In page objects `this` points to the page object instance specific for that page object. This means that we can access the members of the page object through `this`. The details of available properties,  methods and nightwatch API commands are provided at following links
* https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API#enhanced-page-object-instance-methods
* https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API#enhanced-page-object-command-api-methods

What this means is that we can access section, elements, commands, props, nightwatch api of a page object within that page object as follows.

```js
commands: [
  {
    searchAndSubmit: function(searchString) {
      this.section.inputSection
          .waitForElementVisible('@searchinput')
          .setValue('@searchinput', searchString)
      return this.submitClick();
    },

    submitClick: function() {
      return this
          .waitForElementVisible('@searchButton', 1000)
          .click('@searchButton')
          .waitForElementNotPresent('@searchButton');
    }
  }
]
```

In the above code observe that,

* Through `this.section.inputSection` we can access a specific section in current page object.
* You can access nightwatch api with `this` as used in `this.waitForElementVisible('@searchButton', 1000)` or `this.section.inputSection.waitForElementVisible('@searchinput')`
* Note that not all nightwatch api commands are available through `this` in page object/section object commands as you can see [here](https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API#enhanced-page-object-command-api-methods). However, you can use the rest by using `this.api`. This will then start to point towards nightwatch instance and expore all nightwatch commands
* You can return `this` in your custom commands to allow for chaining the commands in test files, like you can see how the two commands are chained in `FirstTest.js`
```js
searchResults
  .verifyResultsContain('Nightwatch')
  .readTextForFirst();
```
* Note how the scope change for subsequent operations change when you use `this`, `this.api`, `this.section.sectionName` in page object commands
    * `this` will point to current page object and therefore allows page object operations to be chained
    * `this.api` will start to point to nightwatch instance and therefore expose all nightwatch api but the current page object elemetns/section/commands cannot be chained.
    * `this.section.sectionName` will start to point the section's object and therefore only section elements, commands, and limited nightwatch api commands can be accessed.


## Understand different assertions

Nightwatch provides assertion APIs

### Classical assertion library `.assert/.verify`
* Can be used in nightwatch `browser` object and page/section objects.
* Can be used as `browser.assert.attributeContains('#someElement', 'href', 'google.com');`
* `.assert` will end the test if the assertion fails and will report test failure
* `.verify` will continue with the test if the assertion fails and will report test failure
* Returns nightwatch/page/section objects to allow for chaining like other commands

You can see all the available assertion [here](https://nightwatchjs.org/api/)

### BDD based assertion library `.expect`
* Can be used in nightwatch `browser` object and page/section objects.
* Can be used as `browser.expect.element('#main').to.be.present;`
* Does not returns nightwatch/page/section objects and therefore cannot be chained.

Read more about it [here](https://nightwatchjs.org/guide#expect-assertions)
Also, see all the expect type assertions [here](https://nightwatchjs.org/api/expect/)

## Explore callbacks
Like, we saw that the nightwatch commands mostly returns nightwatch instance itself to allow for command chaining. Hence, the nightwatch api commands that are suppose to obtain and return some value from the browser, they provide the results through callbacks. e.g

* [element](https://nightwatchjs.org/api/element.html)
* [elements](https://nightwatchjs.org/api/elements.html)
* [getText](https://nightwatchjs.org/api/getText.html)

To understand, we observed how the following did not print our desired text.
```js
readTextForFirst: function() {
  var actualText;
  actualText = this.getText('@firstResult');
  console.log(actualText);  
}
```

Even the following where we used callback to set the value of a global did not print the desired value
```js
readTextForFirst: function() {
  var actualText;
  this.getText('@firstResult', text => {
    actualText = text.value;
  });
  console.log(actualText);
}
```

We were able to use the text by using `.perform` utility function as follows
```js
readTextForFirst: function() {
  var actualText;
  this.getText('@firstResult', text => {
    actualText = text.value;
  }).perform(() => {
    console.log(actualText);
  });
  return this;
}
```

Also, note that we cannot return the value from `readTextForFirst` itself. However, we can use callback functions to provide the value as callback from `readTextForFirst`. i.e.

```js
readTextForFirst: function(cb) {
  this.getText('@firstResult', text => {
    cb(text.value);
  })
  return this;
}
```

[Here](https://nightwatchjs.org/api/perform.html) and [here](https://github.com/nightwatchjs/nightwatch/wiki/Understanding-the-Command-Queue#the-perform-command) you can understand more about `perform` .

## Explore ES6 async await
Since v1.1 of nightwatch you can use async/await with most of the commands to get avoid the mess of callback and async behavior discussed above.

i.e. make your test/command as `async` and use `await` with the async command. You can update the above command as follows to directly get the text value.

```js
readTextForFirst: async function() {
  const firstResultSelector = this.elements.firstResult.selector;
  var actualText = await this.api.getText(firstResultSelector)
  return actualText;
}
```

then you can update the test as follows to use the text syncronously within the same step

```js
module.exports = {
  'Demo test' : async function (browser) {
    const searchPage = browser.page.searchPage();
    const searchResults = browser.page.searchResults();

    searchPage
      .navigate()
      .searchAndSubmit('nightwatch');

    const firstText = await searchResults
      .verifyResultsContain('Nightwatch')
      .readTextForFirst();

    console.log(firstText);

    browser
      .end();
  }
};
```

Note, this will output something like
```js
{
  sessionId: 'b9bfd31e8fc143deefbff8f84f5f9133',
  status: 0,
  value: 'Nightwatch.js | Node.js powered End-to-End testing framework\nhttps://nightwatchjs.org\nWrite efficient end-to-end tests in Node.js and run them against W3C WebDriver.\nWhat is Nightwatch? · nightwatch.json · Nightwatch Runner · Using Mocha'
}
```

You can update the function as follows to return text value

```js
readTextForFirst: async function() {
  const firstResultSelector = this.elements.firstResult.selector;
  var actualText = await this.api.getText(firstResultSelector, text => {
    return Promise.resolve(text.value)
  })
  return actualText;
}
```

## Divide test in steps
You can divide the test in multiple steps as follows. Each step is executed syncronously

```js
module.exports = {
  'Open Google and search for resutls' : async function (browser) {
    const searchPage = browser.page.searchPage();

    searchPage
      .navigate()
      .searchAndSubmit('nightwatch');
  },

  'Verify search results and get first text' : async function (browser) {
    const searchResults = browser.page.searchResults();

    const firstText = await searchResults
      .verifyResultsContain('Nightwatch')
      .readTextForFirst();

    console.log(firstText.value);

    browser
      .end();
  }
};
```

## Make use of hooks
You can use `before`/`after`/`beforeEach`/`afterEach` hooks to pre and post requisites of tests (for more read [here](https://nightwatchjs.org/guide#using-before-each-and-after-each-hooks))

In the example below, we initialize the page object variables and set the window size in the `before` hook.

Then in `beforeEach` hook, we perform the navigation to search page

Then we have two test / test steps that search for `nightwatch` and `selenium` and perform respective assertions

Then we close the browser session in `after` hook.

```js
let searchPage;
let searchResults;

module.exports = {

  before: (browser) => {
    searchPage = browser.page.searchPage();
    searchResults = browser.page.searchResults();
    browser.setWindowSize(1027,920);
  },

  beforeEach: () => {
    searchPage.navigate();
  },

  after: (browser) => {
    browser.end();
  },

  'Check search results for nightwatch' : async function (browser) {

    searchPage
      .searchAndSubmit('nightwatch');

    const firstText = await searchResults
      .verifyResultsContain('Nightwatch')
      .readTextForFirst();

    console.log(firstText.value);

  },

  'Check search results for something else' : async function (browser) {

    searchPage
      .searchAndSubmit('selenium');

    const firstText = await searchResults
      .verifyResultsContain('Selenium')
      .readTextForFirst();

    console.log(firstText.value);

  },
};
```

## Further Reading Material
* https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_module_exports
* https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API
* https://nightwatchjs.org/api/pageobject/
* https://github.com/nightwatchjs/nightwatch/wiki/Understanding-the-Command-Queue
* https://nightwatchjs.org/api
* https://nightwatchjs.org/api/expect/
* https://nightwatchjs.org/api/commands/
