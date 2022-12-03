
export const getUsers = (callback) => {
    fetch('https://api.escuelajs.co/api/v1/users')
        .then(resp => resp.json())
        .then(json => callback(json))
}


   