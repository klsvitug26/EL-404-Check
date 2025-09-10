const { WebUtils } = require('../utils/WebUtils');

class BasePage {
  constructor(page) {
    this.page = page;
    this.webutils = new WebUtils(page);
  }
}

module.exports = { BasePage };
