const browserLocal = require('../common/browserLocal')
const browserScraper = require('./browserScraper')

const main = async () => {
  const browser = await browserLocal.initBrowser()
  await browserScraper.fetchData(browser)
  await browser.close()
}

main()
