import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home'
import Login from './Login'
import Loginsuccess from './Loginsuccess';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Loginsuccess" element={<Loginsuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
