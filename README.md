# Test Automation Training Program

## Lecture 1

We tried to explore and understand a bit of Selenium projects and related tools:

* [Why we should learn it](01_Intro/00_Why_Learn_About_Under_The_Hood)
* [Quick Notes about selenium projects](01_Intro/01_Selenium_Projects)
* [Quick references for selenium IDE](01_Intro/02_Selenium_IDE)
* [Explore w3c WebDrirver standard](01_Intro/03_W3C_WebDriver/)
* [Exploring Webdriver endpoints with Chromedriver](01_Intro/03_W3C_WebDriver/README.md#chromedriver)

## Lecture 2

We tried to explore and understand some basics of javascript to get started

* [Overview](02_javascript/00_A_Quick_Survey_of_the_Language/README.md)
* [Numbers](02_javascript/00_A_Quick_Survey_of_the_Language/README.md#number)
* [Strings](02_javascript/00_A_Quick_Survey_of_the_Language/README.md#string)
* [undefined](02_javascript/00_A_Quick_Survey_of_the_Language/README.md#undefined)
* [null](02_javascript/00_A_Quick_Survey_of_the_Language/README.md#null)
* [Boolean](02_javascript/00_A_Quick_Survey_of_the_Language/README.md#booleans)
* [Objects](02_javascript/00_A_Quick_Survey_of_the_Language/README.md#object)

## Lecture 3

We tried to setup and run some basic nightwatch tests

* [First Nightwatch Test](03_Nightwatch/01_Getting_Started)
* [Setup Project](03_Nightwatch/01_Getting_Started/README.md#set-up-project)
* [Setup nightwatch config](03_Nightwatch/01_Getting_Started/README.md#setup-nightwatch-config)
* [Add a test and run it](03_Nightwatch/01_Getting_Started/README.md#add-a-test-and-run-it)
* [Update the test to use page objects](03_Nightwatch/01_Getting_Started/README.md#update-the-test-to-use-page-objects)

Sample Project is available [here](03_Nightwatch/01_Getting_Started/Sample_Project)

## Lecture 4

We tried to understand a bit more about Nightwatch and explore how to use it more efficiently

* [Setup global launch URL](03_Nightwatch/02_Going_Futher_With_Nightwatch)
* [Explore how to switch between xpath and css selector in Nightwatch](03_Nightwatch/02_Going_Futher_With_Nightwatch/README.md#explore-different-locate-strategies)
* [Explore page object sections in Nightwatch](03_Nightwatch/02_Going_Futher_With_Nightwatch/README.md#explore-page-object-sections)
* [Chaining of commands in nightwatch](03_Nightwatch/02_Going_Futher_With_Nightwatch/README.md#chaining-of-commands)
* [Explore this object in scope of Nightwatch](03_Nightwatch/02_Going_Futher_With_Nightwatch/README.md#explore-this-object)
* [Understand different assertions](03_Nightwatch/02_Going_Futher_With_Nightwatch/README.md#understand-different-assertions)
* [Understand different assertions](03_Nightwatch/02_Going_Futher_With_Nightwatch/README.md#understand-different-assertions)
* [Explore callbacks in Nightwatch api](03_Nightwatch/02_Going_Futher_With_Nightwatch/README.md#explore-callbacks)
* [Explore ES6 async await from the perspective of Nightwatch commands](03_Nightwatch/02_Going_Futher_With_Nightwatch/README.md#explore-es6-async-await)
* [Divide test in steps](03_Nightwatch/02_Going_Futher_With_Nightwatch/README.md#divide-test-in-steps)
* [Make use of hooks in test files](03_Nightwatch/02_Going_Futher_With_Nightwatch/README.md#make-use-of-hooks)

Sample Project is available [here](03_Nightwatch/02_Going_Futher_With_Nightwatch/Sample_Project)

## Assignment

A small automation needs to be be done. The details of task are available at [Assignment > Readme.md](03_Nightwatch/03_Assignment_01/README.md)

A possible workable solution is available [here](03_Nightwatch/03_Assignment_01/Possible_solution)


## Lecture 5

We tried to develop further understanding of nightwatch and some framework improvements by re-doing and discussing the solution for above assignment

* [Handling multiple related projects](03_Nightwatch/04_Some_Framework_Improvements/README.md#handling-multiple-related-projects)
* [Tags](03_Nightwatch/04_Some_Framework_Improvements/README.md#tags)
* [Disabling Tests](03_Nightwatch/04_Some_Framework_Improvements/README.md#disabling-tests)
* [Explore retries and cli Commands](03_Nightwatch/04_Some_Framework_Improvements/README.md#retries-and-other-cli-commands)
* [Explore element Index](03_Nightwatch/04_Some_Framework_Improvements/README.md#retries-and-other-cli-commands)
* [More Dynamic selectors in page objects](03_Nightwatch/04_Some_Framework_Improvements/README.md#more-dynamic-selectors)
* [useXpath and useCss](03_Nightwatch/04_Some_Framework_Improvements/README.md#usexpath-and-usecss)
* [Explore Page Props](03_Nightwatch/04_Some_Framework_Improvements/README.md#explore-page-props)
* [Test Data](03_Nightwatch/04_Some_Framework_Improvements/README.md#test-data)
* [External globals](03_Nightwatch/04_Some_Framework_Improvements/README.md#external-globals)
* [Read and Use of value in subsequent steps](03_Nightwatch/04_Some_Framework_Improvements/README.md#read-and-use-value)

## Lecture 6

We tried to setup mocha, chai and supertest for some api testing

Sample Project is available [here](04_Mocha_Supertest_Nightwatch/01_Mocha_Supertest/Sample_Project)

The notes will be uploaded later

#### Note: To run the tests make sure you update, `api_key`, `server_token` and `userId` the `data.js` in `utils` folder.

```
let api = {
    base_url: "https://api.trello.com/1",
    api_key: "your api key",
    server_token: "your server token"
}
```

and
```
var userId = 'your user id';
```

## Lecture 7

We tried to mix our ui tests with api tests

Sample Project is available [here](04_Mocha_Supertest_Nightwatch/02_Mocha_Supertest_Nightwatch/Sample_Project)

The notes will be uploaded later

#### Note: To run the tests make sure you update, `email`, `password`, `api_key`, `server_token` and `userId` the `data.js` in `util` folder.

```
let api = {
  base_url: "https://api.trello.com/1",
  api_key: "your api key",
  server_token: "your server token"
}
```

and
```
const userData = {
  email: 'your email address',
  password: 'your password',
  userId:'your user id'
}
```

## Lecture 8

We explored a few other frameworks that can be alternates of frameworks discussed above.

#### [Nightwatch-api](https://nightwatch-api.netlify.com)
An independent repository providing control of Nightwatch by exposing it as chainable promise based API. Therefore making it possible to use with any test runner.
Also, one interesting use of it demonstrated by the author is using cucumber as test runner. Its explanation is available [here](https://nightwatch-api.netlify.com/cucumber/) and code is available [here](https://github.com/mucsi96/nightwatch-api/tree/master/packages/cucumber-example)

#### [Codecept JS](https://codecept.io/)
An other e2e testing tool that provides BDD-style syntax. Can be a replacement of Nightwatch. Some interesting concepts in Codecept
* Provides a bit different test components, e.g. [actors, pageobjects, page fragments](https://codecept.io/pageobjects)
* Exposes API to perform some Web API (REST/GraphQL) requests in tests to perform data generation. https://codecept.io/data
* [Datadriven possible](https://codecept.io/advanced#data-driven-tests)

Documentation available [here](https://codecept.io/) and a sample project available [here](https://codecept.io/examples) and [here](https://github.com/nifepo/TrueNorthChallenge)

#### [Web Driver IO](https://webdriver.io/)
Some boilerplate projects are available [here](https://webdriver.io/docs/boilerplate.html)

#### [Cypress](https://cypress.io)
A complete e2e framework that is different because it does not require selenium or/any webdriver. It applies in-browser-testing and gives an interesting experience by combinning multiple libraries in a single frameworks. Documentation is very interesting and detailed. Including limitations, differences, etc

- https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell
- https://docs.cypress.io/guides/overview/key-differences.html#Architecture
- https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure
- https://docs.cypress.io/guides/core-concepts/interacting-with-elements.html
- https://docs.cypress.io/guides/core-concepts/interacting-with-elements.html
- [You can stub out backend by handling network traffic](https://docs.cypress.io/guides/guides/network-requests.html)
- [List of tools bundled together](https://docs.cypress.io/guides/references/bundled-tools.html#Mocha)
- [Some limitations and tradeoff](https://docs.cypress.io/guides/references/trade-offs.html#Permanent-trade-offs-1)

They also provide a dashboard service for maintaining recorded tests and support running in CI/CD pipelines

A sample project is available [here](https://github.com/cypress-io/cypress-example-todomvc)


#### [Jest](https://jestjs.io/)
Will be adding details later
