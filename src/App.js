import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './About/About';
import Home from './Home/Home';
import Settings from './Settings/Settings';
import Table from './Table/Table';
import NavBar from './NavBar/Navbar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/About" element={<About />} />
        <Route path="/Table" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
