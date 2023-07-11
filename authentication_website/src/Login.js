import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { firebaseAuth } from './Api'; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission and page reload
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/Loginsuccess");
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      return;
    }
  };

  const handleRefresh = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (error) {
      setError("Invalid email or password. Please try again.");
      handleRefresh();
      return;
    }
  }, [error]);

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form className='login-form' onSubmit={handleLogin}>
        {error && <p className="error-message">{error}</p>}
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <div className='password-input-container'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              placeholder='Enter your password'
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
        <div className="button-container">
          <button className='login-button' type='submit'>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
