const { BasePage } = require('./BasePage');

class CareersPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'careersPage');
  }

  async validateCareersPages() {
    await this.webutils.validatePages(this.locators, 'careersPage');
  }
}

module.exports = { CareersPage };
