const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Student = require("./models/student");

app.use(express.static("public"));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//connect to mongooseDB
mongoose
  .connect("mongodb://127.0.0.1:27017/exampleDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to mongoDB");
  })
  .catch((e) => {
    console.log(e);
    console.log("Error connected to mongoDB");
  });
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/students/insert", (req, res) => {
  res.render("studentInsert.ejs");
});

app.post("/students/insert", (req, res) => {
  console.log(req.body);
  res.send("Thanks for your submit.");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
