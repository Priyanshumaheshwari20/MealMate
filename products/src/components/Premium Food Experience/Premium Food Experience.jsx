import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Premium Food Experience.css";

function Headings() {
  const imageRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const mouseMoving = (e) => {
    const rect = tiltRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 10;

    gsap.to(tiltRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center center",
    });
  };

  const mouseLeave = () => {
    gsap.to(tiltRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div className="heading-wrapper">
      <div
        ref={tiltRef}
        className="tilt-container"
        onMouseMove={mouseMoving}
        onMouseLeave={mouseLeave}
      >
        <span className="food-badge">
          🍴 Premium Food Experience
        </span>

        <h1 className="main-heading">
          Better Food For <br />
          Better Moments
        </h1>

        <h2 className="sub-heading">
          Fresh ingredients, expert chefs and
          unforgettable flavours delivered to your door.
        </h2>

        <div className="food-info-box">
          <div className="info-card">
            <span>🌱</span>

            <div>
              <h4>Fresh Ingredients</h4>
              <p>
                Hand-picked ingredients sourced
                daily for maximum freshness.
              </p>
            </div>
          </div>

          <div className="info-card">
            <span>🚀</span>

            <div>
              <h4>Fast Delivery</h4>
              <p>
                Hot and delicious meals delivered
                within minutes.
              </p>
            </div>
          </div>

          <div className="info-card">
            <span>👨‍🍳</span>

            <div>
              <h4>Expert Chefs</h4>
              <p>
                Crafted with passion by skilled
                culinary professionals.
              </p>
            </div>
          </div>
        </div>

        <div className="food-quote">
          <h3>
            "Good food is not just eating,
            it's an experience."
          </h3>

          <p>
            Every meal is prepared with care,
            quality and passion to create
            unforgettable memories.
          </p>
        </div>
      </div>

      <div className="srk">
        <div className="floating-food-card top-card">
          🍕 500+ Dishes Available
        </div>

        <div className="floating-food-card middle-card">
          ⭐ 4.9 Customer Rating
        </div>

        <div className="floating-food-card bottom-card">
          🚴 Delivery In 30 Min
        </div>

        <img
          ref={imageRef}
          src="https://i.pinimg.com/1200x/43/6f/bc/436fbc3425e39378ecbbc49e156138fe.jpg"
          alt="Food"
        />
      </div>
    </div>
  );
}

export default Headings;