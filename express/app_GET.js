const express = require("express");
const app = express();
const path = require("path");

//routing in express

//handling different request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index_GET.html"));
});

app.get("/wunyu", (req, res) => {
  res.send("You are on the wunyu's page.");
});

//routing for query
app.get("/formHanding", (req, res) => {
  console.log(req.query);
  let { fullname, age } = req.query;
  res.send(
    `Thank for posting. You name is ${fullname}. And Your age is ${age}`
  );
});

app.listen(3010, () => {
  console.log("hello epxress,server 3010 is running. ");
});
