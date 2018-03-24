import React from "react";
import firebase from "./firebase";
import _ from "lodash";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: []
    };
    let db = firebase.database().ref("campaignImpressions");
    db.on("value", snapshot => {
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
    console.log(logArr);
  }

  render() {
    console.log("campaign report rendering");
    return (
      <div className="reporting">
        <ul />
      </div>
    );
  }
}

export default Admin;
