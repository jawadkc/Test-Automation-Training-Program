module.exports = {
  elements: {
    main: '#main'
  },
  commands: [
    {
      verifyResultsContain: function(searchString) {
        this
          .waitForElementVisible('@main')
          .expect.element('@main').text.to.be.contain(searchString);
        return this;
      }
    }
  ]
};
