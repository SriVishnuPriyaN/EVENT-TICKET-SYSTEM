import React from "react";

const EventList = ({ events, onBook }) => {
  return (
    <div>
      <h2>Available Events</h2>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>Venue: {event.venue}</p>
          <button onClick={() => onBook(event)}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
