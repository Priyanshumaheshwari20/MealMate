import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartToContext/CartToContext";
import { useFavorite } from "../FavoritesContext/FavoritesContext";
import "../ForeignFood/ForeignFood.css";

function ForeignFood({ foods, searchTerm }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { favorites, toggleFavoriteFood } = useFavorite();

  const foreignFood = foods.filter(
    (item) =>
      item.category === "Foreign" &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="food-container-responsive"
      style={{
        display: "flex",
        gap: "3rem",
        flexWrap: "wrap",
        marginLeft: "4.6rem",
        marginTop: "3rem",
        marginBottom: "2rem",
      }}
    >
      {foreignFood.map((item) => {
        const isFav = favorites.find((food) => food._id === item._id);

        return (
          <div
            key={item._id}
            className="food-card-responsive"
            style={{
              width: "19rem",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
              display: "flex",
              flexDirection: "column",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              onClick={() => navigate(`/food/${item._id}`)}
              style={{
                height: "320px",
                width: "100%",
                objectFit: "cover",
                cursor: "pointer",
                display: "block",
                transition: "transform 0.3s ease",
              }}
            />

            {/* BODY */}
            <div
              style={{
                padding: "12px 14px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                flexGrow: 1,
              }}
            >
              {/* NAME + FAVORITE */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h5 style={{ margin: 0 }}>{item.name}</h5>

                <span
                  onClick={() => toggleFavoriteFood(item)}
                  style={{
                    cursor: "pointer",
                    fontSize: "22px",
                    color: isFav ? "red" : "#ccc",
                  }}
                >
                  {isFav ? "❤️" : "🤍"}
                </span>
              </div>

              {/* DESCRIPTION */}
              <p
                style={{
                  textAlign: "left",
                  color: "#666",
                  margin: 0,
                  minHeight: "40px",
                }}
              >
                Delicious Foreign Food
              </p>

              {/* PRICE + BUTTON */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "auto",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  ₹{item.price}
                </span>

                <button
                  onClick={() => addToCart(item)}
                  style={{
                    background: "linear-gradient(135deg, #ff8fab, #ff4d6d)",
                    border: "none",
                    color: "#fff",
                    padding: "10px 14px",
                    borderRadius: "25px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ForeignFood;