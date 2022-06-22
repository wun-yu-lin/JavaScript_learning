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
  res.status(302);
  res.sendFile(path.join(__dirname, "moved.html"));
});

//if no found page, run this code, sentFile (error.html)
app.get("*", (req, res) => {
  res.status(404);
  console.log(res.statusCode);
  res.sendFile(path.join(__dirname, "error.html"));
});

app.listen(3010, () => {
  console.log("hello epxress,server 3010 is running. ");
});
