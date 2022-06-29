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

//create a model for students, student = model
const Student = mongoose.model("Student", studentSchema); //string 第一個字大寫，其他小寫。建立model後會自動變成 student
//單筆資料，findOne回傳{}，可data.totalScholarship()
Student.findOne({ name: "emma" })
  .then((data) => {
    let results = data.totalScholarship();
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
//多筆資料find回傳[]，可forEach
Student.find({}).then((data) => {
  data.forEach((onestudent) => {
    onestudent.addAge();
    console.log(onestudent);
  });
});

Student.find({}).then((data) => {
  data.forEach((onestudent) => {
    console.log(
      onestudent.name +
        " has total scholarship " +
        onestudent.totalScholarship()
    );
  });
});

const newStudent = new Student({
  name: "ABCGDHEYEHDYUAAAAAAAAAAAAAAAAAAAAAHE",
  age: 18,
  major: "MS",
  scholarship: { merit: "1400", other: "2000" },
}); //error data type and without input name (required)

//create an object
const wunyu = new Student({
  name: "wunyu",
  age: 25,
  major: "MS",
  scholarship: {
    merit: 2500,
    other: 1300,
  },
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3080, () => {
  console.log("server is running on port 3080.");
});
