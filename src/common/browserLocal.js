const puppeteer = require('puppeteer');

module.exports.initBrowser = async () => {
  const browser = await puppeteer.launch({ headless: false });
  return browser
}
