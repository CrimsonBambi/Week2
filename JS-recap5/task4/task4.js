
async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        return await response.json(); // return the response as JSON
    } catch (error) {
        console.error('Fetch error:', error.message);
        throw error; // rethrow the error so it can be handled in the calling function
    }
}

async function testFetch() {
    try {
        const user = {
           name: 'John Doe',
           job: 'Developer'
        };
        const url = 'https://reqres.in/api/users';
        const options = {
           method: 'POST',
           headers: {
              'Content-Type': 'application/json'
           },
           body: JSON.stringify(user)
        }
        const userData = await fetchData(url, options);
        console.log(userData);
      } catch (error) {
        console.error('An error occurred:', error);
    }
}

testFetch();