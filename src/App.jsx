import React, { useEffect } from 'react'
import './index.css'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import Player from './Pages/Player/Player.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        console.log("Logged In");
        navigate('/');
      }
      else{
        console.log("Logged Out");
        navigate('/Login');
      }
    });
  }, []);

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
