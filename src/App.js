import React, { Component } from "react";
import logo from "./blue-red-ball.jpg";
import BallImage from "./ball_image";
import { createCookie, getCookie } from "./cookie";
import { guid, randomColor } from "./util";
import "./App.css";

class App extends Component {
  render() {
    getCookie("guid")
      ? console.log(getCookie("guid"))
      : console.log("new user!");
    const ballColor = randomColor();
    createCookie("color", ballColor, 30);
    createCookie("guid", guid(), 30);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Brooklyn Ball Co Logo" />
          <h1 className="App-title">Welcome to Brooklyn Ball Co!</h1>
        </header>

        <BallImage ballColor={ballColor} />

        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
