import React from "react";
import "./HelpSupport.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../HelpSupport/HelpSupport.css"
function HelpSupport() {
  return (
    <>
      <Navbar />

      <div className="help-support">
        <h1 className="help-title">Help & Support</h1>

        <p className="help-subtitle">
          We're here to help you with your orders, payments, and
          account-related questions.
        </p>

        {/* Order Issues */}
        <div className="help-card">
          <h3>🍔 Order Issues</h3>
          <p>
            If your order is delayed, incorrect, or missing items, please
            contact our support team. We will resolve your issue as quickly as
            possible.
          </p>
        </div>

        {/* Payment Support */}
        <div className="help-card">
          <h3>💳 Payment Support</h3>
          <p>
            Facing payment problems? If money was deducted but the order wasn't
            placed, contact us with your transcation details. 
          </p>
        </div>

        {/* Account Support */}
        <div className="help-card">
          <h3>👤 Account Assistance</h3>
          <p>
            Need help updating your profile, password, or account information?
            Our support team is ready to assist you.
          </p>
        </div>

        {/* Contact */}
        <div className="contact-card">
          <h3>📞 Contact Us</h3>

          <p>
            <strong>Email:</strong> support@foodexpress.com
          </p>

          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>

          <p>
            <strong>Working Hours:</strong> 9:00 AM – 10:00 PM (All Days)
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HelpSupport;