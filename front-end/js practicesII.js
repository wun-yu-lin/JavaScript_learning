// 1. Write a function called "stars" which prints out layers of stars in the following pattern:
// stars(1);
// // *
// stars(4);
// // *
// // **
// // ***
// // ****
// function stars(n) {
//   for (let x = 1; x <= n; x++) {
//     let result = "";
//     for (let j = 1; j <= x; j++) {
//       result += "*";
//     }
//     console.log(result);
//   }
// }

// stars(1);
// stars(4);
// stars(10);

//2 1. Write a function called "makeStars" which prints out stars in the following pattern:
// makeStars(1);
// // *
// makeStars(2);
// // *\n**
// makeStars(5);
// // *\n**\n***\n****\n*****

//(If you are using code runner, node.js or web developer's tool, the result of makeStars function will look exactly the same as exercise 1 stars. This is 100% okay. The reason why I am putting this exercise right here is because, many programming languages that deal with files would require you to write codes like this.)
// function makeStars(n) {
//   let results = "*";
//   for (let x = 2; x <= n; x++) {
//     let s = "\n";
//     for (let y = 1; y <= x; y++) {
//       s += "*";
//     }
//     results += s;
//   }
//   return results;
// }
// console.log(makeStars(1));
// console.log(makeStars(2));
// console.log(makeStars(5));

//3. Write a function called "stars2" which prints out layers of stars in the following pattern:
// stars2(1);
// // *
// stars2(2);
// // *
// // **
// // *
// stars2(3);
// // *
// // **
// // ***
// // **
// // *
// stars2(4);
// // *
// // **
// // ***
// // ****
// // ***
// // **
// // *

// function stars2(n) {
//   let results = "";
//   for (let x = 1; x <= n; x++) {
//     let s = "\n";
//     for (let y = 1; y <= x; y++) {
//       s += "*";
//     }
//     results += s;
//   }
//   for (let a = n - 1; a > 0; a--) {
//     s = "\n";
//     for (let b = 0; b < a; b++) {
//       s += "*";
//     }
//     results += s;
//   }
//   console.log(results);
// }
// stars2(1);
// stars2(2);
// stars2(3);
// stars2(4);

//4. Write a function called "table" which takes an input n, and prints out n x 1 to n x 9
// ```jsx
// function table(n) {
//   for (let x = 1; x <= 9; x++) {
//     console.log(n + " X " + x + "= " + n * x);
//   }
// }
// table(3);
// ```
// function table(n) {
//   for (let x = 1; x <= 9; x++) {
//     console.log(n + " X " + x + "= " + n * x);
//   }
// }
// table(3);

//5.Write a function called "table9to9" that prints out the multiplication table:
// table9to9();
// // 1 x 1 = 1
// // 1 x 2 = 2
// // 1 x 3 = 3
// // ...
// // 1 x 9 = 9
// // 2 x 1 = 2
// // 2 x 2 = 4
// // ...
// // 9 x 9 = 81
// function table9to9() {
//   for (let x = 1; x <= 9; x++) {
//     for (let y = 1; y <= 9; y++) {
//       console.log(y + " X " + x + " = " + y * x);
//     }
//   }
// }

// table9to9();

//6.1. Write a function called "fib" that takes an integer $n$ as input, and returns the $n$th element of the Fibonacci Sequence.

// If you never hear about Fibonacci Sequence, read about it from:
//遞迴演算法
// function fib(n) {
//   if (n == 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   } else {
//     return fib(n - 1) + fib(n - 2); //遞迴演算法
//   }
// }

// console.log(fib(5));

//7. Write a function called "reverse" that takes a string as input, and returns the reverse string.
// function reverse(str) {
//   let result = "";
//   for (let x = str.length - 1; x >= 0; x--) {
//     result += str[x];
//   }
//   console.log(result);
// }
// reverse("abcd"); // returns "dcba"
// reverse("I am a good guy."); // returns ".yug doog a am I"

//8.Write a function called "swap" that takes a string as input, and returns a new string with lowercase changed to uppercase, uppercase changed to lowercase.
// function swap(str) {
//   let result = "";
//   for (let x = 0; x < str.length; x++) {
//     if (str[x] == str[x].toUpperCase()) {
//       result += str[x].toLowerCase();
//     } else {
//       result += str[x].toUpperCase();
//     }
//   }
//   console.log(result);
// }
// swap("Aloha"); // returns "aLOHA"
// swap("Love you."); // returns "lOVE YOU."

//9.Write a function called "findMin" which takes an array as input, and returns the minimum element in the input array.
// function findMin(arr) {
//   let min = arr[0];
//   for (let x = 0; x < arr.length; x++) {
//     if (arr[x] < min) {
//       min = arr[x];
//     }
//   }
//   console.log(min);
// }
// findMin([1, 2, 5, 6, 99, 4, 5]); // returns 1
// findMin([]); // returns undefined
// findMin([1, 6, 0, 33, 44, 88, -10]); // returns -10

//10.Write a function called "findNthMin", which takes an array of integers and another integer n, and returns the nth smallest number in the given array.
// function findNthMin(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     let counter = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         counter++;
//       }
//     }
//     if (counter == n - 1) {
//       console.log(arr[i]);
//     }
//   }
// }
// findNthMin([1, 2, 3, 4, 5], 1); // returns 1
// findNthMin([1, 3, 5, 7, 9], 3); // returns 5
