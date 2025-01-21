import React, { useState } from "react";

const UserPage = () => {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    event: "",
    venue: "",
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ticket booked successfully for ${booking.name}`);
  };

  return (
    <div className="container">
      <h2>Book Your Tickets</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={booking.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Your Email"
          value={booking.email}
          onChange={handleChange}
          required
        />
        <input
          name="event"
          placeholder="Event Name"
          value={booking.event}
          onChange={handleChange}
          required
        />
        <input
          name="venue"
          placeholder="Venue"
          value={booking.venue}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
};

export default UserPage;

