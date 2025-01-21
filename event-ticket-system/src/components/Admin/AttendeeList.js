import React from "react";

const AttendeeList = ({ attendees }) => {
  return (
    <div>
      <h2>Attendee List</h2>
      <ul>
        {attendees.map((attendee, index) => (
          <li key={index}>{attendee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AttendeeList;
