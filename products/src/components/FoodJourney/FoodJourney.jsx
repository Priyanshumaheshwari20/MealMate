import React from "react";
import "./FoodJourney.css";

function FoodJourney() {
  return (
    <section className="food-journey">
      <div className="journey-image">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="Restaurant"
        />

        <div className="journey-badge">
          ⭐ Trusted by 10,000+ Food Lovers
        </div>
      </div>

      <div className="journey-content">
        <span className="journey-tag">
          Our Story
        </span>

        <h1>
          Bringing People Together
          <br />
          Through Great Food
        </h1>

        <p>
          Food is more than just a meal. It's an experience,
          a celebration, and a way to create memories.
          Every dish we serve is crafted with passion,
          fresh ingredients, and authentic flavors.
        </p>

        <div className="journey-grid">
          <div className="journey-card">
            <h2>50+</h2>
            <p>Expert Chefs</p>
          </div>

          <div className="journey-card">
            <h2>1000+</h2>
            <p>Daily Orders</p>
          </div>

          <div className="journey-card">
            <h2>4.9★</h2>
            <p>Customer Rating</p>
          </div>

          <div className="journey-card">
            <h2>24/7</h2>
            <p>Customer Support</p>
          </div>
        </div>

        <button className="journey-btn">
          Discover More
        </button>
      </div>
    </section>
  );
}

export default FoodJourney;