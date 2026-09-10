const { BasePage } = require('./BasePage');

class SustainabilityPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'sustainabilityPage');
  }

  async validateSustainabilityPages() {
    await this.webutils.validatePages(this.locators, 'sustainabilityPage');
  }
}

module.exports = { SustainabilityPage };
