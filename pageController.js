const pageScraper = require('./pageScraper');
const fs = require('fs');

async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    let scrapedData = {};
    //* Call the scraper for different sets of books to be scrapedData
    scrapedData['Travel'] = await pageScraper.scraper(browser, 'Travel');
    scrapedData['HistoricalFiction'] = await pageScraper.scraper(
      browser,
      'Historical Fiction'
    );
    scrapedData['Mystery'] = await pageScraper.scraper(browser, 'Mystery');
    await browser.close();
    fs.writeFile('data.json', JSON.stringify(scrapedData), 'utf8', (err) => {
      if (err) {
        console.log(err);
      }
      console.log('data scraped and saved succesfully!');
    });
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err);
  }
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
