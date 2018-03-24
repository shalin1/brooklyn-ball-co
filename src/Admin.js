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
      .ref("campaignImpressions")
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
    console.log("campaign report rendering");
    return (
      <ul className="reporting">
        {this.state.log.map(el => {
          return (
            <li key={el["key"]}>
              {el["color"]}, {el["user"]}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Admin;
