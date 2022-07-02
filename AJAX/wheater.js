const express = require("express");
const app = express();
const ejs = require("ejs");
const https = require("https");
const config = require("./config");
//k to cel
function convertKtoC(k) {
  return (k - 273.15).toFixed(2);
}

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/:city", async (req, res) => {
  let { city } = req.params;
  console.log(city);

  //connect to Wheater API
  let myKey = config.OpenweatherKey();
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
  //get request by HTTP model of node.js
  https
    .get(url, (response) => {
      console.log("statusCode:", response.statusCode);
      console.log("headers:", response.headers);
      response.on("data", (d) => {
        let djs = JSON.parse(d);
        let temp = convertKtoC(djs.main.temp);
        console.log(djs);
        res.render("wheater.ejs", { djs, temp });
      });
    })
    .on("error", (e) => {
      console.log(e);
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
