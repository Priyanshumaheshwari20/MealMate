import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaUtensils,
  FaQuestionCircle,
  FaInfoCircle,
  FaSearch,
} from "react-icons/fa";

import { useCart } from "../CartToContext/CartToContext";
import { useFavorite } from "../FavoritesContext/FavoritesContext";

function Navbar({ foods = [] }) {
  const navigate = useNavigate();

  const { cartItems } = useCart();
  const { favorites } = useFavorite();

  const [search, setSearch] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);

  const totalQty = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const filteredFoods = foods.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Search Page Open
  const handleSearch = () => {
    const results = foods.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    navigate("/search", {
      state: {
        results,
        keyword: search,
      },
    });

    setSearch("");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">

        {/* LOGO */}
        <Link to="/" className="logo-brand">
          MealMate
        </Link>

        <div className="collapse navbar-collapse">

          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className="custom-link" to="/recipe">
                <FaUtensils /> Recipes
              </Link>
            </li>

            <li className="nav-item">
              <Link className="custom-link" to="/favorites">
                <FaHeart /> Favourites ({favorites.length})
              </Link>
            </li>

            <li className="nav-item">
              <Link className="custom-link" to="/about">
                <FaInfoCircle /> About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="custom-link" to="/helpsupport">
                <FaQuestionCircle /> Support
              </Link>
            </li>

          </ul>

          {/* SEARCH */}
          <div className="search-wrapper">

            <FaSearch
              className="search-icon"
              style={{ cursor: "pointer" }}
              onClick={handleSearch}
            />

            <input
              type="text"
              placeholder="Search food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            {search && (
              <div className="search-dropdown">
                {filteredFoods.length > 0 ? (
                  filteredFoods.map((item, index) => (
                    <div
                      key={item._id}
                      className="search-item"
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => {
                        navigate("/search", {
                          state: {
                            results: [item],
                            keyword: item.name,
                          },
                        });

                        setSearch("");
                      }}
                      style={{
                        background:
                          hoveredItem === index
                            ? "#111"
                            : "transparent",
                        color:
                          hoveredItem === index
                            ? "#fff"
                            : "#000",
                      }}
                    >
                      🍽 {item.name}
                    </div>
                  ))
                ) : (
                  <div className="search-item">
                    No results found
                  </div>
                )}
              </div>
            )}

          </div>

          {/* LOGIN */}
          <Link to="/login" className="login-btn-nav">
            <FaUser /> Login
          </Link>

          {/* SIGNUP */}
          <Link to="/signup" className="signup-btn-nav">
            Signup
          </Link>

          {/* CART */}
          <Link to="/cart" className="cart-btn">
            <FaShoppingCart />

            <span>Cart</span>

            {totalQty > 0 && (
              <span className="cart-count">
                {totalQty}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;