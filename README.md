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

We explored a few other frameworks that can be alternates of frameworks and components discussed so far like

* [Nightwatch api](05_Other_Frameworks/README.md#nightwatch-api): A wrapper over Nightwatch to allow for more flexible framework structure
* [Codecpet JS](05_Other_Frameworks/README.md#codecept-js) and [Web Driver IO](05_Other_Frameworks/README.md#web-driver-io): A couple of frameworks that work quite similar to Nightwatch js
* [Jest](05_Other_Frameworks/README.md#jest): An alternative of Mocha
* [Cypress](05_Other_Frameworks/README.md#cypress): A framework that does not use webdrivers and apply in-browser testing approach

We also discussed a few points towards framework selection as mentioned [here](05_Other_Frameworks/README.md#framework-selection).

## Lecture 9

We explored a bit about puppeteer

* [Puppeteer](05_Other_Frameworks/README.md#puppeteer): A nodejs library to give a high-level api to control chrome/chromium

Then we started our discussion towards CI/CD pipelines. For that we started of with a few basic discussions

* [Definitions](06_Integration_and_Deployment_Pipelines/README.md)
* [Git](06_Integration_and_Deployment_Pipelines/README.md#git)
* [Docker](06_Integration_and_Deployment_Pipelines/README.md#docker)

## Lecture 10

We continued with some discussion on dockers and containers and we setup our project to run in containerized mode

* [Docker Installation](06_Integration_and_Deployment_Pipelines/README.md#docker-installation)
* [Exploring Dockers and containers](06_Integration_and_Deployment_Pipelines/README.md#exploring)
* [Containerization of our project](06_Integration_and_Deployment_Pipelines/README.md#containerization-of-our-project)
  * Updated the project files
  * Create Dockerfile
  * Create docker-compose files
  * Run tests

Sample project is available [here](06_Integration_and_Deployment_Pipelines/Sample_Project)


## Lecture 11

We revisited some concepts and the set up azure pipeline

* [Getting Started with Azure by setting up default ci/cd pipeline](06_Integration_and_Deployment_Pipelines/README.md#getting-started-with-azure)

Then we started creating a project for our code and added pipeline

* [Create project and push your code](06_Integration_and_Deployment_Pipelines/README.md#create-project-and-push-your-code)
* [Add azure pipeline yaml file](06_Integration_and_Deployment_Pipelines/README.md#add-azure-pipeline-yaml-file)
* [Add azure pipeline yaml file](06_Integration_and_Deployment_Pipelines/README.md#add-azure-pipeline-yaml-file)
* [Other required changes](06_Integration_and_Deployment_Pipelines/README.md#other-required-changes)
* [Run and observer](06_Integration_and_Deployment_Pipelines/README.md#run-and-observer)

Sample project is available [here](06_Integration_and_Deployment_Pipelines/Sample_Project)
