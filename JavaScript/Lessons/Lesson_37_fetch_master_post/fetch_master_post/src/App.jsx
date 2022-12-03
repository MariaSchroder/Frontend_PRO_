import { useState, useEffect } from 'react'
import { getProducts } from './request/products'
import { Context } from './context'
import { Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage'


function App() {
  
  const [ products, setProducts ] = useState([]);
  
 

  useEffect(() => {
    getProducts(setProducts)
  }, [])
  
  console.log(products);

  return (
   <div>
    <Context.Provider value={{ products }}>
      
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
