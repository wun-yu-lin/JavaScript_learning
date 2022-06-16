let numebr = [1, 2, 3, 4, 5, 6, 7, 8];

//for loop
for (let i = 0; i < numebr.length; i++) {
  console.log(numebr[i]);
}

//for each
numebr.forEach((i) => {
  console.log(i);
});

//for of loop
for (let n of numebr) {
  console.log(n);
}

let languages_object = {
  languages: "python",
  year: 2022,
  point: 200,
  data: "a",
};

let languages_object_array = [
  { languages: "python", year: 2022, point: 200, data: "a" },
  { languages: "VBA", year: 2022, point: 200, data: "B" },
  { languages: "C++", year: 2000, point: 500, data: "C" },
  { languages: "PHP", year: 2222, point: 100, data: "D" },
  { languages: "JAVA", year: 2012, point: 300, data: "E" },
];
//for in loop
for (let n in languages_object) {
  console.log(n);
}
//return 屬性
// languages
// year
// point
// data

for (let n in languages_object) {
  console.log(languages_object[n]);
}
//return 屬性值
// python
// 2022
// 200
