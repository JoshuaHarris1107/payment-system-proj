import React, { useNavigate } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import App from './App.js'
import Home from './index.js';
import Register from './register.js';
const bcrypt = require('bcryptjs');

const Login = () => {
    const [username, setUsername] = useNavigate('');
    const [password, setPassword] = useNavigate('');
    const [error, setError] = useNavigate('');
  
    const validateUsername = (username) => {
      const usernameRegex = /^[a-zA-Z0-9_]+$/;
      return usernameRegex.test(username);
    };
  
    const validatePassword = (password) => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!validateUsername(username)) {
        setError('Invalid username. Please enter a username containing letters, numbers, and underscores.');
        return;
      }
  
      if (!validatePassword(password)) {
        setError('Invalid password. Please enter a password with at least 8 characters, including one uppercase, one lowercase, one number, and one special character.');
        return;
      }
  
      // Hash the password on the server-side using bcrypt
      // Send the username and hashed password to the server for verification
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      const data = await response.json();
  
      if (data.success) {
        // Successful login, redirect or proceed to the next page
        alert('Login successful!');
      } else {
        setError('Invalid username or password.');
      }
    };
  
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br />
  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
  
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  };
export default Login;