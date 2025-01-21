import React from "react";
import QRCode from "qrcode.react";

const BookingConfirmation = ({ booking }) => {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Event: {booking.event.title}</p>
      <p>Booked by: {booking.name}</p>
      <QRCode value={booking.id} />
    </div>
  );
};

export default BookingConfirmation;
