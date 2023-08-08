import { useState } from "react";
import "./style/App.css";
import Parent from "./Components/Parent";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./UI/modal/MyModal";
import Mybutton from "./UI/button/Mybutton";
import { usePosts } from "./hooks/usePost";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState("");
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  return (
    <div className="App">
      <Mybutton style={{ marginTop: "20px" }} onClick={() => setVisible(true)}>
        Create Post
      </Mybutton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm setVisible={setVisible} create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <Parent
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Post1"}
      />
    </div>
  );
}

export default App;
