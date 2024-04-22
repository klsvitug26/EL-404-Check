// @ts-check

import HomePage from '../pom/HomePage';

export default class PageFactory {
    constructor(page) {
        this.page = page;
    }

    getLoginPage() {
        return new  HomePage.initialize(this.page);
    }

    // Add methods to get other pages as needed
}
