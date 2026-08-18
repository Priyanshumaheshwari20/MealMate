import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../About/About.css"; // same styling reuse kar sakte ho

function Privacy() {
  return (
    <>
      <Navbar />

      <section className="about-section">
        <div className="overlay"></div>

        <div className="about-container">
          {/* BADGE */}
          <span className="about-badge">🔒 Your Privacy Matters</span>

          {/* TITLE */}
          <h1 className="about-title">
            We Respect Your Privacy,
            <br />
            Always Protected
          </h1>

          {/* SUBTITLE */}
          <p className="about-subtitle">
            Your trust is important to us. We ensure your data is safe,
            secure, and never misused. This page explains how we collect,
            use, and protect your information.
          </p>

          {/* CARDS */}
          <div className="about-grid">
            <div className="about-card">
              <h3>🔐 Data Security</h3>
              <p>
                We use industry-standard encryption and secure systems to
                protect your personal information at all times.
              </p>
            </div>

            <div className="about-card">
              <h3>📦 Information Usage</h3>
              <p>
                We only collect necessary data to improve your ordering
                experience and never sell your personal information.
              </p>
            </div>

            <div className="about-card">
              <h3>🛡️ User Control</h3>
              <p>
                You have full control over your data. You can update or delete
                your information anytime you want.
              </p>
            </div>
          </div>

          {/* FOOT NOTE */}
          <div className="about-quote">
            "Your Privacy, Our Responsibility"
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Privacy;