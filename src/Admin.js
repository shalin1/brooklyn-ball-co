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
    const totalRedImpressions = totals[0] ? totals[0].Red : "loading";
    const totalBlueImpressions = totals[0] ? totals[0].Blue : "loading";

    const conversions = this.state.log.filter(el => el.key === "conversions");
    const totalRedConversions = conversions[0] ? conversions[0].Red : "loading";
    const totalBlueConversions = conversions[0]
      ? conversions[0].Blue
      : "loading";

    return (
      <div>
        <Header />
        <div className="admin-console">
          <h1>Welcome back, Admin!</h1>
          <h2>Blue/Red A-B Campaign Report</h2>
          <ul className="reporting">
            <li className="log">
              Total red ball ad impressions: {totalRedImpressions}
            </li>
            <li className="log">
              Total red ball ad conversions: {totalRedConversions}
            </li>
            <li className="log">
              Red ball advert clickthrough rate: %{Math.round(
                totalRedConversions / totalRedImpressions * 10000
              ) / 100}
            </li>

            <li className="log">
              Total blue ball ad impressions: {totalBlueImpressions}
            </li>
            <li className="log">
              Total blue ball ad conversions: {totalBlueConversions}
            </li>
            <li className="log">
              Blue ball advert clickthrough rate: %{Math.round(
                totalBlueConversions / totalBlueImpressions * 10000
              ) / 100}
            </li>

            <li className="log">
              Total blue ball ad conversions: {totalBlueConversions}
            </li>
            <li className="log">
              Total blue ball ad conversions: {totalBlueConversions}
            </li>
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
                  <li className="log" key={el["key"]}>
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
