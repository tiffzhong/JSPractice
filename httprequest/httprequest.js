const getTodos = resource => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText); //comes back as an array of objects. everything in double quotes except integers. a way to transfer data from server to client
        resolve(data);
      } else if (request.readyState === 4) {
        reject("didnt fetch");
      }
      // console.log(request, request.readyState);
    });
    request.open("GET", resource);
    request.send();
  });
};

getTodos("https://jsonplaceholder.typicode.com/todos/")
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // resolve("data");
//     reject("error");
//   });
// };
// getSomething()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// getTodos((err, data) => {
//   console.log("callback fired");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
