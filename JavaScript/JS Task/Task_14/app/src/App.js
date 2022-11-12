import { todo } from './data';
import ToDoContainer from './ToDoContainer';

function App() {

  return (
    <div>
    
      <ToDoContainer todo={todo}/>

    </div>
  );
}

export default App;
