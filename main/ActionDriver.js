import { expect } from '@playwright/test';

class ActionDriver {
  constructor(page) {
    this.page = page;
  }

  getElement(locator) {
    return this.page.locator(locator);
  }

  async navigateURL(value) {
    return await this.page.goto(value); // returns response
  }

  async clickElement(locator) {
    await this.getElement(locator).click();
  }

  async setText(locator, value) {
    await this.getElement(locator).fill(value);
  }

  async verifyTitle(value) {
    await expect(this.page).toHaveTitle(value);
  }

  async assertElementDisplayed(locator) {
    await expect(this.getElement(locator)).toBeVisible();
  }
}

export default ActionDriver;