
// @ts-check
require ('@playwright/test');
import ActionDriver from '../main/ActionDriver';


class LoginPage {
    constructor(page) {
        this.page = page;
        const actiondriver = new ActionDriver(page); 
    
this.SearchTextfield = {
    
    locator: "//textarea[@name='q']",
    setText: async function (value) {
        await actiondriver.setText(this.locator, value);
    }
};

this.SearchButton = {
    locator: "(//input[@class='gNO89b'])[2]",
    clickElement: async function () {
        await actiondriver.clickElement(this.locator);
}
    }; 
}
}
export default LoginPage;