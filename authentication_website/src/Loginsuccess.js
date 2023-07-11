
import "./Logs.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Loginsuccess = () => {
  const navigate=useNavigate();

  const handlecontinue = () => {
    navigate("/");
  };
  return (
    <div className='contains'>
      <h1>Login Successful</h1>
      <p> You have been Registered Successfully....</p>
      <button className="btn"onClick={ handlecontinue }>CONTINUE</button>
    </div>
  );
};

export default Loginsuccess;
