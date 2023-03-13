import React from "react";
import Link from 'react-dom'; 
import './navbar.css';
import logo from '../asstes/blackhole.png'
import home from '../asstes/home.svg'
import setting from '../asstes/setting.svg'
import watch from '../asstes/watch.svg'




const Sidebar = () => {
    return <>
    <div className="sidebar">
        <div className="main-logo">
            <img src={logo} alt="logo" width="40px" height="40px"/>
        </div>
        <div className="navigation">
            <ul>
                <li>
                    <img className="svg" src={home}/>
                </li>
                <li>
                    <img className="svg" src={watch}/>
                </li>
                <li>
                    <img className="svg" src={watch}/>
                </li>
                <li>
                    <img className="svg" src={watch}/>
                </li>
                <li>
                   <img className="svg" src={setting}/>
                </li>
                
            </ul>
        </div>
    </div>
    </>
}
export default Sidebar;