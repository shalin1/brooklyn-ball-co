import React from "react";
import firebase from "./firebase";
import blue from "./images/blue-ball.gif";
import red from "./images/red-ball.gif";

class Ball extends React.Component {
  logImpression() {
    const _this = this;
    setTimeout(function() {
      const ref = firebase.database().ref("impressions");
      const impression = {
        user: _this.props.user,
        color: _this.props.color
      };
      ref.push(impression);
    }, 500);
  }

  render() {
    const ballSrc = this.props.color === "Blue" ? blue : red;

    return (
      <section>
        <img
          src={ballSrc}
          alt={`${this.props.color} Ball Special-- Just for YOU!`}
          onLoad={this.logImpression.bind(this)}
        />
      </section>
    );
  }
}

export default Ball;
