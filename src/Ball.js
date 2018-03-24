import React from "react";
import firebase from "./firebase";
import blue from "./images/blue-ball.gif";
import red from "./images/red-ball.gif";

class Ball extends React.Component {
  logImpression() {
    firebase
      .database()
      .ref(`impressions/${this.props.user}/${this.props.color}`)
      .transaction(currentValue => {
        return (currentValue || 0) + 1;
      });
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
