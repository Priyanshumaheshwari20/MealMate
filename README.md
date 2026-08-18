# 🍽️ MealMate

MealMate is a full-stack food and meal management web application designed to provide users with a simple and convenient way to explore meals, manage food-related information, and interact with the application through a modern web interface.

The project is built using a **React frontend** and a **Node.js/Express backend**, with **MongoDB** used for database management.

---

## 🚀 Features

* 🍔 Browse and explore meals
* 🔍 Search and discover food items
* 📋 View meal details
* 👤 User-friendly interface
* 🔐 Backend API integration
* 🗄️ MongoDB database integration
* 📱 Responsive design
* ⚡ Fast React-based frontend
* 🔄 Frontend and backend communication through REST APIs

---

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Vite
* npm

### Backend

* Node.js
* Express.js
* REST API
* npm

### Database

* MongoDB

# ⚙️ Installation & Setup

Follow the steps below to run MealMate locally.

## 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Go inside the project folder:

```bash
cd MealMate
```

---

## 2. Go to the Frontend Project

```bash
cd products
```

Install frontend dependencies:

```bash
npm install
```

---

## 3. Start the Frontend

After installing the dependencies, run:

```bash
npm run dev
```

The frontend will start on the local development server provided by Vite.

---

# 🖥️ Backend Setup

Open a **new terminal** while keeping the frontend terminal running.

Go to the backend folder:

```bash
cd MealMate/products/backend
```

Install backend dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm start
```

The backend server will start according to the port configured in the backend project.

---

# 🗄️ MongoDB Configuration

MealMate uses **MongoDB** as its database.

Make sure MongoDB is installed and running on your system.

You can use either:

* MongoDB Community Server
* MongoDB Compass
* MongoDB Atlas

Create/configure the required database and add the MongoDB connection string to your backend environment variables.

Example:

```env
MONGO_URI=your_mongodb_connection_string
```

---

# 🔐 Environment Variables

Create a `.env` file inside the backend folder if your project requires environment variables.

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

> Do not upload your `.env` file or database credentials to GitHub.

---

# ▶️ Run the Complete Project

### Terminal 1 — Frontend

```bash
cd MealMate/products
npm install
npm run dev
```

### Terminal 2 — Backend

```bash
cd MealMate/products/backend
npm install
npm start
```

Once both servers are running, open the frontend URL shown in the terminal.

---

# 🌐 Frontend & Backend

The MealMate application consists of two main parts:

### Frontend

The React frontend is responsible for:

* User interface
* Meal browsing
* Navigation
* API requests
* Displaying meal information

### Backend

The Node.js/Express backend is responsible for:

* API endpoints
* Database communication
* Server-side logic
* Managing application data

---

# 🔄 Application Flow

```text
User
  │
  ▼
React Frontend
  │
  │ API Requests
  ▼
Node.js + Express Backend
  │
  │ Database Queries
  ▼
MongoDB
  │
  ▼
Backend Response
  │
  ▼
React Frontend
  │
  ▼
User
```

---

# 📦 Dependencies

Install all frontend dependencies using:

```bash
npm install
```

Install all backend dependencies using:

```bash
cd backend
npm install
```

The required packages are already listed in the respective `package.json` files.

---

# 🧪 Development

For development, run the frontend and backend servers separately.

### Frontend

```bash
npm run dev
```

### Backend

```bash
npm start
```

Make sure MongoDB is running before using database-related features.

---

# 🚀 Deployment

MealMate can be deployed using platforms such as:

* Render
* Vercel
* Netlify
* Railway

For deployment, configure the frontend and backend separately and add the required environment variables to the hosting platform.

---

# 🔒 Security

For security:

* Never commit `.env` files.
* Never expose database credentials.
* Never expose private API keys.
* Use environment variables for sensitive configuration.
* Configure CORS appropriately for production.

---

# 🐛 Troubleshooting

### `npm install` error

Try:

```bash
npm cache clean --force
npm install
```

### Backend is not starting

Make sure you are inside:

```bash
MealMate/products/backend
```

Then run:

```bash
npm install
npm start
```

### MongoDB connection error

Check that:

1. MongoDB is running.
2. Your `MONGO_URI` is correct.
3. Your database is accessible.
4. Your `.env` file is correctly configured.

### Frontend is not starting

Make sure you are inside:

```bash
MealMate/products
```

Then run:

```bash
npm install
npm run dev
```

---

# 📌 Future Improvements

Some features that can be added in future versions:

* 👤 User authentication
* ❤️ Favourite meals
* 🛒 Meal/food cart
* 💳 Online payment integration
* 📦 Order management
* ⭐ Meal ratings and reviews
* 🔔 Notifications
* 📊 Admin dashboard
* 📱 Improved mobile experience

---

# 👨‍💻 Author

**Priyanshu Maheshwari**

B.Tech — Computer Science & Engineering

---

# ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

Made with ❤️ using **React, Node.js, Express and MongoDB**.
