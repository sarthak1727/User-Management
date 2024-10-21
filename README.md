# User Management Web Application

## Overview

This User Management Web Application is a full-stack solution for managing user accounts. It provides functionalities for user registration, login, and CRUD operations on user profiles. The application is built using React for the frontend, Node.js and Express for the backend, and MongoDB as the database.

## Features

- User Registration
- User Login/Logout
- View list of all users
- Edit user information
- Delete users
- Responsive design for desktop and mobile devices

## Technologies Used

### Frontend
- React
- Redux Toolkit for state management
- React Router for navigation
- Axios for API requests
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB for database
- Mongoose for object modeling
- JSON Web Tokens (JWT) for authentication

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0 or later)

## Installation and Setup

### Backend Setup

1. Navigate to the backend directory:
   
   cd user-management-backend
   

2. Install the required dependencies:
   
   npm install
   

3. Create a .env file in the root of the backend directory with the following content:
   
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   
   Replace your_mongodb_connection_string with your actual MongoDB connection string and your_jwt_secret_key with a secure secret key for JWT.

4. Start the backend server:
   
   npm start
   
   The server should now be running on http://localhost:5000.

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   
   cd user-management-frontend
   

2. Install the required dependencies:
   
   npm install
   

3. Start the frontend development server:
   
   npm start
   
   The frontend should now be accessible at http://localhost:3000.

## Usage

1. Open your web browser and go to http://localhost:3000.
2. You'll be greeted with the landing page. From here, you can choose to login or register.
3. After logging in or registering, you'll be redirected to the home page where you can view, edit, and delete user profiles.
4. Use the navigation menu to switch between different pages or to log out.

## API Endpoints

The backend provides the following API endpoints:

- POST /api/auth/register: Register a new user
- POST /api/auth/login: Login a user
- GET /api/users: Get all users (requires authentication)
- PUT /api/users/:id: Update a user (requires authentication)
- DELETE /api/users/:id: Delete a user (requires authentication)

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (git checkout -b feature/AmazingFeature)
3. Make your changes
4. Commit your changes (git commit -m 'Add some AmazingFeature')
5. Push to the branch (git push origin feature/AmazingFeature)
6. Open a Pull Request


## Contact

If you have any questions or feedback, please contact sarthak at [singhalsarthak777@example.com].
