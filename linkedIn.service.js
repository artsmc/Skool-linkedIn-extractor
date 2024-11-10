const BrowsingService = require("./browser.service");
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

class LinkedInService extends BrowsingService {
  constructor() {
    super();
  }

  async getLinkData(url) {
    const { browser, page, headers } = await this.loginToLinkedIn();
    try {
      const result = await this.fetchLinkedInPageData(url, page);
      return result.html;
    } finally {
      await browser.close();
    }
  }

  async getLinksData(urls) {
    const { browser, page, headers } = await this.loginToLinkedIn();
    const results = [];
    try {
      for (const url of urls) {
        const result = await this.fetchLinkedInPageData(url, page);
        results.push(result);
      }
      return results;
    } finally {
      await browser.close();
    }
  }
  parseData(url, html) {
    const $ = cheerio.load(html);

    function parseName() {
      return $('h1.text-heading-xlarge').text().trim();
    }
    function parseHeadline() {
      return $('div.text-body-medium.break-words').text().trim();
    }
    function parseLocation() {
      const locations = $('span.text-body-small.inline.t-black--light.break-words').text().trim().split(',');
      return locations.length <= 0 ? '' : locations.length <= 1 ? { country: locations[0], state: '', city: '' } : locations.length <= 2 ? { country: locations[0], state: locations[1], city: '' } : { country: locations[0], state: locations[1], city: locations[2] };
    }
    function followerCount() {
      return $('li.text-body-small.t-black--light.inline-block span').text().trim();
    }
    function profilePicUrl() {
      return $('button.profile-photo-edit__edit-btn img').first().attr('src') || '';
    }
    function bannerImageUrl() {
      return $('div.profile-background-image__image-container img').first().attr('src') || '';
    }
    // Add more parsing functions as necessary

    return {
      name: parseName(),
      url: url,
      headline: parseHeadline(),
      country: parseLocation().country,
      city: parseLocation().city,
      state: parseLocation().state,
      followerCount: followerCount(),
      profilePicUrl: $('img').attr('src'),
      bannerImageUrl: $('img').attr('src')
    };
  }
  fileNameSafe(url) {
    return url.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  };
}

const linkedInService = new LinkedInService();
module.exports = linkedInService;
