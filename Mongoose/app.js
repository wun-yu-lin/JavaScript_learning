const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");

//connect to mongoDB
mongoose
  .connect("mongodb://localhost:27017/exampleDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to MongoDB.");
  })
  .catch((err) => {
    console.log("connection failed.");
    console.log(err);
  });

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3080, () => {
  console.log("server is running on port 3080.");
});
