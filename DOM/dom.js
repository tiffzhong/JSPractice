// const paragraphTag = document.querySelector("p");

// paragraphTag.style.color = "red";
//.queryselector is only grabbing the first p tag

// const pWithClass = document.querySelector("p.error");
// pWithClass.style.color = "red";

// const paragraphTags = document.querySelectorAll("p");

// paragraphTags.forEach(tag => console.log((tag.style.color = "red")));
// //makes all p tags red

// const errorTag = document.querySelectorAll(".error");
// console.log(errorTag); //NodeList(2) [p.error, div.error]

// **** .getElementById ****
// const title = document.getElementById("page-title");
// title.style.fontSize = "45px";

//**** .getElementsByClassName ****
// const errorTags = document.getElementsByClassName("error");
// console.log(errorTags); //HTMLCollection(2) [p.error, div.error]

// **** .getElementsByTagName ****
// const pTags = document.getElementsByTagName("p");
// console.log(pTags); //HTMLCollection(3) [p, p, p.error]

//MANIPULATING TEXT AND CONTENT

// ****innerText****
// const replacingText = document.querySelector("p");
// replacingText.innerText = "tiff is cool";

// ****addingText w innerText****
// const addingText = document.querySelector("p");
// addingText.innerText += "tiff is cool";

// const addingTextToAllPTags = document.querySelectorAll("p");
// addingTextToAllPTags.forEach(para => {
//   para.innerText += "adding extra text";
//   //grabbing individual p tags
// });

//****grabbing everything inside of a div****
// const content = document.querySelector(".content");
// console.log(content.innerHTML);

// ****adding content inside a div or tag****
// const addingContent = document.querySelector(".content");
// addingContent.innerHTML += "<h4>omg adding this into the div</h4>";

// ****adding data onto the browser****
// const content = document.querySelector(".content");
// const people = ["tiff", "jess", "vince"];
// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });

//MANIPULATING ATTIBUTES
// const linkTag = document.querySelector("a");
// console.log(linkTag.getAttribute("href"));
// linkTag.setAttribute("href", "www.yahoo.com"); //changing it to yahoo
// console.log(linkTag);
// linkTag.innerText = "yahoo link";

const gettingClassAttribute = document.querySelector("p");
gettingClassAttribute.setAttribute("class", "changing");
