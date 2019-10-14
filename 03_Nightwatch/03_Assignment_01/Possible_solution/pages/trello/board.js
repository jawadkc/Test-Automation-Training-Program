const lastCard = listIndex => `.js-list:nth-of-type(${listIndex + 1}) a.list-card:last-of-type`;
const cardAndItsListSelector = cardIndex => {
  const cardSelector = `(//a[contains(@class, 'list-card')])[${cardIndex}]`;
  return {
    cardSelector,
    parentListSelector: `${cardSelector}/ancestor::div[contains(@class, 'js-list-content')]//div[contains(@class, 'js-list-header')]`
  }
}

module.exports = {
  elements: {
    boardTitle: '.mod-board-name',
    listHeader: '.list-header',
    addCard: '.open-card-composer',
    newCardTextArea: 'textarea.js-card-title',
    closeTextArea: '.js-cancel'
  },
  props: {
    defaultLists: ['To Do', 'Doing', 'Done']
  },
  commands: [
    {
      verifyBoardPage: function(boardTitle) {
        this
          .waitForElementVisible('@boardTitle')
          .expect.element('@boardTitle').text.to.be.equal(boardTitle);
        return this;
      },

      verifyDefaultLists: function() {
        const self = this;
        const listHeader = this.elements.listHeader;

        this.props.defaultLists.forEach((title, index) => {
          self.expect.element({selector: '@listHeader', index }).text.to.be.equal(title);
        });

        this.api.elements(listHeader.locateStrategy, listHeader.selector, results => {
          self.assert.strictEqual(results.value.length, self.props.defaultLists.length,
            `Visible number of list ${results.value.length} does not match expected length ${this.props.defaultLists.length}`)
        });

        return this;
      },

      closeTextAreaIfVisible: function() {
        const self = this;
        const closeTextArea = this.elements.closeTextArea;
        this.api.elements(closeTextArea.locateStrategy, closeTextArea.selector, results => {
          if (results.value && results.value.length) {
            self.click('@closeTextArea');
          }
        });
        return this;
      },

      addCardToSpecificList: function(cardData, listIndex) {
        this
          .waitForElementVisible({ selector: '@addCard', index: listIndex })
          .click({ selector: '@addCard', index: listIndex })
          .waitForElementVisible('@newCardTextArea')
          .setValue('@newCardTextArea', cardData.title)
          .api.keys('\uE007')
          .pause(1000)
          .waitForElementVisible(lastCard(listIndex))
          .expect.element(lastCard(listIndex)).text
            .to.be.equal(cardData.title)
        return this;
      },

      openACardByIndex: async function(cardIndex) {
        const cardAndListSelec = cardAndItsListSelector(cardIndex);
        let cardTitle;
        let listTitle;

        this.api.useXpath();
        this.waitForElementVisible(cardAndListSelec.cardSelector);

        cardTitle = await this.api.getText(cardAndListSelec.cardSelector);
        listTitle = await this.api.getText(cardAndListSelec.parentListSelector);

        this.click(cardAndListSelec.cardSelector);
        this.api.useCss();

        return {
          cardTitle: cardTitle.value,
          listTitle: listTitle.value
        }
      }
    }
  ]
};
