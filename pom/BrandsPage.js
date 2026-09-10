const { BasePage } = require('./BasePage');

class BrandsPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'brandsPage');
  }

  async validateBrandsPages() {
    await this.webutils.validatePages(this.locators, 'brandsPage');
  }
}

module.exports = { BrandsPage };
