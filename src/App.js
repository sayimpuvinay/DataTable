import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import About from './About';
import Home from './Home';
import Settings from './Settings';
import Table from './Table';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        'Content-Type': 'application/json',
      };

      const body = {
        token: {
          session_id: '84ea4a6f-af71-4924-bad2-99065cdac45f',
          user_id: 31696,
          user_name: 'athummal@cswg.com',
          user_name_id: 'athummal',
          name: 'Anudeep Thummalapalli',
        },
        key_word: 'sales',
        filter_string: '',
        dataviz_level: 'level_1',
        yml_type: 'data_viz',
        appl_name: 'default appl',
      };

      try {
        const response = await axios.post(
          'https://devcsapim.cswg.com/dplui/1.0/data_viz',
          body,
          { headers }
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const renderTable = () => {
    if (!data) {
      return <div>Loading...</div>;
    }

    const { column_names, data: tableData } = data;

    if (!tableData || tableData.length === 0) {
      return <div>No data available.</div>;
    }

    return (
      <table>
        <thead>
          <tr>
            {column_names.map((columnName) => (
              <th key={columnName}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              {column_names.map((columnName) => (
                <td key={rowData[columnName]}>{rowData[columnName]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/Home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Settings" className="nav-link">Settings</Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      {error && <div className="error">Error: {error.message}</div>}
      {renderTable()}
    </div>
  );
}

export default App;
