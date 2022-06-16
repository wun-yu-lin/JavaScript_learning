//window object
//click 代表 Event tyep
//e 代表 callback function <== click event
// window.addEventListener("click", (e) => {
//   console.log(e);
// });

// //creat h1 element by click event
// let x = 1;
// window.addEventListener("click", (e) => {
//   console.log(e);
//   let body = document.querySelector("body");
//   let creat = document.createElement("h1");
//   creat.innerHTML = "I creat h1 element by click" + x + "times";
//   body.appendChild(creat);
//   x++;
// });

//target
let h1 = document.querySelector("h1");
h1.addEventListener("click", (e) => {
  console.log(e.target); //return click event 的 目標物
  console.log(e.target.innerText);
  console.log(e.target.parentElement);
});

//preventDefault
let button = document.querySelector("button");
button.addEventListener("click", (e) => {
  e.preventDefault(); //防止空白表單被submit
});
