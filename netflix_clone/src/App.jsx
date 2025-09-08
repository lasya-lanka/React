import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Home/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


const App = () => {
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, async (user) =>{
      if(user){
        console.log("Logged In");
        navigate('/')
      }else{
        console.log('Loggged Out');
        navigate('/login')
      }
    })
  }, [])
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
};

export default App;
