import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js'; // npm install --save-dev @types/react-plotly.js
import { useNavigate } from 'react-router-dom'; 
import '../Constants/Stock.css';

const Stock = () => {
    const [stockChartXValues, setStockChartXValues] = useState([]);
    const [stockChartYValues, setStockChartYValues] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchStock();
    }, []);

    const fetchStock = () => {
        const API_KEY = "YOUR API KEY HERE";
        let API_Call = `https://financialmodelingprep.com/api/v3/etf/list?apikey=${API_KEY}`;

        fetch(API_Call)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const xValues = data.map(etf => etf.symbol);
                    const yValues = data.map(etf => etf.price || 0);
                    setStockChartXValues(xValues);
                    setStockChartYValues(yValues);
                } else {
                    console.error('Unexpected data structure:', data);
                }
            })
            .catch(error => console.error('Error fetching stock data:', error));
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="stock-container">
            <button className="back-button" onClick={handleBackClick}>Back</button> 
            <h1 className="stock-title">Stock Market</h1> 
            <div className="plot-container">
                <Plot
                    data={[
                        {
                            x: stockChartXValues,
                            y: stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'green' },
                        }
                    ]}
                    layout={{ width: 900, height: 500, title: 'ETF Price Trends' }} 
                />
            </div>
        </div>
    );
};

export default Stock;
