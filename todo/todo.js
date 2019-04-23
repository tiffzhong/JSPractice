const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const generateTemplate = todo => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span><i class="far fa-trash-alt delete"></i></li>`;

  list.innerHTML += html; //adding the HTML to the list
};

//ADDING A TODO
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

//DELETE A TODO
list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove(); //removes the li tag from the list
  }
});

//SEARCH A TODO

//HIDING TODOS THAT ARENT IN THE SERACH QUERY
const filteredTodo = searchTerm => {
  Array.from(list.children)
    .filter(
      todoItem => !todoItem.textContent.toLowerCase().includes(searchTerm)
    )
    .forEach(todo => todo.classList.add("filtered"));
  //.textContent looks at the text content in the todo li item
  //.add adding a "filtered" classname to li tag that doesn't have search term

  Array.from(list.children)
    .filter(todoItem => todoItem.textContent.toLowerCase().includes(searchTerm))
    .forEach(todo => todo.classList.remove("filtered"));
  //.remove when we have a match, we take the filtered classname off
};
//Searched Term
search.addEventListener("keyup", () => {
  const searchTerm = search.value.trim().toLowerCase();
  filteredTodo(searchTerm);
});
