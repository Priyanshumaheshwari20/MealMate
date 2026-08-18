import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function SearchPage() {
  const location = useLocation();

  const results = location.state?.results || [];

  return (
    <>
      <Navbar />

      <div
        style={{
          marginTop: "100px",
          padding: "30px",
        }}
      >
        <h1>Search Results</h1>

        {results.length === 0 ? (
          <h3>No food found.</h3>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "25px",
              flexWrap: "wrap",
            }}
          >
            {results.map((food) => (
              <div
                key={food._id}
                style={{
                  width: "280px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0,0,0,.15)",
                }}
              >
                <img
                  src={food.image}
                  alt={food.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "15px" }}>
                  <h3>{food.name}</h3>
                  <h4>₹ {food.price}</h4>
                  <p>{food.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default SearchPage;