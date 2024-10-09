
// .....................Api call using Async/await/.............................
async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (response.ok) {
          const data = await response.json();
          console.log('Users data:', data);
        }
    } catch (error) {
      console.log('There was a problem with the fetch operation:', error);
    }
  }
  
  fetchUsers();
  