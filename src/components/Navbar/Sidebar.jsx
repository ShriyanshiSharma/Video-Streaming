import React from "react";
import Link from 'react-dom'; 
import './navbar.css';
import logo from '../asstes/blackhole.png'
import home from '../asstes/home.svg'
import setting from '../asstes/setting.svg'
import watch from '../asstes/watch.svg'
import add from '../asstes/add.svg'
import like from '../asstes/like.svg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';




const Sidebar = () => {
    useEffect(() =>{
        Aos.init({duration:2000,    easing: 'ease-in-sine'});
    }, [])
    return <>
    <div className="sidebar">
        <div className="main-logo">
            <img src={logo} alt="logo" width="40px" height="40px"/>
        </div>
        <div className="navigation">
            <ul>
                <li data-aos="slide-right">
                    <img className="svg" src={home}/>
                </li>
                <li data-aos="slide-right" >
                    <img className="svg" src={add}/>
                </li>
                <li data-aos="slide-right">
                    <img className="svg" src={watch}/>
                </li>
                <li data-aos="slide-right">
                    <img className="svg" src={like}/>
                </li>
                <li data-aos="slide-right">
                   <img className="svg" src={setting}/>
                </li>
                
            </ul>
        </div>
    </div>
    </>
}
export default Sidebar;