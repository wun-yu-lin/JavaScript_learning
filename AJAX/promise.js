// let example = new Promise((resolve, reject) => {
//   resolve({ name: "wunyu", age: 30 }); //.then
//   reject(new Error("not allowed")); //.catch
// });

// example
//   .then((d) => {
//     console.log(d);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//async code 異步 code + promise
function getData(name) {
  if (name == "wunyu") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "wunyu", age: 19 });
      }, 2000);
    });
  } else {
    setTimeout(() => {
      return new Promise((resolve, reject) => {
        reject(new Error("not allowed"));
      }, 2000);
    });
  }
}

function getMoive(age) {
  if (age < 12 && age > 0) {
    return new Promise((resolve, reject) => {
      resolve({ movie: "卡通" });
    });
  } else if (age > 12 && age < 20) {
    return new Promise((resolve, reject) => {
      resolve({ movie: "teen movie" });
    });
  } else {
    return new Promise((resolve, reject) => {
      reject(new Error("Please input age in 0~20"));
    });
  }
}

getData("wunyu").then((data) => {
  getMoive(data.age)
    .then((msg) => {
      console.log(msg.text);
    })
    .catch((e) => {
      console.log(e);
    }); //catch 是會接getData or getMovie 的 reject，看哪個先發生
});
