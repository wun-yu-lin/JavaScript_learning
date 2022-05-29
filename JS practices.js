//// Simple Exercise I
//1. Write a function called "printMany" that prints out integers 1, 2, 3, ..., 100.
function printMany() {
  for (let a = 1; a <= 100; a++) {
    console.log(a);
  }
}
printMany();

//2.Write a function called "printEvery3" that prints out integers 1, 4, 7, 10, ..., 88.
function printMany3() {
  for (let b = 1; b <= 88; b += 3) {
    console.log(b);
  }
}
printMany3();

//3 Write a function called "stars" that takes an integer as input, and returns the concatenation of n continuous "*".
function start(n) {
  let results = "";
  for (let c = 0; c < n; c++) {
    results += "*";
  }
  return results;
}
console.log(start(3));
console.log(start(10));
console.log(start(100));

//4.Write a function called "isUpperCase" that checks if the first letter of the string is uppercase.
function isUpperCase(string1) {
  let results = string1.slice("");
  if (results[0]) {
  } else {
    return false;
  }
  if (results[0] == results[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(isUpperCase(""));

//5.Write a function called "isAllUpperCase" that checks if all letters in the given string is uppercase.
function isAllUpperCase(string1) {
  let results = string1.slice("");
  if (results[0]) {
  } else {
    return false;
  }
  for (let d = 0; d < results.length; d++) {
    if (results[d] == results[d].toUpperCase()) {
    } else {
      return false;
    }
  }
  return true;
}
console.log("isAllUpperCase: " + isAllUpperCase("abcd"));

//6.Write a function called "position" that prints out the first uppercase letter and its index location. If not found, prints -1.
function position(string1) {
  let results = string1.slice("");
  if (results[0]) {
  } else {
    return false + " please your input string";
  }
  for (let e = 0; e < results.length; e++) {
    if (results[e] == results[e].toUpperCase()) {
      return e;
    }
  }
  return -1;
}
console.log("position: " + position("ABCD"));

//7.Write a function called "findSmallCount" that takes one array of integers and one integer as input, and returns an integer indicating how many elements in the array is smaller than the input integer.
function findSmallCount(arr, int) {
  if (arr) {
  } else {
    return "please check yours input array";
  }
  let results = 0;
  for (let f = 0; f < arr.length; f++) {
    if (arr[f] > int) {
      results += 1;
    }
  }
  return results;
}
console.log(findSmallCount([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));

//8. Write a function called "findSmallerTotal" that takes one array of integers and one integer as input, and returns the sum of all elements in the array that are smaller than the input integer.
function findSamllerTotal(arr, int) {
  if (arr) {
  } else {
    return "please check yours input array";
  }
  let results = 0;
  for (let g = 0; g < arr.length; g++) {
    if (arr[g] > int) {
      results += arr[getSelection];
    }
  }
  return results;
}
console.log(
  "findSamllerTotal: " + findSamllerTotal([1, 2, 3, 4, 5, 6, 7, 8, 9], 100)
);

//9.Write a function called "findAllSmall" that takes one array of integers and another integer as input, and returns an array of integers that contains all elements that are smaller than the input integer.
function findAllSmall(arr, int) {
  if (arr) {
  } else {
    return "please check yours input array";
  }
  let results = [];
  for (let f = 0; f < arr.length; f++) {
    if (arr[f] > int) {
      results.push(arr[f]);
    }
  }
  return results;
}
console.log("findAllSmall: " + findAllSmall([1, 2, 3, 4, 5, 6, 7, 8, 9], 100));

//10.Write a function called "sum" that takes one array of numbers, and return the sum of all elements in the input array.
function sum(arr) {
  if (arr) {
  } else {
    return "please check yours input array";
  }
  let results = 0;
  for (let x = 0; x < arr.length; x++) {
    results += arr[x];
  }
  return results;
}
console.log("sum: " + sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 1000]));
