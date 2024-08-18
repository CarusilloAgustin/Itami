import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {

    return(
        <nav className='navContainer'>
           <img className='logo' src={logo} alt="" />
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li><button className='logInBtn'>Log In / Sign Up</button></li>
           </ul>
        </nav>
    );
}

export default Navbar