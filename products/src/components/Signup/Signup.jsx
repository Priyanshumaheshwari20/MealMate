
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
    const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
  let { name, value } = e.target;

  if (name === "name") {
    value =
      value.charAt(0).toUpperCase() +
      value.slice(1);
  }

  setFormData({
    ...formData,
    [name]: value,
  });
};

  const handleSubmit = async(e) => {
    e.preventDefault();

  try{
 const res = await axios.post(
      "http://localhost:5000/signup",
      formData

    
 )
   alert("Account Created Successfully")
   Navigate("/login")
  }

  catch(err){
    alert(
      err.response?.data?.message ||
      "Signup Failed"
    );

  }

    // Yahan backend API call karna hai
  };


  const[showPassword , setShowPassword]=useState(false)
  return (
    <>
    <Navbar/>
    <div className="signup-page">
      <div className="signup-card">

        <div className="signup-banner">
              <img
    src="https://img.magnific.com/premium-vector/burger-delivery-logo-vector-icon_1015832-3950.jpg?semt=ais_hybrid&w=740&q=80"
    alt="Delivery"
  />
        </div>

        <div className="signup-content">
          <h1 style={{
            letterSpacing:"1px",
            textTransform:"capitalize"
          }}>
          Welcome to QuickBite </h1>

          <p className="subtitle">
            Join thousands of food lovers today
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
<div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="eye-icon" style={{cursor:"pointer"}} onClick={()=> setShowPassword(!showPassword)}>
                {showPassword ? "🙈" : "👁️"}
                </span>

</div>
            <button type="submit">
              Create Account 🚀
            </button>
          </form>

          <p className="login-text">
            Already have an account?
            <Link to="/login">
              <span> Login</span>
            </Link>
          </p>
        </div>

      </div>
     
    </div>


     <Footer/>
    </>
  );
}

export default Signup;

