// @ts-check
require('@playwright/test');
import ActionDriver from '../main/ActionDriver';


class HomePage {
    static page;
    static actiondriver;

    static initialize(page) {
        HomePage.page = page;
        HomePage.actiondriver = new ActionDriver(page);
    }
    static SearchTextfield = {
        locator: "//textarea[@name='q']",
        setText: async function (value) {
          await  HomePage.actiondriver.setText(this.locator, value)
        }
        
}
    static SearchButton = {
    locator: "(//input[@class='gNO89b'])[2]",
    clickElement: async function () {
        await HomePage.actiondriver.clickElement(this.locator);
}
    }; 
}

export default HomePage;
