console.log("run node.js");

//Module Wrapper
let myName = "wunyu";
let sayHi = () => {
  console.log("hello, " + myName);
};

sayHi();

//filename
console.log(__filename);
//dirname
console.log(__dirname);

//require all module in folder
let all_M = require("./module"); //require index.js of module folder
console.log(all_M); //return { sayHi: [Function: sayHello], sayGoodbye: [Function: sayGoodbye] }
