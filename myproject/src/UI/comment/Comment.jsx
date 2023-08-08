import comMent from './Comment.module.css'

const Comment = ({children}) => {

  return (
      <div className={comMent.comment} style={{transition:'0.3s'}}>{children}</div>
  )
}

export default Comment