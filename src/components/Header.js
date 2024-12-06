import React from "react";
import "./Header.css"; 
import headerBackground from "../assets/headerBackground.jpg";

const Header = () => {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${headerBackground})`,
        backgroundSize: "contain", // Show the entire image
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff", // Fallback color for blank areas
      }}
    >
      <div className="header-content">
        <h1 className="header-title">Explore the World</h1>
        <p className="header-description">
          Find the best destinations and experiences for your next adventure.
        </p>
        <button className="header-button">Start Booking</button>
      </div>
    </header>
  );
};

export default Header;
