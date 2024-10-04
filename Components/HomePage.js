import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Constants/HomePage.css';

function HomePage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/stock');
    }

    return (
        <>
            <div className="title">
                <h1>Welcome to the ETF Tracker</h1>
                <p>Your one-stop solution for tracking Exchange Traded Funds.</p>
            </div>
            <div className="home-page">
                <button className="stock-button" onClick={handleButtonClick}>ETF Tracker</button>
            </div>
        </>
    );
}

export default HomePage;
