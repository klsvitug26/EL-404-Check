// pom/BrandsPage.js
const { BasePage } = require('./BasePage');

class BrandsPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'brandsPage');
  }
}

module.exports = { BrandsPage };
