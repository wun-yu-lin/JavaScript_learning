//sync code  同步 code
//js is a single-thread programming language

//async code 異步 code
console.log("start");

setTimeout(() => {
  console.log("Here is the code.");
}, 2000); //2s後執行
console.log("End");

//Callback Hell 避免API return資料的時間差
function getData(name, callback) {
  setTimeout(() => {
    callback({ name: name, age: Math.floor(Math.random() * 20), Major: "MS" });
  }, 2000);
}

function getMoive(age, callback) {
  if (age < 12) {
    setTimeout(() => {
      callback("卡通");
    }, 2000);
  } else {
    setTimeout(() => {
      callback("teen movies");
    }, 2000);
  }
}

console.log("start");
//Callback Hell 避免API return資料的時間差
getData("wunyu", (obj) => {
  getMoive(obj.age, (movies) => {
    console.log(movies);
  });
});

console.log("End");
