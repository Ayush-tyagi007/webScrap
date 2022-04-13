const express = require("express");
const cheerio = require("cheerio");
const request = require("request");
const flipkartScraper = async (req, res) => {
  request.get(
    "https://www.flipkart.com/mobiles/pr?sid=tyy,4io&p[]=facets.brand%255B%255D%3DPOCO",
    function (err, res, body) {
      if (!err && res.statusCode == 200) {
        const $ = cheerio.load(body);
        const data = $("div._1AtVbE > div._13oc-S").each((key, element) => {
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
  ); res.send("data fetched")
};
const flipkartScraperFull = async (req, res) => {
  request.get(
    "https://www.flipkart.com/mobiles/pr?sid=tyy,4io&p[]=facets.brand%255B%255D%3DPOCO",
    function (err, res, body1) {
      if (!err && res.statusCode == 200) {
        const $ = cheerio.load(body1)
        $("div._1AtVbE > div._13oc-S").each((key, element) => {
          const link = $(element).find("a._1fQZEK").attr('href')
          request.get(`https://www.flipkart.com${link}`, function (request, response, body2) {
            const $ = cheerio.load(body2)
            const subData1 = $("div._1YokD2 > div._3Mn1Gg > div._1AtVbE > div.aMaAEs")
            const phoneName = $(subData1)
              .find("span.B_NuCI").text()
            const phonePrice = $(subData1).find("div._30jeq3").text()
            subData2 = $("div._1YokD2 > div._3Mn1Gg > div._1AtVbE")
            const offers = $(subData2).find("div.XUp0WS").text()
            const highlights = $("div._1YokD2 > div._3Mn1Gg.col-8-12 > div._1YokD2 ")
              .find("div._2cM9lP").text()
            console.log(`Phone name is ${phoneName}`)
            console.log(`Price ${phonePrice}`)
            console.log(highlights)
            console.log(`${offers}
             `)
          })
        })
      } else {
        console.log("error exists")
      }
    }
  )
  res.send("flipkartScraperFull")
}
module.exports = { flipkartScraper, flipkartScraperFull };
