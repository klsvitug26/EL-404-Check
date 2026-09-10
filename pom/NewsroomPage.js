const { BasePage } = require('./BasePage');

class NewsroomPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'newsroomPage');
  }

  async validateNewsroomPages() {
    // Section parameter used for skip logic in WebUtils
    await this.webutils.validatePages(this.locators, 'newsroomPage');
  }
}

module.exports = { NewsroomPage };
