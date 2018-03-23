import React from "react";
import blue from "./images/blue-ball.gif";
import red from "./images/red-ball.gif";

export default function BallImage(props) {
  const ballSrc = props.ballColor === "blue" ? blue : red;

  return (
    <section>
      <img src={ballSrc} alt="Ball Special Offer-- Just for YOU!" />
    </section>
  );
}
