import React from "react";
import Header from "../components/Header/Header";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Header />
      <main className="hero-section">
        <div className="hero-content">
          <h1>Welcome to our Database!</h1>
          <p>Explore our API</p>
        </div>
        <img
          className="hero-image"
          src="https://img.freepik.com/premium-photo/purple-plant-leaves-background-dark-vintage-tropical-pattern-wallpaper-generative-ai_788189-2956.jpg?w=2000"
          alt="image"
        />
      </main>
    </div>
  );
};

export default Main;

