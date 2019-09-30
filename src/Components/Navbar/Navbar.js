import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png'

const navbar =  () => {
    return <nav className= "navbar"> 
            <img src= {logo}  alt= 'city tours logo'></img>
            <ul className= "nav-links">
                <li>
                    <a href="/" className= "nav-link"> Home </a> 
                </li>
                <li>
                    <a href="/" className= "nav-link"> About </a> 
                </li>
                <li>
                    <a href="/" className= "nav-link active"> Tours </a> 
                </li>
            </ul>
           </nav>
}

export default navbar;