# Event Ticket Management System

A fully functional **Event Ticket Management System** built with React.js. This project enables users to browse and book events while providing administrators the ability to create and manage events effectively.

---

## **Features**

### User Functionality
- View all available events.
- See detailed information about events, including date, time, venue, and ticket price.
- Book tickets for events and receive a confirmation.

### Admin Functionality
- Create new events by providing necessary details like title, date, time, venue, capacity, and ticket price.
- View and manage attendee lists for each event.
- Monitor and manage all events through a dashboard.

---

## **Project Structure**

src/
├── components/
│   ├── Admin/
│   │   ├── Dashboard.js              # Admin dashboard for event management.
│   │   ├── EventForm.js              # Form for creating or editing events.
│   │   └── AttendeeList.js           # List of attendees for an event.
│   ├── User/
│   │   ├── EventList.js              # List of available events for users.
│   │   ├── EventDetails.js           # Detailed view of an event.
│   │   └── BookingConfirmation.js    # Confirmation of ticket booking.
│   ├── Navbar.js                     # Navigation bar for easy navigation.
│   └── Footer.js                     # Footer with copyright details.
├── pages/
│   ├── HomePage.js                   # Hero page with event overview and CTA.
│   ├── AdminPage.js                  # Admin panel for managing events.
│   ├── UserPage.js                   # User page for browsing events.
│   └── LoginPage.js                  # Login page for user authentication.
├── App.js                            # Main application component with routing.
├── index.js                          # Entry point for the React app.
├── index.css                         # Global styles for the application.



---

## **Technologies Used**
- **Frontend:** React.js, CSS
- **Routing:** React Router
- **Styling:** CSS with a dark theme (black background, pink and yellow accents)

---

## **Setup and Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/event-ticket-management-system.git
   cd event-ticket-management-system

