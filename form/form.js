const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const username = document.querySelector("#username");
form.addEventListener("submit", e => {
  e.preventDefault();
  console.log(form.username.value);

  const username = form.username.value;

  if (usernamePattern.test(username)) {
    feedback.textContent = "username valid";
  } else {
    feedback.textContent = "need a username w 6-12 characters";
  }
});

form.addEventListener("keyup", e => {
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});

//REGEX EXERCISE
// const username = "234tiffany";
// const pattern = /^[a-z]{6,}$/; //at least 6 characters

// let result = pattern.test(username); //returns boolean
// console.log(result);

// if (result) {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// let result = username.search(pattern); //finds the first letter that matches to the regex request
// console.log(result);
