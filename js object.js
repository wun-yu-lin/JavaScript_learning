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
