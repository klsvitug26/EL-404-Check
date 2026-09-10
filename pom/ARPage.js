const { BasePage } = require('./BasePage');

class AnnualReport extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'annualReportPage');
  }

  async validateAnnualReport() {
    await this.webutils.validatePages(this.locators, 'annualReportPage');
  }
}

module.exports = { AnnualReport };
