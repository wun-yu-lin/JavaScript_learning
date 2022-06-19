const express = require("express");
const app = express();
//routing in express

//handling different request
app.get("/", (req, res) => {
  res.send("You are on the homepage.");
});

app.get("/wunyu", (req, res) => {
  res.send("You are on the wunyu's page.");
});

app.listen(3000, () => {
  console.log("hello epxress,server 3000 is running. ");
});
