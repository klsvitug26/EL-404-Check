// utils/WebUtils.js
const { test, expect } = require('@playwright/test');

class WebUtils {
  constructor(page, lang = 'en') {
    this.page = page;
    this.lang = lang;

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

  // ✅ Reusable language skip helper
  skipIfNotAllowed(section, allowedLangs) {
    if (!allowedLangs.includes(this.lang)) {
      const skipReason = `⏭️ Skipping ${section} for ${this.lang} → only available in ${allowedLangs.join('/')}`;
      console.log(skipReason);
      test.skip(true, skipReason);
      return true;
    }
    return false;
  }

  async goto(url) {
    const response = await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    if (response) {
      console.log(`🚀 Navigated to ${this.page.url()} (status: ${response.status()})`);
      if (response.status() >= 400) console.warn(`❌ Page returned ${response.status()}`);
    } else {
      console.log(`🚀 Navigated to ${this.page.url()} (no response)`);
    }
    await this.acceptCookies();
    return response;
  }

  async acceptCookies() {
    try {
      const cookieButton = this.page.locator('button#onetrust-accept-btn-handler');
      if (await cookieButton.isVisible().catch(() => false)) {
        await cookieButton.click();
        console.log('🍪 Cookies accepted');
      }
    } catch {
      console.log('⚠️ No cookie banner');
    }
  }

  async validateUrl(expectedUrl) {
    const actualUrl = this.page.url();

    if (actualUrl.includes('404')) {
      const msg = `❌ 404 Page: ${actualUrl}`;
      console.error(msg);
      test.info().annotations.push({ type: 'issue', description: msg });
      return false;
    }

    const normalize = (url) => url.replace(/\/$/, '');
    if (normalize(actualUrl) !== normalize(expectedUrl)) {
      console.warn(`⚠️ Redirected: ${actualUrl}`);
      test.info().annotations.push({
        type: 'warning',
        description: `Redirected (expected ${expectedUrl}, got ${actualUrl})`,
      });
      return false;
    }

    console.log(`✅ URL matched: ${expectedUrl}`);
    return true;
  }

  async validatePages(pages, section) {
    const failures = [];

    // investorsPage logic (unchanged)
    if (['es', 'jp', 'pt'].includes(this.lang) && section === 'investorsPage') {
      const skipReason = `⏭️ Skipping investorsPage for ${this.lang} → already covered in EN`;
      console.log(skipReason);
      test.skip(true, skipReason);
      return;
    }

    // reusable helper for annualReportPage + standalonePage
    if (section === 'annualReportPage' && this.skipIfNotAllowed(section, ['en', 'fr'])) return;
    if (section === 'standalonePage' && this.skipIfNotAllowed(section, ['en', 'fr'])) return;

    // Loop through pages
    for (const [name, data] of Object.entries(pages || {})) {
      // Special handling for pressRelease
      if (
        ['es', 'jp', 'pt'].includes(this.lang) &&
        section === 'newsroomPage' &&
        name === 'pressRelease'
      ) {
        const skipReason = `⏭️ Skipping pressRelease for ${this.lang} → already covered in EN`;
        console.log(skipReason);
        await test.step(`Validate ${name}`, async () => {
          test.info().annotations.push({ type: 'skip', description: skipReason });
        });
        continue;
      }

      await test.step(`Validate ${name}`, async () => {
        if (!data || !data.url) {
          const skipReason = `⚠️ Missing URL for ${name}`;
          console.log(skipReason);
          test.info().annotations.push({ type: 'skip', description: skipReason });
          return;
        }

        console.log(`\n=== Navigating Page: ${name} ===`);
        const response = await this.goto(data.url);

        // 404
        if (response && response.status() === 404) {
          const failMsg = `❌ Page returned 404: ${data.url}`;
          console.error(failMsg);
          expect(response.status(), failMsg).not.toBe(404);
          failures.push(failMsg);
          return;
        }

        // Other errors >=400
        if (response && response.status() >= 400) {
          const failMsg = `❌ Page returned ${response.status()}: ${data.url}`;
          console.error(failMsg);
          expect(response.status(), failMsg).toBeLessThan(400);
          failures.push(failMsg);
        }

        const ok = await this.validateUrl(data.url);
        if (!ok) {
          const urlMsg = `❌ URL mismatch for ${name}: expected ${data.url}, actual ${this.page.url()}`;
          if (!failures.includes(urlMsg)) {
            failures.push(urlMsg);
            console.error(urlMsg);
            test.info().annotations.push({ type: 'issue', description: urlMsg });
          }
        }
      });
    }

    // Final failure summary
    if (failures.length > 0) {
      throw new Error(`One or more validations failed:\n- ${failures.join('\n- ')}`);
    }
  }
}

module.exports = { WebUtils };