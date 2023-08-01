import React, { useState } from 'react'
import Mybutton from '../UI/button/Mybutton'
import Comment from '../UI/comment/Comment'

const Child = (props) => {
  const [likes, setlikes] = useState(0)
  
  return (
    <div className='post'>
        <div className="post__content">
        <h1>{props.number}. {props.post.title}</h1>
        <p>{props.post.body}</p>
        </div>
        <div className="post__btns">
    <Mybutton onClick = {() => props.remove(props.post)}>Delete</Mybutton>
    <div className="date">{props.post.date}</div>
    <div className="likes">Likes: {likes}</div>
    <div className="reaction">
      <div className="like" onClick={(ev) => {
        
        if(ev.target.classList.contains('like_active')) {
          setlikes(likes-1) 
          ev.target.classList.remove('like_active')
        } else {
          setlikes(likes+1) 
          ev.target.classList.add('like_active')
        }
      }}><i className="fa-solid fa-heart"></i></div>
      <Comment />
      <div className="share"><i className="fa-solid fa-share"></i></div>
    </div>
  </div>
    </div>
  )
}

export default Child