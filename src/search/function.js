const { fetchData } = require('./browserScraper')
const { initBrowser } = require('../common/browserLambda')

const cachedBrowser = initBrowser()

module.exports.handler = async () => {
  const browser = await cachedBrowser
  const results = await businessLogic(browser)
  return results
}

const businessLogic = async (browser) => {
  const result = await fetchData(browser)
  // other things that Lambda should do
  return result
}
