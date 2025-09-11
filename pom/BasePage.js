// pom/BasePage.js
const { WebUtils } = require('../utils/WebUtils');
const { siteLocators } = require('../locators/siteLocators');

class BasePage {
  constructor(page, lang = 'en', section) {
    this.page = page;
    this.lang = lang;
    this.webutils = new WebUtils(page);
    this.locators = siteLocators(lang)[section]; // 👈 pulls locators dynamically
  }

  async validatePages() {
    await this.webutils.validatePages(this.locators);
  }
}

module.exports = { BasePage };
