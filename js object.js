// //object
// let wunyu = {
//   name: "wunyu",
//   age: 25,
// };

// //constructor function js
// function Person(name, age, height, weight) {
//   (this.name = name),
//     (this.age = age),
//     (this.height = height),
//     (this.weight = weight);
// }

// let wunyu = new Person("wunyu", 25, 160, 70);
// console.log(wunyu);

//Prototype
function Person(name, age, height, weight) {
  (this.name = name),
    (this.age = age),
    (this.height = height),
    (this.weight = weight);
}

Person.prototype.SayHi = function () {
  console.log(" Hi my name is " + this.name);
};

let wunyu_prototype = new Person("wunyu", 25, 160, 70);
console.log(wunyu_prototype);

//Prototype inheritance
let array = [1, 2, 3, 4];
console.log(array.push); // push method is inheritance from Prototype object

//In JS, All of functions are object

function func_type() {
  console.log();
}

console.log(func_type); //function func_type()

//Bind
let wunyu = {
  name: "wunyu lin",
  age: 25,
};
function getAge(country) {
  // console.log(this.age);
  console.log(this.age);
  console.log("I am from " + country);
}
getAge(); //此時this 指向 web object，無age property 因此 return undefined
let getWunyuAge = getAge.bind(wunyu); //此時this 指向 wunyu object，因此 return age屬性 "25"
//*將function中的this指向特定物件!!，會回傳variable，需要variable來接住回傳值

//Call, Call function and input argument into function
//Call: 將function中的this指向特定物件，”執行function”，將argument傳入Function 作為Argument
getAge.call(wunyu, "Taiwan");

//Apply : 將function中的this指向特定物件，”執行function”，將argument (a array) 傳入Function 作為Argument
getAge.apply(wunyu, ["Taiwan"]);

//**Call, Apply 使用時機來自於 原先儲存的資料型態來決定
