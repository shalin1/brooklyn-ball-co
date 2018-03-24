import React from "react";
import firebase from "./firebase";
import blue from "./images/blue-ball.gif";
import red from "./images/red-ball.gif";

class Ball extends React.Component {
  logImpression() {
    const ref = firebase.database().ref("impressions");
    ref
      .orderByChild("user")
      .equalTo(this.props.user)
      .on("value", snapshot => {
        const uid = snapshot.val();
        console.log(uid);
        if (uid) {
          console.log("existing user");
          this.updateUserImpression(ref);
        } else {
          console.log("logging new user");
          this.newUserImpression(ref, uid);
        }
      });
  }

  updateUserImpression(ref, uid) {
    const _this = this;
    setTimeout(function() {});
  }

  newUserImpression(ref) {
    const _this = this;
    setTimeout(function() {
      const newImpression = {
        user: _this.props.user,
        colorViews: {
          color: _this.props.color,
          views: 1
        }
      };
      ref.push(newImpression);
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
