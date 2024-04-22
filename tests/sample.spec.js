// @ts-check

import { test, expect} from '@playwright/test';
import ActionDriver from '../main/ActionDriver';
import PageFactory from '../main/PageFactory';
import LoginPage from '../pom/LoginPage';


test('open url', async ({page}) => {
    const actiondriver = new ActionDriver(page);
    const loginPage = new LoginPage(page);
    await actiondriver.navigateURL("https://www.google.com");
    await loginPage.SearchTextfield.setText("text");
    await loginPage.SearchButton.clickElement();
    await loginPage.SearchButton.clickElement();
});