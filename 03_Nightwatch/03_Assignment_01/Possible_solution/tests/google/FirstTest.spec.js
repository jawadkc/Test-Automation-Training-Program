let searchPage;
let searchResults;

module.exports = {

  before: (browser) => {
    searchPage = browser.page.google.searchPage();
    searchResults = browser.page.google.searchResults();
    browser.setWindowSize(1027,920);
  },

  beforeEach: () => {
    searchPage.navigate();
  },

  after: (browser) => {
    browser.end();
  },

  'Check search results for nightwatch' : async () => {

    searchPage
      .searchAndSubmit('nightwatch');

    const firstText = await searchResults
      .verifyResultsContain('Nightwatch')
      .readTextForFirst();

    console.log(firstText.value);

  },

  'Check search results for something else' : async () => {

    searchPage
      .searchAndSubmit('selenium');

    const firstText = await searchResults
      .verifyResultsContain('Selenium')
      .readTextForFirst();

    console.log(firstText.value);

  },
};
