import Card from "./Card";
import './slider.css';

const Slider = () => {
    return<>
    <div className="main-container">
        <div className="top">
            <h1>Top Videos</h1>
        </div>
        <div className="containeer">
            <div className="slider">
                <div className="card">
                    <Card/>
                </div>
                <div className="card">
                    <Card/>
                </div><div className="card">
                    <Card/>
                </div><div className="card">
                    <Card/>
                </div><div className="card">
                    <Card/>
                </div>
                
            </div>

        </div>
    </div>
    </>
}

export default Slider;