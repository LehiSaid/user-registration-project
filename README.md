# User Registration Project

A full-stack web application for user registration and management, built with **React, Node.js, Express, Prisma ORM, and MongoDB**.

The application provides a responsive interface where users can create, view, update, and delete registrations. The frontend communicates with a REST API connected to a MongoDB database.

## Live Demo

* **Frontend:** [View Live Application](https://user-registration-project-phi.vercel.app/)
* **Backend API:** [Access API](https://user-registration-api-lkzu.onrender.com)
* **Repository:** [GitHub Repository](https://github.com/LehiSaid/user-registration-project)

> **Note:** The backend is hosted on Render's free tier. After a period of inactivity, the service may go to sleep. The first request can take a little longer while the server starts.

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

### Deployment

* Vercel — Frontend hosting
* Render — Backend hosting
* MongoDB Atlas — Database hosting

## Features

* Create new user registrations.
* Display registered users.
* Edit existing user information.
* Delete users.
* Validate form fields before submission.
* Display success and error feedback messages.
* Show loading states while retrieving user data.
* Handle API connection errors with a retry option.
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
* A MongoDB database

### 1. Clone the repository

```bash
git clone https://github.com/LehiSaid/user-registration-project.git
cd user-registration-project
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and configure your MongoDB connection:

```env
DATABASE_URL="your_mongodb_connection_string"
```

Generate the Prisma Client:

```bash
npx prisma generate
```

Start the backend:

```bash
npm start
```

### 3. Set up the frontend

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

The frontend will usually be available at:

```text
http://localhost:5173
```

> Make sure the backend is running before using the application. The API URL in the frontend environment file must match the port configured in your backend.

## Learning Objectives

This project helped me develop practical skills in:

* Full-stack web development.
* React component architecture.
* State management with React Hooks.
* REST API development and integration.
* Database operations using Prisma ORM and MongoDB.
* CRUD operations.
* Frontend and backend integration.
* Application deployment.
* Git and GitHub version control.

## Author

**Lehi da Silva Said**

Full-Stack Developer in training.

* GitHub: [@LehiSaid](https://github.com/LehiSaid)
* LinkedIn: [Lehi Said](https://linkedin.com/in/lehisaid)

---

*This project is part of my professional development portfolio.*
