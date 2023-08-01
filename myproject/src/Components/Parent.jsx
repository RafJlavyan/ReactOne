import React from 'react'
import Child from './Child'

const Parent = ({posts,title,remove}) => {
  return (
    <div className='parent'>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
       { posts.map((post,index) => (
      <Child remove={remove} number={index + 1} post={post} key={post.id} />
    ))}
    </div>
    
  )
}

export default Parent