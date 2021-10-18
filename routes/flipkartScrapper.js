const express=require("express")
const {flipkartScraper}=require("../controller")
const router = express.Router();
router.get("/fetch/flipkart/mobile",flipkartScraper.flipkartScraper)
router.get("/fetch/flipkart/mobile/full",flipkartScraper.flipkartScraperFull)
module.exports=router