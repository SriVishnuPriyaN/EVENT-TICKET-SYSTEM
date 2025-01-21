import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2><b>Welcome to Event Ticket System</b></h2>
        <p>Discover and book tickets</p>
        <Link to="/user">
          <button className="sparkle-button">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
