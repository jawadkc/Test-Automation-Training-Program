module.exports = {
  url: function() {
    return `${this.api.launchUrl}login`;
  },
  elements: {
    email: '#user',
    password: '#password',
    login: '#login'
  },
  commands: [
    {
      enterCredentialsAndLogin: function(credentials) {
        return this
            .enterCredentials(credentials)
            .submitLogin()
            .waitForElementNotPresent('@login');
      },
      enterCredentials: function(credentials) {
        return this
            .waitForElementVisible('@email')
            .setValue('@email', credentials.email)
            .setValue('@password', credentials.password);
      },
      submitLogin: function(credentials) {
        return this
            .waitForElementVisible('@login')
            .click('@login');
      }
    }
  ]

};
