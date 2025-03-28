

async function getUser() {
    try {
        const response = await fetch('https://reqres.in/api/unknown/23');  // non existing URL
        if (!response.ok) throw new Error('Failed to get user');
        const user = await response.json();
        
        console.log('Succesful GET fetch', user);
    } catch (error) {
        console.log(error.message);
    }
}

async function postUser() {

    const data = {
        method: 'POST',                               
        headers: {
            'Content-Type': 'application/json',         
        },
        body: JSON.stringify({
            name: "",
            job: ""
        }),
    }
    try {
        const response = await fetch ('https://reqr', data);  // non existing URL
        if (!response.ok) throw new Error('Failed to create user!');
        const json = await response.json();
        console.log('POST Success: ', json);
    } catch (e) {
        console.log('POST error: ', e);
    }
}

async function putUser() {
    try {
        const response = await fetch('https://reqres.in/api/unknown/23', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "Updated Name",
                job: "Updated Job",
            }),
        });

        if (!response.ok) throw new Error('Failed to update user!');

        const data = await response.json();
        console.log('PUT Success:', data);
    } catch (error) {
        console.log('PUT Error:', error.message);
    }
}

async function deleteUser() {
    try {
        const response = await fetch('https://reqres.in/api/unknown/23', {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error('Failed to delete user!');

        console.log('DELETE Success: User deleted');
    } catch (error) {
        console.log('DELETE Error:', error.message);
    }
}


getUser();       // get
postUser();     // create
putUser();     // update user
deleteUser(); // delete user