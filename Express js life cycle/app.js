const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");
// middlewares
app.use(express.static("public"));
//construct middleware
app.use((req, res, next) => {
  console.log("I am the first middleware");
  //res.send("Middleware page."); //middleware也可以res.send到client，來中斷JS lifecycle
  next(); //必須要有next()才能執行其他middlewares
});
app.use((req, res, next) => {
  console.log("I am the second middleware");
  next(); //必須要有next()才能執行其他middlewares
});
const studentMiddleware = (req, res, next) => {
  console.log("This is student middleware");
  next();
};

const studentAnotherMiddleware = (req, res, next) => {
  console.log("This is Another student middleware");
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

app.get("/", (req, res) => {
  res.send("homepage");
});

//route當中放入middleware
app.get("/student", studentMiddleware, studentAnotherMiddleware, (req, res) => {
  res.send("This is student page.");
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
