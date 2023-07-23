import { useState } from "react";
import "./style/App.css";
import Parent from "./Components/Parent";
import Myinput from './UI/input/Myinput';
import Mybutton from "./UI/button/Mybutton";

function App() {
  const [posts, setPosts] = useState([]);

  const [inp, setInp] = useState (
    {
      title:'defaultT',
      body:'defaultB'
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
      id:Date.now(),
      title: inp.title,
      body: inp.body,
      date: date()
    }
    posts.unshift(newPost)
    setInp({body:'',title:''})
  }
  
  return (
    <div className="App">
      <form>
        
        <Myinput
          onChange={(ev) => setInp(ev.target.value)}
          value= {inp.title}
          type="text"
          placeholder="Post name"
        />
        <Myinput
          onChange={(ev) => setInp(ev.target.value)}
          value={inp.body}
          type="text"
          placeholder="Post description"
        />
        <Mybutton onClick={addNewPost}>Add</Mybutton>
      </form>

      <Parent posts={posts} title={"Post1"} />
    </div>
  );
}

export default App;
