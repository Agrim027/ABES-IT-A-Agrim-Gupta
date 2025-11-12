import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
import Home from './Home.jsx'
import About from './About.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Contact from './Contact.jsx'


function Navbar(){
  return (
    <>
    <div id="nav">
    <Link to ='/'>Home</Link>|{" "}
    <Link to ='/about' >About Us</Link>|{" "}
    <Link to ='/contact' >Contact</Link>|{" "}
    <Link to ='/signup' >SignUp</Link>|{" "}
    <Link to ='/login' >Login</Link>|{" "}
    </div>
    </>
  )
}
export default Navbar;