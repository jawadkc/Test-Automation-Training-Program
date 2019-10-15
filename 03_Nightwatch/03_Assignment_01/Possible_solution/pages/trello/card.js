module.exports = {
  elements: {
    cardTitle: '.js-card-detail-title-input',
    listTitle: '.js-open-move-from-header',
    closeCard: '.js-close-window'
  },
  commands: [
    {
      verifyCardOpened: function(cardInfo) {
        this
          .waitForElementVisible('@cardTitle')
          .api.pause(5000);
        this.expect.element('@cardTitle').value.to.be.equal(cardInfo.cardTitle);
        this.expect.element('@listTitle').text.to.be.equal(cardInfo.listTitle);
        return this;
      },
      close: function() {
        return this
          .waitForElementVisible('@closeCard')
          .click('@closeCard')

      }
    }
  ]
};
