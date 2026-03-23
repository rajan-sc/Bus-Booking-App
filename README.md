# Bus Booking App

A Node.js backend application for a basic bus booking system built with Express.js, Sequelize (ORM), and MySQL. 

## Features

- **User Management**: Endpoints to handle user-related operations.
- **Bus Management**: Endpoints to manage bus details and schedules.
- **Booking System**: Endpoints to handle bus reservations mapping users to buses.

## Technology Stack

- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for Node.js routing.
- **Sequelize**: Promise-based Node.js ORM for MySQL.
- **MySQL2**: MySQL client for Node.js.
- **dotenv**: Module to load environment variables.

## Prerequisites

Make sure you have the following installed to run this project:
- Node.js
- MySQL Server

## Getting Started

### 1. Clone the project or install dependencies

Navigate to the project directory and install the required npm packages:

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory and add your MySQL database credentials:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=bus_booking_db
```

*(Ensure the database `bus_booking_db` or your configured database is created in your MySQL server before running the app).*

### 3. Run the Application

Start the server using `node`:

```bash
node app.js
```

The server will start running at `http://localhost:3000`. Upon successful launch, Sequelize will synchronize your models with the database, creating the necessary tables.

## Project Structure

```
.
├── app.js               # Entry point of the application
├── routes/              # Express route definitions (User, Bus, Booking)
├── controller/          # Logic for Handling API requests
├── models/              # Sequelize database models
├── utils/               # Utility files, e.g., dbConnection.js
├── package.json         # Project metadata and dependencies
└── .env                 # Environment variables file (not tracked by Git)
```

## Available Endpoints (Overview)

- **Users**: `/users`
- **Buses**: `/buses`
- **Bookings**: `/bookings`

Check individual route files in the `/routes` directory for specific methods (GET, POST, etc.) handled.
