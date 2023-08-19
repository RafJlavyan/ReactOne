import style from './MyInput.module.css'

const MyInput = (props) => {
  return (
    <input className={style.myInp} {...props} />
  )
}

export default MyInput