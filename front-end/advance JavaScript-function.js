//map function
let languages = ["Python", "Java", "C++", "PHP", "JavaScript"];
let languages_upperCase = languages.map((i) => {
  return i.toUpperCase();
});
console.log(languages_upperCase);

//map Array+物件用法

let languages_object = [
  { languages: "python", year: 2022, point: 200, data: "a" },
  { languages: "VBA", year: 2022, point: 200, data: "B" },
  { languages: "C++", year: 2000, point: 500, data: "C" },
  { languages: "PHP", year: 2222, point: 100, data: "D" },
  { languages: "JAVA", year: 2012, point: 300, data: "E" },
];

let languages_object_upperCase = languages_object.map((i) => {
  return i.data.toUpperCase();
});
console.log(languages_object_upperCase);

//find
//find() 方法會回傳第一個滿足所提供之測試函式的元素值。否則回傳 undefined
let find_results = languages_object.find((i) => {
  return i.data == "a";
});
console.log(find_results);
//return
// Object { languages: "python", year: 2022, point: 200, data: "a" }
// data: "a"
// languages: "python"
// point: 200
// year: 2022

//fiter
//filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
let fiter_results = languages_object.filter((i) => {
  return i.year == 2022;
});
console.log(fiter_results);
//return
// Array [ {…}, {…} ]
// 0: Object { languages: "python", year: 2022, point: 200, … }
// 1: Object { languages: "VBA", year: 2022, point: 200, … }
// length: 2

//some()
//some() 方法會透過給定函式、測試陣列中是否至少有一個元素，通過該函式所實作的測試。這方法回傳的是布林值。
let some_results = languages_object.some((i) => {
  return i.year == 2022;
});
console.log(some_results); //return true, 至少一個element符合

//every()
//every() 方法會測試陣列中的所有元素是否都通過了由給定之函式所實作的測試。
let every_results = languages_object.every((i) => {
  return i.year == 2022;
});
console.log(every_results); //return false, 沒有全部element都符合

//sort()
let array_string = ["B", "C", "E", "A"];
console.log(array_string.sort());

//focus an a array of number => sort(), will sorting with string comparison
let numberArray = [1, 2, 11, 22, 354, 21, 212, 3, 12, 232];
console.log(numberArray.sort()); //String comparison

let numberArray_sort = numberArray.sort((a, b) => {
  return a - b;
});
console.log(numberArray_sort); //number comparison
