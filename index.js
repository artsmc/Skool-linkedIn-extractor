const linkedInService = require("./linkedIn.service");
const fs = require('fs');
const path = require('path');
const outputArray = require('./output.json'); // Ensure this is an array of URLs

const data = async () => {
  try {
    const pages = await linkedInService.getLinksData(outputArray);
    const parsedData = pages.map(page => {
      if (page.html) {
        return linkedInService.parseData(page.url, page.html);
      } else {
        console.error(`Failed to parse data for ${page.url}: ${page.error}`);
        return { url: page.url, error: page.error };
      }
    });

    console.log(parsedData);
    const profilesPath = path.resolve(__dirname, 'profiles.json');
    fs.writeFileSync(profilesPath, JSON.stringify(parsedData, null, 2));
  } catch (error) {
    console.error('Error during data extraction:', error);
  }
}

data();
