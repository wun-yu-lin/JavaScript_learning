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

//define a schema
//type1
// const studentSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   major: String,
//   scholarship: {
//     merit: Number,
//     other: Number,
//   },
// });

//type2
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
    enum: ["Chem", "Electrical Engineering", "Computer science", "undecided"],
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

//create a model for students, student = model
const Student = mongoose.model("Student", studentSchema); //string 第一個字大寫，其他小寫。建立model後會自動變成 student

const newStudent = new Student({
  name: "ABCGDHEYEHDYUAAAAAAAAAAAAAAAAAAAAAHE",
  age: 18,
  major: "MS",
  scholarship: { merit: "1400", other: "2000" },
}); //error data type and without input name (required)
//save newStudent to DB
// newStudent
//   .save()
//   .then(() => {
//     console.log("wunyu has been saved into DB");
//   })
//   .catch((e) => {
//     console.log("error has happpend.");
//     console.log(e);
//   });

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

Student.findOneAndUpdate(
  { name: "emma" },
  { age: 200 },
  { new: true, runValidators: true }
)
  .then((msg) => {
    console.log(msg);
  })
  .catch((e) => {
    console.log("updata failed", e);
  });

//save wunyu to DB
// wunyu
//   .save()
//   .then(() => {
//     console.log("wunyu has been saved into DB");
//   })
//   .catch((e) => {
//     console.log("error has happpend.");
//     console.log(e);
//   });

// find object in students(Database)
//find return an array, whatever
// Student.find({})
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("find data error has happpend.");
//     console.log(e);
//   });

// Student.findOne({ name: "wunyu" }).then((data) => {
//   console.log(data);
// });

//update one data in DB
// Student.updateOne({ name: "wunyu" }, { name: "emma" })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//update data in DB
// Student.updateMany({ name: "wunyu" }, { name: "emma" }).then((msg) => {
//   console.log(msg);
// });

//findOneAndUpdate()
// Student.findOneAndUpdate(
//   { name: "emma" },
//   { name: "wunyu" },
//   { new: true }
// ).then((msg) => {
//   console.log(msg);
// });

//delete one
Student.deleteOne({ name: "wunyu" }).then((msg) => {
  console.log(msg);
});
Student.findOneAndDelete({ name: "emma" }).then((msg) => {
  console.log(msg);
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3080, () => {
  console.log("server is running on port 3080.");
});
