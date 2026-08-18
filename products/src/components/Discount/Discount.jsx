import React, { useState } from "react";
import "./Discount.css";

function Discount() {
  const [copied, setCopied] = useState(false);

  const CouponCode = async () => {
    await navigator.clipboard.writeText("PRIYAN 47");
    //navigator browser ka built-in object hota hai jo browser ki information aur browser ki features ko access karne deta hai.
//Clipboard ek temporary storage area hota hai.
//Copy ki hui cheez clipboard me store hoti hai.
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  return (
    <div className="offer-card">
      <div className="offer-content">
        <span className="FIRST-ORDER-OFFER">
          🎉 FIRST ORDER OFFER
        </span>

        <h1>
          Get Up To
          <span>15% OFF</span>
        </h1>

        <p>
          Enjoy exclusive savings on your first order with us.
          <br />
          Extra Savings on Orders Above ₹800
        </p>
          

        <div className="BANIYA47">
          <span>PRIYAN 47</span>

          <button onClick={CouponCode}>
            {copied ? "✓ Copied" : "Copy Code"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Discount;