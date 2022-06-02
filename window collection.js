// Array, HTMLCollection and NodeList

//array
let lucky = [15, 7, 23, 14];
//property: length, index
//methods: push, pop, shift, unshift

//HTML Collection
let secondsElement = document.getElementsByClassName("second");
console.log(secondsElement);
console.log(secondsElement.length);

//NodeList
let secondQuery = document.querySelectorAll(".second");
console.log(secondQuery);

// HTMLCollection, NodeList
// Both of them have length property
// Both of them have index

//querySellectorAll + forEach
secondQuery.forEach((n) => {
  console.log(n);
});

//Children and childNode Property
let body = document.querySelector("body");
console.log(body.children); //return HTMLCollection
console.log(body.childNodes); //return NodeList

//parentElement
let myP = document.querySelector("p.second");
console.log(myP.parentElement); //return body
console.log(myP.parentElement.parentElement); //return <html lang="en">

//innerHTML, innerText
let h1 = document.querySelector("h1.first");
console.log(h1.innerHTML);
h1.innerHTML = "<mark>Hi i am wunyu</mark>"; //innerHTML能夠給予HTML element
h1.innerText = "Hi i am wunyu"; //innerText 只能給予string型態給web

//appendChild()
let body2 = document.querySelector("body");
let myh1 = document.createElement("h1");
myh1.innerText = "Hi I am wunyu, this element created by creatElement methods";

body2.appendChild(myh1);

//classList
let mp2 = document.querySelector("p");
console.log(mp2);
console.log(mp2.classList);
mp2.classList.add("blue"); //add class on mp2(p) element
mp2.classList.add("big");

mp2.classList.remove("blue"); //remove class
mp2.classList.toggle("blue"); //如有class 刪除，如沒有就加入
console.log(mp2.classList.contains("blue")); //是否包含特定class, return true

//getAttribute

let myH1_A = document.querySelector("h1");
console.log(myH1_A.getAttribute("id")); //return first
