import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartToContext/CartToContext";
import { useFavorite } from "../FavoritesContext/FavoritesContext";
function Veg({ foods = [], searchTerm }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { favorites, toggleFavoriteFood } = useFavorite();

  const VegFood = foods.filter((item) => item.category === "Veg");
  const NonVegFood = foods.filter((item) => item.category === "Non-Veg");

  return (
    <>
    <div
      style={{
        display: "flex",
        gap: "3rem",
        flexWrap: "wrap",
        marginLeft: "4.6rem",
        marginTop: "3rem",
      }}
    >
      {[...VegFood, ...NonVegFood].map((food) => {
        const isFav = favorites.find((item) => item._id === food._id);

        return (
          <div
            key={food._id}
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
              src={food.image}
              alt={food.name}
              onClick={() => {
                addToCart(food);
                
              }}
              style={{
                height: "320px",
                width: "100%",
                objectFit: "cover",
                cursor: "pointer",
                display: "block",
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
              {/* NAME + HEART */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h5 style={{ margin: 0 }}>{food.name}</h5>

                <span
                  onClick={() => toggleFavoriteFood(food)}
                  style={{
                    cursor: "pointer",
                    fontSize: "22px",
                    color: isFav ? "red" : "#ccc",
                  }}
                >
                  {isFav ? "❤️" : "🤍"}
                </span>
              </div>

              {/* PRICE */}
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                ₹{food.price}
              </span>

              {/* BUTTON */}
              <button
                onClick={() => addToCart(food)}
                style={{
                  background:
                    "linear-gradient(135deg, #ff8fab, #ff4d6d)",
                  border: "none",
                  color: "white",
                  padding: "10px 14px",
                  borderRadius: "25px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  width: "100%",
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default Veg;