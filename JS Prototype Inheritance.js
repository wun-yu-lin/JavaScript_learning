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

//如何執行Prototype Inheritance in function object create?
function student(name, age, height, weight, major, grade) {
  //this keyword refer to student
  Person.call(this, name, age, height, weight); //透過call將thjs指向Person
  (this.major = major), (this.grade = grade);
}
//上述無法inheritance SayHi function 因此透過下列手法執行Prototype Inheritance SayHi function
student.prototype = Object.create(Person.prototype); //Prototype Inheritance

let wunyu = new student("wunuy", 25, 179, 75, "MS", 4.0); //透過student function建立 wunyu object，此時student funtion object 已經繼承SayHi function, 因此wunyu object自然擁有此methods。
wunyu.SayHi();
