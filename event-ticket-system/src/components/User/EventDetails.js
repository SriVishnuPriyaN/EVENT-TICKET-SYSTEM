import React from "react";

const EventDetails = ({ event }) => {
  return (
    <div>
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Venue: {event.venue}</p>
      <p>Price: {event.price}</p>
    </div>
  );
};

export default EventDetails;
