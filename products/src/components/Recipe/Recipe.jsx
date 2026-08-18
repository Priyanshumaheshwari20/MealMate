import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar from "./RecipeSideBar";
function Recipe() {
  
  const [foods, setFoods] = useState([]);
  const [selectedMealType, setSelectedMealType] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, []);


  const filteredFoods = foods.filter((item) => {
    const mealTypeMatch =  selectedMealType === "All" ? true
        : item.mealType === selectedMealType ||   item.category === selectedMealType;

    return mealTypeMatch;
  });

  return (
    <>
      <Navbar />

      <div
        style={{  marginTop: "5rem",  display: "flex",  background: "#f6f7fb",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            width: "240px",
            position: "sticky",
            top: "5rem",
            height: "calc(100vh - 5rem)",
            background: "#fff",
            borderRight: "1px solid #eee",
          }}
        >
          <SideBar
            a={selectedMealType}
            b={setSelectedMealType}
          />
        </div>

        {/* Main */}
        <div
          style={{
            flex: 1,
            padding: "30px",
          }}
        >
          {/* HEADER */}
          <div style={{ marginBottom: "25px" }}>
            <p style={{ color: "#777" }}>
              Fresh, tasty & hand-picked dishes for you
            </p>
          </div>

          {/* GRID */}
          <div
            style={{
              display: "grid",
               gridTemplateColumns:   "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            {filteredFoods.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
    flexDirection: "column",
                  background: "#fff",
                  borderRadius: "22px",
                  overflow: "hidden",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.08)";
                }}
              >
                {/* IMAGE */}
                <div style={{ position: "relative" }}>
                  <img
                    onClick={() =>
                      navigate(
                        `/food/${item.category}/${item._id}`,
                        {
                          state : {
                            fromRecipe:true
                          }
                        }
                      )
                    }
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "210px",
                      objectFit: "cover",
                    }}
                  />

                  {/* PRICE */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "linear-gradient(165deg,#ff4d6d,#ff758f)",
                      color: "#fff",
                      padding: "7px 14px",
                      borderRadius: "20px",
                      fontWeight: "700",
                      fontSize: "14px",
                    }}
                  >
                    ₹{item.price}
                  </div>
                </div>

                {/* CONTENT */}
                <div style={{ padding: "16px",display: "flex",
    flexDirection: "column",
    flex: 1 }}>
                  <h3>{item.name}</h3>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#777",
                    }}
                  >
                    Freshly prepared delicious recipe
                  </p>

                  <button
                    onClick={() =>
                      navigate(
                        `/food/${item.category}/${item._id}`
                      )
                    }
                    style={{
                         marginTop: "auto",

                      width: "100%",
                      padding: "12px",
                      borderRadius: "12px",
                      border: "none",
                      fontWeight: "600",
                      color: "#fff",
                      background: "linear-gradient(135deg,#111,#333)",
                      cursor: "pointer",
                    }}
                  >
                    View Recipe →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;