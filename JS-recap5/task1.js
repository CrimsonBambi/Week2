
async function getUser() {
    try {
        const response = await fetch('https://reqres.in/api/users/1');
        if (!response.ok) throw new Error('Invalid input!');
        const user = await response.json();
        
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}

getUser();