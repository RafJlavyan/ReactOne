import React, {useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./UI/navbar/Navbar";
import Routers from "./Components/Routers";
import { AuthContext } from "./context";

const App = () => {
  const [isAuth,setIsAuth] = useState(false)
  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  },[])
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routers />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
