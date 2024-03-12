import React from "react";
import { BrowserRouter as Router, Link, Route , Routes } from "react-router-dom";
const Routing = () => {
  return (
    <React.Fragment>
      <Router>
        <Link to="/home">Home Page</Link>
        <Link to="/about">About Page</Link>
        <Routes>
          <Route path="/home" element={<Home/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
        </Routes>
       
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
