const { BasePage } = require('./BasePage');

class StandalonePage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'standalonePage');
  }

  async validateStandalonePage() {
    // Section parameter used for skip logic in WebUtils
    await this.webutils.validatePages(this.locators, 'standalonePage');
  }
}

module.exports = { StandalonePage };
