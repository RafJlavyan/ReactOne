import React, {useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from '../pages/Posts'
import About from '../pages/About'
import Home from '../pages/Home'
import PostIdPage from './PostIdPage'
import Login from '../pages/Login'
import { AuthContext } from '../context'

const Routers = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext);
  console.log(isAuth)
  return isAuth ? (
    <Routes>
      <Route path='/posts' element={<Posts />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/posts/:id' element={<PostIdPage />}/>
      <Route path='/' element={<Home />}/>
      <Route path='*' element={<h1>Page not found</h1>}/>
    </Routes>
  ) : (
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/posts/:id' element={<PostIdPage />}/>
      <Route path='/' element={<Home />}/>
    </Routes>
  )
}

export default Routers