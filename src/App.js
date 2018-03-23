import React, { Component } from "react";
import fire from "./fire";
import logo from "./images/blue-red-ball.jpg";
import BallImage from "./ball_image";
import { setCookie, getCookie } from "./cookie";
import { guid, randomColor } from "./util";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      ballColor: "",
      currentUser: ""
    };
  }

  componentDidMount() {
    let user = getCookie("guid");
    let color = getCookie("color");

    if (user && color) {
      console.log(`user id: ${user}, color: ${color}`);
      this.setState({ ballColor: color, currentUser: user });
    } else {
      console.log("new user!");
      user = guid();
      color = randomColor();
      this.setState({ ballColor: color, currentUser: user });
      setCookie("color", color, 30);
      setCookie("guid", user, 30);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Brooklyn Ball Co Logo" />
          <h1 className="App-title">Welcome to Brooklyn Ball Co!</h1>
        </header>

        <BallImage ballColor={this.state.ballColor} />

        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
