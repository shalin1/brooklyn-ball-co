import React from "react";
import firebase from "./firebase";
import blue from "./images/blue-ball.gif";
import red from "./images/red-ball.gif";

class BallImage extends React.Component {
  logImpression() {
    const _this = this;
    setTimeout(function() {
      const ballRef = firebase.database().ref("ballImageServes");
      const ballView = {
        color: _this.props.ballColor,
        user: _this.props.user
      };
      ballRef.push(JSON.parse(JSON.stringify(ballView)));
    }, 500);
  }

  render() {
    const ballSrc = this.props.ballColor === "Blue" ? blue : red;
    return (
      <section>
        <img
          src={ballSrc}
          alt={`${this.props.ballColor} Ball Special-- Just for YOU!`}
          onLoad={this.logImpression.bind(this)}
        />
      </section>
    );
  }
}

export default BallImage;
