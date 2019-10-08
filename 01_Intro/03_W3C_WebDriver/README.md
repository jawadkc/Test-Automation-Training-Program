# WebDriver

## w3c WebDriver Standard

> WebDriver is a remote control interface that enables introspection and control of user agents. It provides a platform- and language-neutral wire protocol as a way for out-of-process programs to remotely instruct the behavior of web browsers.

### Design Goals
- Compatibility to make sure Selenium continues to provide wide range of expected functionality and avoid unexpected breakages
- Simplicity for users like testers and developers for common commands like typing, clicking, etc
- Extension to allow for non standard platforms and vendor specific browser functionalities

### What the standard includes

- WebDriver protocol consists of Local End and Remote End
- Defines the behavior of remote end in response to webdriver protocol
- Covers the wire protocol libraries for the local end
- Does not put any restriction for the libraries above the wire protocol

### Few Examples of what it Defines

* Each HTTP request with a method and template represent a single Commands and therefore should return a single http response
* Command can trigger a series of action e.g.
    *  
* Defines End points to expose for each command
| Method | URI Template | Command |
|--------|--------------|---------|
| POST   | /session     | New Session |
| DELETE   | /session/{session id}     | Delete Session |
| GET   | /status     | Status |
| GET   | /session/{session id}/timeouts     | Get Timeouts |
| POST   | /session/{session id}/url     | Navigate To |

* What error codes to return and what details to be returned

* Required set of browser configuration capabilities (standard, proxy) and how to process them

* Define Session, timeouts, navigation, Window contexts, elements, Document, Cookies, Actions, User Prompts, screen captures, Privacy and Security.

## Selenium WebDriver

 > Selenium specifically provides infrastructure for the W3C WebDriver specification.

 The WebDriver APIs are focused on driving the browser from the user's point of view. e.g.
 - Do not have methods such as "fireEvent"
 - "getText" attempts to return the text as a user would see it

 Implementation is done in a "Best Fit" language while the user sees is a thin wrapper around it

 The Drivers implementation is now responsibility of the vendor it self.


## Components

* API: Set of commands you use to manipulate WebDriver
* Library: A code module which contains the APIs and the code necessary to implement them
* Driver: Responsible for controlling the actual Driver
* Framework: Additional Library used to support for webdrivers

https://seleniumhq.github.io/docs/site/en/webdriver/understanding_the_components/


# ChromeDriver

> ChromeDriver is a separate executable that Selenium WebDriver uses to control Chrome. It is maintained by the Chromium team with help from WebDriver contributors.

Let us take chromedriver as an example and trigger some endpoints to operate browser with ui.

## Lets play directly with ChromeDriver

### CLI

* Download the chrome driver using following link. Then unzip the directory.
https://chromedriver.chromium.org/downloads

* Open command prompt `cmd` and navigate to directory where `chromedriver.exe` is placed
```
chromedriver --verbose
```

* When the chromedriver starts, open an other terminal and run following commands. remember to change session id and element id based on the values returned
 
```
curl -X GET "localhost:9515/status"
```

```
curl -X POST http://localhost:9515/session -d '{"desiredCapabilities":{"browserName":"chrome"}}'
```

```
curl -X POST http://localhost:9515/session/0448ef6aeeeddd91fd926e20d244a58a/url -d '{"url":"https://trello.com/login/"}'
```

```
curl  -X POST http://localhost:9515/session/0448ef6aeeeddd91fd926e20d244a58a/elements -d '{"using":"css selector","value":".hide-when-two-factor input"}'
```

```
curl  -X POST http://localhost:9515/session/0448ef6aeeeddd91fd926e20d244a58a/element/0.8499346148967364-1/value -d '{"value":["j","a","w","@"]}'
```

```
curl -X DELETE http://localhost:9515/session/0448ef6aeeeddd91fd926e20d244a58a
```

## Further Reading Material
1. https://www.w3.org/TR/webdriver/
2. https://github.com/SeleniumHQ/selenium/wiki/Architectural-Overview
3. https://chromedriver.chromium.org/home
4. https://chromedriver.chromium.org/getting-started
5. https://chromedriver.chromium.org/capabilities
6. https://makandracards.com/makandra/49096-how-to-control-chromedriver-using-curl
