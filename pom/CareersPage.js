// pom/CareersPage.js
const { BasePage } = require('./BasePage');

class CareersPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'careersPage');
  }
}

module.exports = { CareersPage };
