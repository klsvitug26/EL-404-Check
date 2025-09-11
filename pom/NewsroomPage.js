// pom/NewsroomPage.js
const { BasePage } = require('./BasePage');

class NewsroomPage extends BasePage {
  constructor(page, lang = 'en') {
    super(page, lang, 'newsroomPage');
  }
}

module.exports = { NewsroomPage };
