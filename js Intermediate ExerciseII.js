//1.Write a function called "factorPrime" that takes an integer as input, and returns the prime factorization of the input.
// function factorPrime(n) {
//   let answer = n + " = ";
//   let p = 2;
//   while (p <= n) {
//     if (n % p == 0) {
//       answer += p + "x";
//       n /= p;
//     } else {
//       p++;
//     }
//   }
//   answer = answer.substring(0, answer.length - 1);
//   console.log(answer);
// }
// factorPrime(999);

//2.Write a function called "intersection" that takes 2 arrays, and returns an array of elements that are in the intersection of 2 arrays.
// function intersection(arr1, arr2) {
//   let answer = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j]) {
//         //chech if results array already has arr[i] or arr2[j]
//         let okay = true;
//         for (let k = 0; k < answer.length; k++) {
//           if (arr1[i] == answer[k]) {
//             okay = false;
//           }
//         }
//         if (okay) {
//           answer.push(arr1[i]);
//         }
//       }
//     }
//   }
//   console.log(answer);
// }
// intersection([1, 3, 4, 6, 10], [5, 11, 4, 3, 100, 144, 0]); // returns [3, 4]

//3.Write a function called "flatten" that flattens an array.
// 透過遞迴演算法將 array flatten
function flatten(arr) {
  let results = [];
  helper(arr);
  console.log(results);
  return results;
  function helper(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        helper(arr1[i]);
      } else {
        results.push(arr1[i]);
      }
    }
  }
}
flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]]);
// returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]
