import './home.css';

import ReactPlayer from 'react-player/lazy'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Home  = () => {
    useEffect(() =>{
        Aos.init({duration:2000});
    }, [])
    return <>
    <div className='home'>
        <div className='home-1' >
            <div className='inner'>
            <h1 className='head' data-aos="zoom-in">WATCH YOUR FAVORITE MOVIES, WEB SERIES AND MORE HER</h1>
            <p data-aos="zoom-in"> Have the best experience of entertainment and fun</p>
            </div>
        </div>
        <div className='home-1' data-aos="zoom-in">
            <div className='video'>
                <ReactPlayer  style={{borderRadius:"10px"}} url='https://www.youtube.com/watch?v=jzYxbnHHhY4' controls="true" width='600px' height='300px' />
                <p>Bhool Bhulaiyaa (Full Movie)</p>
            </div>
        </div>
    </div>
    </>
}

export default Home;