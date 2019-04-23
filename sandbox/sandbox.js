//Object Literals
// let user = {
//   name: "tiff",
//   age: 25,
//   email: "tiffzhong@gmail",
//   location: "SF",
//   blogs: [
//     { title: "today in SF", likes: 30 },
//     { title: "life after bootcamp", likes: 24 }
//   ],
//   login: function() {
//     console.log("logged in!");
//   },
//   logout: function() {
//     console.log("logged out!");
//   },
//   logBlogs: function() {
//     // console.log(this);
//     this.blogs.forEach(blog => console.log(blog.title, blog.likes));
//   }
// };

// user.logBlogs();
// // console.log(this);

console.log(Math);
console.log(Math.E);
console.log(Math.PI);

const area = 7.7;
console.log(Math.trunc(area)); //take away decimal and leaves interger
console.log(Math.ceil(area)); //rounds up
console.log(Math.floor(area));

//primative types: boolean, number, string, null
//reference types: object, array, function
//how they are stored or used in memory.
//stack: primative stored. when we make copies of primative types, we are making copies of the variable and value.
//heap: reference stored.  once stored on the heap, so if you update one it updates the other.

// references example:
const userOne = { name: "tiff", age: 25 };
const userTwo = userOne;
console.log(userOne, userTwo);
//output: {name: "tiff", age: 25} {name: "tiff", age: 25}

userOne.name = "jess"; //changing the name of user1. but eventually changes both userone and two
console.log(userOne, userTwo);
//newoutput: {name: "jess", age: 25} {name: "jess", age: 25}

// const para = document.querySelector("p");
//=> grabs the FIRST p tag in index.html and makes a reference

// const para = document.querySelector("div.error");
// => best way to grab an element from the DOM

// const paras = document.querySelectorAll("p");
// => shows all the p tags in a NodeList
// const paras = document.querySelectorAll(".error");

// paras.forEach(para => console.log(para));
// => this shows all the p tags in a forEach
// console.log(paras);

//get an element by ID
const title = document.getElementById("page-title");
console.log(title);

//get element by class name
const errors = document.getElementsByClassName("error");
console.log(errors);
//=> logs a HTMLCollection
//=> cannot use a forEach on an HTMLCollection

//get elements by tag name
const tagName = document.getElementsByTagName("p");
console.log(tagName, "tagName");
console.log(tagName[1], "tagName[1]");

const getText = document.querySelector("p");
console.log(getText.innerText, "getText.innerText"); //shows "hello!"

getText.innerText = "changing hello to goodbye!";
console.log(getText, "getText.innerText");
//now it shows new string when you override it

// *******

const getTexts = document.querySelectorAll("p");
// getTexts.forEach(para => {
//   console.log(para.innerText, "para.innerText");
//   para.innerText += " adding to end";
// });
//this adds " adding to end" on all p tags

//*********************

const content = document.querySelector(".content");

console.log(content.innerHTML, "content.innerHTML");
//=>now we can see all the HTML inside of the content div

// content.innerHTML += "<h2> new H2 </h2>";
//=>this adds this h2 line to Content

content.innerHTML = "<h2> new H2 </h2>";
//=>this changes the HTML and replaces it with h2

console.log(content.innerHTML, "content.innerHTML");

const names = ["tiff", "cj", "kris", "ja"];
names.forEach(name => {
  content.innerHTML += `<p>${name}</p>`;
});
//appending all names in browser

//Attributes
const link = document.querySelector("a");

console.log(link.getAttribute("href"));
link.setAttribute("href", "http://www.tiffz.netlify.com");
link.innerText = "Tiffz Website";

const message = document.querySelector("p");

console.log(message.getAttribute("class"));
message.setAttribute("class", "success");
//changes the classname to success
message.setAttribute("style", "color: red");
//changes class color

const mainHeader = document.querySelector("h2");
// mainHeader.setAttribute("style", "margin: 50px");
//setAttribute overwrites what is currently in HTML. So this gave it margin, but took out the color

console.log(mainHeader.style);
//CSSStyleDeclaration pops up
console.log(mainHeader.style.color);

mainHeader.style.margin = "50px";
//this sets the margin and keeps the color. adding a new property
mainHeader.style.color = "blue";
//changes the color to blue
mainHeader.style.fontSize = "60px";
console.log(mainHeader.style.color);

const classContent = document.querySelector("p");

console.log(classContent.classList);
classContent.classList.add("error-classes");
classContent.classList.remove("error-classes");
//adding and removing a class

const parass = document.querySelectorAll("p");
parass.forEach(para => {
  if (para.textContent.includes("error")) {
    para.classList.add("error");
  }
});

//EVENT LISTENERS
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  // ul.innerHTML += "<li>adding new tag</li>";
  const li = document.createElement("li");
  li.textContent = "some new to do";
  // ul.append(li); //goes to the btotom of the list
  ul.prepend(li); // adds to the top of the list
});

// const items = document.querySelectorAll("li");

// items.forEach(item => {
//   item.addEventListener("click", e => {
//     // e.target.style.textDecoration = "line-through";
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

//EVENT BUBBLING AND EVENT DELEGATION
ul.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

//OTHER EVENTLISTENERS
box.addEventListener("mousemove", e => {
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `X: ${e.offsetX} Y: ${e.offsetY}`;
}); //hovering over a box and getting coordinates

document.addEventListener("wheel", e => {
  console.log(e.pageX, e.pageY);
}); //for scrolling
