import React from "react";
import DestinationCard from "../components/DestinationCard";

const destinations = [
  {
    name: "New York",
    image: "/assets/newYork.jpg",
    desc: "The bustling metropolis that never sleeps, offering iconic landmarks like Times Square, Central Park, and the Statue of Liberty.",
  },
  {
    name: "Nice",
    image: "/assets/Nice.jpg",
    desc: "A stunning coastal city on the French Riviera, known for its azure waters, elegant promenades, and Mediterranean charm.",
  },
  {
    name: "Stockholm",
    image: "/assets/Stockholm.jpg",
    desc: "The capital of Sweden, a blend of modern design and historic charm, set on an archipelago of 14 islands connected by bridges.",
  },
  {
    name: "Phuket",
    image: "/assets/thailand.jpg",
    desc: "A tropical paradise in Thailand, famous for its crystal-clear waters, vibrant nightlife, and stunning beaches.",
  },
  {
    name: "Tokyo",
    image: "/assets/tokyo.jpg",
    desc: "A mesmerizing city where futuristic skyscrapers meet ancient temples, offering world-class dining and vibrant culture.",
  },
  {
    name: "Barcelona",
    image: "/assets/barcelona.jpg",
    desc: "A vibrant city in Spain known for Gaudí's architectural masterpieces, lively streets, and Mediterranean beaches.",
  },
];

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
