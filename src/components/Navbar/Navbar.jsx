import React from "react";
import noti from '../asstes/message.svg'
import bell from '../asstes/bell.svg'
import Link from 'react-dom';
import './navbar.css';

const Navbar = () => {
    return <>
    <div className="navbar">
        <h1>LoGo TV</h1>
        <div className="top-display">
            <ul className="list-display">
                <li>Lastest Videos</li>
                <li>Coming Soon</li>
            </ul>
        </div>
        <div className="user">
            <div className="search-bar">
                <input type= "text" placeholder="        Search.."/>
            </div>
            <img className="notify" src={noti} width="17px"/>
            <img className="notify" src={bell} width="17px"/>
            <p>John</p>
            <div className="pic">
                <img src="https://www.dlisted.com/files/johntravoltaanothermasseur.jpg" alt="user"/>
            </div>
        </div>
    </div>
    </>
}
export default Navbar;