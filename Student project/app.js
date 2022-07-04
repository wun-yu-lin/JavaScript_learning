const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Student = require("./models/student");
const methodOverrides = require("method-override");

app.use(express.static("public"));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverrides("_method"));
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

app.get("/students", async (req, res) => {
  //error handing with student model
  try {
    console.log("go to students page.");
    let data = await Student.find();
    res.render("student.ejs", { data });
  } catch {
    res.send("error find data");
  }
});

app.get("/students/insert", (req, res) => {
  res.render("studentInsert.ejs");
});

app.post("/students/insert", (req, res) => {
  console.log(req.body);
  let { id, name, age, merit, other } = req.body;
  let newStudent = new Student({
    id,
    name,
    age,
    scholarship: { merit, other },
  });
  newStudent
    .save()
    .then(() => {
      console.log("data saved");
      res.render("accept.ejs");
    })
    .catch((err) => {
      console.log(err);
      res.render("reject.ejs");
    });
});

app.get("/students/:id", async (req, res) => {
  let { id } = req.params;
  //error handing with student model
  try {
    let data = await Student.findOne({ id });

    //error handing with findOne data
    if (data !== null) {
      res.render("studentPage.ejs", { data });
    } else {
      res.send("error find data");
    }
  } catch (e) {
    console.log(e);
  }
});

//update data
app.get("/students/edit/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let data = await Student.findOne({ id });
    if (data !== null) {
      res.render("edit.ejs", { data });
    } else {
      res.send(`Can not find ${id}`);
    }
  } catch (e) {
    console.log(e);
    res.send("error");
  }
});

app.put("/students/edit/:id", async (req, res) => {
  let { id, name, age, merit, other } = req.body;
  try {
    let d = await Student.findOneAndUpdate(
      { id },
      { id, name, age, scholarship: { merit, other } },
      {
        new: true,
        runValidators: true,
      }
    );
    res.redirect(`/students/${id}`);
  } catch (e) {
    console.log(e);
    res.render("reject.ejs");
  }
});

app.get("/*", (req, res) => {
  res.status(404);
  res.send("Can not find the page.");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
