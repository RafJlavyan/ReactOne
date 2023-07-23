import React from 'react'
import styles from './Mybutton.module.css'

const Mybutton = ({children, ...props}) => {
    return (
      <button {...props} className={styles.myBtn}>{children}</button>
    )
  }
  
  export default Mybutton