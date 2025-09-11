// pom/FooterPage.js
const { BasePage } = require('./BasePage');

class FooterPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'footerPage');
  }
}

module.exports = { FooterPage };
