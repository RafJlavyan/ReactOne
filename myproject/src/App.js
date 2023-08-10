import { useEffect, useState } from "react";
import "./style/App.css";
import Parent from "./Components/Parent";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./UI/modal/MyModal";
import Mybutton from "./UI/button/Mybutton";
import { usePosts } from "./hooks/usePost";
import PostService from "./API/PostService";
import Loader from "./UI/loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState("");
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPosteLoading,setIsPostLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  },[])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  function fetchPosts() {
    setIsPostLoading(true)
    setTimeout(async() => {
      const posts = await PostService.getAll()
      setPosts(posts)
      setIsPostLoading(false)
    },2000)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  return (
    <div className="App">
      <Mybutton onClick={fetchPosts}>Get Posts</Mybutton>
      <Mybutton style={{ marginTop: "20px" }} onClick={() => setVisible(true)}>
        Create Post
      </Mybutton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm setVisible={setVisible} create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
       {isPosteLoading 
       ? <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}><Loader/></div>
       :<Parent
       remove={removePost}
       posts={sortedAndSearchedPosts}
       title={"Post1"}
     />}
    </div>
  );
}

export default App;
