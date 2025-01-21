import React, { useState } from "react";

const EventForm = ({ onSubmit }) => {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    time: "",
    venue: "",
    price: "",
    capacity: "",
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />
      <input name="time" type="time" onChange={handleChange} />
      <input name="venue" placeholder="Venue" onChange={handleChange} />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} />
      <input name="capacity" type="number" placeholder="Capacity" onChange={handleChange} />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
