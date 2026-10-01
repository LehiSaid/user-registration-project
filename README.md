# User Registration Project

A full-stack web application for user registration and management, built with React on the frontend and Node.js/Express on the backend. The application uses Prisma ORM to communicate with a MongoDB database.

## 🚀 Overview

This project was developed as a practical Full Stack application to strengthen my skills in building modern web applications, creating REST APIs, integrating a frontend with a backend, and working with databases.

The application allows users to be registered, listed, updated through the REST API, and deleted.

## ✨ Features

* User registration
* User listing
* User deletion
* User update through the REST API
* RESTful API architecture
* MongoDB database integration
* Responsive user interface
* Client-side routing
* Frontend and backend separation
* Reusable React components
* Styled components
* API communication using Axios

## 🛠️ Technologies

### Frontend

* React
* Vite
* JavaScript
* JSX
* React Router
* Axios
* Styled Components
* PropTypes
* ESLint
* React Hooks

### Backend

* Node.js
* Express
* Prisma ORM
* MongoDB
* CORS
* REST API

### Tools

* Git
* GitHub
* npm
* Vite
* ESLint

## 🏗️ Project Architecture

```text
User Registration Project
│
├── frontend
│   ├── React
│   ├── Vite
│   ├── React Router
│   ├── Axios
│   └── Styled Components
│
└── backend
    ├── Node.js
    ├── Express
    ├── REST API
    ├── Prisma ORM
    └── MongoDB
```

The frontend communicates with the backend through HTTP requests using Axios.

The backend handles the business logic and database operations through Prisma ORM.

## 📂 Project Structure

```text
user-registration-project/
│
├── backend/
│   ├── generated/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── routes.jsx
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| GET    | `/usuarios`     | Returns all users        |
| POST   | `/usuarios`     | Creates a new user       |
| PUT    | `/usuarios/:id` | Updates an existing user |
| DELETE | `/usuarios/:id` | Deletes a user           |

### Example user object

```json
{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com"
}
```

## 🗄️ Database

The application uses MongoDB as its database and Prisma ORM for database access.

The `User` model contains:

* `id`
* `name`
* `age`
* `email`

The email field is configured as unique.

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* MongoDB database
* Git

### 1. Clone the repository

```bash
git clone https://github.com/LehiSaid/user-registration-project.git
```

```bash
cd user-registration-project
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `.env` file and configure your MongoDB connection:

```env
DATABASE_URL="your_mongodb_connection_string"
```

### 3. Generate the Prisma Client

```bash
npx prisma generate
```

### 4. Start the backend

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:3000
```

### 5. Install frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 6. Start the frontend

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

## 🧪 Development

The frontend uses Axios to communicate with the REST API.

Example:

```javascript
const { data } = await api.get('/usuarios')
```

The application also uses React Hooks to manage component state and lifecycle behavior.

## 📱 Responsive Design

The interface was developed with responsive layouts so that the user list adapts to different screen sizes.

## 📚 What I Practiced

This project helped me practice:

* Building a full-stack application
* Creating REST APIs with Node.js and Express
* Connecting a React frontend to a backend
* Working with MongoDB
* Using Prisma ORM
* Managing React state and effects
* Creating reusable React components
* Implementing client-side routing
* Styling applications with Styled Components
* Using Axios for HTTP requests
* Organizing frontend and backend code
* Using Git and GitHub for version control

## 🔮 Future Improvements

Possible improvements for future versions include:

* User editing through the frontend
* Form validation
* Improved error handling
* Loading states
* Confirmation dialogs before deletion
* Authentication and authorization
* Deployment of the frontend and backend
* Automated tests
* Improved API documentation

## 👨‍💻 Author

**Lehi da Silva Said**

Junior Full Stack Developer

* GitHub: https://github.com/LehiSaid
* LinkedIn: https://www.linkedin.com/in/lehisaid/
