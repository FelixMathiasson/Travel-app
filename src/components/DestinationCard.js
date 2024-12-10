//  A card component to display destination information, like images, name, and description.
import React from "react";
import { useNavigate } from "react-router-dom";

import "./DestinationCard.css";

const DestinationCard = ({ name, image, description }) => {
    const navigate = useNavigate();
    const handleBookNow = () => {
        navigate(`/booking?destination=${name}`); // Navigate to booking page with destination as a query parameter
      };
    return (
    <div className="destination-card">
      <img src={image} alt={name} className="destination-image" />
      <h2 className="destination-name">{name}</h2>
      <p className="destination-description">{description}</p>
      <button className="book-now-button" onClick={handleBookNow}>
        Book Now
      </button>    
    </div>
  );
};

export default DestinationCard;
