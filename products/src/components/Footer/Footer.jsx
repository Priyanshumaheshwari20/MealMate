import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container-fluid footer">
        <div className="footer-top">
          {/* Left Image */}
          <div className="footer-image">
            <img
              src="https://img.magnific.com/premium-vector/burger-delivery-logo-vector-icon_1015832-3950.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Food Delivery"
            />
          </div>

          {/* Right Content */}
          <div className="footer-links">
            {/* Company */}
            <div>
              <h4>Company</h4>

              <Link to="/About">
                <p>About</p>
              </Link>



              <Link to="/">
                <p>Home</p>
              </Link>

              <p>Minis</p>
            </div>

            {/* Contact */}
            <div>
              <div>
                <h4>Contact Us</h4>

                <Link to="/HelpSupport">
                  <p>Help & Support</p>
                </Link>

                <Link to="/Privacy">
                  <p>Privacy Policy</p>
                </Link>

                <p>Ride with us</p>
              </div>

              <div className="legal">
                <h4>Legal</h4>

                <Link to="/termsandcondition">
                  <p>Terms & Conditions</p>
                </Link>

                <Link to="/cookiepolicy">
                  <p>Cookie Policy</p>
                </Link>
              </div>
            </div>

            {/* Cities */}
            <div>
              <h4>Available In</h4>

              <p>Dhampur</p>
              <p>Noida</p>
              <p>Delhi</p>
              <p>Pune</p>
              <p>Miranpur</p>
            </div>

            {/* MealMate*/}
            <div>
              <h4>Life at MealMate</h4>

              <p>Explore with MealMate</p>
              <p>MealMate News</p>
              <p>Snackables</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <h5>© 2026 MealMate • Built with ❤️ using React JS</h5>
        </div>
      </div>
    </>
  );
}

export default Footer;