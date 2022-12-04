
export const getUsers = (callback) => {
    fetch('https://api.escuelajs.co/api/v1/users')
        .then(resp => resp.json())
        .then(json => callback(json))
}


export const addUser = (body, callback) => { 
    
    fetch('https://api.escuelajs.co/api/v1/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }) 
        .then(resp => resp.json())
        .then(json => callback(json))
}
