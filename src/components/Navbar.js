import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Travel App</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/destinations" className="navbar-link">Destinations</Link>
        </li>
        <li>
          <Link to="/booking" className="navbar-link">Booking</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
