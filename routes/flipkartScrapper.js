const express=require("express")
const flipkartScraper=require("../controller")
const router = express.Router();
router.get("/fetch/flipkart/mobile",flipkartScraper)
module.exports=router