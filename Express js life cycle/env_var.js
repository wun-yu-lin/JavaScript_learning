require("dotenv").config(); //mport and configure dotenv:
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(cookieParser(process.env.SECRET));
app.use(
  session({
    secret: process.env.SECRET, //enviroment variable,讀取.env檔的環境變數，認證session使用
    resave: false,
    saveUninitialized: false,
  })
);

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

//use session
app.get("/", (req, res) => {
  // console.log(process); //node.js process is a global object
  //   console.log(process.platform);
  //   console.log(process.version);
  console.log(process.env.SECRET);

  res.send(`home page.`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
