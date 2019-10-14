const { testData, boardData, cardsData } = require('../../util/data.js');

let loginPage;
let homePage;
let boardPage;
let cardPage;

module.exports = {

  before: (browser) => {
    loginPage = browser.page.trello.login();
    homePage = browser.page.trello.home();
    boardPage = browser.page.trello.board();
    cardPage = browser.page.trello.card();
    browser.setWindowSize(1027,920);
  },

  after: (browser) => {
    browser.end();
  },

  'Verify home page is loaded after login' : () => {
    loginPage
      .navigate()
      .enterCredentialsAndLogin(testData);
    homePage
      .verifyHomePageLoaded();
  },

  'Create board and verify new board is successfully created and loaded' : () => {
    homePage
      .createBoard(boardData)
    boardPage
      .verifyBoardPage(boardData.title)
      .verifyDefaultLists();
  },

  'Create cards in multiple lists and verify they are correctly added' : () => {
    cardsData.forEach(card => {
      boardPage
        .closeTextAreaIfVisible()
        .addCardToSpecificList(card, Math.floor(Math.random()* 3)
        );
    });
  },

  'Open a card randomly and verify correct card and list info is shown': async () => {
    const selectedCardDetails = await boardPage.openACardByIndex(Math.floor(Math.random()* 5) + 1);
    cardPage.verifyCardOpened(selectedCardDetails);
  }

};
