import React from "react";
import { Link } from "react-router-dom";
import "./AuthPage.css";

function AuthPage() {
  return (
    <div className="auth-page">

      <div className="auth-overlay"></div>

      <div className="auth-card">

        <h1>🍔 FoodieHub</h1>

        <p> DELIVERED  BEST FOOD TO YOUR HOME </p>

        <div className="auth-buttons">

          <Link to="/login">
            <button className="login-btn">
              Login 🚀
            </button>
          </Link>

          <Link to="/signup">
            <button className="signup-btn">
              Create Account 💖
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default AuthPage;