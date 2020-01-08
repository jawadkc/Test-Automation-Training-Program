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


## Lecture 12

#### Setup Grid

https://github.com/SeleniumHQ/docker-selenium#selenium-grid-hub-and-nodes

A couple of options:
* [Directly using Docker](https://github.com/SeleniumHQ/docker-selenium#using-docker-networking)
* [Using docker-compose](https://github.com/SeleniumHQ/docker-selenium#via-docker-compose)
* [Using docker-compose with swarn support](https://github.com/SeleniumHQ/docker-selenium#version-3-with-swarm-support)
* [Using kubernetes](https://github.com/kubernetes/examples/tree/master/staging/selenium)
* [Using Helm charts](https://github.com/helm/charts/tree/master/stable/selenium)

Using Docker swarm:
```bash
docker build -t workflows:latest .
docker swarm init
docker stack deploy -c docker-compose-grid.yml grid
docker service ls
docker service logs -f grid_workflows
docker stack rm grid
docker swarm leave -f
```


#### Success Factors:
* Clear identification of purpose and goals of Automation
* Identification of current team as well as potential new highers
* Improving test-ability and automate-ability of system-under-test
* Taking all stack holders on board
* For any new automation project / New change focus on some key but easy test scenario for creating a POC
* Test Scenarios to be automated should come from QA team
* Manual Testing team should be aware of whats covered by automation
* Dev team should continuously be made aware of the changes made by them that broke the workflows and if possible they should be responsible of fixing those before deploying to any test/staging environments.
* Test suites should be executable on different environments so that their utilization scope can be increased.
* Test suite performance should be considered such that once should be able to get results as early as possible. This can help in increased utilization and invovlment from all team members
* The code should be made moduler but just enough that it does not require testing of its own
* Frequently change data set for the tests
* Test could should follow proper coding guidelines (i.e. eslint rules should be setup for your tests)
* Test files should be properly commented (preferably following a standard like jsdocs to auto generate documentation using it)
* A few KPIs to measure
  * What are the typical false positives and how they can be mitigated
  * Monitor the life of a test. i.e. Time between any update required. Frequency of updates required for a test. Time duration in which the test remains out-of-date and disabled
  * Test run performance and how new tests effect the performance
  * Ability of a test to be executed against different environments
  * Life cycle of test data

#### Career Growth:
* Continuous learning is the key
* Always start with minimal and learn as you go
* Explore different open source projects to learn how others are doing it
* Join different slack channels, chats, follow different repositories
* Learn under the hood stuff to be able to make more better decisions
* Sharing knowledge will always increase yours too so never hesitate. Infact, forcefully make your self to share. I do not say always do it for free ;).

#### Reach out to me at
jawad.k.cheema@gmail.com
+92 321 4189015
Keep an eye on this project and feel free to share any feedback.
