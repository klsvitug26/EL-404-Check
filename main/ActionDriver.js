// @ts-check
require ('@playwright/test');
class ActionDriver {
    constructor (page) {
        this.page = page;
    }
async navigateURL(value) {
    await this.page.goto(value);
}

async setText(locator, value) {
    await this.page.fill(locator, value);
}

async clickElement(locator) {
    await this.page.click(locator);
}

}
export default ActionDriver;

