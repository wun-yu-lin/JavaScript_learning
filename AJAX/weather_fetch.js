const express = require("express");
const app = express();
const ejs = require("ejs");
const fetch = require("node-fetch");
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
  let myKey = config.OpenweatherKey();
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
  console.log(city);
  //node-fetch get weather API
  // await fetch(url)
  //   .then((d) => d.json())
  //   .then((djs) => {
  //     let temp = convertKtoC(djs.main.temp);
  //     res.render("wheater.ejs", { djs, temp });
  //   });
  let data = await fetch(url);
  let djs = await data.json();
  let temp = convertKtoC(djs.main.temp);
  res.render("wheater.ejs", { djs, temp });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
