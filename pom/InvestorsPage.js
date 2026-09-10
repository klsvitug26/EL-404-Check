const { BasePage } = require('./BasePage');

class InvestorsPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'investorsPage');
  }

  async validateInvestorsPages() {
    await this.webutils.validatePages(this.locators, 'investorsPage');
  }
}

module.exports = { InvestorsPage };
