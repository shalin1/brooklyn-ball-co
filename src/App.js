import React, { Component } from "react";
import logo from "./blue-red-ball.jpg";
import BallImage from "./ball_image";
import "./App.css";

class App extends Component {
  randomColor() {
    const colors = ["red", "blue"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  render() {
    const color = this.randomColor();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Brooklyn Ball Co Logo" />
          <h1 className="App-title">Welcome to Brooklyn Ball Co!</h1>
        </header>

        <BallImage ballColor={color} />

        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
