const { BasePage } = require('./BasePage');

class GroupPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'groupPage');
  }

  async validateGroupPages() {
    await this.webutils.validatePages(this.locators, 'groupPage');
  }
}

module.exports = { GroupPage };
