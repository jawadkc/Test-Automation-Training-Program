module.exports = {
  elements: {
    cardTitle: '.window-title',
    listTitle: '.js-open-move-from-header',
  },
  commands: [
    {
      verifyCardOpened: function(cardInfo) {
        this
          .waitForElementVisible('@cardTitle')
          .api.pause(5000);
        this.expect.element('@cardTitle').text.to.be.equal(cardInfo.cardTitle);
        this.expect.element('@listTitle').text.to.be.equal(cardInfo.listTitle);
        return this;
      }
    }
  ]
};
