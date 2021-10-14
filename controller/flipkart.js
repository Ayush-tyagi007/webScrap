const express = require("express");
const cheerio = require("cheerio");
const request = require("request");
const flipkartScraper = async (req, res) => {
  request.get(
    "https://www.flipkart.com/mobiles/pr?sid=tyy,4io&p[]=facets.brand%255B%255D%3DPOCO",
    function (err, res, body) {
      if (!err && res.statusCode == 200) {
        const $ = cheerio.load(body);
        const a = $("div._1AtVbE > div._13oc-S").each((key, element) => {
          console.log(key + 1);
          const PhoneName = $(element).find("div._4rR01T").html();
          console.log(PhoneName);
          const Rating = $(element).find("div._3LWZlK").text();
          console.log(`${Rating}*Rating`);
          const TotalRatingsAndReviews = $(element).find("div.gUuXy-").text();
          console.log(TotalRatingsAndReviews);
          const PhonePrice = $(element).find("div._30jeq3").text();
          console.log(PhonePrice);
        });
      } else {
        console.log("error");
      }
    }
  );
};
module.exports = flipkartScraper;
