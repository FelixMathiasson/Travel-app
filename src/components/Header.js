import React from "react";
import "./Header.css"; 
import headerBackground from "../assets/headerBackground.jpg";
import Booking from "../pages/Booking";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
    const handleBookNow = () => {
        navigate(`/booking`); // Navigate to booking page with destination as a query parameter
      };
  return (
    
    <header
      className="header"
      style={{
        backgroundImage: `url(${headerBackground})`, // Use the imported image
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="header-content">
        <h1 className="header-title">Explore the World</h1>
        <p className="header-description">
          Find the best destinations and experiences for your next adventure.
        </p>
        <button className="header-button" onClick={handleBookNow}>Start Booking</button>
      </div>
    </header>
  );
};

export default Header;