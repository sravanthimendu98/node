
// .................Creating a Promise............

const myPromise = new Promise((resolve, reject) => {
    const success = true; 
    
    if (success) {
      resolve("Operation succeeded");
    } else {
      reject("Operation failed.");
    }
  });

  myPromise
  .then((message) => {
    console.log(message, "message from promise"); // Output: Operation succeeded!
  })
  .catch((error) => {
    console.log(error, "error form promise");
  });


  //........................Chaining Promises....................

  const promiseChain = new Promise((resolve, reject) => {
    resolve(2);
  });
  
  promiseChain
    .then((number) => {
      console.log(number); // Output: 2
      return number * 2;
    })
    .then((number) => {
      console.log(number); // Output: 4
      return number * 2;
    })
    .then((number) => {
      console.log(number); // Output: 8
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
        console.log("Promise has been settled.");
      });



// ........................Promise.all(), Promise.race(), and Promise.allSettled()...................
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(42);
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "foo"));

// Takes an array of promises and resolves when all promises resolve, or rejects if any promise rejects.
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values, "==> promise.all() result"); // Output: [3, 42, "foo"]
});
      
const promise4 = new Promise((resolve) => setTimeout(resolve, 500, "one"));
const promise5 = new Promise((resolve) => setTimeout(resolve, 100, "two"));

// Resolves or rejects as soon as one of the promises resolves or rejects.
Promise.race([promise4, promise5]).then((value) => {
  console.log(value, "==> promise.race() result"); // Output: "two"
});

// Waits for all promises to settle, regardless of outcome, and returns an array of results for each promise.
const promise6 = Promise.resolve(3);
const promise7 = Promise.reject("Failed");
const promise8 = new Promise((resolve) => setTimeout(resolve, 100, "foo"));

Promise.allSettled([promise6, promise7, promise8]).then((results) => {
  console.log(results, "==> promise.allSettled() data");
  // Output: [
  //   { status: "fulfilled", value: 3 },
  //   { status: "rejected", reason: "Failed" },
  //   { status: "fulfilled", value: "foo" }
  // ]
});


// ......................Function to fetch users data through api.................
function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parsing the response as JSON
      })
      .then((data) => {
        console.log('Users data:', data); // Output the users data
      })
      .catch((error) => {
        console.log('There was a problem with the fetch operation:', error);
      });
  }
  
  // Call the function to fetch and log users data
  fetchUsers();
  
  
