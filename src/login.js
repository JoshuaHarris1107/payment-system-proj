import React, { useState } from 'react';

function Login() {
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await
 fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accountNumber, password }),
      });

      if (response.ok) {
        // Successful login, redirect or update session state
        console.log('Login successful!');
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login.');
    }
  };

  return (
    <div>
      <h1>Please enter your account number and password:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="number"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;