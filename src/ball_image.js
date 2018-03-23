import React from "react";
import firebase from "./firebase";
import blue from "./images/blue-ball.gif";
import red from "./images/red-ball.gif";

class BallImage extends React.Component {
  handleImageLoaded() {
    const ballRef = firebase.database().ref("ballImageServes");
    const ballView = {
      color: this.props.ballColor,
      user: this.props.user
    };
    ballRef.push(JSON.parse(JSON.stringify(ballView)));
  }

  render() {
    const ballSrc = this.props.ballColor === "blue" ? blue : red;
    return (
      <section>
        <img
          src={ballSrc}
          alt="Ball Special Offer-- Just for YOU!"
          onLoad={this.handleImageLoaded.bind(this)}
        />
      </section>
    );
  }
}

export default BallImage;
