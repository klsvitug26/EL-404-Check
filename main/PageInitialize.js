const { test } = require('@playwright/test');
const initializePages = require('../PageInitialize');
const ReportManager = require('../utilities/ReportManager');

const reportmanager = new ReportManager();

test.beforeEach(async ({ page }, testInfo) => {
  testInfo.setTimeout(testInfo.timeout + 30000); // extra time
  await initializePages(page); // this just assigns page to HomePage
});

test.afterEach(async ({ page }, testInfo) => {
  await reportmanager.attachScreenshot(page, testInfo);
});