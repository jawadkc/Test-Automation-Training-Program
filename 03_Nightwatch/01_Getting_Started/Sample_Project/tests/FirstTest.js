module.exports = {
    'Demo test Google' : function (browser) {
      const searchPage = browser.page.searchPage();
      const searchResults = browser.page.searchResults();

      searchPage
        .navigate()
        .searchAndSubmit('nightwatch');

      searchResults
        .verifyResultsContain('Nightwatch');

      browser
        .end();
    }
  };
