import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartToContext/CartToContext";
import { useFavorite } from "../FavoritesContext/FavoritesContext";
import "../IndianFood/IndianFood.css";

function IndianFood({foods,  searchTerm }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { favorites, toggleFavoriteFood } = useFavorite();

  const indianFoods = foods.filter(
    (food) => food.category === "Indian" &&
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <p
        className="heading-responsive"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "2.2rem",
          marginRight: "2.2rem",
          fontSize: "36px",
          fontWeight: "bold",
          marginTop: "2rem",
        }}
      >
        Order our best food options
      </p>

      <div
        className="food-container-responsive"
        style={{
          display: "flex",
          gap: "3rem",
          flexWrap: "wrap",
          marginLeft: "4.6rem",
          marginBottom: "2rem",
        }}
      >
        {indianFoods.map((food) => {
          const isFav = favorites.find((item) => item._id === food._id);

          return (
            <div
              key={food._id}
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
                src={food.image}
                alt={"djdj"}
                onClick={() => navigate(`/food/${food._id}`)}
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
                    }}
                  >
                    {isFav ? "❤️" : "🤍"}
                  </span>
                </div>

          {/*Description */}
                <p
                  style={{
                    color: "#666",
                    margin: 0,
                    minHeight: "40px",
                  }}
                >
                  Delicious Indian Food
                </p>
             {/* Price And Button */}
                <div
                  style={{
                    display: "flex",   justifyContent: "space-between",   alignItems: "center",
                    marginTop: "auto",   gap: "10px", }}>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹{food.price}
                  </span>

                  <button
                    onClick={() => addToCart(food)}
                    style={{
                      background:
                        "linear-gradient(135deg, #ff8fab, #ff4d6d)",
                      border: "none",
                      color: "#fff",
                      padding:"10px ,14px",
                      borderRadius:"25px",
                      cursor:"pointer"
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
    </>
  );
}

export default IndianFood;