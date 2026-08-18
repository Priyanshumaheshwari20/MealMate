import "./Address.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useCart } from "../CartToContext/CartToContext";
import Footer from "../Footer/Footer";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

function Address() {
  
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const subtotal =
    Number(localStorage.getItem("cartTotal")) ||
    cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

  const deliveryFee = 100;
  const total = subtotal + deliveryFee;

  const [formData, setFormData] = useState({firstName: "",lastName: "",email: "",street: "",
    city: "", state: "", pincode: "", country: "", phone: "",
  });

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
        value: state.isoCode,
        label: state.name,
      }))
    : [];

  const cities = selectedState
    ? City.getCitiesOfState(
        selectedCountry.value,
        selectedState.value
      ).map((city) => ({
        value: city.name,
        label: city.name,
      }))
    : [];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveAddress = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await axios.post("http://localhost:5000/address", {
        userEmail: user?.email,
        ...formData,
      });

      localStorage.setItem("address", JSON.stringify(formData));
navigate("/payment");
    } catch (error) {
          console.log(error.response?.data || error.message); // 👈 yahi lagana hai

      console.log(error);
      alert("Failed To Save Address");
    }
  };

  return (
    <>
      <Navbar />

      <div className="address-container">

        {/* LEFT SECTION */}

        <div className="address-left">

          <h1>Delivery Information</h1>

          <div className="input-row">

            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />

          </div>

          <input
            className="single-input"
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="single-input"
            type="text"
            placeholder="Street Address"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />

          <div className="input-row">

            <Select
              className="select-box"
              options={countries}
              placeholder="Select Country"
              value={selectedCountry}
              onChange={(country) => {
                setSelectedCountry(country);
                setSelectedState(null);

                setFormData({
                  ...formData,
                  country: country.label,
                  state: "",
                  city: "",
                });
              }}
            />

            <Select
              className="select-box"
              options={states}
              placeholder="Select State"
              value={selectedState}
              onChange={(state) => {
                setSelectedState(state);

                setFormData({
                  ...formData,
                  state: state.label,
                  city: "",
                });
              }}
            />

          </div>
                    <div className="input-row">

            <Select
              className="select-box"
              options={cities}
              placeholder="Search City"
              onChange={(city) =>
                setFormData({
                  ...formData,
                  city: city.label,
                })
              }
            />

            <input
              type="text"
              placeholder="Zip Code"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />

          </div>

          <input
            className="single-input"
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

        </div>

        {/* RIGHT SECTION */}

        <div className="address-right">

          <h1>Cart Totals</h1>

          <div className="cart-summary">

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="summary-row total-row">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              className="payment-btn"
              onClick={saveAddress}
            >
              Proceed To Payment
            </button>

          </div>

        </div>

      </div>
      <div style={{marginTop:"7rem"}}>
<Footer/>
</div>
    </>
  );
}

export default Address;