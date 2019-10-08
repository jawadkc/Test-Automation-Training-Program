# Why learn about whats under the hood


## Do we need to interact with whats under the hood

The encapsulation provided by test frameworks, selenium, drivers, etc, is because to simplify test automation and to make it easier for us to get started then why should we understand whats under the hood.

Typically we do not have to interact with whats under the hood, having the basic idea helps us in following ways  

* Differentiate different test automation solutions (e.g. in comparison with puppeteer, cypress)
* Better understand its usage, benefits and limitations
* Evaluate which one is more suitable for the need
* Be able to switch and adopt to any client libraries in any other language
* Considering multiple layers involved, one will be able to better diagnose the problem and pin point the root cause e.g.
    * Chrome version is updated and new Chromedriver version is available but selenium has not yet patched it to use the latest version by default
    * Selenium was able to identify and report that some other object blocked the click operation but a framework was not reporting it, making it hard to diagnose just by looking at framework logs
    * Something crashes or fails to start. But you may not explore individual components logs to identify what caused the issue.

## How much to learn

Just get the overall picture and identify where one needs to look for when a situation arises or when he wants to dig dipper in future.
