const { BasePage } = require('./BasePage');

class GovernancePage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'governancePage');
  }

  async validateGovernancePages() {
    await this.webutils.validatePages(this.locators, 'governancePage');
  }
}

module.exports = { GovernancePage };
