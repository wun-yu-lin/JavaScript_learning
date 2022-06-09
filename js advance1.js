//array + array
let arr1 = ["apple", "banana", "papaya", "orange"];
let arr2 = ["Jim", "Neal", "wilson"];
let str1 = arr1 + arr2; //fauit xxxx

let arr4 = arr1.concat(arr2);
console.log(typeof str1); //return string xxxx
console.log(typeof arr4); //return object vvvv
console.log(arr4); //return Array(7) [ "apple", "banana", "papaya", "orange", "Jim", "Neal", "wilson" ]

//NaN and Infinity
console.log(typeof NaN); //return number
console.log(typeof Infinity); //return number

console.log(5 / "A"); //return NaN
console.log(5 / 0); //return Infinity 無限大
console.log(Infinity / Infinity); //(不定型), return NaN
console.log(0 / 0); //(不定型), return NaN
console.log(0 * Infinity); //(不定型), return NaN
console.log(0 / Infinity); //(不定型), return NaN

//錯誤用法 - NaN == NaN?
let num1 = 0 / 0;
console.log(num1 == NaN); //return false, 這是錯誤用法，因為NaN會代表很多不定型，因此不會相等

//那如何確認運算值為NaN呢? 正確用法
console.log(isNaN(0 / 0)); //return ture

//reset parameter vs array as parameter
//舉例 reset parameter, 可以 input 任何數量的argumnet於function中
console.log(Math.max(-2, 6, 3, 1, 17, 100, 65)); //return 100, Multipe parameter

//array as parameter
function checkBiggest(arr) {
  let num1 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num1) {
      num1 = arr[i];
    }
  }
  return num1;
}

console.log(checkBiggest([-2, 6, 3, 1, 17, 100, 65])); //return 100, array as parameter

//reset parameter 使用方法為加入 spread operator於function中，任意數量的parameter都會被轉換成array，再input進去function中
//spread operator
function checkBiggest_spread(...arr) {
  //add spread operator
  let num1 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num1) {
      num1 = arr[i];
    }
  }
  return num1;
}

console.log(checkBiggest_spread(-2, 6, 3, 1, 17, 100, 65)); //return 100, many number transform to a array before input funnction

//Array concat with spread
let arr5 = ["apple", "banana", "papaya", "orange"];
let arr6 = ["Jim", "Neal", "wilson"];

//spread operatror
let mergeArray = [...arr5, ...arr6]; //same with let mergeArray = arr5.concat(arr6);

//Primitive Data Types
let numA = 100;
let numB = numA;
numA = 50;
console.log(numA, numB); //return 50, 100

//Reference Data Types
let arr7 = ["apple", "banana", "papaya", "orange"];
let arr8 = arr7; //arr8, arr7 指向相同記憶體位置!! 因此arr7.push()時，arr8也會同時改變，所謂的reference data type
arr7.push("wunyu");
console.log(arr7); //[ 'apple', 'banana', 'papaya', 'orange', 'wunyu' ]
console.log(arr8); //[ 'apple', 'banana', 'papaya', 'orange', 'wunyu' ]

//create string by object syntex
let str2 = new String("Wunyu lin");
console.log(str2); //[String: 'Wunyu lin']
console.log(typeof str2); //return object
