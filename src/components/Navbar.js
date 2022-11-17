import React from 'react'
import logo from '../assets/devUX.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='navBar'>
            <figure className='logo'>
                <a href="/">
                    <img src={logo} alt="devUX-logo.png" />
                </a>
            </figure>

            <div className='navLinks'>
                <a className='navLink' href='/about'> About </a>
                <a className='navLink' href='/projects'> Projects </a>
                <a className='navLink' href='/collaborate'> Work with me </a>
            </div>
        </nav>
    )
}

export default Navbar