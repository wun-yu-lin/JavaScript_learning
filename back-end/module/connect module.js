let module1 = require("./module1"); //module wrapper from other module
console.log(module1);
module1.sayHello("name"); //function from other module

let module2 = require("./module2");
module2.sayGoodbye("wunyu");
