import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { useNavigate } from 'react-router-dom'; 
import '../Constants/Stock.css';

const Stock = () => {
    const [stockChartXValues, setStockChartXValues] = useState([]);
    const [stockChartYValues, setStockChartYValues] = useState([]);
    const [stockChart10XValues, setstockChart10XValues] = useState([]);
    const [stockChart10YValues, setstockChart10YValues] = useState([]);
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
                    const sortedData = data.sort((a, b) => b.price - a.price);
                    const top10XValues = sortedData.slice(0, 10).map(etf => etf.symbol);
                    const top10YValues = sortedData.slice(0, 10).map(etf => etf.price);
                    setstockChart10XValues(top10XValues);
                    setstockChart10YValues(top10YValues);
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
        <div id="main-container">
            <div className="upperPannel">
                <button className="back-button" onClick={handleBackClick}>Back</button> 
                <div className="title"> Exchange Traded Funds Analysis </div>
            </div>
            <div className="stock-container">
                <div className="plot-container">
                    <div className="plot">
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
                            layout={{ width: 900, height: 450, title: 'ETF Price Trends'}} 
                        />
                    </div>
                    <div className="plot">
                        <Plot
                            data={[
                                {
                                    y: stockChart10YValues,
                                    type: 'box',
                                    boxpoints: 'all',
                                    jitter: 0.3,
                                    pointpos: -1.8,
                                    marker: { color: 'blue' }
                                }
                            ]}
                            layout={{ width: 900, height: 450, title: 'Top 10 ETF Price Box Plot', yaxis: { title: 'Price' }, margin: { l: 40, r: 40, b: 40, t: 40 } }} 
                        />
                    </div>
                </div>
                <div className="plot-container">
                    <div className="plot">
                        <Plot
                            data={[
                                {
                                    values: stockChart10YValues,
                                    labels: stockChart10XValues,
                                    type: 'pie',
                                    textinfo: 'label+percent',
                                    hoverinfo: 'label+value+percent',
                                    marker: {
                                        colors: [
                                            '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
                                            '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'
                                        ]
                                    }
                                }
                            ]}
                            layout={{
                                width: 900,
                                height: 450,
                                title: 'Top 10 ETFs Market Share',
                                showlegend: true,
                                legend: { orientation: 'h', y: -0.1 }
                            }}
                        />
                    </div>
                    <div className="plot">
                        <Plot
                            data={[
                                {
                                    x: stockChart10XValues,
                                    y: stockChart10YValues,
                                    type: 'bar',
                                    marker: {
                                        color: 'rgb(158,202,225)',
                                        opacity: 0.8,
                                        line: {
                                            color: 'rgb(8,48,107)',
                                            width: 1.5
                                        }
                                    }
                                }
                            ]}
                            layout={{
                                width: 900,
                                height: 450,
                                title: 'Top 10 ETFs Price Distribution',
                                xaxis: { title: 'ETF Symbol' },
                                yaxis: { title: 'Price ($)' },
                                bargap: 0.1
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stock;