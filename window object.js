// console.log(window);
// let emma = {
//   // property setting
//   first_name: "circle",
//   last_name: "emma",
// };
// let wunyulin = {
//   // property setting
//   first_name: "wunyu",
//   last_name: "lin",
//   age: 25,
//   is_married: false,
//   spouse: emma,

//   //   methods setting
//   sayHi() {
//     console.log("I am wunyu lin");
//   },
//   sayGoodby() {
//     console.log("good bye");
//   },
// };

// console.log(wunyulin.spouse.first_name);

// console.log(wunyulin.first_name);
// wunyulin.sayGoodby();
// // window.alert("testing");
// // window.prompt("how are you today?");

// function sayHi() {
//   console.log("Hello");
// }
// // let myInterval = setInterval(sayHi, 1000);

// function stop() {
//   clearInterval(myInterval);
// }

// function start() {
//   myInterval = setInterval(sayHi, 1000);
// }

// //Window Object Properties
// window.console.log("Hi");
// window.console.error("error message");
// window.console.warn("warn message");

// //Document object model
// console.log(window.document);

// //getElemnetById(), getElementByClassName()
// let myfirst = document.getElementById("first");
// console.log(myfirst);

// let mysecond = document.getElementsByClassName("second");
// console.log(mysecond);

// //document.createElement()
// let myCreatH1 = document.createElement("h1");
// console.log(myCreatH1);

// querySelector(), querySelectorAll()
//querySelector() 只會return 第一個滿足css selector的html element
// let firstH1 = document.querySelector("h1.first");
// console.log(firstH1);

// //
// let seconds = document.querySelectorAll(".first");
// console.log(seconds);
// console.log(seconds[0]);
// console.log(seconds[1]);

//function declaration
// function sayHi() {
//   console.log("Hi");
// }

//Arrow Function Expression syntax
// let sayHi = () => {
//   console.log("Hi");
// };

// let sayHiName = (name) => {
//   console.log("Hi " + name);
// };

// sayHi();
// sayHiName("wunyu");

//this keyword

let wunyu = {
  name: "Wunyu Lin",
  //function declaration
  speak() {
    console.log("Hi, my name is " + this.name + "."); //此時this指向wunyu 這個object
    console.log(this); //此時this指向wunyu object! 所以可以透過this 將他print出來
  },
  //arrow function expression 一般不會這樣寫
  talking: () => {
    console.log("Hi, my name is" + this.name); //此時this是指向window object，所以this.name沒有屬性
    console.log(this); //此時this是指向window object, 所以可以透過 this 來 print window object出來
  },
};

wunyu.speak();
wunyu.talking();
