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
        <header>
          <img src={logo} className="App-logo" alt="Brooklyn Ball Co Logo" />
          <h2 className="App-title">Welcome to Brooklyn Ball Co!</h2>
        </header>
        <div className="body">
          <aside>
            <p className="body-copy">
              Now! For a limited time only!
              <br />
              Brooklyn Ball Co™ has got a deal for you!
            </p>
            <h1>Deluxe {this.state.color} Balls</h1>
            <p className="body-copy">for the low, low price of only</p>
            <h1>{this.state.color == "Red" ? "$499.99" : "$99.99"}!!!</h1>
          </aside>
          <Ball color={this.state.color} user={this.state.user} />
        </div>
        <footer>
          <Link className="Admin" to="/admin">
            Admin
          </Link>
        </footer>
      </div>
    );
  }
}

export default Home;
