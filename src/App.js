import React from "react";
import Home from "./Home";
import Admin from "./Admin";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Admin} />
    </div>
  </Router>
);

export default App;
