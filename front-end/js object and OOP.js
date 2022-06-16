//在Execution phase 之前，電腦的記憶體會被分配到 function declaration variable 跟 var variable，但 "不會” 分配給 let, const 及 function expression
console.log(x); //執行到這行前，create phase 早就將 var x declaration出來，而 x=10並不會assignment，導致return undifine
var x = 10;

console.log(x); //JS是一行一行執行callstack，執行至此行時已經Assignments => var x = 10, 因此retrun 10

//Hoisting on function declaration

sayHi(); //JS為callstack方式執行，這邊sayHi() function所以能"執行"，是因為creation phase時，function declaration就已經被建立，這段JS code才能使用sayHi function, 此現象稱為Hoisting
function sayHi() {
  console.log("Hi");
}

//scope of variable
//1.global variable (var, let, const): variable 全域可讀取, 包括 function內
let myName = "wunyu"; //global scope, var const are the same
function sayMyname() {
  console.log(myName + " say my name. ");
  function sayMyname2() {
    console.log(myName + " say my name. ");
  }
  sayMyname2();
}
sayMyname();

//2.function scope: variable 僅限於function內使用
function sayMyname_fun() {
  let myName = "wunyu_functionScope"; //function scope,const and var are the same
  console.log(myName + " say my name. ");
  function sayMyname2() {
    console.log(myName + " say my name. ");
  }
  sayMyname2();
}
sayMyname_fun();

//3.Block scope: variable 僅限於 loop 或 statment中。
if (true) {
  let block = 10; //block scope, const is the same, but var no limited
  console.log(block);
}

console.log(block); //no define, 因為block變數是Block scope，stgtement之外無法讀取~
