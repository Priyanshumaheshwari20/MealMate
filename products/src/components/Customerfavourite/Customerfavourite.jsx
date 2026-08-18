import React from "react";
import "./Customerfavourite.css"

function CustomerFavourite() {

  const foodImages = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    "https://images.unsplash.com/photo-1664214456946-e7ef7a632239?w=600",
    "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
  ];

  return (
    <>

      <div className="slider-container">

        <div className="slider-track">

          {foodImages.map((image, index) => (
            <div className="food-circle" key={index}>
              <img src={image} alt="food" />
            </div>
          ))}

          {/* Duplicate for smooth animation */}
          {foodImages.map((image, index) => (
            <div className="food-circle" key={index + 10}>
              <img src={image} alt="food" />
            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default CustomerFavourite;