//1.Write a function called "mySort" that takes an array of integers as input, and returns the sorted version of the input array.
// function findMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// function mySort(arr) {
//   let results = [];
//   while (arr.length > 0) {
//     let min = findMin(arr);
//     results.push(min);
//     arr.splice(arr.indexOf(min), 1);
//   }
//   return results;
// }

// console.log(mySort([17, 0, -3, 2, 1, 0.5])); // returns [-3, 0, 0.5, 1, 2, 17]

//2. Write a function called "isPrime" that takes an integer as input, and returns a boolean value that indicates if the input number is prime.
// function isPrime(n) {
//   if (n == 1) {
//     return false;
//   } else {
//     for (let x = 2; x < n; x++) {
//       if (n % x == 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }
// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(91));
// console.log(isPrime(10000000));

//3.Write a function called "confirmEnding" that takes 2 strings as input, and returns a boolean value that indicates if the first input ends with the second input.
// confirmEnding("Bastian", "n"); // true
// confirmEnding("Connor", "n"); // false
// confirmEnding("Open sesame", "same"); // true
// function confirmEnding(str1, str2) {
//   let k = str1.length - 1;
//   for (let x = str2.length - 1; x <= 0; x--) {
//     if (str1[k] != str2[x]) {
//       return false;
//     }
//     k--;
//   }
//   return true;
// }

// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Connor", "n"));
// console.log(confirmEnding("Open sesame", "same"));

//4.Write a function called "findDuplicate" that an array of integers as inputs, and check if there's any duplicate values in the array.
// findDuplicate([1, 3, 5, 7, 9, 3]); // returns true
// findDuplicate([]); // returns false
// findDuplicate([3, 4, 5, 6, 7, 10000, 0]); // returns false
// function findDuplicate(arr) {
//   for (let x = 0; x < arr.length; x++) {
//     for (let y = 0; y < arr.length; y++) {
//       if (x != y && arr[x] == arr[y]) {
//         console.log(true);
//         return true;
//       }
//     }
//   }
//   console.log(false);
// }
// findDuplicate([1, 3, 5, 7, 9, 3]); // returns true
// findDuplicate([]); // returns false
// findDuplicate([3, 4, 5, 6, 7, 10000, 0]); // returns false

//5.Write a function called "palindrome" that checks if the input string is a palindrome. (Search on google if you don't know what a palindrome is.)
// palindrome("bearaeb"); // true
// palindrome("Whatever revetahw"); // true
// palindrome("Aloha, how are you today?"); // false
// function palindrome(str) {
//   let i = 0;
//   let j = str.length - 1;
//   while (i < j) {
//     if (str[i] != str[j]) {
//       console.log(false);
//       return false;
//     }
//     i++;
//     j--;
//   }
//   console.log(true);
//   return true;
// }
// palindrome("bearaeb"); // true
// palindrome("Whatever revetahW"); // true
// palindrome("Aloha, how are you today?"); // false

//6.Write a function called "pyramid" that takes an integer as input, and prints a pyramid in the following pattern:
// pyramid(1);
// //*
// pyramid(2);
// //  *
// // ***
// pyramid(4);
// //    *
// //   ***
// //  *****
// // *******
// function drawRow(space, star) {
//   let results = "";
//   for (let i = 0; i < space; i++) {
//     results += " ";
//   }
//   for (let j = 0; j < star; j++) {
//     results += "*";
//   }
//   console.log(results);
// }

// function pyramid(n) {
//   let i = 1;
//   let j = n - 1;
//   for (let x = 1; x <= n; x++) {
//     drawRow(j, i);
//     i += 2;
//     j--;
//   }
// }

// pyramid(1);
// pyramid(2);
// pyramid(4);

//7.Write a function called "inversePyramid" that draws pyramid upside down.
// inversePyramid(4);
// // *******
// //  *****
// //   ***
// //    *
function drawRow(space, star) {
  let results = "";
  for (let i = 0; i < space; i++) {
    results += " ";
  }
  for (let j = 0; j < star; j++) {
    results += "*";
  }
  console.log(results);
}
function inversePyramid(n) {
  let i = 0;
  let j = 2 * n - 1;
  for (let x = 1; x <= n; x++) {
    drawRow(i, j);
    i++;
    j -= 2;
  }
}
inversePyramid(4);
