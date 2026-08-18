import React, { useState } from "react";
import { useCart } from "../CartToContext/CartToContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Payments.css";
import { Link } from "react-router-dom";

function PaymentPage() {
  const { cartItems } = useCart();

  const address = JSON.parse(localStorage.getItem("address")) || {};
  const subtotal =
    Number(localStorage.getItem("cartTotal")) ||
    cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

  const deliveryFee = 100;
  const total = subtotal + deliveryFee;

  const [cardData, setCardData] = useState({
    email: address.email || "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    name:
      `${address.firstName || ""} ${address.lastName || ""}`.trim(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCardData({
      ...cardData,
      [name]: value,
    });
  };

  const handlePayment = () => {
    if (
      !cardData.email ||
      !cardData.cardNumber ||
      !cardData.expiry ||
      !cardData.cvv ||
      !cardData.name
    ) {
      alert("Please fill all payment details.");
      return;
    }

    alert("✅ Payment Successful!");
  };

 return (
  <>
    <Navbar />

    <div className="payment-page">

      {/* LEFT */}
      <div className="summary-section">
        <h2>Order Summary</h2>

        <div className="price-box">
          <div className="row">
            <span>
             <h4 style={{fontWeight: 500}}>Total </h4> 
              </span>
            <span>
            <h1 style={{ fontWeight: 700 }}>₹{total}</h1>
            </span>
          </div>
        </div>

        <div className="summary-items">
          {cartItems.map((item) => (
            <div className="summary-item" key={item._id}>
              <div className="left">
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <span>Qty {item.quantity}</span>
                </div>
              </div>

              <div className="price">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        

        

        <div className="delivery-address">
          <h3>Delivery Address</h3>

          <p>
            {address.firstName} {address.lastName}
          </p>

          <p>{address.street}</p>

          <p>
            {address.city}, {address.state}
          </p>

          <p>
            {address.country} - {address.pincode}
          </p>

          <p>{address.phone}</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="payment-section">
        <h1>Pay with card</h1>

        <div className="payment-form">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={cardData.email}
            onChange={handleChange}
            placeholder="john@gmail.com"
          />

          <label>Card information</label>

          <input
            type="text"
            name="cardNumber"
            maxLength={19}
            value={cardData.cardNumber}
            onChange={handleChange}
            placeholder="1234 1234 1234 1234"
          />

          <div className="card-row">
            <input
              type="text"
              name="expiry"
              maxLength={5}
              value={cardData.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
            />

            <input
              type="password"
              name="cvv"
              maxLength={3}
              value={cardData.cvv}
              onChange={handleChange}
              placeholder="CVC"
            />
          </div>

          <label>Cardholder name</label>

          <input
            type="text"
            name="name"
            value={cardData.name}
            onChange={handleChange}
            placeholder="Card Holder Name"
          />

          <label>Country or Region</label>

          <input
            type="text"
            readOnly
            value={address.country || ""}
          />

          <button
            className="pay-button"
            onClick={handlePayment}
          >
            Pay ₹{total}
          </button>
        </div>

        <div className="upi-section">

  <h2>Pay with UPI</h2>

  <p className="upi-text">
    Choose your preferred UPI App
  </p>

  <div className="upi-grid">

    <div className="upi-card">
      <img
        src="https://i.pinimg.com/736x/63/a0/78/63a07838db3d51b7e823d1e62a2b889b.jpg"
        alt="PhonePe"
      />
      <span>PhonePe</span>
    </div>

    <div className="upi-card">
      <img
        src="https://i.pinimg.com/736x/73/e7/bd/73e7bd22796974242dbb8e3ee9778951.jpg"
        alt="Google Pay"
  style={{ width: "50px", height: "60px", objectFit: "contain" }}
      />
    </div>

    <div className="upi-card">
      <img
        src="https://i.pinimg.com/736x/f5/63/9e/f5639ee4b71dc1acc79b1889f44662a5.jpg"
        alt="Paytm"
      />
      <span>Paytm</span>
    </div>

    <div className="upi-card">
      <img
        src="https://i.pinimg.com/1200x/6d/80/ea/6d80ea72855743eabdd1a3f0f8dd1ec0.jpg"
        alt="BHIM"
      />
      <span>BHIM</span>
    </div>

    <div className="upi-card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon Pay"
      />
      <span>Amazon Pay</span>
    </div>

    <div className="upi-card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Pay"
      />
      <span>WhatsApp Pay</span>
    </div>

  </div>

  <div className="upi-divider">
    <span>OR</span>
  </div>

  <input
    className="upi-input"
    type="text"
    placeholder="Enter UPI ID (example@upi)"
  />
<Link to="/placedsuccessfully">
  <button className="upi-button">
    Pay ₹{total} with UPI
  </button>
</Link>
</div>
      </div>



      

    </div>

    <Footer />
  </>
);
}

export default PaymentPage;