import "../styles/App.css";
import { useState, useEffect } from "react";
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import Loader from "../UI/loader/Loader";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../Components/Pagination";

function Posts() {
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ query: "", sort: "" });
  const [modal, setModal] = useState(false);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit,page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
  
    setTotalPages(getPageCount(totalCount, limit));
  });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    setPage(page)
    fetchPosts(limit,page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit,page)
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Create</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} setVisible={setModal} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Something went wrong {postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Posts about programming"}
        />
      )}
      <Pagination changePage={changePage} page={page} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;
