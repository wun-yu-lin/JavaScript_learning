//Event bubbing
// let divA = document.querySelector("div.a");
// let divB = document.querySelector("div.b");

// divA.addEventListener("click", (e) => {
//   console.log(e);
// });

// divB.addEventListener("click", (e) => {
//   console.log(e);
// });

//Event bubbing + stopPropagation 可以停止Event Bubbing
let divA = document.querySelector("div.a");
let divB = document.querySelector("div.b");

divA.addEventListener("click", (e) => {
  console.log(e);
});

divB.addEventListener("click", (e) => {
  e.stopPropagation(); //top event bubbing
  console.log(e);
});
