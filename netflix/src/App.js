import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/Signin" element={<Signin />} />
        <Route exact path="/Profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;