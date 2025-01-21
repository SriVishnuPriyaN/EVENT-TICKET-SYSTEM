import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Event Ticket System</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user">Book Tickets</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
