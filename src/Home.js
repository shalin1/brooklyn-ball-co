import React from "react";
import logo from "./images/blue-red-ball.jpg";
import BallImage from "./ball_image";
import * as cookie from "./cookie";
import { guid, randomColor } from "./util";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./App.css";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      ballColor: cookie.get("guid"),
      user: cookie.get("color")
    };
  }

  componentWillMount() {
    let user = this.state.user;
    let color = this.state.ballColor;

    if (!user || !color) {
      user = guid();
      color = randomColor();
      this.setState({ ballColor: color, user: user });
      cookie.set("color", color, 30);
      cookie.set("guid", user, 30);
    }
  }

  render() {
    console.log("rendering");
    return (
      <div className="App">
        <header className="App-header">
          <Link className="App-title" to="/admin">
            Admin
          </Link>
          <img src={logo} className="App-logo" alt="Brooklyn Ball Co Logo" />
          <h1 className="App-title">Welcome to Brooklyn Ball Co!</h1>
        </header>
        <BallImage ballColor={this.state.ballColor} user={this.state.user} />
      </div>
    );
  }
}

export default Home;