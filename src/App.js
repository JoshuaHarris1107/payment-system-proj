import React from 'react';
import Navbar from "./Navbar.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login.js';
import Home from './index';
import Register from './components/register.html';
import logo from './images/logo.png';

const bcrypt = require('bcryptjs');

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="./login.js" element={<Login />} />
        <Route path="register.js" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;