import React from 'react'
import Child from './Child'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

const Parent = ({posts,title,remove}) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Not Found</h1>;
  }
  return (
    <div className='parent'>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        <TransitionGroup>
          { posts.map((post,index) => 
          <CSSTransition
          key={post.id}
          timeout={300}
          classNames="post"
        >
      <Child 
      remove={remove} 
      number={index + 1} 
      post={post}  
      />
      </CSSTransition>
    )}</TransitionGroup>
    </div>
    
  )
}

export default Parent