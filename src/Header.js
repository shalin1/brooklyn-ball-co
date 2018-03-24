import React from "react";
import logo from "./images/blue-red-ball.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} className="App-logo" alt="Brooklyn Ball Co Logo" />
      <h2 className="App-title">Welcome to Brooklyn Ball Co!</h2>
    </header>
  );
};

export default Header;
