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
const { siteLocators } = require('../locators/siteLocators');

test.describe('EssilorLuxottica Website - English', () => {

  test('Validate Homepage', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    await homePage.validateHomeUrl();
  });

  test('Validate Group Pages', async ({ page }) => {
    const groupPage = new GroupPage(page);
    await groupPage.webutils.validatePages(siteLocators.groupPage);
  });

  test('Validate Brands Pages', async ({ page }) => {
    const brandsPage = new BrandsPage(page);
    await brandsPage.webutils.validatePages(siteLocators.brandsPage);
  });

  test('Validate Governance Pages', async ({ page }) => {
    const governancePage = new GovernancePage(page);
    await governancePage.webutils.validatePages(siteLocators.governancePage);
  });

  test('Validate Sustainability Pages', async ({ page }) => {
    const sustainabilityPage = new SustainabilityPage(page);
    await sustainabilityPage.webutils.validatePages(siteLocators.sustainabilityPage);
  });

  test('Validate Investors Pages', async ({ page }) => {
    const investorsPage = new InvestorsPage(page);
    await investorsPage.webutils.validatePages(siteLocators.investorsPage);
  });

  test('Validate Careers Pages', async ({ page }) => {
    const careersPage = new CareersPage(page);
    await careersPage.webutils.validatePages(siteLocators.careersPage);
  });

  test('Validate Newsroom Pages', async ({ page }) => {
    const newsroomPage = new NewsroomPage(page);
    await newsroomPage.webutils.validatePages(siteLocators.newsroomPage);
  });

  test('Validate Footer Pages', async ({ page }) => {
    const footerPage = new FooterPage(page);
    await footerPage.webutils.validatePages(siteLocators.footerPage);
  });
  


});
