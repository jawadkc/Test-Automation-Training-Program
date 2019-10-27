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
        this.click('@cardTitle');
        this.api.execute(
          function(selector){
            return $(selector).val();
          },
          [this.elements.cardTitle.selector],
          function(text) {
            this.assert.strictEqual(text.value, cardInfo.cardTitle);
          }
        );
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
