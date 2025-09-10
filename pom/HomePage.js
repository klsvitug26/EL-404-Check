const { WebUtils } = require('../utils/WebUtils');
const { siteLocators } = require('../locators/siteLocators');

class HomePage {
  constructor(page) {
    this.page = page;
    this.webutils = new WebUtils(page);
  }

  async navigateToHome() {
    await this.webutils.goto(siteLocators.homePage.url);
  }

  async validateHomeUrl() {
    await this.webutils.validateUrl(siteLocators.homePage.url);
  }
}

module.exports = { HomePage };
