import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
        const result = await axios.get("https://api.breakingbadquotes.xyz/v1/quotes");
        const bbQuote = result.data[0];
        console.log(bbQuote);
        res.render("index.ejs", {
        quote: bbQuote.quote,
        author: bbQuote.author
        });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});