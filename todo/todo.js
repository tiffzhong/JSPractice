const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const generateTemplate = todo => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span><i class="far fa-trash-alt delete"></i></li>`;

  list.innerHTML += html; //adding the HTML to the list
};

addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  // console.log(todo);
  if (todo.length) {
    generateTemplate(todo); //calling this function to add the todo to the list
    addForm.reset();
  } else {
    alert("please type in a valid todo!");
  }
});

list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove(); //removes the li tag from the list
  }
});
