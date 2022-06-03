// // - setItem(key, value)
// localStorage.setItem("wunyu", "boy");
// localStorage.setItem("emma", "girl");
// localStorage.setItem("array", [1, 2, 3, 4, 5, 6]);

// // - getItem(key)
// console.log(localStorage.getItem("wunyu")); //return boy
// let results = localStorage.getItem("emma");
// console.log(results); //return girl
// console.log(localStorage.getItem("array")); //return 1,2,3,4,5,6 web 自動將array轉成string

// // - removeItem(key)
// localStorage.removeItem("wunyu");

// // - clear()
// //localStorage.clear();

// console.log(localStorage);
// console.log(sessionStorage);

//How to store other types of data?
//透過 JSON means JavaScript Object Notation (JSON)
let friends = ["wunyu", "emma", "winnie", "jili", "gulu"];
localStorage.setItem("friends", JSON.stringify(friends)); //a array - friends to string
let myfriends = JSON.parse(localStorage.getItem("friends"));
console.log(myfriends);
