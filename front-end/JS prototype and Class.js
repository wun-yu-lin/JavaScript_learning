// //constructor function
// function Person(name, age, height, weight) {
//   (this.name = name),
//     (this.age = age),
//     (this.height = height),
//     (this.weight = weight);
// }

// Person.prototype.SayHi = function () {
//   console.log(" Hi my name is " + this.name);
// };

// //如何執行Prototype Inheritance in function object create?
// function student(name, age, height, weight, major, grade) {
//     //this keyword refer to student
//     Person.call(this, name, age, height, weight); //透過call將thjs指向Person
//     (this.major = major), (this.grade = grade);
//   }
//   //上述無法inheritance SayHi function 因此透過下列手法執行Prototype Inheritance SayHi function
//   student.prototype = Object.create(Person.prototype); //Prototype Inheritance

//   let wunyu = new student("wunuy", 25, 179, 75, "MS", 4.0); //透過student function建立 wunyu object，此時student funtion object 已經繼承SayHi function, 因此wunyu object自然擁有此methods。
//   wunyu.SayHi();
//class
class Person {
  //constructor function
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
  SayHi() {
    console.log(" Hi my name is " + this.name);
  }
  intro() {
    console.log("Hi, my name is " + this.name + ".");
  }
}
let wunyu = new Person("wunyu", 25, 167, 69);
console.log(wunyu.SayHi());
console.log(wunyu.intro());

//Class + Prototype inheritance
class Student extends Person {
  //Student 為 Person 的母集合
  constructor(name, age, height, weight, major, grade) {
    super(name, age, height, weight); //superSet
    (this.major = major), (this.grade = grade);
  }
  study() {
    console.log("Hi I am studying now.");
  }
}
let wunyu_student = new Student("wunyu", 25, 167, 69, "MS", 4.0);
console.log(wunyu_student);

//static properties and methods
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * 3.14; //計算圓面積
  }
  getPerimeter() {
    return 2 * 3.14 * this.radius;
  }
  static getAreaFormula() {
    //static properties and methods 只能由class 本身來調用 (call)
    console.log("r * r * 3.14");
  }
}
//由class 直接調用static methods
Circle.getAreaFormula(); //return r * r * 3.14

//constructor function 建立 new object, 非static properties and methods
let c1 = new Circle(10); //半徑 10 的 Circle object
console.log(c1.radius); //取德樹
console.log(c1.getArea()); //取得面積
console.log(c1.getPerimeter()); //取得直徑
