# What Selenium is All About

This is how Selenium HQ defines it:

> Selenium automates browsers. That's it! What you do with that power is entirely up to you.

> Selenium is an umbrella project encapsulating a variety of tools and libraries enabling web browser automation.

## SeleniumHQ Projects

- Selenium WebDriver - can drive a browser natively either locally or on remote machines.
- Selenium Grid - extending selenium RC / selenium server to allow runnings tests on different machines/VMs at the same time
- Selenium IDE - Chrome and Firefox Extension
- Selenium Remote Control - client/server system that allows control of web browsers locally or on other computers
- HTML Runner - Allows run Test Suites (exports from Selenium IDE) from the command line.


## Some historical information

* Selenium RC
    * A server written in JAVA
    * Accepts commands via HTTP
    * Loads javascript libraries along with Web Application Under Test.
    * Deprecated in favor of Selenium WebDriver

* Selenium WebDriver
    * Selenium 2.0
        * Selenium 1.0 + WebDriver
    * Selenium 3.0
        * Original Selenium Core is removed
        * Better, more object-oriented API
        * Evolution of w3c webdriver specification
        * Development of webdrivers shifted from SeleniumHQ to browser providers (chromedriver, geckodriver, safaridriver,webdriver)
        * Mobile automation support got removed and shifted to Appium
    * Selenium 4.0 (Alpha)
        * Optimizations to selenium grid (Each conceptual piece in its own process i.e. sessions, distributor, router, nodes)
        * Better support for dockers
        * Remove support for further browsers (Opera, PhantomJS, HtmlUnit)
        * Compliance with new w3c webdriver
        * API changes


* Selenium IDE
    * Support stopped in 2017
    * Came back again to life in 2018 with using modern browser plugin. Therefore available with Chrome and Firefox
        * The new Selenium IDE test suites can be exported and run through command line

## Some Key Benefits

We can use Selenium WebDriver to do the following:

* Create robust, browser-based regression automation
* Scale and distribute scripts across many browsers and platforms
* Create scripts in your favourite programming language


## Further Reading Material
1. https://www.seleniumhq.org/
2. https://docs.seleniumhq.org/docs/
3. https://seleniumhq.github.io/docs/site/en/
4. https://github.com/SeleniumHQ/selenium
5. https://groups.google.com/forum/#!forum/selenium-users
6. https://twitter.com/seleniumhq
7. https://en.wikipedia.org/wiki/Selenium_(software)#History
8. https://seleniumhq.wordpress.com/2013/08/28/the-road-to-selenium-3/
9. https://saucelabs.com/blog/move-over-selenium-2-why-its-time-to-upgrade-to-selenium-3
10. https://www.quora.com/What-is-the-difference-between-selenium-3-0-and-selenium-2-0
11. https://github.com/SeleniumHQ/selenium/wiki/Selenium-Grid-4
12. https://testsigma.com/blog/selenium-4-automation-engineer-expect/
13. https://medium.com/@4400vijay/selenium-4-alpha-is-released-whats-new-7fce5e8cd926
