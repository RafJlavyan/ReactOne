import React from 'react'
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
import { useFetching } from "./hooks/useFetching";
import { getPageCount } from "./utils/pages";
import Pagination from "./UI/pagination/Pagination";


function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState("");
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages,setTotalPages] = useState(0);
  const [limit,setLimit] = useState(10);
  const [page,setPage] = useState(1)

  const [fetchPosts, isPosteLoading, postError] = useFetching(async() => {
    const response = await PostService.getAll(limit,page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  },[page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };
  

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit,page)
  }


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
      {postError && 
      <h1>Warning !! {postError}</h1>
      }
       {isPosteLoading 
       ? <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}><Loader/></div>
       :<Parent
       remove={removePost}
       posts={sortedAndSearchedPosts}
       title={"Post1"}
     />}
      <Pagination 
      page={page}
      changePage={changePage}
      totalPages={totalPages}
      />
    </div>
    
  );
}

export default Posts;
