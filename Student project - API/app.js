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
//get data API
app.get("/students", async (req, res) => {
  //error handing with student model
  try {
    console.log("go to students page.");
    let data = await Student.find();
    res.send(data);
  } catch {
    res.send({ message: "error find data." });
  }
});

//find data API
app.get("/students/:id", async (req, res) => {
  let { id } = req.params;
  //error handing with student model
  try {
    let data = await Student.findOne({ id });
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

//posting API
app.post("/students", (req, res) => {
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
      res.send({ message: "Successfully post a new student." });
    })
    .catch((err) => {
      res.status(404);
      console.log(err);
      res.send({ message: "error post data." });
    });
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

//delete request
app.delete("/students/delete/:id", (req, res) => {
  let { id } = req.params;
  Student.deleteOne({ id })
    .then((msg) => {
      console.log(msg);
      res.send("Deleted successfully.");
    })
    .catch((e) => {
      console.log(e);
      console.log("Delete error");
    });
});

app.get("/*", (req, res) => {
  res.status(404);
  res.send("Can not find the page.");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
