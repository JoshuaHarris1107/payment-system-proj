import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/';
import logo from './images/logo.png';
import { createRoot } from 'react-dom/client';
// import { Link } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

function Index(){}

function Register(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [cellNumber, setCellNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here, e.g., send data to server
    console.log('Registration Data:', {firstName, lastName, idNumber, cellNumber});
  };

  return (
    <div>
      <h1>Please fill out the information below to register:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        {/* ... other form fields */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

function Login(){
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    try{
      const response = await
       fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      accountNumber, password }),
  });

  if(response.ok){
    console.log('Login successful!');
  }else{
    const data = await response.json();
    setError(data.message || 'Login failed');   

  } 
}catch (error){
  console.error('Login error:', error);
  setError('An error occurred during login.')
}
};

return(
  <div>
    <h1>Please enter your account number and password:</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="accountNumber">Account Number:</label>
        <input
          type="number"
          id="accountNumber"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
    </form>
    {error && <p>{error}</p>}
  </div>
);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;