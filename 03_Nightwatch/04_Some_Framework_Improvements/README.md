# Some further framework improvements

We discussed the assignment solution to explore and understand some further aspects of project.

## Handling multiple related projects
Depending on the need we can have a single repository to manage tests for related apps. This way it can be possible to also have integration tests across different corelated applications being developed

In our case here currently, we are going to use the solution that we have developed so far. Therefore, we are going to keep the google tests and write new test for trello.

For this we,
* created `google` and `trello` folder in `pages` and `tests` folders
* updated `nightwatch.conf.js` to use an environment variable for launch url ```settings.test_settings.default.launch_url = process.env.LAUNCH_URL.trim() || "https://google.com/";```
* updated our `package.json` to use nightwatch `--group` cli arguments to created separate scripts for google and trello
  ```
  "test:trello": "set LAUNCH_URL=https://trello.com/ && nightwatch --group trello --suiteRetries 2",
  "test:google": "set LAUNCH_URL=https://google.com/ && nightwatch --group google --suiteRetries 2",
  ```

After that you can use `npm run test:trello` and `npm run test:google` to run specific module tests.

[More about groups](https://nightwatchjs.org/guide/running-tests/#test-groups)

## Tags

Each test can be assigned tags and therefore can also be grouped across different folders based on their scope, e.g in your test files' `module.exports` object you can add following statement

```
'@tags': ['smoke', 'createToDelteUserStory'],
```

Then in your package.json scripts
```
"test:trello-smoke": "set LAUNCH_URL=https://trello.com/ && nightwatch --tag smoke  --suiteRetries 2",
```

[More about Tags](https://nightwatchjs.org/guide/running-tests/#test-tags)

## Disabling Tests

And individual test files (test suite) can be disabled by adding following statement in test file

```
'@disabled': true,
```
[More about disabling of tests](https://nightwatchjs.org/guide/running-tests/#disabling-tests)

## Retries and other cli Commands
Also note that added `--suiteRetries 2` in above commands. It will retry twice by re-running the complete test files (test suite) if it fails at any step.

Some others useful ones are
* `--test`/ `-t` runs a specific test file (test suite)
* `--skipgroup`/ `-s` runs all tests in specific folder
* `--skiptags`/ `-s` runs all tests in specific folder


You can read more about Command line options [here](https://nightwatchjs.org/guide/running-tests/#command-line-options)

## Explore element Index
Sometimes we have multiple similar web elements in a page and we want to get a particular element based on its relative position/index. We can therefore use element's property `index` as used in `pages > trello > board.js` to identify list header based on its relative index dynamically in page object command.

To do that,
* Add element with selector `listHeader: '.list-header',`
* You can then specify index in commands as done in line `self.expect.element({selector: '@listHeader', index }).text.to.be.equal(title);` for following page commands

```js
verifyDefaultLists: function() {
  const self = this;
  const listHeader = this.elements.listHeader;

  this.props.defaultLists.forEach((title, index) => {
    self.expect.element({selector: '@listHeader', index }).text.to.be.equal(title);
  });

  this.api.elements(listHeader.locateStrategy, listHeader.selector, results => {
    self.assert.strictEqual(results.value.length, self.props.defaultLists.length,
      `Visible number of list ${results.value.length} does not match expected length ${this.props.defaultLists.length}`)
  });

  return this;
},
```

Element properties details are provided [here](https://nightwatchjs.org/guide/working-with-page-objects/#element-properties) and some you can also look at related [test file](https://github.com/nightwatchjs/nightwatch/blob/5caa2ccf152a58c378a95afbb6a92387fcad0ecd/test/src/element/testIndexedElementSelectors.js) to explore some possible use cases

## More Dynamic selectors
Nightwatch does not provide capability to change the selectors of elements at run time. However, you can write some js functions to get an return values

i.e. in `board.js` we defined a few selectors, one for identifying last card in a list based on list's index and second one for card and its parent list selector based on card's index
```js
const lastCard = listIndex => `.js-list:nth-of-type(${listIndex + 1}) a.list-card:last-of-type`;
const cardAndItsListSelector = cardIndex => {
  const cardSelector = `(//a[contains(@class, 'list-card')])[${cardIndex}]`;
  return {
    cardSelector,
    parentListSelector: `${cardSelector}/ancestor::div[contains(@class, 'js-list-content')]//div[contains(@class, 'js-list-header')]`
  }
}

```
It is then called as `lastCard(listIndex)` and `const cardAndListSelec = cardAndItsListSelector(cardIndex);` in page object commands to allow for dynamically use selectors.

## useXpath and useCss

By default nightwatch uses CSS selectors and if we are not using page object elements like we use `.waitForElementVisible('@boardTitle')` then we need to call `useXpath()` to switch to xpath and then use `useCss()` to switch back.

e.g. here the selectors in variables `cardAndListSelec.cardSelector` and `cardAndListSelec.parentListSelector` are xpaths, therefore we can switch to `xpath` locate strategy
```js

  this.api.useXpath();
  this.waitForElementVisible(cardAndListSelec.cardSelector);

  cardTitle = await this.api.getText(cardAndListSelec.cardSelector);
  listTitle = await this.api.getText(cardAndListSelec.parentListSelector);

  this.click(cardAndListSelec.cardSelector);
  this.api.useCss();
```


## Explore Page Props
In page objects you can use `props` along with commands, elements, sections, url, as mentioned [here](https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API#enhanced-module-members)

One of the uses of props is to have page related static text to be associated through props and used in different commands and tests

e.g

in board.js page object
```js
props: {
  defaultLists: ['To Do', 'Doing', 'Done']
},
```
and in home.js page object
```js
props: {
  personalBoard: 'Personal Boards'
},
```

## Test Data
Test data should be managed independent of the test files and therefore we create a file `util/data.js` and then add data required.

```js
const faker = require('faker');

module.exports = {
  testData: {
    email: 'your email account',
    password: 'your password'
  },
  boardData: {
    title: faker.random.words()
  },
  cardsData: [
    { title: faker.random.words() },
    { title: faker.random.words() },
    { title: faker.random.words() },
    { title: faker.random.words() },
    { title: faker.random.words() }

  ]
}
```
Note that in above we used a `faker` npm library (details available at [faker-npm](https://www.npmjs.com/package/faker))

For this you will have to add following dependency in `package.json` and then run `npm install` to install the dependency

```json
"faker": "4.1.0"
```

Lastly, in our test files we require the data as follows and we can then use these in our test file

```js
const { testData, boardData, cardsData } = require('../../util/data.js');
```

## External globals
We can define globals for our tests. These globals can be handled in an external file. This global file can be used forEach
* Overwriting some Nightwatch globals like `waitForConditionTimeout`, `retryAssertionTimeout`, etc
* Define some global hooks `before`, `beforeEach`, `afterEach`, `after`, `reporter`, etc
* It can be use to define your own custom hooks

To be able to do this we need to:

1. Create a file `util > global.js` (Note that we can create in any folder with any name)
2. Add the file path in `nightwatch.json` by setting value `globals_path` as
```json
"src_folders" : ["tests"],
"page_objects_path": ["pages"],
"globals_path": "./util/globals.js",
```
3. Then in your `global.js` file you can set values as described [here](https://github.com/nightwatchjs/nightwatch/blob/master/examples/globalsModule.js)

## Read and use Value
We often have to read some values in a test step from web application and use it somewhere in subsequent steps.

In our assignment, there was one step where you need to randomly select one of the cards and verify card and list info on card detail page. To verify the text, we would need to read the card title and list title before opening it and then verify on card page

1. The test step needs to be made `async` as follows
```js
  'Open a card randomly and verify correct card and list info is shown': async () => {
    const selectedCardDetails = await boardPage.openACardByIndex(Math.floor(Math.random()* 5) + 1);
    cardPage
      .verifyCardOpened(selectedCardDetails)
      .close();
  },
```

then in `board.js` page object create the async function that reads the required values using `await` and then returns the values

```js
openACardByIndex: async function(cardIndex) {
  const cardAndListSelec = cardAndItsListSelector(cardIndex);
  let cardTitle;
  let listTitle;

  this.api.useXpath();
  this.waitForElementVisible(cardAndListSelec.cardSelector);

  cardTitle = await this.api.getText(cardAndListSelec.cardSelector);
  listTitle = await this.api.getText(cardAndListSelec.parentListSelector);

  this.click(cardAndListSelec.cardSelector);
  this.api.useCss();

  return {
    cardTitle: cardTitle.value,
    listTitle: listTitle.value
  }
},
```
