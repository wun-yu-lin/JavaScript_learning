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

//async, await, try, catch
async function showMovie(name = "wunyu") {
  //try 功能等同於 .then
  try {
    const obj = await getData(name); //await功用: await 後面接的 function 會等到他return後，才結束此行程式
    //使用 await 會使 obj實際接到值後，才執行其他程式，可確保web api回傳的時間差
    const movie = await getMoive(obj.age);
    console.log(movie);
  } catch (e) {
    console.log(e);
  }
}
//start function
showMovie();
