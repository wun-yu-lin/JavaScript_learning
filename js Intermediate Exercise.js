//1.Write a function called "mySort" that takes an array of integers as input, and returns the sorted version of the input array.
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function mySort(arr) {
  let results = [];
  while (arr.length > 0) {
    let min = findMin(arr);
    results.push(min);
    arr.splice(arr.indexOf(min), 1);
  }
  return results;
}

console.log(mySort([17, 0, -3, 2, 1, 0.5])); // returns [-3, 0, 0.5, 1, 2, 17]
