import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/:selectedDestination" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
