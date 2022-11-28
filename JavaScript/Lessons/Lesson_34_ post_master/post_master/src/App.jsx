import PostsContainer from "./components/PostsContainer";
import { useState } from 'react'
import { posts_data } from './data/posts_data'
import { Context } from './context'
import AddPostForm from "./components/AddPostForm";

function App() {
  
  const [posts, setPosts] = useState(posts_data);

  
  const change_like = (id) => {
    
    // найти карточку по id - метод find()
    const target_card = posts.find(el => el.id === id);

    // У найденой карточки меняем значение свойства like на противоположное
    target_card.like = !target_card.like

    // Отследить изменение состояния (setPosts) -> Создает копию нашего состояния
    setPosts([...posts]);
  }

  const add_post = (title_value, text_value)=> {

    
  }

  return (
    <div>
      <Context.Provider value={{ posts, change_like }}>
          
          <AddPostForm />
          <PostsContainer /> 
      
      </Context.Provider>
        
    </div>
  );
}

export default App;
