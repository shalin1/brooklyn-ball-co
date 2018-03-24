import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import firebase from "./firebase";
import _ from "lodash";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: ["loading"]
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
    const totals = this.state.log.filter(el => el.key === "totals");
    const totalRed = totals[0] ? totals[0].Red : "loading";
    const totalBlue = totals[0] ? totals[0].Blue : "loading";

    return (
      <div>
        <Header />
        <div className="admin-console">
          <h1>Welcome back, Admin!</h1>
          <h2>Blue/Red A-B Campaign Report</h2>
          <ul className="reporting">
            <li>Total red ball ad impressions: {totalRed}</li>
            <li>Total blue ball ad impressions: {totalBlue}</li>
          </ul>

          <h2>User Report</h2>
          <ul className="reporting">
            {this.state.log === ["loading"] ? (
              <li>'loading report...'</li>
            ) : (
              this.state.log.map(el => {
                const uid = el.key;
                const blueCount = el.Blue ? el.Blue : 0;
                const redCount = el.Red ? el.Red : 0;

                return (
                  <li className="visit-log" key={el["key"]}>
                    User #{uid}
                    <br />
                    viewed blue ball image {blueCount} times
                    <br />
                    viewed red ball image {redCount} times
                    <br />
                  </li>
                );
              })
            )}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Admin;
