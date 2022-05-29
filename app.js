// console.log(); print information in web console

console.log("testing");

// prompt(); input
// let wording = prompt("請輸入:");
let x = 123;
console.log(typeof x);

// alert(); alert information in web interface
// alert("你輸入了" + wording);

//Null
let y = null;
console.log(y);

//==
console.log(3 == "3"); //comparing if the value are the same on both sides

//===
console.log("3" === "3"); //comparing if the value and type are the same on both sides

//!=
console.log("3" != 3); //the mean is ≠, and values are different

//!==
console.log("3" != "3"); //the mean is ≠, and values and type  are different

// and or operator
console.log("and or operator");
let condition1_true = 3 > 1; //true
let condition1_false = 3 < 1; //false

let condition2_Ture = 3 > 1; //true
let condition2_false = 3 < 1; //false
console.log("and operator");
console.log(condition1_true && condition2_Ture);
console.log(condition1_false && condition2_false);
console.log(condition1_true && condition2_false);
console.log(condition1_false && condition2_Ture);

console.log("or operator");
console.log(condition1_true || condition2_Ture);
console.log(condition1_false || condition2_false);
console.log(condition1_true || condition2_false);
console.log(condition1_false || condition2_Ture);

//If statement and condition
console.log("If statement and condition");
let conditionIF = true;
if (conditionIF == true) {
  console.log("isture");
} else if (conditionIF == false) {
  console.log("isfalse");
} else {
  console.log("is not boolean");
}

//boolean context
//falsy values : false, 0,
console.log("boolean context");
let booleanText = 0;

if (booleanText) {
  console.log("This is truthy value");
} else {
  console.log("This is falsy value");
}

// **** array
let array1 = [1, 2, 4, 5, 6, 7, 8];
console.log(array1);

//index, length
console.log(array1[1]);
console.log(array1.length);

// push: array 最後加入 1 item
array1.push("addItem");
console.log(array1);

// pop: array 最後減少 1 item
array1.pop();
console.log(array1);

// shift: array 最前減少 1 item
array1.shift();
console.log(array1);

// unshift: array 最前加入 1 item
array1.unshift("theFirst");
console.log(array1);

////**** Function declaration in JavaScript */
function sayHi() {
  console.log("hello world");
}

///invokem execute a function
sayHi();

//parameter
function sayHiHi(name) {
  console.log("my name is " + name);
}
sayHiHi((name = "Wunyulin"));

//return

function test(number1) {
  let number2 = number1 + 100;
  console.log(number2);
  return number2;
}

let numberNew = test(100);
console.log(numberNew);

////**** object in JavaScript */
//透過 = {}; 來建立物件 {} 內可設定object的property
let wunyulin = {
  // property setting
  first_name: "wunyu",
  last_name: "lin",
  age: 25,
  is_married: false,
  spouse: null,

  //   methods setting
  sayHi() {
    console.log("I am wunyu lin");
  },
  sayGoodby() {
    console.log("good bye");
  },

  //   this
  sayMyname() {
    console.log("my name is " + this.first_name + this.last_name);
  },
};

/////[], dot notation
// get property
console.log(wunyulin["age"]); //[]
console.log(wunyulin.age); //dot notation
//methods
wunyulin.sayHi();
wunyulin.sayGoodby();
wunyulin.sayMyname();

////// loop
//for loop
for (let i = 2; i < 10; i++) {
  console.log(i);
}

//while loop
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

//for loop with continue
for (let i = 2; i < 10; i++) {
  if (i == 7) {
    continue;
  }
  console.log(i);
}

//for loop with break
for (let i = 2; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
//funvtion, for loop with return
function trying() {
  for (let i = 0; i < 10; i++) {
    console.log(i);

    if (i == 5) {
      return;
    }
  }
}

trying();

//Nested loop
for (let i = 2; i < 10; i++) {
  for (let k = 2; i < 10; i++) {
    console.log(i, k);
  }
}

//How to loop through an array
let loopWithArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
for (let i = 0; i < loopWithArray.length; i++) {
  console.log(loopWithArray[i]);
}
