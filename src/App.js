import React, { Component } from "react";
import logo from "./blue-red-ball.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Brooklyn Ball Co!</h1>
        </header>
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
