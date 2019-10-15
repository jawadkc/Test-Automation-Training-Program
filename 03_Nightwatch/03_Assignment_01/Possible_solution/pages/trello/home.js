module.exports = {
  sections: {
    createBoardPopUp: {
      selector: '.create-board-form',
      elements: {
        boardTitle: 'input',
        boardType: '.subtle-chooser-trigger',
        createBoard: '[type="submit"]'
      }
    }
  },
  elements: {
    header: '[data-test-id="header-container"]',
    allBoardsSection: '.all-boards',
    boardsSectionHeader: '.boards-page-board-section-header-name',
    createBoardBlock: '.mod-add'
  },
  props: {
    personalBoard: 'Personal Boards'
  },
  commands: [
    {
      verifyHomePageLoaded: function() {
        this.expect.element('@header').to.be.visible;
        this.expect.element('@allBoardsSection').to.be.visible;
        this.expect.element('@boardsSectionHeader').text.to.be.equal(this.props.personalBoard);
        return this;
      },
      createBoard: function(boardData) {
        return this
          .clickCreateNewBoard()
          .submitCreateForm(boardData);
      },
      submitCreateForm: function(boardData) {
        this.section.createBoardPopUp
          .waitForElementVisible('@createBoard')
          .setValue('@boardTitle', boardData.title)
          .click('@createBoard');
        return this;
      },
      clickCreateNewBoard: function() {
        return this
          .waitForElementVisible('@createBoardBlock')
          .click('@createBoardBlock')
      },
    }
  ]
};
