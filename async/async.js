const getAPI = api => {
  //make a new request object
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    //set eventlistener 'readystatechange' to request and fire request.readyState
    request.addEventListener("readystatechange", () => {
      // console.log(request, request.readyState); // request=request object & readyState gives back 1,2,3,4 = opened, headers receieved, loading, done
      if (request.readyState === 4 && request.status === 200) {
        // console.log(request, request.responseText); //what the API is giving back as the response
        resolve(JSON.parse(request.responseText)); //responseText is a JSON file. JSON.parse(changes text into JS objects)
      } else if (request.readyState === 4) {
        reject("error");
      }
    });
    //.open the object with what you want to do with API (get, post)
    request.open("GET", api);
    //send the request back to the browser
    request.send();
  });
};

//chaining JSON files
getAPI("text.json")
  .then(data => {
    console.log(data);
    return getAPI("chaining.json");
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
