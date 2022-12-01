import PostsContainer from "./components/PostsContainer";
import { useState, useEffect } from 'react'
import { posts_data } from './data/posts_data'
import { Context } from './context'
import AddPostForm from "./components/AddPostForm";

function App() {
  
  const [posts, setPosts] = useState(posts_data);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('posts'));
    if (res) setPosts(res) // -> если res существует тогда зделать setPost и поместить туда res  
    // Перерисовку зделать только в том случае если в res уже чтото есть (если из localeStorage мы смогли чтото достать)
  }, []);
  
  // функция выполняется 1 раз при перезагрузке страницы и достаёт сохранный posts из браузера

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts]); 
  // положили состояние posts и отслеживаем его

  const change_like = (id) => {
    
    // найти карточку по id - метод find()
    const target_card = posts.find(el => el.id === id);

    // У найденой карточки меняем значение свойства like на противоположное
    target_card.like = !target_card.like

    // Отследить изменение состояния (setPosts) -> Создает копию нашего состояния
    setPosts([...posts]);
  }

  const add_post = (title_value, text_value)=> setPosts ([
    ...posts,
    {
      id: Date.now(),
      title: title_value, // title: title_value,
      text: text_value, // text: text_value,
      like: false,
      comments: []
    } 
  ])

  // const add_post = (title, text)=> setPosts ([
  //   ...posts,
  //   {
  //     id: Date.now(),

  // -> если переменные одноимённы с ключем, то можно оставлять 
  //    только ключ
  //     title, =>  title: title,
  //     text,  => text: text,
  // 
  //     like: false,
  //     comments: []
  //   } 
  // ])


  const add_comment = (post_id, text) => {
    
    // создаёт обьект комментария
    const comment = {
      id: Date.now(),
      comment: text
    }

    // находит в какой пост будет добавлен этот комментарий 
    // el.id === post_id (id елемента должен быть равен переданаму id)
    const target_post = posts.find(el => el.id === post_id);

    // обращается в массив comments и добавляет комментарий в обьект
    target_post.comments.push(comment);

    // Отслеживает изменение состояния (setPosts) -> Создает копию нашего состояния
    setPosts([...posts]);
  }



  // удаление постов
  const delete_post = post_id => setPosts(posts.filter(el => el.id !== post_id));
  // берём каждый элемент и сверяем  id елемента  с id карточки и он должен быть не равен post_id
  // нужно вернуть все посты, кроме того на который было кликнуто




  // удаление комментариев
  const delete_comment = (post_id, comment_id) => {
    
    const target_post = posts.find(el => el.id === post_id);
    // находим пост у которого мы удаляем комментарий

    target_post.comments = target_post.comments.filter(el => el.id !== comment_id);
    // фильтруем комментарии если id элемента равен comment_id то происходит перирисовка, если НЕ равен (!==) то коментарий отсеивается/ удаляется 
    // target_post.comments = перезаписываем
    
    setPosts([...posts]) 
    // периресовываем наше обновлённое состояние
  }

  // альтернативная запись 
  
  // const delete_comment = (post_id, comment_id) => {
  //  setPosts(prev_state => {
  //     const target_post = prev_state.find(el => el.id === post_id);
  //     target_post.comments = target_post.comments.filter(el => el.id !== comment_id);
  //     return [...prev_state]
  //   })
  // }




  return (
    <div>
      <Context.Provider value={{ posts, change_like, add_post, add_comment, delete_post, delete_comment }}>
          
          <AddPostForm />
          <PostsContainer /> 
      
      </Context.Provider>
        
    </div>
  );
}

export default App;
