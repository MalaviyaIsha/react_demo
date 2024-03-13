import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <React.Fragment>
      <Link to="/">Home Page</Link>
      <Link to="/about">About Page</Link>
    </React.Fragment>
  
  )
}
export default Navbar;
