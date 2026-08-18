import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaCheckCircle } from "react-icons/fa";

const PlacedSuccessfully = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          marginTop:"3rem",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #f8f9fa, #fff8f0)",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            width: "100%",
            background: "#fff",
            borderRadius: "20px",
            padding: "50px 40px",
            textAlign: "center",
            boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
          }}
        >
          <FaCheckCircle
            size={80}
            color="#28a745"
            style={{ marginBottom: "20px" }}
          />

          <h1
            style={{
              fontSize: "38px",
              fontWeight: "700",
              color: "#222",
              marginBottom: "15px",
            }}
          >
            Thank You for Ordering!
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            We truly appreciate your trust and support. Your order has been
            placed successfully and our team is preparing it with care. We hope
            you enjoy every bite and look forward to serving you again soon.
          </p>

          <div
            style={{
              background: "#fff7e6",
              border: "1px solid #ffd166",
              padding: "18px",
              borderRadius: "12px",
              color: "#8a5a00",
              fontWeight: "600",
            }}
          >
            🍽️ Sit back, relax, and we'll deliver your delicious meal shortly.
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PlacedSuccessfully;