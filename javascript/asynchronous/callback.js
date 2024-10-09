
// .............................Basic Callback Function..................

function basicCallback(name, callback) {
    console.log('Hello, ' + name);
    callback();
  }
  
  function sample() {
    console.log('Goodbye');
  }
  
  basicCallback('Mendu', sample); // Hello, Mendu
// Goodbye!


// ...........................Anonymous Callback Functions................

function anonymousCallback(name, callback) {
  console.log('Hello, ' + name);
  callback();
}

anonymousCallback('Sravanthi', function() {
  console.log('Goodbye!');
}); // Hello, Sravanthi
     // Goodbye!


// .................Callbacks in Asynchronous Code..................

function fetchDataAsyn(callback) {
  setTimeout(() => {
    console.log('Data fetched Asynchronously');
    callback();
  }, 1000);
}

fetchDataAsyn(() => {
  console.log('Processing data... Asynchronously');
}); // Data fetched (after 1 second)
// Processing data...


//...............................4. Handling Errors with Callbacks..............

function fetchData(callback) {
  setTimeout(() => {
    const error = false; // Change to true to simulate an error
    if (error) {
      callback('Error occurred', null);
    } else {
      callback(null, 'Data fetched using handle errors');
    }
  }, 1000);
}

fetchData((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}); // Data fetched (or Error occurred if error is true)


// function mainFunction(callback) {
//   // Use setTimeout to simulate an asynchronous operation
//   console.log("Performing operation...");
//   setTimeout(function() {
//     callback("Operation complete");
//   }, 1000);
// }

// // Define the callback function
// function callbackFunction(result) {
//   console.log("Result: " + result);
// }

// // Call the main function with the callback function
// mainFunction(callbackFunction);

