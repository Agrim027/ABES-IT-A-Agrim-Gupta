import React from 'react'
import './navbar.css'
function Navbar(props) {
  return (
    <div id='nav'>
        {props.clg}
    </div>
  );
}

export default Navbar;