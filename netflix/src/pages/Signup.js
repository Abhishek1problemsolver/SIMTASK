import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/Signin");
  });

  const handleSignInClick = () => {
    navigate("/signin");
  };
  

  return (
    <div className="signupapage">
      <div className="headera">
        <div className="logo">
          <img
            className="nava__logo"
            src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="NETFLIX"
          />
        </div>
        <div>
          <button className="btna" onClick={handleSignInClick}>Sign In</button>
        </div>
      </div>
      <div className="body">
        <div className="text">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h6>
            Ready to watch? Enter your email to create or restart membership.
          </h6>
        </div>
        <div className="forma">
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
            name="email"
            value={formValues.email}
          />
          
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="password"
              value={formValues.password}
            />
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
