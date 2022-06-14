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
