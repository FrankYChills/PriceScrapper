## Price Scrapper

An API for scraping the latest price of [metal]("https://www.metal.com/Lithium-ion-Battery/202303240001")

#### Technologies used - Nodejs, Express.js and Docker

### API Endpoints

Base URL - https://pricescrap.onrender.com

#### 1. Get Latest Price -

    Method - GET
    Endpoint - /price

### How it works

    I have used a library called puppeteer for scraping the web.Puppeteer is a Node.js library which provides a high-level API to control Chrome/Chromium over the DevTools Protocol.
    I have made an API  via expressjs and exposed an endpoint "/price" so that whenever anyone hits this endpoint, the script fetches the latest data and send that as an json response.
    API is tested via POSTMAN

### Why Docker

    Docker is used to create a self-contained environment that can be easily deployed and managed.
    Without docker when the service is deployed to render it errors out as render environment do not have chromium installed which is required by puppeteer.So we have to create a isolated and consistent environment so that we can easily manage dependencies required by Puppeteer, such as specific versions of Node.js, Chromium, and other libraries.
    A Docker image used includes Chromium along with the required dependencies and a pre-installed Puppeteer version.

### This Service is hosted on Render.com
