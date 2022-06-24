const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

//midderware
app.use(express.static("public"));

app.get("/", (req, res) => {
  //get data from database => an array of object
  const obj = [
    { name: "wunyu", age: 25, weight: 69 },
    { name: "jili", age: 3, weight: 5.5 },
    { name: "gulu", age: 3, weight: 7 },
    { name: "emma", age: 18, weight: 40 },
  ];
  res.render("index.ejs", { obj }); //檔案必須在views資料夾
});

//query with get methods
app.get("/response", (req, res) => {
  let { fullname, age } = req.query;
  res.render("response.ejs", { fullname, age });
});

app.get("/:name", (req, res) => {
  let { name } = req.params;
  if (name == "wunyu") {
    res.render("wunyu.ejs", { name: name }); //render 傳送object至index.ejs使用
  } else {
    res.status(404);
    res.send("404 Not found page");
  }
});

app.listen(3070, () => {
  console.log("Server is running on port 3070");
});
