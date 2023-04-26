const puppeteer = require("puppeteer");

const url = "https://www.metal.com/Lithium-ion-Battery/202303240001";

const main = async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    // args: ["--window-size=1920,1080"],
  });

  const page = await browser.newPage();
  await page.goto(url);

  const price = await page.evaluate(() => {
    const spanElementCollection = document.getElementsByClassName(
      "strong___1JlBD priceDown___2TbRQ"
    );

    let spanElement = spanElementCollection[0];
    const value = spanElement.innerText;

    return value;
  });
  return price;
};

module.exports = main;
