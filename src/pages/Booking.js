import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import destinations from "../components/DestinationData.js"
import "./Booking.css"

const Booking = () => {
  const { selectedDestination } = useParams(); // This gets the destination if navigated from /destinations
  const [destination, setDestination] = useState(selectedDestination || "");
  const [dateTravel, setDateTravel] = useState("");
  const [dateReturn, setDateReturn] = useState("");

  const [travelers, setTravelers] = useState(1);
  // console.log(selectedDestination); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (new Date(dateTravel) >= new Date(dateReturn)) {
      alert("The travel start date must be before the return date.");
      return;
    }

    alert(`Booking confirmed for ${destination} on ${dateTravel} to ${dateReturn} for ${travelers} traveler(s).`);
    navigate("/"); // Redirect to home TODO: fix a booking confirmed page
  };

  return (
    <div>
      <div className="backgroundPicture">
        
      </div>


      <div className="bookingTitle">
        <h1>{selectedDestination ? `Book Your Trip to ${selectedDestination}!` : "Book Your Next Adventure!"}</h1>
      </div>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}>
        {!selectedDestination && (
          <div>
            <label htmlFor="destination">Destination:</label>
            <select
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a destination
              </option>
              {destinations.map((destination) => (
              <option key={destination.name} value={destination.name}>
                {destination.name}
              </option>
            ))}
          </select>
          </div>
        )}
      
        {/* Select date for travel*/}
        <div>
          <label htmlFor="dateTravel">Date of travel: </label>
          <input
            type="date"
            id="dateTravel"
            value={dateTravel}
            onChange={(e) => setDateTravel(e.target.value)}
            required
          />
          <label htmlFor="dateReturn">Date of travel: </label>
          <input
            type="date"
            id="dateReturn"
            value={dateReturn}
            onChange={(e) => setDateReturn(e.target.value)}
            required
          />
        </div>

        {/* How many travelers */}
        <div>
          <label htmlFor="travelers">Number of Travelers:</label>
          <input
            type="number"
            id="travelers"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            min="1"
            required
          />
        </div>

        {/* Submit Button to book the adventure */}
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;