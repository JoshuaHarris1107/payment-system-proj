import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import bcrypt from 'bcrypt.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    return usernameRegex.text(username);
  }

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

    // Hash the password using a strong hashing algorithm (e.g., bcryptjs)
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Replace 'storedHashedPassword' with the actual stored hash
    if (hashedPassword === 'storedHashedPassword') {
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
          <input type="text" id="username"   
value={username} onChange={(e) => setUsername(e.target.value)} required /><br />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password}   
onChange={(e) => setPassword(e.target.value)} required /><br />

          <button type="submit">Login</button>
      </form>
      {error   
&& <p>{error}</p>}
  </div>
);
}

root.render(<Login />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
