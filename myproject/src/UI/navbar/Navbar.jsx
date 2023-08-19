import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context"


const Navbar = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext)
  const login = (evt) => {
    evt.preventDefault();
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className='navbar'>
      <div className='navbar_links'>
        <Link to='/home'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/about'>About</Link>
        <Link to='/login'>Log in</Link>
        <Link to='/login' onClick={login}>Log Out</Link>
      </div>
    </div>
  )
}

export default Navbar