// const friends = ["Harry", "Ron", "Snap"];
// const reversed_friends = [];
// let k = 0;
// console.log(friends[k]);

// for (let k = 0; k < friends.length; k++) {
//   console.log(friends[k]);
// }

//Maximum Value of an array
// let array1 = [];
// function findBiggest(arr) {
//   if (arr.length == 0) {
//     return undefined;
//   }
//   let biggestNumber;
//   for (let x = 0; x < arr.length; x++) {
//     if (x === 0) {
//       biggestNumber = arr[x];
//     } else if (arr[x] > biggestNumber) {
//       biggestNumber = arr[x];
//     }
//   }
//   return biggestNumber;
// }

function addUpTo(n) {
  let results = 0;
  for (let x = 0; x <= n; x++) {
    results = results + x;
  }
  return results;
}
