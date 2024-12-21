import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Constants/HomePage.css';

function HomePage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/stock');
    }

    return (
        <div id="main-page">
            <div className="main_title">
                <h1>Welcome to the ETF Tracker</h1>
                <p>Your one-stop solution for tracking Exchange Traded Funds.</p>
            </div>
            <div className="home-page">
                <div className="arrow-box">
                    <div className="arrow1"></div>
                    <div className="arrow2"></div>
                    <div className="arrow3"></div>
                    <div className="arrow4"></div>
                    <div className="arrow5"></div>
                    <div className="arrow6"></div>
                </div>
                <button className="stock-button" onClick={handleButtonClick}>ETF Tracker</button>
            </div>

            <div className="hex-page">
                <div className="triangle1">
                    <div className="lineA45R"></div>
                    <div className="lineA45L"></div>
                    <div className="lineAF"></div>
                    <div className="lineB45R"></div>
                    <div className="lineB45L"></div>
                    <div className="lineC45R"></div>
                    <div className="lineC45L"></div>
                    <div className="lineD45R"></div>
                    <div className="lineD45L"></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
