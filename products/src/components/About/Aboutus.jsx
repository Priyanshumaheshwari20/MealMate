import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import Footer from "../Footer/Footer";
function About() {
  return (
    <>
      <Navbar />

      <section className="about-section">
        <div className="overlay"></div>

        <div className="about-container">
          <span className="about-badge">🍴 Premium Food Delivery</span>

          <h1>
            Delivering Happiness,
            <br />
            One Meal at a Time
          </h1>

          <p className="about-subtitle">
            We believe great food should reach you fresh, fast, and exactly the
            way you love it. Our platform connects food lovers with the finest
            restaurants, ensuring every order becomes a memorable experience.
          </p>

          <div className="about-grid">
            <div className="card">
              <h3>🚀 Fast Delivery</h3>
              <p>
                Lightning-fast delivery network designed to bring your favorite
                meals to your doorstep while they're still fresh and hot.
              </p>
            </div>

            <div className="card">
              <h3>🍕 Quality Food</h3>
              <p>
                Partnering with top-rated restaurants to guarantee premium
                quality, authentic flavors, and customer satisfaction.
              </p>
            </div>

            <div className="card">
              <h3>❤️ Customer First</h3>
              <p>
                Every order matters. Our dedicated support team ensures a smooth
                and delightful experience from order to delivery.
              </p>
            </div>
          </div>

          <div className="quote">
            "Fresh Food • Fast Delivery • Exceptional Experience"
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default About;