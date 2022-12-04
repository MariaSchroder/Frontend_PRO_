
import { useState, useEffect } from 'react'
import { getProducts } from './request/products'
import { Context } from './context'
import { Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage'
import { getUsers } from './request/users'



function App() {
  
  const [ products, setProducts ] = useState([]);
  const [ users, setUsers ] = useState([]);
 

  useEffect(() => {
    getProducts(setProducts);
    getUsers(setUsers)
  }, [])
  
  const createNewProduct = product => setProducts(state => [...state], product);
  // мы взяли предъидущее состояние (setProducts) и добавили к нему то что будет передано в момент вызова функции createNewProduct
 
  
  
  return (
   <div>
    <Context.Provider value={{ products, users, createNewProduct }}>
      
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
