import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import destinations from "../components/DestinationData.js";
import "./Booking.css";

const Booking = () => {
  const { selectedDestination } = useParams(); // This gets the destination if navigated from /destinations
  const [destination, setDestination] = useState(selectedDestination || "");
  const [dateTravel, setDateTravel] = useState("");
  const [dateReturn, setDateReturn] = useState("");
  const [travelers, setTravelers] = useState(1);

  const navigate = useNavigate();

  // Find the destination object by name
  const selectedDest = destinations.find(dest => dest.name === destination);

  const handleSubmit = (e) => {
    e.preventDefault();


  if (new Date(dateTravel) < new Date().setHours(0, 0, 0, 0)) { // Set the time to midnight for today's date
    alert("The travel date cannot be in the past.");
    return;
  }

    if (new Date(dateTravel) >= new Date(dateReturn)) {
      alert("The travel start date must be before the return date.");
      return;
    }

    alert(`Booking confirmed for ${destination} on ${dateTravel} to ${dateReturn} for ${travelers} traveler(s).`);
    navigate("/"); // redirect to home page
  };

  return (
    <div className="bookingContainer">
      {/* Set background image dynamically if selectedDest is available */}
      {selectedDest && (
        <div className="backgroundPicture" style={{ backgroundImage: `url(${selectedDest.image})` }}>
        </div>
      )}

      <div className="formContainer">
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
                <option value="" disabled>Select a destination</option>
                {destinations.map((dest) => (
                  <option key={dest.name} value={dest.name}>
                    {dest.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Select date for travel */}
          <div>
            <label htmlFor="dateTravel">Date of travel: </label>
            <input
              type="date"
              id="dateTravel"
              value={dateTravel}
              onChange={(e) => setDateTravel(e.target.value)}
              required
            />
          </div>

          {/* Select return date */}
          <div>
            <label htmlFor="dateReturn">Date of return: </label>
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

          {/* Submit Button */}
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
