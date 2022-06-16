let arr = [
  7, 24, 56, 34, 5, 3, 2, 232, 3, 23, 23, 231, 1, 23232, 122, 1, 32, 32, 54, 16,
];
// //forEach function takes one parameter - function

// arr.forEach(function (n) {
//   if (n >= 20) {
//     console.log(n);
//   }
// });

//forEach 可以使用 arrow function declaration
arr.forEach((n) => {
  if (n > 20) {
    console.log(n);
  }
});

//簡化寫法
arr.forEach((n) => {
  if (n > 20) {
    console.log(n);
  }
});

//forEach callback function, index
arr.forEach((n, index) => {
  if (n > 20) {
    console.log(n);
    console.log(n + "is at index number: " + index);
  }
});
