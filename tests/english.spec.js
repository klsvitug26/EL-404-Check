const { test } = require('@playwright/test');
const { HomePage } = require('../pom/HomePage');
const { GroupPage } = require('../pom/GroupPage');
const { BrandsPage } = require('../pom/BrandsPage');
const { GovernancePage } = require('../pom/GovernancePage');
const { SustainabilityPage } = require('../pom/SustainabilityPage');
const { InvestorsPage } = require('../pom/InvestorsPage');
const { CareersPage } = require('../pom/CareersPage');
const { NewsroomPage } = require('../pom/NewsroomPage');
const { FooterPage } = require('../pom/FooterPage');

// ✅ Choose the language you want to test
const lang = 'es'; // change to 'fr', 'it', etc.

test.describe(`EssilorLuxottica Website - Language: ${lang}`, () => {

  test('Validate Homepage', async ({ page }) => {
    const homePage = new HomePage(page, lang);
    await homePage.navigateToHome();
    await homePage.validateHomeUrl();
  });

  test('Validate Group Pages', async ({ page }) => {
    const groupPage = new GroupPage(page, lang);
    await groupPage.validatePages();
  });

  test('Validate Brands Pages', async ({ page }) => {
    const brandsPage = new BrandsPage(page, lang);
    await brandsPage.validatePages();
  });

  test('Validate Governance Pages', async ({ page }) => {
    const governancePage = new GovernancePage(page, lang);
    await governancePage.validatePages();
  });

  test('Validate Sustainability Pages', async ({ page }) => {
    const sustainabilityPage = new SustainabilityPage(page, lang);
    await sustainabilityPage.validatePages();
  });

  test('Validate Investors Pages', async ({ page }) => {
    const investorsPage = new InvestorsPage(page, lang);
    await investorsPage.validatePages();
  });

  test('Validate Careers Pages', async ({ page }) => {
    const careersPage = new CareersPage(page, lang);
    await careersPage.validatePages();
  });

  test('Validate Newsroom Pages', async ({ page }) => {
    const newsroomPage = new NewsroomPage(page, lang);
    await newsroomPage.validatePages();
  });

  test('Validate Footer Pages', async ({ page }) => {
    const footerPage = new FooterPage(page, lang);
    await footerPage.validatePages();
  });

});
