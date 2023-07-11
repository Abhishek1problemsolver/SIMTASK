import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/Signin')
    } catch (error) {
      console.log(error.code, error.message);
      // Handle sign-out error
    }
  };
  const handleAvatarClick = () => {
    
    navigate("/profile");
  };
  
  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="NETFLIX"
      />
      <img 
        onClick={handleAvatarClick}
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="AVATAR"
      />
      <button className="nav__signout" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Navbar;
