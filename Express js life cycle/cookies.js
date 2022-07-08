const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
// middlewares
app.use(express.static("public"));
app.use(cookieParser("This is my secret."));

mongoose
  .connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongodb.");
  })
  .catch((e) => {
    console.log(e);
  });

//cookies use
// app.get("/", (req, res) => {
//   console.log(req.cookies);
//   let { name, age } = req.cookies; //get cookies data for req
//   res.cookie("name", "wunyu"); //setting cookies information
//   res.cookie("age", "25"); //setting cookies information
//   res.send(`welcome the home page. Hi ${name},and your age is ${age}`);
// });

//Signing a cookie
app.get("/getSignedCookies", (req, res) => {
  res.cookie("address", "Taichung", { signed: true });
  res.send("Cookies has been send.");
});

//get signed cookies
app.get("/", (req, res) => {
  console.log(req.signedCookies);
  let { address } = req.signedCookies; //get signed cookies data
  res.send(`successful send cookies, address is ${address}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
