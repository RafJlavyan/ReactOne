import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById,isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data)
    });
    const [fetchComments,isLoadingComments, comError] = useFetching(async (id) => {
        const response = await PostService.getComment(id);
        setComments(response.data)
    });
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])
  return (
    <div>
        <h1>Post id: {params.id}</h1>
        {isLoading ? (<Loader />) : <div>{post.id}. {post.title}</div>}
        <h3>Comments</h3>
        {isLoadingComments ? (
          ''
        ):
        (<div>
          {comments.map((com) => {
          <div key={com.id} style={{marginTop: '15px'}}>
            <h4>{com.email}</h4>
            <div>{com.body}</div>
          </div>
    })}
        </div>
        )}
    </div>
  )
}

export default PostIdPage