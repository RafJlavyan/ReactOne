import { useState } from "react";
import "./style/App.css";
import Parent from "./Components/Parent";
import PostForm from "./Components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);
  const createPost = (newPost) => {
    setPosts([...posts,newPost])
  } 

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  return (
    <div className="App">
      <PostForm create={createPost}/>
      {(posts.length > 0) ? <Parent remove={removePost} posts={posts} title={"Post1"} /> : <h1>Not found</h1>}
    </div>
  );
}

export default App;
