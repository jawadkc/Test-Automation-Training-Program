module.exports = {
  elements: {
    main: '#main',
    firstResult: 'div.srg div.g:first-child'
  },
  commands: [
    {
      verifyResultsContain: function(searchString) {
        this
          .waitForElementVisible('@main')
          .expect.element('@main').text.to.be.contain(searchString);
        return this;
      },

      readTextForFirst: async function() {
        const firstResultSelector = this.elements.firstResult.selector;
        var actualText = await this.api.getText(firstResultSelector, text => {
          return Promise.resolve(text.value)
        })
        return actualText;
      }
    }
  ]
};
