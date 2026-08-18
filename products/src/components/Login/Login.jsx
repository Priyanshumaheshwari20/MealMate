import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful 🎉");

      navigate("/");
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-card">

          <div className="login-banner">
            <img
              src="https://img.magnific.com/premium-vector/burger-delivery-logo-vector-icon_1015832-3950.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Delivery"
            />
          </div>

          <div className="login-content">
            <h1>Welcome Back 💖</h1>

            <p className="subtitle">
              Sign in to continue your food journey
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button type="submit">
                Login 🚀
              </button>
            </form>

            <p className="signup-text">
              Don't have an account?
              <Link to="/signup">
                <span> Signup</span>
              </Link>
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;