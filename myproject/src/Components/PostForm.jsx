import React from 'react'
import { useState } from 'react';
import Myinput from '../UI/input/Myinput';
import Mybutton from "../UI/button/Mybutton";

const PostForm = ({create,setVisible}) => {
    const [inp, setInp] = useState (
        {
          title:'',
          body:''
        }
      )
      const addNewPost = (ev) => {
        ev.preventDefault();
        function date(dd) {
          dd = new Date();
         let hh = dd.getHours();
         let mm = dd.getMinutes();
         let ss = dd.getSeconds()
          if(hh < 10) hh = '0'+hh;
          if(mm < 10) mm = '0'+mm;
          if(ss < 10) ss = '0'+ss
          return hh + ':' + mm + ':' + ss
        }
        
        const newPost = {
            ...inp,
            id:Date.now(),
            date: date()
        }
        create(newPost)
        setInp({body:'',title:''})
      }

    return (
<form>
        <Myinput
          onChange={(ev) => setInp({ ...inp,title: ev.target.value })}
          value= {inp.title}
          type="text"
          placeholder="Post name"
        />
        <Myinput
          onChange={(ev) => setInp({ ...inp,body: ev.target.value })}
          value={inp.body}
          type="text"
          placeholder="Post description"
        />
        <Mybutton onClick={addNewPost}>Add</Mybutton>
        <Mybutton style={{margin: '0 0 0 10px'}} onClick={()=> setVisible(false)}>Close</Mybutton>
      </form>
    )
}

export default PostForm