
// создаём fetch-GET-запрос

export const getUsers = (callback) => { // мы вызываем функцию getUsers не с пустыми скобками, а с какойто callback-функцией
     fetch('https://dummyjson.com/users')
        .then(resp => resp.json())
        .then(json => callback(json.users)) 
        // -> вызавается callback-функция и передаётся в неё данные/массив


// callback(json.users) => setUsers(json.users)
// Мы делаем fetch запрос и полученные данные кладём в наше состояние setUsers
}
