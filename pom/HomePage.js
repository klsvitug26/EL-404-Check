// pom/HomePage.js
const { BasePage } = require('./BasePage');
const { siteLocators } = require('../locators/siteLocators');

class HomePage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'homePage');
    this.homeLocators = siteLocators(lang).homePage; // Home needs direct URL
  }

  async navigateToHome() {
    await this.webutils.goto(this.homeLocators.url);
  }

  async validateHomeUrl() {
    await this.webutils.validateUrl(this.homeLocators.url);
  }
}

module.exports = { HomePage };
