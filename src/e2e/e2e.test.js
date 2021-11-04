import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  describe('Card number test', () => {
    test('Card number valid', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[class=form]');
      const input = await form.$('[class=form-control]');
      await input.type('371449635398431');
      const submit = await form.$('[class=btn]');
      submit.click();
      await page.waitForSelector('.valid');
    });

    test('Card number invalid', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[class=form]');
      const input = await form.$('[class=form-control]');
      await input.type('39025046593');
      const submit = await form.$('[class=btn]');
      submit.click();
      await page.waitForSelector('.invalid');
    });
  });
});
