import React from 'react'
import Child from './Child'

const Parent = ({posts,title}) => {
  return (
    <div className='parent'>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
       { posts.map((post,index) => (
      <Child number={index + 1} post={post} key={post.id} />
    ))}
    </div>
    
  )
}

export default Parent