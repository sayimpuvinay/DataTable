import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './About/About';
import Home from './Home/Home';
import Settings from './Settings/Settings';
import Table from './Table/Table';
import NavBar from './NavBar/Navbar';

function App() {
 
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/About" element={<About />} />
          <Route path="/Table" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
