import React from "react";
import firebase from "./firebase";
import _ from "lodash";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: []
    };
  }

  componentWillMount() {
    firebase
      .database()
      .ref("impressions")
      .on("value", snapshot => {
        this.parse(snapshot.val());
      });
  }

  parse(values) {
    let logValues = values;
    let logArr = _(values)
      .keys()
      .map(logKey => {
        let cloned = _.clone(logValues[logKey]);
        cloned.key = logKey;
        return cloned;
      })
      .value();

    this.setState({
      log: logArr
    });
  }

  render() {
    console.log(this.state.log);
    debugger;

    return (
      <ul className="reporting">
        {this.state.log.map(el => {
          let uid = el.key;
          let blueCount = el.Blue ? el.Blue : 0;
          let redCount = el.Red ? el.Red : 0;
          return (
            <li key={el["key"]}>
              User #{uid} viewed blue ball image {blueCount} times, red ball
              image {redCount} times.
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Admin;
