import React from "react";
import find from '../asstes/find.svg'
import Link from 'react-dom';
import './navbar.css';
import logo from '../asstes/blackhole.png'

const Navbar = () => {
    return <>
    <div className="navbar">
        <div className="search-bar">
            <input/>
            <img src={find} />
            <p>Search..</p>
        </div>
    </div>
    </>
}
export default Navbar;