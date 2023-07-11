import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Corrected line

  const handleLoginClick = () => {
    navigate("/Login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="home">
      <header>
        <h1>Welcome to the login authentication system</h1>
      </header>
      <div className="image">
        <img
          src="https://www.teleimpiantisrl.net/wp-content/uploads/2018/04/avatar_circle_blue_512dp.png"
          alt="image"
        />
      </div>
      <div className="buttons">
        <div className="button1" onClick={handleLoginClick}>
          <h2>LOGIN</h2>
        </div>
        <div className="button1" onClick={handleSignupClick}>
          <h2>SIGN UP</h2>
        </div>
      </div>
      <footer>Developed by Abhishek DN.</footer>
    </div>
  );
}

export default Home;
