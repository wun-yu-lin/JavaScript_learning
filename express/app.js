const express = require("express");
const app = express();
const path = require("path");

//servering a static file
//middleware
app.use(express.static("public")); //server都會從public資料夾取檔案

//handling different request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/wunyu", (req, res) => {
  res.send("You are on the wunyu's page.");
});

app.listen(3010, () => {
  console.log("hello epxress,server 3010 is running. ");
});
