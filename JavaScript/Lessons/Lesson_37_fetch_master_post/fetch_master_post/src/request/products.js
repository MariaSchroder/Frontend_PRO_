export const getProducts = (callback) => {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(resp => resp.json())
        .then(json => callback(json))
}

export const addProduct = (body, callback) => { 
    // body - обьект с информацией который мы хитим отправить на сервер
    
    // fetch запрос принимает два аргумента ссылку и [options]->  method, headers, body -->> стандартный запрос (желательно указывать всегда)
    
    // method: 'POST' - тип запроса
    // headers: {'Content-Type': 'application/json'} -  информация для Beckend
    // body: JSON.stringify(body) - обьект собранный из формы

  // берём информацию - body и отправляем её в качестве подзапроса - POST 

    fetch('https://api.escuelajs.co/api/v1/products/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }) 
     
        .then(resp => resp.json())
        .then(json => callback(json))
}

// С помощью POST - запроса мы вносим изменение в массив с обьектами (добавляем обьект) и этот же обьект потом с сервера подгружается к нам на страницу через GET - запрос и формируется карточка