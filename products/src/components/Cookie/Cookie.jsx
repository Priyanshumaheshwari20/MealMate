import React from "react";
import { Container, Card } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Cookie.css";

const CookiePolicy = () => {
  return (
    <>
      <Navbar />

      <div className="cookie-page py-5 mt-4">
        <Container>
          <Card className="shadow-lg cookie-card">

            <div className="cookie-header">
              <span className="policy-badge">🍪 Cookie Policy</span>

              <h1>Cookie Policy</h1>

              <p>
                At <strong>MealMate</strong>, we value your privacy. This
                Cookie Policy explains how cookies help us provide a better,
                faster, and more personalized food ordering experience.
              </p>
            </div>

            <Card.Body className="p-5">

              <div className="policy-section">
                <h4>1. What Are Cookies?</h4>
                <p>
                  Cookies are small text files stored on your device when you
                  visit our website. They help remember your preferences,
                  improve website functionality, and provide a smoother user
                  experience.
                </p>
              </div>

              <div className="policy-section">
                <h4>2. Why We Use Cookies</h4>
                <ul>
                  <li>Remember your login details.</li>
                  <li>Save your shopping cart.</li>
                  <li>Store language and location preferences.</li>
                  <li>Improve website speed and performance.</li>
                  <li>Analyze visitor activity to enhance our services.</li>
                </ul>
              </div>

              <div className="policy-section">
                <h4>3. Types of Cookies We Use</h4>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic
                    website functionality.
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> Help improve website
                    speed and usability.
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Remember your settings
                    and preferences.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how
                    users interact with MealMate.
                  </li>
                </ul>
              </div>

              <div className="policy-section">
                <h4>4. Managing Cookies</h4>
                <p>
                  You can disable or remove cookies from your browser settings.
                  However, some features of the website may not work properly
                  without essential cookies.
                </p>
              </div>

              <div className="policy-section">
                <h4>5. Third-Party Cookies</h4>
                <p>
                  We may use trusted third-party services such as payment
                  gateways and analytics providers that may place cookies on
                  your device to improve security and service quality.
                </p>
              </div>

              <div className="policy-section">
                <h4>6. Changes to This Policy</h4>
                <p>
                  We may update this Cookie Policy from time to time. Any
                  changes will be published on this page along with the updated
                  revision date.
                </p>
              </div>

              <div className="policy-section">
                <h4>7. Contact Us</h4>
                <p>
                  If you have any questions about our Cookie Policy, feel free
                  to contact the MealMate support team.
                </p>
              </div>

              <div className="last-update">
                Last Updated • June 30, 2026
              </div>

            </Card.Body>
          </Card>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default CookiePolicy;