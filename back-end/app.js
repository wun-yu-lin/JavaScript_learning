// console.log("run node.js");

// //Module Wrapper
// let myName = "wunyu";
// let sayHi = () => {
//   console.log("hello, " + myName);
// };

// sayHi();

// //filename
// console.log(__filename);
// //dirname
// console.log(__dirname);

// //require all module in folder
// let all_M = require("./module"); //require index.js of module folder
// console.log(all_M); //return { sayHi: [Function: sayHello], sayGoodbye: [Function: sayGoodbye] }

///Module in node.js
const { appendFile } = require("fs");
let path = require("path"); //import path module library
let module1_path = path.join(__dirname, "module", "module1.js");
//console.log(module1_path);

let filename = path.extname(__filename);
//console.log(filename); //return .js

let baseName = path.basename(__filename);
//console.log(baseName); //return app.js

//URL module
const url = require("url");
const myUrl =
  "http://127.0.0.1:5500/back-end/creat%20first%20form.html?InputName=%E6%9E%97%E6%96%87%E6%98%B1&gender=male&city=Taichung&job=engineer&InputID=131105&myage=26&myTemp=36.1&Inputemail=WYLINZE%40tsmc.com&staff=staffYes&suggestion=";
const parsedURL = url.parse(myUrl, true);
//console.log(parsedURL);
//console.log(parsedURL.query);

//fs => file system
//write file
const fs = require("fs");
fs.writeFile("test.txt", "This is a test text", (e) => {
  if (e) throw e;
  //console.log("file has been written.");
});
//read file
fs.readFile("./test.txt", "utf8", (e, data) => {
  if (e) throw e;
  console.log(data);
});
