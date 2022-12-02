import { getUsers } from './requests/users'
import { useState, useEffect} from 'react'
import { Context } from './context';
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/pages/MainPage';
import ProductsPage from './components/pages/ProductsPage';
import UsersPage from './components/pages/UsersPage';
import { getProducts } from './requests/products'



function App() {
  
//   const [ users, setUsers ] = useState([]);
// // то что пришло мы положим в изнаяальное состояние
  
//   // getUsers(setUsers); -> передаём функцию отслеживания состояния, таким образом мы вызываем функцию getUsers не с пустыми скобками, а с какойто callback-функцией 
  
  
  
//   useEffect(() => {      //fetch-GET-запрос
//     getUsers(setUsers) 
//   }, []); 
//   // обворачиваем в useEffect и вторым аргументом передаём пустой массив
 
//   // если запустить функцию без useEffect, то она запускалась бы бесконечное количество раз
 
//   // -> с useEffect функция отрабатывает исключительно 1 раз при перезагрузке страницы
  
  


  const [ users, setUsers ] = useState([]);
  const [ products, setProducts ] = useState([]);


  useEffect(() => {      //fetch-GET-запрос
    getUsers(setUsers) 
    getProducts(setProducts)
  }, []); 
  return (
    
      <div>
        <Context.Provider value={{ users, products }}>
          <Routes>
            <Route path='/' element={ <MainPage /> } />
            <Route path='/products' element={ <ProductsPage /> } />
            <Route path='/users' element={ <UsersPage /> } />

          </Routes>

        </Context.Provider>
      </div>
    
  );
}

export default App;
