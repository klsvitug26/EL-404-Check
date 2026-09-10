const { BasePage } = require('./BasePage');

class FooterPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'footerPage');
  }

  async validateFooterPages() {
    await this.webutils.validatePages(this.locators, 'footerPage');
  }
}

module.exports = { FooterPage };
