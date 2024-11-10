require('dotenv').config();
const puppeteer = require('puppeteer');
const fs = require('fs');
// Load environment variables from .env file
const path = require('path');
const envPath = path.resolve(__dirname, '../.env');
const env = require('dotenv').config({ path: envPath });
class BrowsingService {
  async loginToLinkedIn() {
    const browser = await puppeteer.launch({ headless: true }); // Set to false to show the browser
    const page = await browser.newPage();

    try {
      await page.goto('https://www.linkedin.com/login', { waitUntil: 'networkidle2' });

      // Fill in login form
      await page.type('#username', process.env.LINKEDIN_USER, { delay: 100 });
      await page.type('#password', process.env.LINKEDIN_PASSWORD, { delay: 100 });

      // Submit the form
      await page.click('button[type="submit"]');

      // Check if redirection to LinkedIn feed happens without manual intervention
      try {
        console.log('Checking for redirection to LinkedIn feed...');
        await page.waitForNavigation({
          waitUntil: 'domcontentloaded', // Changed to domcontentloaded for more flexibility
          timeout: 30000 // Wait up to 30 seconds
        });
      } catch (e) {
        console.log('No automatic redirection detected. Human verification might be required.');
      }

      if (page.url().includes('/feed')) {
        console.log('Successfully logged into LinkedIn and redirected to the feed page');
      } else {
        console.log('Manual intervention may be needed to complete the login process');
      }

      // Extract cookies and headers
      const cookies = await page.cookies();
      const headers = { 'User-Agent': await page.evaluate(() => navigator.userAgent) };
      cookies.forEach(cookie => {
        headers['Cookie'] = headers['Cookie'] ? `${headers['Cookie']}; ${cookie.name}=${cookie.value}` : `${cookie.name}=${cookie.value}`;
      });

      return { browser, page, headers }; // Return the browser and page instance to keep the session open
    } catch (error) {
      console.error('Error logging into LinkedIn:', error.message);
      await browser.close();
      throw error;
    }
  }

  async fetchLinkedInPageData(url, page) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      console.log(`Navigated to ${url}`);

      // Wait for a specific element that confirms the page has loaded
      await page.waitForSelector('body', { timeout: 15000 });

      // Extract HTML content
      const pageContent = await page.content();
      return { url, html: pageContent };
    } catch (error) {
      console.error(`Failed to fetch data for ${url}:`, error.message);
      return { url, error: error.message };
    }
  }

  async takeScreenshot(url, page, outputPath) {
    try {
      await page.goto(url, { waitUntil: 'networkidle2' });
      console.log(`Navigated to ${url} for screenshot`);
      await page.screenshot({ path: outputPath });
      console.log(`Screenshot saved at ${outputPath}`);
    } catch (error) {
      console.error(`Failed to take screenshot for ${url}:`, error.message);
    }
  }
}

module.exports = BrowsingService;