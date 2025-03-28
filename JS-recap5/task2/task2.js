
async function getUser() {

    const data = {
        method: 'POST',                                  // I want to send a new information to the server
        headers: {
            'Content-Type': 'application/json',         //It is in a JSON format
        },
        body: JSON.stringify({
            name: "Gerli",
            job: "Software Engineer"
        }),
    }
    try {
        const response = await fetch ('https://reqres.in/api/users', data);
        if (!response.ok) throw new Error('Invalid input');
        const json = await response.json();
        console.log('result', json);
    } catch (e) {
        console.log('error', e);
    }
}

getUser();