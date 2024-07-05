import { chromium } from 'playwright';

describe('Playwright Test', () => {
  it('should open a new page', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.example.com');
    expect(await page.title()).toBe('Example Domain');
    await browser.close();
  });
});
