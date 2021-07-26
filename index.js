const browserObject = require('./browser');
const scrapeController = require('./pageController');

let browserInstance = browserObject.startBrowser();

scrapeController(browserInstance);
