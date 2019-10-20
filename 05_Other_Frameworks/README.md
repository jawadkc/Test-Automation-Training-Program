# Some other frameworks

## A layer on top of Nightwatch
#### [Nightwatch-api](https://nightwatch-api.netlify.com)
An independent repository providing control of Nightwatch by exposing it as chainable promise based API. Therefore making it possible to use with any test runner.
Also, one interesting use of it demonstrated by the author is using cucumber as test runner. Its explanation is available [here](https://nightwatch-api.netlify.com/cucumber/) and code is available [here](https://github.com/mucsi96/nightwatch-api/tree/master/packages/cucumber-example)

## Similar to Nightwatch
#### [Codecept JS](https://codecept.io/)
An other e2e testing tool that provides BDD-style syntax. Can be a replacement of Nightwatch. Some interesting concepts in Codecept
* Provides a bit different test components, e.g. [actors, pageobjects, page fragments](https://codecept.io/pageobjects)
* Exposes API to perform some Web API (REST/GraphQL) requests in tests to perform data generation. https://codecept.io/data
* [Datadriven possible](https://codecept.io/advanced#data-driven-tests)

Documentation available [here](https://codecept.io/) and a sample project available [here](https://codecept.io/examples) and [here](https://github.com/nifepo/TrueNorthChallenge)

#### [Web Driver IO](https://webdriver.io/)
Some boilerplate projects are available [here](https://webdriver.io/docs/boilerplate.html)

## A good alternative of Mocha
#### [Jest](https://jestjs.io/)
A javascript based test automation framework that was developed and made public by Facebook people. It was based on (jasmine)[https://jasmine.github.io/], another BDD development framework.

The key features of JEST include
- Provides required tools out of the box for most Javascript Projects
- Use of snapshots to track large objects with ease ([Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing))
- Tests are run in parallel
- Readily available [mocks](https://jestjs.io/docs/en/mock-functions), [timer mocks](https://jestjs.io/docs/en/timer-mocks), [manual mocks](https://jestjs.io/docs/en/manual-mocks) and [ES6 class mocks](https://jestjs.io/docs/en/es6-class-mocks)
- Run browser tests with puppeteer in multiple ways as described [here](https://jestjs.io/docs/en/puppeteer)
- DOM manipulation without browser using jsdom as described [here](https://jestjs.io/docs/en/tutorial-jquery)

Here is a [sample project](https://github.com/Lavitr/Jest-testing-SAGA) and its [tutorial](https://medium.com/@lavitr01051977/jest-test-example-8a434db44e33)

#### Notes:
- You can almost achieve all these with mocha using different libraries like sinon, istanbul, enzyme, karma, mocha-snapshots, etc
- On the other hand you can use Nightwatch with Jest. Also, you might have to replace supertest with frisby for api testing.

## Not using webdriver

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

#### [Puppeteer](https://developers.google.com/web/tools/puppeteer/)
A nodejs library to control headless chrome/chromium browser

- Can be used with mocha with the use of [mocha-headless-chrome](https://www.npmjs.com/package/mocha-headless-chrome) or with [jest](https://jestjs.io/docs/en/puppeteer)
- Can be used for different testing including service worker caching, lazy loading, speech, side-by-side page loads, performance monitoring

Current api documentation available here, [v1.20.0](https://pptr.dev/#?product=Puppeteer&version=v1.20.0&show=outline)
```
$env:URL = "https://jestjs.io/en/"
node .\code_coverage.js
```
Here is an interesting set of [demos](https://github.com/GoogleChromeLabs/puppeteer-examples) where its being used `to do big and bold things`
Some links to interesting examples, projects and libraries are provided [here](https://developers.google.com/web/tools/puppeteer/examples)

## Framework selection
While selecting for framework:

* We need to understand the scope of automation project
  * Do you need it for unit, integration, api, e2e or just one
  * Will this framework be used across different projects developed in different tech stacks (e.g an UI automation solution required for different applications developed in the company)
  * Do we need more generic coverage from test automation or we need something specific (e.g. test across different browsers or testing with chrome in enough. Or do we need to test something specific like service worker caching)

* We also need to understand the team capabilities and interests
  * Can the team work with more flexible and custom configured framework and need to get started with easy-to-use pre-configured framework
  * Who will be the main contributors in the framework (i.e. Mostly worked by people with less programming skills or developers will also be using this framework)
  * Who will be the end users of the frameworks (developers, QA, business people, etc)
  * Which frameworks are already used in the team (e.g. jest is used in unit testing then better to use jest for e2e testing too. Specially if the repository is going to be the same)

* We also need to understand the health, life and community of the framework/projects
  * How big the community is
  * How well and detailed documentation we have
  * How many contributors we have
  * How frequent updates and feature releases are made
  * How the core team responses to reported issues and enhancement requests

* Key features that it should include
  * Test runner (support for multiple test runners)
  * Data manager
  * Test reporter (multiple reporters)
  * POM is good to have
  * pre/post hooks
  * async/await support
  * Advanced configuration options
  * Parallel execution
  * Allow integration with cloud hosting solutions
  * Easily usable in CI/CD pipelines
