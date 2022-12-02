import { getUsers } from './requests/users'
import { useState, useEffect} from 'react'
import { Context } from './context';
import UsersContainer from './components/UsersContainer';



function App() {
  
  const [ users, setUsers ] = useState([]);
// то что пришло мы положим в изнаяальное состояние
  
  // getUsers(setUsers); -> передаём функцию отслеживания состояния, таким образом мы вызываем функцию getUsers не с пустыми скобками, а с какойто callback-функцией 
  
  
  
  useEffect(() => {      //fetch-GET-запрос
    getUsers(setUsers) 
  }, []); 
  // обворачиваем в useEffect и вторым аргументом передаём пустой массив
 
  // если запустить функцию без useEffect, то она запускалась бы бесконечное количество раз
 
  // -> с useEffect функция отрабатывает исключительно 1 раз при перезагрузке страницы
  
  

  return (
    
      <div>
        <Context.Provider value={{ users }}>
          <UsersContainer />
        </Context.Provider>
      </div>
    
  );
}

export default App;
