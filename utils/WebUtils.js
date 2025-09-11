const { expect } = require('@playwright/test');

class WebUtils {
  constructor(page) {
    this.page = page;

    this.page.on('response', async (response) => {
      try {
        if (response.request().resourceType() === 'document') {
          const url = response.url();
          const status = response.status();
          console.log(`🌐 [${status}] ${url}`);
        }
      } catch (err) {
        console.log(`⚠️ Error logging response: ${err}`);
      }
    });
  }

  async goto(url) {
    const response = await this.page.goto(url, { waitUntil: 'domcontentloaded' });

    if (response) {
      console.log(`🚀 Navigated to ${this.page.url()} (status: ${response.status()})`);
      if (response.status() >= 400) {
        console.warn(`❌ Warning: Page returned status ${response.status()} at ${url}`);
      }
    } else {
      console.log(`🚀 Navigated to ${this.page.url()} (no new response, likely anchor navigation)`);
    }

    await this.acceptCookies();
  }

  async acceptCookies() {
    try {
      const cookieButton = 'button#onetrust-accept-btn-handler';
      const isVisible = await this.page.isVisible(cookieButton);
      if (isVisible) {
        await this.page.click(cookieButton);
        console.log('🍪 Cookies accepted');
      }
    } catch {
      console.log('⚠️ No cookie banner found or already accepted');
    }
  }

  async validateUrl(expectedUrl) {
    const actualUrl = this.page.url();
    console.log(`🔍 Validating → Expected: ${expectedUrl} | Actual: ${actualUrl}`);

    if (actualUrl.includes('404')) {
      console.error(`❌ Page not found (404): ${actualUrl}`);
      return;
    }

    if (actualUrl !== expectedUrl) {
      console.warn(`⚠️ Redirect: Expected ${expectedUrl}, but landed on ${actualUrl}`);
    } else {
      console.log(`✅ URL matched: ${expectedUrl}`);
    }
  }

  async validatePages(pages) {
    for (const [name, data] of Object.entries(pages || {})) {
      if (!data || !data.url) {
        console.warn(`⚠️ Skipping "${name}" → Missing "url" property`);
        continue;
      }

      console.log(`\n=== Navigating Page: ${name} ===`);
      await this.goto(data.url);
      await this.validateUrl(data.url);
    }
  }
}

module.exports = { WebUtils };
