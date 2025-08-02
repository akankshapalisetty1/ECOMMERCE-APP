# 🛍️ MERN Stack E-Commerce-App

A full-stack, scalable e-commerce web application built using the **MERN** stack – **MongoDB**, **Express.js**, **React.js**, and **Node.js**. The application supports secure user authentication, CRUD operations for product management, real-time cart updates, and order processing.

> Designed with a modular architecture, RESTful API principles, and modern UI components, this project demonstrates full-stack development capabilities with real-world functionality.

## 🔗 Live Project

🌐 **Frontend:** [https://your-frontend-link.vercel.app](https://ecommercefrontend-cyan.vercel.app)  
🌐 **Backend API:** [https://your-api-backend-url.onrender.com](https://forever-backend-sigma-swart.vercel.app/)


## 💡 Key Features

### 👥 User Functionality
- 🔐 JWT-based authentication with secure password hashing using `bcryptjs`
- 🛒 Dynamic product listing with pagination and category filtering
- 🧺 Cart functionality using persistent state (localStorage / Redux)
- 📦 Order placement, shipping form validation, and order tracking
- 👤 Profile management (update name, email, password)
- 🛍️ Product catalog with details and filtering
- 📜 View past orders and profile updates


### 🛠️ Admin Functionality
- 📊 Admin-only protected routes and dashboard access
- 🛍️ CRUD operations for products (Create, Read, Update, Delete)
- 📋 View and manage all orders
- 👥 View and manage all registered users with role-based access control

## 🧑‍💻 Tech Stack & Tools

| Layer       | Technologies |
|-------------|--------------|
| **Frontend** | React, React Router, Tailwind CSS / Bootstrap |
| **State Management** | Context API / Redux Toolkit |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JSON Web Tokens (JWT) |
| **Security** | Helmet, CORS, dotenv, bcrypt |
| **API Testing** | Postman |
| **Version Control** | Git & GitHub |
| **Deployment** | Vercel (frontend), Render / Railway (backend) |

## ⚙️ Project Architecture

├── client/ # React Frontend
│ ├── components/ # Reusable components
│ ├── pages/ # Page-level views
│ ├── context/ or redux/ # State management
│ └── utils/ # Helper functions
│
├── server/ # Express Backend
│ ├── config/ # DB and external services config
│ ├── controllers/ # Logic for routes
│ ├── middleware/ # Auth, error handling
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API endpoints
│ └── utils/ # JWT, payment, etc.

## 🧪 Testing & Validation

- ✅ Manual testing via browser and Postman
- ✅ Role-based route protection using middleware
- ✅ Error handling with Express errorHandler
- ✅ Secure environment variable usage (`dotenv`)

## 🔐 .env Configuration (Backend)
Create a `.env` file in `/server`:
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret

# Optional (for Razorpay / Stripe integration)
RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret


🚀 Getting Started Locally

# Clone the repo
git clone https://github.com/akankshapalisetty1/mern-ecommerce.git
cd mern-ecommerce

# Setup Backend
npm install
cd backend
npm run server

# Setup Frontend
npm install
cd frontend
npm start

## 🧠 Concepts Covered

- 🔁 **RESTful API Design** – Built modular routes and controllers for maintainable backend logic.
- 🔐 **JWT Authentication** – Role-based route protection and token storage using HTTP headers.
- 🧱 **MongoDB Schema Design** – Used Mongoose for modeling and validating structured data.
- 🧩 **Component-Based UI** – Designed reusable React components with proper folder structure.
- 🔄 **State Management** – Handled global state using Context API / Redux Toolkit (based on your choice).
- 🧰 **CI/CD Ready Deployment** – Deployed frontend on Vercel and backend on Render for production readiness.

## 🚧 Challenges Faced

- 🧩 **Integrating Frontend with Backend**  
  Initially faced issues connecting the React frontend to the Express backend, especially with API route paths and handling CORS. Solved it by properly setting up proxy and CORS middleware.

- 🔐 **Handling Authentication and Authorization**  
  Implementing secure JWT authentication and restricting admin routes was tricky. Learned how to use middleware to protect routes and handle token expiration.

- 🔄 **State Synchronization in Cart Functionality**  
  Managing the cart across multiple components while keeping the data persistent across refreshes was challenging. Solved using localStorage and state management techniques.

- ⚙️ **Deployment Configuration**  
  Faced issues while deploying the backend on Render and connecting it to the frontend deployed on Vercel. Resolved this by correctly setting up environment variables and handling CORS on the deployed API.

- 🧱 **Database Schema Relationships**  
  Designing relationships between `Users`, `Products`, and `Orders` in MongoDB was new to me. Learned how to reference documents and structure data effectively using Mongoose.

## 📘 What I Learned

- 🔧 **Full-Stack Development Workflow**  
  Understood how frontend and backend communicate via REST APIs, and how to build scalable applications using the MERN stack.

- 🔐 **Authentication with JWT**  
  Learned how to securely register/login users, protect routes, and implement role-based access control using JSON Web Tokens.

- 🧩 **Component Design in React**  
  Gained experience breaking down UI into reusable components and handling props, state, and conditional rendering.

- 🧱 **MongoDB Data Modeling**  
  Learned how to design and implement MongoDB schemas using Mongoose, including relational data (e.g., users & orders).

- 🧪 **Debugging & Testing APIs**  
  Practiced testing and debugging backend endpoints using Postman, console logs, and error handling middleware.

- 🌐 **Environment & Deployment Setup**  
  Learned how to use `.env` files securely, and deploy full-stack apps using Vercel (frontend) and Render (backend).

- ⚙️ **Problem Solving & Self-Learning**  
  Faced and resolved real-world coding challenges during integration and deployment, strengthening my debugging and research skills.

