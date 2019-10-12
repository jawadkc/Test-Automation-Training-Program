let searchPage;
let searchResults;

module.exports = {

  before: (browser) => {
    searchPage = browser.page.searchPage();
    searchResults = browser.page.searchResults();
    browser.setWindowSize(1027,920);
  },

  beforeEach: () => {
    searchPage.navigate();
  },

  after: (browser) => {
    browser.end();
  },

  'Check search results for nightwatch' : async function (browser) {

    searchPage
      .searchAndSubmit('nightwatch');

    const firstText = await searchResults
      .verifyResultsContain('Nightwatch')
      .readTextForFirst();

    console.log(firstText.value);

  },

  'Check search results for something else' : async function (browser) {

    searchPage
      .searchAndSubmit('selenium');

    const firstText = await searchResults
      .verifyResultsContain('Selenium')
      .readTextForFirst();

    console.log(firstText.value);

  },
};
