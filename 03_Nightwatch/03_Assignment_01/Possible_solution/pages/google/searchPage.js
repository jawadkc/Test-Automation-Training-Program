
module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  sections: {
    inputSection: {
      selector: "//div[@class='SDkEP']",
      locateStrategy: 'xpath',
      elements: {
        searchIcon: '.iblpc',
        searchinput: 'input',
        speakIcon: '[aria-label="Search by voice"]'
      }
    }
  },
  elements: {
    body: 'body',
    searchField: {
      selector: '//input[@type="text"]',
      locateStrategy: "xpath"
    },
    searchButton: 'input[name=btnK]'
  },
  commands: [
    {
      searchAndSubmit: function(searchString) {
        this.section.inputSection
            .waitForElementVisible('@searchinput')
            .setValue('@searchinput', searchString)
        return this.submitClick();
      },

      submitClick: function() {
        return this
            .waitForElementVisible('@searchButton', 1000)
            .click('@searchButton')
            .waitForElementNotPresent('@searchButton');
      }
    }
  ]

};
