import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { useState } from "react";

const PostForm = ({ create,setVisible }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    setPost({ title: "", body: "" });

    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        type="text"
        placeholder="post name"
      />
      <MyInput
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        value={post.body}
        type="text"
        placeholder="post description"
      />
      <MyButton onClick={addNewPost}>Add</MyButton>
      <MyButton style={{marginLeft:'10px'}} onClick={(e) => {
        e.preventDefault()
        setVisible(false)
        }}>Close</MyButton>
    </form>
  );
};

export default PostForm;
