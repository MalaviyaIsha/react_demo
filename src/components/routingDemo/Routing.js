import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
const Routing = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Router>
    </React.Fragment>
  );
};

const Home = () => {
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <p>Welcome to Home page of website</p>
    </React.Fragment>
  );
};

const About = () => {
  return (
    <React.Fragment>
      <h1>About Page</h1>
      <p>Welcome to About page of website</p>
    </React.Fragment>
  );
};
export default Routing
