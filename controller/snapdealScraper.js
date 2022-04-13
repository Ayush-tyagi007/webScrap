const cheerio = require("cheerio");
const request = require("request");
const snapdealScraper = async (req, res) => {
    request.get(
        "https://www.snapdeal.com/products/mens-tshirts-polos",
        function async(err, res, body) {
            if (!err && res.statusCode == 200) {
                const $ = cheerio.load(body)
                const a = $("div.col-xs-6 > div.product-tuple-description ")
                    .each((key, element) => {
                        const tshirtName = $(element).find("p.product-title ").text();
                        const price = $(element).find("span.product-price").text();
                        console.log(key);
                        console.log(tshirtName);
                        console.log(price);
                    })
            } else {
                console.log("error")
            }
        })
    res.send("tshirts fetched from snapdeal")
}
module.exports = snapdealScraper;