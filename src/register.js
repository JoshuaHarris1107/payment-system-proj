import React, { useState } from "react";
import Login from "./login";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [cellNumber, setCellNumber] = useState('');
      
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform registration logic here, e.g., send data to server
        console.log('Registration Data:', { firstName, lastName, idNumber, cellNumber });
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
export default Register;