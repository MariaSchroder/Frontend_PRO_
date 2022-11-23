import FruitsPage from "../../pages/FruitsPage";
import VegetablesPage from "../../pages/VegetablesPage";
import Nav from "../Nav";
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from "../../pages/NotFoundPage";
import HomePage from "../../pages/HomePage";


import Page_1 from "../../pages/Page_1";
import Page_2 from "../../pages/Page_2";


function App() {
  return (
    <div>
        <Nav />
        
        <Routes>
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/fruits_page" element={<FruitsPage />}/>
          <Route path="/vegetables_page" element={<VegetablesPage />} /> 
          <Route path="/*" element={<NotFoundPage />}/> 
          {/* если отпечатка в адресной строке или набранна не существующая страница */}
        
        </Routes>

     

    </div>
  );
}

export default App;


// 1. Даны два массива с продуктами
// const vegetables = [
//   {
//     id: 1,
//     title: 'Potato',
//     price: 300,
//     country: 'Germany'
//   },
//   {
//     id: 2,
//     title: 'Tomato',
//     price: 500,
//     country: 'Spain'
//   },
//   {
//     id: 3,
//     title: 'Carrot',
//     price: 350,
//     country: 'Poland'
//   },
//   {
//     id: 4,
//     title: 'Broccoli',
//     price: 200,
//     country: 'USA'
//   },
//   {
//     id: 5,
//     title: 'Kale',
//     price: 380,
//     country: 'France'
//   }
// ]
// const fruits = [
//   {
//     id: 1,
//     title: 'Apple',
//     price: 350,
//     country: 'Spain'
//   },
//   {
//     id: 2,
//     title: 'Banana',
//     price: 550,
//     country: 'Spain'
//   },
//   {
//     id: 3,
//     title: 'Lemon',
//     price: 320,
//     country: 'Spain'
//   },
//   {
//     id: 4,
//     title: 'Lime',
//     price: 700,
//     country: 'Spain'
//   },
//   {
//     id: 5,
//     title: 'Kiwi',
//     price: 630,
//     country: 'Spain'
//   }
// ]
// 2. Создать две страницы. На одну вывести карточки с фруктами, на другую - с овощами.
// 3. Создать навигационное меню с двумя ссылками на страницы и настроить переключение между страницами
// 4. Стилизовать карточки с продуктами
// 5. Отсортировать продукты на каждой странице по цене - от самых дешевых до дорогих





















