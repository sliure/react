import React from 'react';
import './Hero.css';

const Hero = ({ title, text, button, image }) => {
  return (
    <div className="hero-container">
      <img src={image} alt={image} className="hero-image" />
      <div className="hero-text">
        <h2>{title}</h2>
        <div>{text}</div>
        <button>{button}</button>
      </div>
    </div>
  );
};

export default Hero;

