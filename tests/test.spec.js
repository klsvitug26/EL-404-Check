// @ts-check

import { test, expect} from '@playwright/test';
import ActionDriver from '../main/ActionDriver';
import HomePage from '../pom/HomePage';
import PageFactory from '../main/PageFactory';


test('open url', async ({page}) => {
    HomePage.initialize(page);
    const actiondriver = new ActionDriver(page);
    await actiondriver.navigateURL("https://www.google.com");
    await HomePage.SearchTextfield.setText("test");
    await HomePage.SearchButton.clickElement();
    await HomePage.SearchButton.clickElement();
});