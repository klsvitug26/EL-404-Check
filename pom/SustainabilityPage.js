// pom/SustainabilityPage.js
const { BasePage } = require('./BasePage');

class SustainabilityPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'sustainabilityPage');
  }
}

module.exports = { SustainabilityPage };
