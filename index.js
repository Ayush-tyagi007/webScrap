const express=require("express")
const port = 3000 || process.env.PORT;
const {flipkartScraper,snapdealScraper}=require("./routes")
const app = express();
app.use("/scraper",flipkartScraper,snapdealScraper)
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
