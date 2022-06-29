const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const fs = require("fs");

//connect to mongoDB
mongoose
  .connect("mongodb://localhost:27017/exampleDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  //if connected => .then
  .then(() => {
    console.log("connected to MongoDB.");
  })
  //if .catch => .catch
  .catch((err) => {
    console.log("connection failed.");
    console.log(err);
  });

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You has not into name property"], //設定不符合規定時，console.log出現的值
    maxlength: [15, "Name is too long"],
  },
  age: {
    type: Number,
    max: 100,
    min: 0,
  },
  major: {
    type: String,
    enum: [
      "Chem",
      "Electrical Engineering",
      "Computer science",
      "undecided",
      "MS",
    ],
    default: "undecided",
  },
  scholarship: {
    merit: {
      type: Number,
    },
    other: {
      type: Number,
    },
  },
});

//create an instance methods
studentSchema.methods.totalScholarship = function () {
  return this.scholarship.merit + this.scholarship.other;
};
studentSchema.methods.addAge = function () {
  this.age++;
  this.save(); //儲存至資料庫
};

//define middleware
//每次啟動save function 前 就執行
studentSchema.pre("save", async function () {
  fs.writeFile("record.txt", "one data is trying to be saved", (e) => {
    if (e) throw e;
  });
});
//每次啟動save function 後 就執行
studentSchema.post("save", async function () {
  fs.writeFile("record.txt", "one data has been saved", (e) => {
    if (e) throw e;
  });
});

//create a model for students, student = model
const Student = mongoose.model("Student", studentSchema); //string 第一個字大寫，其他小寫。建立model後會自動變成 student

const newStudent = new Student({ name: "wunyu", age: 20, major: "MS" });
newStudent
  .save()
  .then(() => {
    console.log("saved");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3080, () => {
  console.log("server is running on port 3080.");
});
