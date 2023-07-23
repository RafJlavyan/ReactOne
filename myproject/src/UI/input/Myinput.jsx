import React from 'react'
import style from './Myinput.module.css'


const Myinput = (props) => {
    return (
      <input  className={style.myInput} {...props}/>
    )
  }
  
  export default Myinput