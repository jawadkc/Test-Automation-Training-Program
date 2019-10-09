module.exports = {
    url: 'https://google.com',
    elements: {
        body: 'body',
        searchField: 'input[type=text]',
        searchButton: 'input[name=btnK]'
    },
    commands: [
        {
            searchAndSubmit: function(searchString) {
                return this
                    .waitForElementVisible('@searchField')
                    .setValue('@searchField', searchString)
                    .waitForElementVisible('@searchButton', 1000)
                    .click('@searchButton')
                    .waitForElementNotPresent('@searchButton');
            }
        }
    ]

  };
