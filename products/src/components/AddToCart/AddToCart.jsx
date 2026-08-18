import React, { useState , useEffect } from "react";
import { useCart } from "../CartToContext/CartToContext";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function AddToCart() {
const {cartItems,  increaseQty,quantity, decreaseQty, removeFromCart,} = useCart();
  const [code, setCode] = useState("");
  const [inValid, setInValid] = useState("");

const[updatePrice , setUpdatePrice] = useState(" ")
  

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const isDiscountApplied = code === "PRIYAN 47" && total >= 800;

const discountAmount = isDiscountApplied
  ? Math.floor(total * 0.15)
  : 0;

const afterDiscount = total - discountAmount;




  const finalTotal = (afterDiscount ? Number(afterDiscount) : total ) + 100;

    
  const totalItems = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);


  useEffect(() => {
  localStorage.setItem(
    "cartTotal",
    isDiscountApplied ? afterDiscount : total
  );
}, [afterDiscount, total, isDiscountApplied]);



const handleDiscount = (value) => {
  setCode(value);

  if (value === "") {
    setInValid("");
    return;
  }

  if (total < 800) {
    setInValid("minimum");
    return;
  }

  if (value === "PRIYAN 47") {
    setInValid("");
  } else {
    setInValid("invalid");
  }
};

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />

        <h2 style={{ textAlign: "center", marginTop: "200px" }}>
          Cart Empty 🛒

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/">
              <button style={homeBtn}>🏠 Home</button>
            </Link>
          </div>
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div
        style={{padding: "30px",marginTop: "5rem",background: "#f5f5f5",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          My Cart 🛒
        </h1>

        {/* HEADER */}
       <div
  style={{
    display: "grid",
    gridTemplateColumns: "120px 2fr 120px 160px 120px 100px",
    width: "90%",
    margin: "0 auto",
    fontWeight: "bold",
    padding: "10px",
    borderBottom: "2px solid #ddd",
  }}
>
  <div>Image</div>
  <div>Product</div>
  <div>Price</div>
  <div>Quantity</div>
  <div>Total</div>
  <div  >Remove</div>
</div>

        {/* ITEMS */}
        {cartItems.map((item) => (
          <div
            key={item._id}
            style={{ display: "grid", gridTemplateColumns: "120px 2fr 120px 160px 120px 100px",     width: "90%",
              margin: "10px auto",padding: "15px",   background: "white",   borderRadius: "12px",
              alignItems: "center",   boxShadow: "0 3px 10px rgba(0,0,0,0.1)", gap: "10px"}}  >
            {/* IMAGE */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{width: "110px",
                  height: "110px",   objectFit: "cover",   borderRadius: "12px" }}/>
            </div>

            {/* NAME */}
            <div style={{ paddingLeft: "10px" }}>{item.name}</div>

            {/* PRICE */}
            <div>₹{item.price}</div>

            {/* QUANTITY */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <button onClick={() => decreaseQty(item._id)} style={btn}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQty(item._id)} style={btn}>
                +
              </button>
            </div>

            {/* TOTAL */}
        {/* TOTAL */}
<div
  style={{
    color: "#ff4d6d",
    fontWeight: "bold",
    textAlign: "center",
  }}
>
  ₹{item.price * item.quantity}
</div>

{/* REMOVE */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <button
    onClick={() => removeFromCart(item._id)}
    style={{
      background: "transparent",
      border: "none",
      color: "#ff4d6d",
      fontSize: "22px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    ❌
  </button>
</div>
          </div>
        ))}

        {/* GRAND TOTAL */}
        <div
          style={{
            width: "90%",
            margin: "30px auto",
            padding: "20px",
            background: "white",
            borderRadius: "12px",
            textAlign: "right",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Grand Total:{" "}
          <span style={{ color: "#ff4d6d" }}>₹{total}</span>
        </div>

        {/* DISCOUNT CODE */}
        <div
          style={{
            width: "90%",
            margin: "30px auto",
            padding: "20px",
            background: "white",
            borderRadius: "12px",
            textAlign: "right",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Enter Code :
          <input
            type="text"
            placeholder="Paste Here"
            value={code}
            onChange={(e) => handleDiscount(e.target.value)}
            style={{
              color: "#ff4d6d",
              width: "20%",
              fontWeight: "bold",
              border:
                inValid === "invalid"
                  ? "2px solid red"
                  : "1px solid pink",
              padding: "10px 52px",
              borderRadius: "12px",
              marginLeft: "10px",
            }}
          />

          {inValid === "invalid" && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Invalid Discount Code
            </p>
          )}

          {inValid === "minimum" && (
            <p
              style={{
                color: "orange",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
           Add a little more to your cart and unlock this special discount ✨🛍️
            </p>
          )}
        </div>

        {/* AFTER DISCOUNT */}
       {/* CART SUMMARY */}
<div
  style={{
    width: "90%",
    margin: "30px auto",
    padding: "25px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  }}
>
  <h2 style={{ marginBottom: "20px" }}>Cart Total</h2>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "15px",
      borderBottom: "1px solid #ddd",
      fontSize: "18px",
    }}
  >
    <span>Subtotal</span>

    <span style={{ fontWeight: "bold" }}>
      ₹{isDiscountApplied ? afterDiscount : total}
    </span>
  </div>


{isDiscountApplied && (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 0",
      borderBottom: "1px solid #ddd",
      fontSize: "18px",
      color: "#16a34a",
      fontWeight: "bold",
    }}
  >
    <span>🎉 You Saved</span>

    <span>₹{discountAmount}</span>
  </div>
)}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 0",
      borderBottom: "1px solid #ddd",
      fontSize: "18px",
    }}
  >
    <span>Delivery Charges</span>

    <span style={{ fontWeight: "bold" }}>₹100</span>
  </div>

   <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 0",
      borderBottom: "1px solid #ddd",
      fontSize: "18px",
    }}
  >
    <span>Total Items </span>

     <span style={{ fontWeight: "bold" }}>
       {totalItems}
    </span>

  </div>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "18px 0",
      fontSize: "22px",
      fontWeight: "bold",
    }}
  >
    <span>Total</span>

    <span style={{ color: "#ff4d6d" }}>
      ₹{(isDiscountApplied ? afterDiscount : total) + 100}
    </span>
  </div>

 <Link
  to="/address"
  onClick={() =>
    localStorage.setItem(
  "cartTotal",
  isDiscountApplied ? afterDiscount : total
)
  }
>
  <button
    style={{
      width: "100%",
      padding: "15px",
      marginTop: "20px",
      background: "#ff4d6d",
      color: "white",
      border: "none",
      borderRadius: "10px",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    Proceed To Order →
  </button>
</Link>
</div>

        
        {/* HOME BUTTON */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/">
            <button style={homeBtn}>🏠 Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

const btn = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  border: "none",
  background: "#ff4d6d",
  color: "white",
  cursor: "pointer",
};

const homeBtn = {
  background: "linear-gradient(135deg, #ff8fab, #ff4d6d)",
  border: "none",
  color: "white",
  padding: "10px 22px",
  borderRadius: "30px",
  fontWeight: "600",
  cursor: "pointer",
};

export default AddToCart;