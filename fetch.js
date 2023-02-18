// // // Create Obj which is capable of making an API Call
// const request = new XMLHttpRequest();

// // Open the connect to the API with HTTP method & URL
// request.open("GET", "https://restcountries.com/v3.1/all", true);

// // Send the Request to the Server 
// request.send(null);

// // login api
// // request.send({ email: 'sanjay@gmail.com', password: 'xxxxxxx' });

// // Parse the Text Passed on from the server
// request.onload = function () {
//   var response = JSON.parse(request.responseText);
//   console.log('Success', response);
// }

// request.onerror = function () {
//   console.log('Facling some try later');
// }

fetch('https://restcountries.c/v3.1/all')
  .then((response) => {
    console.log(response); // response object which has body( readablestream )

    // convert text(readableStream) to JSON -> asynchronus promise
    // response.json() // promise fullfille( countries data )
    // chain this to resolve the promise
    return response.json();
  })
  .then((countries) => {
    console.log(countries);
  })
  .catch((err) => {
    console.log(err);
  });


console.log('Line 26');

const API_KEY = '991f626650507e6605c2ca33f8edc191';
