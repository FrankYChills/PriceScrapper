const puppeteer = require("puppeteer");

const url = "https://www.metal.com/Lithium-ion-Battery/202303240001";

const main = async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    // args: ["--window-size=1920,1080"],
  });
  var price;
  try {
    const page = await browser.newPage();
    // throw new Error("hui");
    await page.goto(url);

    price = await page.evaluate(() => {
      const spanElementCollection = document.getElementsByClassName(
        "strong___1JlBD priceDown___2TbRQ"
      );

      let spanElement = spanElementCollection[0];
      const value = spanElement.innerText;

      return value;
    });
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
    return price;
  }
};

module.exports = main;
