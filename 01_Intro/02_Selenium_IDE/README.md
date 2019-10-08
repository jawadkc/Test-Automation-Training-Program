# IDE

> Open source record and playback test automation for the web

## Key changes in new IDE

* Resilient Tests
> Selenium IDE records multiple locators for each element it interacts with. If one locator fails during playback, the others will be tried until one is successful.

* Test Case Reuse
>Through the use of the run command, you can re-use one test case inside of another (e.g., allowing you to re-use your login logic in multiple places throughout a suite).

* Export and run through Command line terminal


## Install
* Chrome:
  https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd

* Firefox:
  https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/

## Record your first test
Open the Selenium IDE and record any test scenario. Playback it in browser.

A sample script is available [here](Example_Test_Suite/trello_test.side).

You can download/copy the test file in your local system. And import it in Selenium IDE by using `Open an existing project` on Selenium IDE startup or using `Open Project` option available in the top right corner.

## Play back in browser through Selenium IDE

You can execute test suite using the `Run All test`option in control options `Ctrl + Shift + R`.

## Play back using command line runner


* Make sure that node and npm is installed

* Open command prompt by using `cmd`

* Install `selenium command line runner` using
```
npm install -g selenium-side-runner
```

* Install required drivers using

```bash
# for Chrome
npm install -g chromedriver

# for Edge
npm install -g edgedriver

# for Firefox
npm install -g geckodriver

# for IE
npm install -g iedriver
```

* In Command prompt navigate to where your test suite is exported and placed using `cd <path to directory>`
e.g.
```
C:\> cd D:\path\to\test\file.side
```
* Execute the test using any of following command

```
selenium-side-runner -c "browserName=firefox" trello_test.side
```

## Further Reading Material
1. https://www.seleniumhq.org/selenium-ide/docs/en/introduction/getting-started/
2. https://github.com/SeleniumHQ/selenium-ide/tree/v3
3. https://www.seleniumhq.org/selenium-ide/docs/en/introduction/command-line-runner/
4. https://www.seleniumhq.org/selenium-ide/docs/en/introduction/control-flow/
5. https://www.seleniumhq.org/selenium-ide/docs/en/introduction/code-export/
6. https://www.seleniumhq.org/selenium-ide/docs/en/api/commands/
