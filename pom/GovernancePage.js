// pom/GovernancePage.js
const { BasePage } = require('./BasePage');

class GovernancePage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'governancePage');
  }
}

module.exports = { GovernancePage };
