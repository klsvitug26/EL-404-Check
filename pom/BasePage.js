const { WebUtils } = require('../utils/WebUtils');
const { siteLocators } = require('../locators/siteLocators');

class BasePage {
  constructor(page, lang = 'en', section) {
    this.page = page;
    this.lang = lang;
    this.webutils = new WebUtils(page, lang);
    this.locators = siteLocators(lang)[section];
  }
}

module.exports = { BasePage };
