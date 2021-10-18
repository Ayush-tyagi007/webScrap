const express=require("express")
const snapdealScraper=require("../controller")
const router = express.Router();
router.get("/fetch/snapdeal/t-shirt",snapdealScraper.snapdealScraper)
module.exports=router