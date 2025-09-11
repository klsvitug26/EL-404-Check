// pom/InvestorsPage.js
const { BasePage } = require('./BasePage');

class InvestorsPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'investorsPage');
  }
}

module.exports = { InvestorsPage };
