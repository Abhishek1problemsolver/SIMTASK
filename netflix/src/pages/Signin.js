import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        navigate("/Home");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      setError("Invalid email or password. Please try Again ...");
    }
  };

  return (
    <div className="signpage">
      <div className="headera">
        <div className="logo">
          <img
            className="nava__logo"
            src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="NETFLIX"
          />
        </div>
      </div>
      <div className="form">
        <div className="title">
          <h3>Sign In</h3>
        </div>
        <div className="form_components">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {error && <p className="error-message">{error}</p>}
          <button className="buttons" onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
