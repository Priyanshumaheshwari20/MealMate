import React from "react";

function Carousel() {
  const slides = [
    {
      image:  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600",
      title: "Artisan Pizza",
      subtitle: "Crafted with fresh ingredients and authentic flavors",
    },


    {
      image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600",
      title: "Signature Burgers",
      subtitle: "Premium quality, unforgettable taste",
    },


    {
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600",
      title: "Fine Dining Experience",
      subtitle: "Where luxury meets exceptional cuisine",
    },
  ];

  return (
    <div
      id="premiumCarousel"
      className="carousel slide carousel-fade m-0"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}    type="button"
            data-bs-target="#premiumCarousel"   data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div
              style={{
                height: "100vh",
                backgroundImage: `linear-gradient(
                  rgba(0,0,0,0.55),
                  rgba(0,0,0,0.55)
                ), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-lg-7 text-white">
                    <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                      Premium Collection
                    </span>

                    <h1
                      className="fw-bold mb-4"
                      style={{
                        fontSize: "clamp(2.5rem, 6vw, 5rem)",
                      }}
                    >
                      {slide.title}
                    </h1>

                    <p
                      className="lead mb-4"
                      style={{
                        maxWidth: "600px",
                        fontSize: "1.2rem",
                      }}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#premiumCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon p-4 rounded-circle"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
          }}
        />
      </button>

      {/* Next */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#premiumCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon p-4 rounded-circle"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
          }}
        />
      </button>
    </div>
  );
}

export default Carousel;