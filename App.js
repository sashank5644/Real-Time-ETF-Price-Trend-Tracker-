import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Stock from './Components/Stock';
import HomePage from './Components/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </Router>
  );
}

export default App;
