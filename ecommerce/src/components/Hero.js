import React from "react";
import Button from '@mui/material/Button';
import './Hero.css';
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="sec-a">
          <h1 className="sec-b">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="sec-c">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          
        </div>
        <div className="images">
          <img
            className="hero-image"
            alt="hero"
            src="https://dummyimage.com/500x400"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
