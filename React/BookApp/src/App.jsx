import React from "react";

import './App.css'
import Navbar from './Navbar.jsx'

import Home from './Home.jsx'
import About from './About.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Contact from './Contact.jsx'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <><div className='App'>
      <Navbar/>
      <h1>BOOK APP</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    
      

      
      </div>
    </>
   
  )
}
export default App