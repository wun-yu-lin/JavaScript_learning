require("dotenv").config(); //mport and configure dotenv:
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const User = require("./modules/user");
const bcrypt = require("bcrypt");
const { find, findById } = require("./modules/user");
const saltRounds = 10;

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
//create requireLogin middleware
const requireLogin = (req, res, next) => {
  if (req.session.isVerified !== true) {
    res.redirect("login"); //connect.sid未驗證，重新導回login頁面
  }
  next();
};
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

// app.get("/", (req, res) => {
//   console.log(process.env.SECRET);
// });

// ///錯誤寫法!! 不能將 password 直接寫入database，會出事的!!!!!!
// //password 需要加密後再存去database
// app.post("/signup", (req, res) => {
//   // console.log(req.body);
//   let { username, password } = req.body;
//   let newUser = new User({
//     username,
//     password,
//   });
//   newUser
//     .save()
//     .then(() => {
//       res.send("Thank for your posting. Data has been save.");
//     })
//     .catch((e) => {
//       console.log(e);
//       res.send("error posting");
//     });
// });

// //password 需要加密後再存去database, 這邊使用 bcrypt module進行hash function + salting
app.post("/signup", async (req, res) => {
  // console.log(req.body);
  let { username, password } = req.body;
  try {
    let findUser = await User.findOne({ username });
    if (findUser !== null) {
      res.send("此信箱已經被註冊過了，請使用其他信箱");
    } else {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          next(err);
        }
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            next(err);
          }
          let newUser = new User({
            username,
            password: hash,
          });

          try {
            newUser
              .save()
              .then(() => {
                res.send("Thank for your posting. Data has been save.");
              })
              .catch((err) => {
                console.log(err);
                res.send("error signup");
              });
          } catch (err) {
            next(err);
          }
        });
      });
    }
  } catch (err) {
    next(err);
  }
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
    let foundUser = await User.findOne({ username });
    if (foundUser !== null) {
      bcrypt.compare(password, foundUser.password, (err, results) => {
        if (err) {
          next(err);
        }
        if (results === true) {
          req.session.isVerified = true; //set connect.sid cookies
          res.redirect("/personalPage");
        } else {
          res.send("error log in, username or password is error");
        }
      });
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
app.get("/deleteData", (req, res) => {
  res.render("Delete");
});
//HTML form method不支援DELETE request，因此使用POST
app.post("/deleteData", async (req, res) => {
  try {
    await User.deleteMany()
      .then((msg) => {
        console.log(msg);
        res.send("successful delete All data.");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    next(err);
  }
});
//登入後的網站透過  requireLogin middleware function 確認 connection.sid
app.get("/personalPage", requireLogin, (req, res) => {
  res.render("personalPage");
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
