//array + array
let arr1 = ["apple", "banana", "papaya", "orange"];
let arr2 = ["Jim", "Neal", "wilson"];
let str1 = arr1 + arr2; //fauit xxxx

let arr4 = arr1.concat(arr2);
console.log(typeof str1); //return string xxxx
console.log(typeof arr4); //return object vvvv
console.log(arr4); //return Array(7) [ "apple", "banana", "papaya", "orange", "Jim", "Neal", "wilson" ]
