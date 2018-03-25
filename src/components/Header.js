import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/blue-red-ball.jpg";

const Header = props => {
  return (
    <header>
      <Link to="/">
        <img src={logo} className="App-logo" alt="Brooklyn Ball Co Logo" />
      </Link>
      <h2 className="App-title">Welcome to Brooklyn Ball Co!</h2>
    </header>
  );
};

export default Header;
