# User Registration Project

A full-stack web application for user registration and management, developed with React, Node.js, Express, Prisma ORM, and MongoDB.

The project allows users to create, view, edit, and delete registered users through a responsive interface connected to a REST API.

## Technologies

### Frontend

* React
* JavaScript
* Vite
* React Router
* Axios
* Styled Components
* CSS

### Backend

* Node.js
* Express.js
* Prisma ORM
* MongoDB
* REST API

## Features

* Create new user registrations.
* Display a list of registered users.
* Edit existing user information.
* Delete users with confirmation.
* Validate form fields before submission.
* Display success and error feedback messages.
* Integrate frontend and backend through HTTP requests.
* Store user information in MongoDB.

## Project Structure

```text
user-registration-project/
│
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   └── ListUsers/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
│
├── .gitignore
└── README.md
```

## API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| GET    | `/usuarios`     | Retrieve all users      |
| POST   | `/usuarios`     | Create a new user       |
| PUT    | `/usuarios/:id` | Update an existing user |
| DELETE | `/usuarios/:id` | Delete a user           |

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB database

### 1. Clone the repository

```bash
git clone https://github.com/LehiSaid/user-registration-project.git
```

### 2. Set up the backend

```bash
cd user-registration-project/backend
npm install
```

Configure your MongoDB connection string in the backend environment file:

```env
DATABASE_URL="your_mongodb_connection_string"
```

**Important:** Never commit your `.env` file or expose database credentials in your repository.

Start the backend:

```bash
npm start
```

### 3. Set up the frontend

Open another terminal:

```bash
cd user-registration-project/frontend
npm install
npm run dev
```

The frontend development server will provide a local URL, usually:

```text
http://localhost:5173
```

## Learning Objectives

This project was developed to strengthen practical skills in:

* Full-stack web development.
* React component architecture.
* State management with React Hooks.
* REST API development and integration.
* Database operations using Prisma ORM and MongoDB.
* CRUD functionality.
* Git and GitHub version control.

## Author

**Lehi da Silva Said**

Full-Stack Developer in training.

* GitHub: [@LehiSaid](https://github.com/LehiSaid)
* LinkedIn: [Lehi Said](https://linkedin.com/in/lehisaid)

---

*This project is part of my professional development portfolio.*
