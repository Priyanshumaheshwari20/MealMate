import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartToContext/CartToContext";

function CartPopup() {
  const navigate = useNavigate();
  const { showCartPopup, setShowCartPopup, cartItems } = useCart();

  if (!showCartPopup) return null;

  // 👉 total quantity (important)
  const totalQty = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        background: "#fff",
        padding: "14px 18px",
        borderRadius: "14px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        zIndex: 9999,
        fontFamily: "sans-serif",
      }}
    >
      {/* CART ICON */}
      <span style={{ fontSize: "18px" }}>🛒</span>

      {/* QUANTITY BADGE */}
      <span
        style={{
          background: "#ff4d6d",
          color: "white",
          padding: "4px 10px",
          borderRadius: "20px",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        {totalQty} items
      </span>

      {/* VIEW CART BUTTON (PINK + NICE) */}
      <button
        onClick={() => {
          navigate("/cart");
          setShowCartPopup(false);
        }}
        style={{
          background: "linear-gradient(135deg, #ff8fab, #ff4d6d)",
          border: "none",
          color: "white",
          padding: "8px 14px",
          borderRadius: "25px",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(255,77,109,0.4)",
        }}
      >
        View Cart
      </button>

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowCartPopup(false)}
        style={{
          border: "none",
          background: "transparent",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        ✖
      </button>
    </div>
  );
}

export default CartPopup;