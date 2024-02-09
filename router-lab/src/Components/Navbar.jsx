// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar=()=> {
  return (
    <div className='navbar'>
        <div className='logo-container'>
            <Link to="/">
                <h1>Kalvium♥️</h1>
            </Link>
        </div>

        <ul>
            <h3>
                <Link to={"/contact"}>Contact</Link>
            </h3>
            <h3>
                <Link to={"/about"}>About</Link>
            </h3>
        </ul>
      
    </div>
  )
}

export default Navbar;
