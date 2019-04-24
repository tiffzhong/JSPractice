fetch("https://jsonplaceholder.typicode.com/todos/")
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
