import React from 'react'
import Myinput from '../UI/input/Myinput'
import MySelect from '../UI/select/MySelect'

const PostFilter = ({filter,setFilter}) => {
  return (
    <div>
         <Myinput
          value={filter.query}
          onChange={(e) => setFilter({...filter,query: e.target.value})}
          placeholder="search"
        />
    <MySelect 
    value={filter.sort}
    onChange={selectedSort => setFilter({...filter,sort:selectedSort})}
    defaultValue='Select'
    options={[
        {value: 'title', name: 'By name'},
        {value: 'body', name: 'By description'},
    ]}
    />
    </div>
  )
}

export default PostFilter