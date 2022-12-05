
import { useState, useEffect } from 'react'
import { getProducts } from './request/products'
import { Context } from './context'
import { Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage'
import { getUsers } from './request/users'
import ToDoPage from './pages/ToDoPage';
import { getToDos } from './request/todos';



function App() {
  
  const [ products, setProducts ] = useState([]);
  
  const [ users, setUsers ] = useState([]);
 
  const [ toDos, setToDos ] = useState([]);

  

  useEffect(() => {
    getProducts(setProducts);
    getUsers(setUsers);
    getToDos(setToDos)
  }, [])
  
  const createNewProduct = product => setProducts(state => [...state, product]);
  
  // мы взяли предъидущее состояние (setProducts) и добавили к нему то что будет передано в момент вызова функции createNewProduct
  
 const createNewUser = user => setUsers(state => [...state, user]);
 
 const createNewTodo = toDos => setToDos(state => [...state, toDos]);
  
  
  return (
   <div>
    <Context.Provider value={{ products, users, createNewProduct, createNewUser, toDos, createNewTodo }}>
      
      <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/products' element={ <ProductsPage /> } />
        <Route path='/users' element={ <UsersPage /> } />
        <Route path='/todos' element={ <ToDoPage /> } />
      </Routes>
      
    </Context.Provider>
   </div>
  );
}

export default App;
