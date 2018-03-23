import React, { Component } from "react";
import logo from "./blue-red-ball.jpg";
import BallImage from "./ball_image";
import { setCookie, getCookie } from "./cookie";
import { guid, randomColor } from "./util";
import "./App.css";

class App extends Component {
  render() {
    let ballColor;

    if (getCookie("guid") && getCookie("color")) {
      console.log(`user id: ${getCookie("guid")}`);
      ballColor = getCookie("color");
    } else {
      console.log("new user!");
      ballColor = randomColor();
      setCookie("guid", guid(), 30);
      setCookie("color", ballColor, 30);
    }

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
