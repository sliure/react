import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ image, title }) => {
  return (
    <div className="container">
      <img className="image" src={image} alt={title} />
      <div className="nav">
        <Link to="/">Main</Link>
        <Link to="/mywork">My Work</Link>
        <Link to="/market">Market</Link>
        <Link to="/news">News</Link>
        <Link to="/about">About me</Link>
        <Link to="/contact">Contact me</Link>
      </div>
    </div>
  );
};

export default Nav;

