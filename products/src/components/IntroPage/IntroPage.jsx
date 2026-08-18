import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../Navbar/Navbar";
import Carousel from "../carousel/carousel";
import Veg from "../Veg/Veg";
import CustomerFavourite from "../Customerfavourite/Customerfavourite";
import PremiumFoodExperience  from "../Premium Food Experience/Premium Food Experience";
import Footer from "../Footer/Footer";
import Discount from "../Discount/Discount";
import FoodJourney from "../FoodJourney/FoodJourney";
import ChooseUs from "../ChooseUs/ChooseUs";

function Intro() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {

      window.scrollTo(0, 0);

    axios
      .get("http://localhost:5000/foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
       <Carousel />
      <div style={{ marginTop: "90px" }}>    
<CustomerFavourite />

        <Veg foods={foods} />


        <FoodJourney />

        <PremiumFoodExperience />
        <ChooseUs />
        

        <Discount />

        <Footer />
      </div>
    </>
  );
}

export default Intro;