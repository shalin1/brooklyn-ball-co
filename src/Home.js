import React from "react";
import Ball from "./Ball";
import Header from "./Header";
import Footer from "./Footer";
import * as cookie from "./cookie";
import { guid, randomColor } from "./util";

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
        <Header />
        <div className="body">
          <aside>
            <p className="body-copy">
              Now! For a limited time only!
              <br />
              Brooklyn Ball Co™ has got a deal for you!
            </p>
            <h1>Deluxe {this.state.color} Balls</h1>
            <p className="body-copy">for the low, low price of only</p>
            <h1>{this.state.color === "Red" ? "$499.99" : "$99.99"}!!!</h1>
          </aside>
          <Ball color={this.state.color} user={this.state.user} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
