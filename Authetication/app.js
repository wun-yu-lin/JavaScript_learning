require("dotenv").config(); //mport and configure dotenv:
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const User = require("./modules/user");

app.set("view engine", "ejs");
app.use(cookieParser(process.env.SECRET));
app.use(bodyParser.urlencoded({ extended: true }));
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

app.get("/", (req, res) => {
  console.log(process.env.SECRET);
});

///錯誤寫法!! 不能將 password 直接寫入database，會出事的!!!!!!
//password 需要加密後再存去database
app.post("/signup", (req, res) => {
  // console.log(req.body);
  let { username, password } = req.body;
  let newUser = new User({
    username,
    password,
  });
  newUser
    .save()
    .then(() => {
      res.send("Thank for your posting. Data has been save.");
    })
    .catch((e) => {
      console.log(e);
      res.send("error posting");
    });
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", async (req, res, next) => {
  let { username, password } = req.body;
  try {
    let foundUser = await User.findOne({ username, password });
    if (foundUser !== null) {
      res.render("personalPage");
    } else {
      res.send("error log in, username or password is error");
    }
  } catch (err) {
    next(err);
  }
});

app.get("/signupData", async (req, res) => {
  try {
    let data = await User.find({});
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("No found data");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
