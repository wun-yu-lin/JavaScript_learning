const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

//miiddleware 一定被執行 , res.body前必須執行
app.use(bodyParser.urlencoded({ extended: true }));

//routing in express

//handling different request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index_POST.html"));
});

app.get("/wunyu", (req, res) => {
  res.send("You are on the wunyu's page.");
});

// //routing for all
// app.get("*", (req, res) => {
//   //上述不符合的routing，這個引導至這個api
//   res.send("connot find what you want");
// });

//routing for pattern
// app.get("/tidal/:tidalMusic/:app", (req, res) => {
//   //加上 : 時，網站的req就會將變數都入req.params中object的屬性
//   let { tidalMusic, app } = req.params;
//   console.log(tidalMusic, app);
//   res.send("You are looking for " + req.params.tidalMusic);
// });

//routing for query
app.post("/formHanding", (req, res) => {
  console.log(req.body); //inform from query (object)
  let { fullname, age } = req.body;

  res.send(
    `Thank for posting. You name is ${fullname}. And Your age is ${age}`
  );
});

app.listen(3000, () => {
  console.log("hello epxress,server 3000 is running. ");
});
