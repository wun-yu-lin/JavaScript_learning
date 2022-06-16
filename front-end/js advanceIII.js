//How to copy an array?
let friends = ["jili", "gulu", "emma"];

let copy = [...friends]; //spread operator
console.log(copy);

//Higher Order Function
//ex: forEach with arrow function
friends.forEach((n) => {
  console.log(n);
});

// //Ternary Operator
// let age = 20;
// let price = age < 18 ? 50 : 100; //age < 18 => price = 50 ; age >= 18 => price = 100
// console.log(price);
// //commerical methods
// // let price;
// // let age = 20;
// // if (age < 18) {
// //   price = 50;
// // } else {
// //   price = 100;
// // }
// // console.log(price);

//Ternary Operator advance
let age = 20;
let price = age < 18 ? 50 : age > 60 ? 10 : 100; //age < 18 => price = 50 ; age>60 => price=10 ;age >= 18 => price = 100
console.log(price);
// // commerical methods
// let price;
// let age = 20;
// if (age < 18) {
//   price = 50;
// } else if (age>60){
//   price = 10;
// }else{
//     price 100
// }
// console.log(price);

//# Default parameter
function sayTwoStr(a = "a", b = "b") {
  //default parameter
  console.log(a);
  console.log(b);
}
sayTwoStr();

//back stick
let myName = "wunyu lin";
console.log(myName + " says hi."); //commrical methods
console.log(`${myName} says hi`); //back stick

//floating point
console.log(0.2 + 0.1 == 0.3); //return false, 因為floating point為十進制，會有浮點誤差
console.log((0.2 + 0.1).toFixed(2) == (0.3).toFixed(2)); // return true, 透過toFixed(2)，將floating poin換成小數點第二位，避免誤差

//IIFE
//Immediately Invoked Function Expression. 能夠立刻執行function
(function sayHi() {
  let name = "wunyu Lin";
  console.log("Hi " + name);
})();

//constructing an object
let wunyu = {
  firstName: "wunyu",
  age: 25,
  gender: "male",
  height: 167,
  weight: 68,
  friends: {
    fullname: "emma",
  },
};

//Destructing an Object with commerical methods
// let firstName = wunyu.firstName;
// let gender = wunyu.gender;
// let firendName = wunyu.friends.fullname;
// console.log(firendName + " s gender is " + gender + ".");
// console.log("friends' s fullname is " + firendName);

//Destructing an Object with syntex sugar
// let { firstName, gender } = wunyu;
// let { fullname } = wunyu.friends;
// console.log(firstName + " s gender is " + gender + ".");
// console.log("friends' s fullname is " + fullname);

let input = prompt("Enter a month.");

if (input == "January") {
  alert("一月");
} else if (input == "February") {
  alert("二月");
} else if (input == "March") {
  alert("三月");
} else if (input == "April") {
  alert("四月");
} else if (input == "May") {
  alert("五月");
} else if (input == "June") {
  alert("六月");
} else if (input == "July") {
  alert("七月");
} else if (input == "Augyst") {
  alert("八月");
} else if (input == "September") {
  alert("九月");
} else if (input == "October") {
  alert("十月");
} else if (input == "November") {
  alert("十一月");
} else if (input == "December") {
  alert("十二月");
} else {
  alert("無法判調");
}

//switch expression
switch (input) {
  case "January":
    alert("一月");
    break;
  case "February":
    alert("二月");
    break;
  case "March":
    alert("三月");
    break;
  case "April":
    alert("四月");
    break;
  case "May":
    alert("五月");
    break;
  case "June":
    alert("六月");
    break;
  case "July":
    alert("七月");
    break;
  case "Augyst":
    alert("八月");
    break;
  case "September":
    alert("九月");
    break;
  case "October":
    alert("十月");
    break;
  case "November":
    alert("十一月");
    break;
  case "December":
    alert("十二月");
    break;
  default:
    alert("無法判定");
}
