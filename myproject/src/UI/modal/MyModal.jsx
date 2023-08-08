import React from 'react'
import style from './MyModal.module.css'

const MyModal = ({children,visible}) => {
    const rootClasses = [style.myModal];
    if(visible) {
        rootClasses.push(style.active)
    }

  return (
    <div className={rootClasses.join(' ')} >
        <div className={style.myModalContent}>{children}</div>
    </div>
  )
}

export default MyModal