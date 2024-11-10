const fs = require('fs');
const path = require('path');

function extractLinkedInUrls(htmlContent) {
    const urls = new Set();
    const anchorTags = htmlContent.match(/<a [^>]*href=["']([^"']*)["'][^>]*>/g);

    if (anchorTags) {
        anchorTags.forEach(tag => {
            const hrefMatch = tag.match(/href=["']([^"']*)["']/);
            if (hrefMatch && hrefMatch[1].includes('linkedin.com/in/')) {
                urls.add(hrefMatch[1]);
            }
        });
    }

    return Array.from(urls);
}

function saveToJSON(data, outputFilename) {
    const jsonContent = JSON.stringify(data, null, 2);
    fs.writeFileSync(outputFilename, jsonContent);
    console.log(`Data has been saved to ${outputFilename}`);
}

// Load the HTML content from comments.html
const htmlFilePath = path.resolve(__dirname, './comments.html');
const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

const linkedInUrls = extractLinkedInUrls(htmlContent);
console.log('Extracted LinkedIn URLs:', linkedInUrls);

const jsonOutputPath = path.resolve('output.json');
saveToJSON(linkedInUrls, jsonOutputPath);
