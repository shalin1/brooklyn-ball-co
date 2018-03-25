import React from "react";
import firebase from "../helpers/firebase";
import * as cookie from "../helpers/cookie";
import * as util from "../helpers/util";
import Header from "./Header";
import Ball from "./Ball";
import Footer from "./Footer";

import "../stylesheets/App.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      user: cookie.get("user"),
      color: cookie.get("color"),
      cartItems: parseInt(cookie.get("cartCount")) || 0
    };
  }

  componentWillMount() {
    if (!this.state.user || !this.state.color) {
      this.initializeNewUser();
    }
  }

  handleClick() {
    this.setState({ cartItems: this.state.cartItems + 1 });
    cookie.set("cartCount", this.state.cartItems + 1);
    firebase
      .database()
      .ref(`impressions/conversions/${this.state.color}`)
      .transaction(currentValue => {
        return (currentValue || 0) + 1;
      });
  }

  initializeNewUser() {
    const user = util.guid();
    const color = util.randomColor();
    this.setState({ color: color, user: user });
    cookie.set("color", color);
    cookie.set("user", user);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="cart">{this.state.cartItems} balls in cart</div>
        <div className="body">
          <aside>
            <p className="body-copy">
              Now! For a limited time only!
              <br />
              <br />
              Brooklyn Ball Co™ has got a deal for you!
            </p>
            <h1>Deluxe {this.state.color} Balls</h1>
            <p className="body-copy">for the low, low price of only</p>
            <h1>{this.state.color === "Red" ? "$499.99" : "$99.99"}!!!</h1>
            <button className="CTA" onClick={this.handleClick.bind(this)}>
              Click Here to add to cart!
            </button>
          </aside>
          <Ball color={this.state.color} user={this.state.user} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
