const express = require("express");
const router = express.Router();

const path = require("path");

const main = require("../scrapeData");

// default page
router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

// get the request
router.get("/price", async (req, res) => {
  var fetchedData = await main();
  if (typeof fetchedData == "undefined") {
    return res.status(501).json({ message: "Error while scraping the data" });
  }
  return res.status(200).json({ price: Number(fetchedData) });
});

//Request method handling
router.post("/price", (req, res) => {
  return res.status(400).json({ message: "Service only supports GET request" });
});
router.put("/price", (req, res) => {
  return res.status(400).json({ message: "Service only supports GET request" });
});
router.delete("/price", (req, res) => {
  return res.status(400).json({ message: "Service only supports GET request" });
});

module.exports = router;
