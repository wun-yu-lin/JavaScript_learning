function sayHello(name) {
  console.log(`${name} Hello`);
}

module.exports.sayHello = sayHello; //設定 export 屬性中 sayHello 屬性= sayHello function ,讓module 可以export給其他js file call

// console.log(module); //return node.js 建立起起 module wrapper
// console.log(module.exports);
