export const getProducts = (callback) => {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(resp => resp.json())
        .then(json => callback(json))
}