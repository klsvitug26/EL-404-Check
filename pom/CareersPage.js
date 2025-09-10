const { WebUtils } = require('../utils/WebUtils');

class CareersPage {
  constructor(page) {
    this.page = page;
    this.webutils = new WebUtils(page);
  }

  async goto(url) {
    await this.webutils.goto(url);
  }

  async validateUrl(expectedUrl) {
    await this.webutils.validateUrl(expectedUrl);
  }
}

module.exports = { CareersPage };
