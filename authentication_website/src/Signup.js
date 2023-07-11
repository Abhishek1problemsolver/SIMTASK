import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "./Api";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const navigate = useNavigate();
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== retypePassword) {
      setError('Passwords do not match');
      return;
    }
    if (!firstName || !lastName  || !email || !password || !retypePassword) {
      setError("Fill all fields");
      return;
    }
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/Loginsuccess");
    } catch (error) {
      console.log(error);
    }
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRetypePasswordVisibility = () => {
    setShowRetypePassword(!showRetypePassword);
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={`eye-icon ${showPassword ? 'visible' : ''}`}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="retypePassword">Retype Password:</label>
          <div className="password-input-container">
            <input
              type={showRetypePassword ? 'text' : 'password'}
              id="retypePassword"
              placeholder="Retype your password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
            />
            <span
              className={`eye-icon ${showRetypePassword ? 'visible' : ''}`}
              onClick={toggleRetypePasswordVisibility}
            >
              {showRetypePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
