// eslint-disable-next-line no-unused-vars
const chromium = require('chrome-aws-lambda');

module.exports.fetchData = async (browser) => {
  const url = 'https://serverlesspolska.pl'

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 920 })
    await page.goto(url)
    let title = await page.title();
    console.log('Page Title:', title)

    const [blogLink] = await page.$x('//a[text()[contains(., "Blog")]]')
    const blogUrl = await page.evaluate((e) => e.href, blogLink)
    console.log(blogUrl)
    await page.goto(blogUrl)
    title = await page.title();
    console.log('Page Title:', title)

    const [postLink] = await page.$x('//a[contains(@class, "archive-article-title")]')
    const postUrl = await page.evaluate((e) => e.href, postLink)
    await page.goto(postUrl)
    title = await page.title();
    console.log('Page Title:', title)

    return title
  } catch (error) {
    console.log(error);

    return false
  } finally {
    if (browser !== null) {
      // await browser.close();
    }
  }
}
