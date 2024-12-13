import React from "react";
import DestinationCard from "../components/DestinationCard.js";
import destinations from "../components/DestinationData.js";

const Destinations = () => {
  return (
    <div>
      <h1 className="discoverTitle">Discover Destinations</h1>
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            name={destination.name}
            image={destination.image}
            description={destination.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
