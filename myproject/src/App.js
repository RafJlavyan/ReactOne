import { useState } from "react";
import { useMemo } from "react";
import "./style/App.css";
import Parent from "./Components/Parent";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";

function App() {
  const [posts, setPosts] = useState([]);
  
  const [filter,setFilter] = useState({sort:'', query:''})

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  },[filter.sort,posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  },[filter.query,sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };


  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      <Parent remove={removePost} posts={sortedAndSearchedPosts} title={"Post1"} />
    </div>
  );
}

export default App;
