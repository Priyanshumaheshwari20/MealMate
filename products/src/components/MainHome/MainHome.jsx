import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../Navbar/Navbar";
import "./MainHome.css";
//import Stairs from "../stairs/stairs";
import IndianFood from "../IndianFood/IndianFood";
import ForeignFood from "../ForeignFood/Foreign Food";
import Beverages from "../Beverages/Beverages";
import Dessert from "../Dessert/Dessert";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
function MainHome() {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios .get("http://localhost:5000/foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <> 
    
      {/* SEARCH STATE PASS KARO */}
<Navbar setSearchTerm={setSearchTerm} foods={foods} />
      <div >
        <img
          className="hero-image"
          alt="hero"
          src="https://t4.ftcdn.net/jpg/03/61/86/91/240_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg"
        />

        <div className="hero-text">
          <h1>DELICIOUS FOOD DELIVER</h1>
          <p>Fresh • Hot • Tasty Meals • Recipes</p>
        </div>
      </div>

      {/* SEARCH TERM PASS KARO */}
      <IndianFood foods={foods} searchTerm={searchTerm} />
      <ForeignFood foods={foods} searchTerm={searchTerm} />
      <Beverages foods={foods} searchTerm={searchTerm} />
      <Dessert foods={foods} searchTerm={searchTerm} />

     <Link to="/intro" style={{ textDecoration :"none",display: "flex",
       justifyContent: "center",
        alignItems: "center",
         width: "100%" }}>
  <button style={{ textDecoration:"none" }} className="explore-btn"> 
    Explore Our Menu More 
  </button>
</Link>
      <Footer/>
    </>
  );
}

export default MainHome;