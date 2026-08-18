import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
function FoodDetail() {
  const { id, category } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/foods")
      .then((res) => {
        const found = res.data.find(
          (item) =>
            item._id === id &&
            item.category.toLowerCase() === category.toLowerCase()
        );
        setFood(found);
      })
      .catch((err) => console.log(err));
  }, [id, category]);

  if (!food) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "120px",
          fontSize: "20px",
          color: "#666",
        }}
      >
        Cooking details loading... 🍽️
      </div>
    );
  }

  let recipeData = null;

  try {
    recipeData = food.direction ? JSON.parse(food.direction) : null;
  } catch (e) {
    recipeData = null;
  }

  return (
    <>
      <Navbar />

      <div
        style={{
          paddingTop: "100px",
          minHeight: "100vh",
          background: "#fafafa",
        }}
      >
        {/* HERO SECTION */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1100px",
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              alignItems: "center",
              background: "#fff",
              padding: "30px",
              borderRadius: "25px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            }}
          >
            {/* IMAGE */}
            <img
              src={food.image}
              alt={food.name}
              style={{
                width: "450px",
                height: "350px",
                objectFit: "cover",
                borderRadius: "20px",
                flex: "1",
              }}
            />

            {/* INFO */}
            <div style={{ flex: "1", minWidth: "280px" }}>
              <h1
                style={{
                  fontSize: "36px",
                  marginBottom: "10px",
                  color: "#222",
                }}
              >
                🍽️ {food.name}
              </h1>

              <p
                style={{
                  color: "#ff4d6d",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                ₹{food.price}
              </p>

              <span
                style={{
                  padding: "6px 12px",
                  background: "#ffe3e8",
                  color: "#ff4d6d",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {food.category}
              </span>

              <p
                style={{
                  marginTop: "20px",
                  color: "#555",
                  lineHeight: "1.7",
                }}
              >
                {food.description || "Delicious freshly prepared dish made with love."}
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 20px 60px",
          }}
        >
          {/* RECIPE */}
          {recipeData?.recipe && (
            <div>
              <h2
                style={{
                  textAlign: "center",
                  margin: "30px 0",
                  color: "#222",
                }}
              >
                👨‍🍳 Cooking Steps
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "20px",
                }}
              >
                {Object.entries(recipeData.recipe).map(
                  ([section, steps]) => (
                    <div
                      key={section}
                      style={{
                        background: "#fff",
                        padding: "20px",
                        borderRadius: "18px",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                      }}
                    >
                      <h3
                        style={{
                          color: "#ff4d6d",
                          marginBottom: "10px",
                          textTransform: "capitalize",
                        }}
                      >
                        {section}
                      </h3>

                      <ol style={{ color: "#444", lineHeight: "1.8" }}>
                        {steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* FOOTER TAG */}
          <div
            style={{
              marginTop: "40px",
              textAlign: "center",
              fontSize: "16px",
              color: "#777",
            }}
          >
            Made with ❤️ for food lovers
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default FoodDetail;