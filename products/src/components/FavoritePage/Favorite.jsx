import React from "react";
import Navbar from "../Navbar/Navbar";
import { useFavorite } from "../FavoritesContext/FavoritesContext";
import { Link } from "react-router-dom";

function Favorite() {
  const { favorites, toggleFavoriteFood } = useFavorite();

  return (
    <>
      <Navbar />

      <div
        style={{
          paddingTop: "100px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* TITLE */}
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          My Favourites ❤️
        </h1>

        {favorites.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>No favourites yet</h3>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "3rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {favorites.map((food) => {
              const isFav = true;

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
                    style={{
                      height: "320px",
                      width: "100%",
                      objectFit: "cover",
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
                          color: "red",
                        }}
                      >
                        ❤️
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
                      {food.description || "Delicious Food"}
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
                        ₹{food.price}
                      </span>

                      <button
                        onClick={() => toggleFavoriteFood(food)}
                        style={{
                          background:
                            "linear-gradient(135deg, #ff4d6d)",
                          border: "none",
                          color: "white",
                          padding: "10px 54px",
                          borderRadius: "21px",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                        }}
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* HOME BUTTON */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <Link to="/">
            <button
              className="explore-btn"
              style={{
                padding: "10px 20px",
                borderRadius: "25px",
                border: "none",
                cursor: "pointer",
                background: "#222",
                color: "white",
              }}
            >
              Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Favorite;