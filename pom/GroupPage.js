// pom/GroupPage.js
const { BasePage } = require('./BasePage');

class GroupPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'groupPage'); // all locators under groupPage
  }
}

module.exports = { GroupPage };
