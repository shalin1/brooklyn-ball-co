import React from "react";
import logo from "./images/blue-red-ball.jpg";
import Ball from "./Ball";
import * as cookie from "./cookie";
import { guid, randomColor } from "./util";
import { Link } from "react-router-dom";

import "./App.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      user: cookie.get("user"),
      color: cookie.get("color")
    };
  }

  componentWillMount() {
    if (!this.state.user || !this.state.color) {
      this.initializeNewUser();
    }
  }

  initializeNewUser() {
    const user = guid();
    const color = randomColor();
    this.setState({ color: color, user: user });
    cookie.set("color", color);
    cookie.set("user", user);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link className="App-title" to="/admin">
            Admin
          </Link>
          <img src={logo} className="App-logo" alt="Brooklyn Ball Co Logo" />
          <h1 className="App-title">Welcome to Brooklyn Ball Co!</h1>
        </header>
        <Ball color={this.state.color} user={this.state.user} />
      </div>
    );
  }
}

export default Home;
