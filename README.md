# Real-Time-ETF-Price-Trend-Tracker
A React-based web application designed to help users track Exchange Traded Funds (ETFs) with ease. The app features a simple and intuitive interface, allowing users to view real-time price trends of various ETFs.

# Overview

This project is a React component that visualizes stock market data using Plotly.js. It fetches data from the Financial Modeling Prep API and displays ETF (Exchange-Traded Fund) prices as a line chart. The component is designed to be simple and easy to integrate into any React application.

# Purpose

The purpose of this project is to allow for easy insightful information extraction from live Exhange-Traded Funds for various groups.


# Features

Fetches ETF data from Financial Modeling Prep API.
Visualizes ETF price trends using Plotly.js.
Displays a line chart with markers for each ETF symbol and price.


# Prerequisites

Node.js (v14 or later)
npm (v6 or later) or yarn (v1 or later)


# Getting Started

Create new react project

    npx create-react-app stmarket

Clone git repository

    git clone https://github.com/your-username/your-repo.git

    cd your-repo

    npm install
    or
    yarn install

    npm install react-plotly.js plotly.js
    or
    yarn add react-plotly.js plotly.js

    npm install react-router-dom


MAKE SURE TO PLACE COMPONENTS and CONSTANTS folders inside src folder for your project.

REPLACE the App.js from this git with the one you have.


API

Head over to Financial Modeling Prep ("https://intelligence.financialmodelingprep.com/pricing-plans?couponCode=coinmonks&utm_campaign=coinmonks24&utm_medium=medium&utm_source=medium") website to create an API key for free.
Add your API key in Stock.js file "YOUR API KEY HERE"


Go to "http://localhost:3000" to view the ETF Price Trend Tracker
