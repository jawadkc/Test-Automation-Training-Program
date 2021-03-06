# Assignment

1. Create an account on trello.com
2. You need to automate following scenario
    * Login with your credentials
    * Create a new board
    * Open the board and verify that correct board title is displayed
    * Create at-least three lists in the board and verify that the lists are created successfully
    * Create 5 cards in any of the list
    * Randomly open one of the cards and verify that the card title and list title are correct in card details
    * Close and delete the board
3. You need to explore following links and then update the above project to have and external globals that sets waitForConditionTimeout equal to 30 seconds
    * Explore how to set `globals_path` as mentioned in https://nightwatchjs.org/gettingstarted/configuration/#base-settings
    * https://github.com/nightwatchjs/nightwatch-docs/blob/master/guide/using-nightwatch/external-globals.md
    * https://github.com/nightwatchjs/nightwatch/blob/master/examples/globalsModule.js
4. Update your test script in package.json such that it automatically retry if they fail on first attempt
    * https://nightwatchjs.org/guide/running-tests/#command-line-options
5. You should be able to run the tests against different browsers using different environment configurations
    * `Environment specific settings` section in https://nightwatchjs.org/gettingstarted/configuration/#base-settings

## One Solution:

One way of doing the above task is described in sample project available [here](Possible_solution)

Note:
1. You will need to update enter your username and password in [util > data.js](util/data.js)
2. It uses the same project file from previous projects and therefore moves google pages and tests in a separate folders. 
