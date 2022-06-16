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

// ## querySelector(), querySelectorAll()
// All HTML element must have methods, 所有HTML element 都能使用
//documnet.querySelector()
let myP_document = document.querySelectorAll("p");
console.log(myP_document);

let body3 = document.querySelector("body");
//element object querySelectorAll()
let myP_p_section = body.querySelectorAll("p");
console.log(myP_p_section);

//remove
let h1_remmove = document.querySelectorAll("h1");
console.log(h1_remmove);
h1_remmove.forEach((n) => {
  n.remove();
}); //remove all of h1 element

// Style Objectd
let button = document.querySelector("button");
console.log(button.style);
//inline styling
button.style.backgroundColor = "green";
button.style.color = "white";
button.style.width = "5vw";
button.style.height = "2vw";
//inlining stylig > id > class

//the same
button.style = "background-Color:green; color: white; width:5vw; height:2vw";

//clear styling
button.style = "";
