const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { setServers } = require("dns");

app.set("view engine", "ejs");
// middlewares
app.use(express.static("public"));
app.use(cookieParser("This is my secret."));
app.use(
  session({
    secret: "keyboard dog", //enviroment variable
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
  console.log(req.session);
  res.send(`successful send session`);
});

app.get("/verifyUser", (req, res) => {
  req.session.isVerified = true; //session中設定驗證與否, 執行此API會讓client獲得 connect.sid cookies
  res.send("You are verified.");
});

app.get("/secret", (req, res) => {
  //如果驗證過，Authorized to login web
  if (req.session.isVerified == true) {
    res.send("Authorized to login the home page.");
  } else {
    res.status(403).send("You are not authorized to see my web");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
