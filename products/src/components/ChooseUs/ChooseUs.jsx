import React from "react";
import "./ChooseUs.css";

function ChooseUs() {
  return (
    <section className="why-section">

      <div className="why-header">
        <span>✨ Why Choose Us</span>

        <h1>
          More Than Food,
          <br />
          It's An Experience
        </h1>

        <p>
          We deliver happiness, quality and unforgettable
          flavors straight to your doorstep.
        </p>
      </div>

      <div className="why-cards">

        <div className="why-card">
          <div className="icon">🍽️</div>

          <h3>Premium Quality</h3>

          <p>
            Every meal is prepared using fresh and
            high-quality ingredients.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">⚡</div>

          <h3>Fast Delivery</h3>

          <p>
            Your favorite meals delivered hot and
            fresh in record time.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">👨‍🍳</div>

          <h3>Master Chefs</h3>

          <p>
            Expert chefs crafting delicious dishes
            with passion and creativity.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">❤️</div>

          <h3>Customer Love</h3>

          <p>
            Thousands of happy customers trust us
            for their daily cravings.
          </p>
        </div>

      </div>

    </section>
  );
}

export default ChooseUs;