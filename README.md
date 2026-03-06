# Secure Task Manager API

## Project Overview
Secure Task Manager API is a full-stack backend-focused project built for internship assignment submission.

It demonstrates secure authentication, role-based authorization, task CRUD operations, and frontend integration.

---

## Features

### Backend Features
- User Registration API
- User Login API
- Password Hashing using bcrypt
- JWT Authentication
- Role-Based Access Control (User / Admin)
- Task CRUD Operations
- Protected Routes
- API Versioning
- MongoDB Database Integration
- Error Handling
- Validation-ready modular structure

### Frontend Features
- Register User
- Login User
- Protected Dashboard
- Create Task
- Load Tasks
- Success/Error Message Display

---

## Backend Technologies
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- CORS

---

## Frontend Technologies
- React.js

---

## Project Structure

Secure Task Manager API  
│  
├── backend  
│   ├── config  
│   ├── controllers  
│   ├── middleware  
│   ├── models  
│   ├── routes  
│   ├── server.js  
│  
├── frontend  
│   ├── src  
│   ├── public  

---

## API Routes

### Authentication Routes
- POST /api/v1/auth/register
- POST /api/v1/auth/login

### Task Routes
- POST /api/v1/tasks
- GET /api/v1/tasks
- PUT /api/v1/tasks/:id
- DELETE /api/v1/tasks/:id

### Admin Route
- GET /api/v1/admin/users

---

## Setup Instructions

### Backend Setup
cd backend  
npm install  
npm run dev  

### Frontend Setup
cd frontend  
npm install  
npm start  

---

## Scalability Note

The project uses modular backend architecture.

Future scalability can include:
- Microservices separation
- Redis caching
- Docker deployment
- Load balancing
- Advanced logging

---

## Security Practices
- Password hashing with bcrypt
- JWT-based authentication
- Protected routes
- Role-based authorization
- CORS enabled

---

## Author
Internship Assignment Submission