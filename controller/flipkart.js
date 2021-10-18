const express = require("express");
const cheerio = require("cheerio");
const request = require("request");
const flipkartScraper = async (req, res) => {
  request.get(
    "https://www.flipkart.com/mobiles/pr?sid=tyy,4io&p[]=facets.brand%255B%255D%3DPOCO",
    function (err, res, body) {
      if (!err && res.statusCode == 200) {
        const $ = cheerio.load(body);
        const data= $("div._1AtVbE > div._13oc-S").each((key, element) => {
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
const flipkartScraperFull=async(req,res)=>{  
        //  WORKING ON IT
  // request.get(
  //   "https://www.flipkart.com/mobiles/pr?sid=tyy,4io&p[]=facets.brand%255B%255D%3DPOCO",
  //   function (err, res, body) {
  //     if(!err && res.statusCode==200){
  //       const $=cheerio.load(body)
  //       const data=$("div._1AtVbE > div._13oc-S").each((key,element)=>{
  //         const link=$(element).find("a._1fQZEK").attr('href')
  //         // console.log(key+1)
  //         request.get(`https://www.flipkart.com${link}`,function(req,res){
  //          const $= cheerio.load(body)
  //          const ab=$("div._1YokD2._3Mn1Gg").find("h1.yhB1nd").text()
  //          console.log(ab)
  //         //  const name= $(element).find("h1.yhB1nd > span.B_NuCI").html()
  //         // const price= $(element).find("div._30jeq3").text()
  //         // console.log(name)
  //         // console.log(price)
  //         })
  //         // console.log(link)
  //       })
  //       // console.log(data)
        
  //     }
  //   }
  // )
   res.send("flipkartScraperFull")
}
module.exports = {flipkartScraper,flipkartScraperFull};
