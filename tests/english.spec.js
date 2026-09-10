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
const { AnnualReport } = require('../pom/ARPage');
const { StandalonePage } = require('../pom/StandalonePage');

// ✅ Choose the language you want to test
const lang = 'es'; // change to 'fr', 'it', 'es', 'pt', 'jp'

test.describe(`EssilorLuxottica Website - Language: ${lang}`, () => {

  test('Validate Homepage', async ({ page }) => {
    const homePage = new HomePage(page, lang);
    await homePage.navigateToHome();
    await homePage.validateHomeUrl();
  });

  test('Validate Group Pages', async ({ page }) => {
    const groupPage = new GroupPage(page, lang);
    await groupPage.validateGroupPages();
  });

  test('Validate Brands Pages', async ({ page }) => {
    const brandsPage = new BrandsPage(page, lang);
    await brandsPage.validateBrandsPages();
  });

  test('Validate Governance Pages', async ({ page }) => {
    const governancePage = new GovernancePage(page, lang);
    await governancePage.validateGovernancePages();
  });

  test('Validate Sustainability Pages', async ({ page }) => {
    const sustainabilityPage = new SustainabilityPage(page, lang);
    await sustainabilityPage.validateSustainabilityPages();
  });

  test('Validate Investors Pages', async ({ page }) => {
    const investorsPage = new InvestorsPage(page, lang);
    await investorsPage.validateInvestorsPages();
  });

  test('Validate Careers Pages', async ({ page }) => {
    const careersPage = new CareersPage(page, lang);
    await careersPage.validateCareersPages();
  });

  test('Validate Newsroom Pages', async ({ page }) => {
    const newsroomPage = new NewsroomPage(page, lang);
    await newsroomPage.validateNewsroomPages();
  });

  test('Validate Footer Pages', async ({ page }) => {
    const footerPage = new FooterPage(page, lang);
    await footerPage.validateFooterPages();
  });

  test('Validate Annual Report Pages', async ({ page }) => {
    const annualReport = new AnnualReport(page, lang);
    await annualReport.validateAnnualReport();
  });

  test('Validate Standalone Pages', async ({ page }) => {
    const standalonePage = new StandalonePage(page, lang);
    await standalonePage.validateStandalonePage();
  });

});
