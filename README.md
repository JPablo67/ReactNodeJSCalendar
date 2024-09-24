# ReactNodeJSCalendar
# Appointment Scheduler

This is a full-stack application for scheduling and managing appointments. It includes a React frontend and a Node.js backend with MongoDB for data storage.

## Features

- Create, view, and delete appointments
- Display appointments in a calendar view
- Responsive design using Material-UI

## Technologies Used

- Frontend: React, Material-UI, React Big Calendar
- Backend: Node.js, Express
- Database: MongoDB

## Installation

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/appointment-scheduler.git
    cd appointment-scheduler/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the form to create new appointments.
3. View and manage appointments in the calendar view.

## API Endpoints

- `POST /api/appointments`: Create a new appointment
- `GET /api/appointments`: Get all appointments
- `DELETE /api/appointments/:id`: Delete an appointment by ID

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License

This project is licensed under the MIT License.
