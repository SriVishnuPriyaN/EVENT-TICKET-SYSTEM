import React from "react";
import Dashboard from "../components/Admin/Dashboard";
import EventForm from "../components/Admin/EventForm";

const AdminPage = () => {
  const handleEventSubmit = (event) => {
    console.log("Event Created:", event);
  };

  return (
    <div>
      <Dashboard />
      <EventForm onSubmit={handleEventSubmit} />
    </div>
  );
};

export default AdminPage;
