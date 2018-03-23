import React from "react";
import logo from "./images/blue-red-ball.jpg";
import BallImage from "./ball_image";
import * as cookie from "./cookie";
import { guid, randomColor } from "./util";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ballColor: "",
      user: ""
    };
  }

  componentWillMount() {
    let user = cookie.get("guid");
    let color = cookie.get("color");

    if (user && color) {
      this.setState({ ballColor: color, user: user });
    } else {
      user = guid();
      color = randomColor();
      this.setState({ ballColor: color, user: user });
      cookie.set("color", color, 30);
      cookie.set("guid", user, 30);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Brooklyn Ball Co Logo" />
          <h1 className="App-title">Welcome to Brooklyn Ball Co!</h1>
        </header>

        <BallImage ballColor={this.state.ballColor} user={this.state.user} />

        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
