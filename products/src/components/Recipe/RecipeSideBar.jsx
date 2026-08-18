import React from "react";

export default function SideBar({
  a,b
}) {
  const categories = [
    "All",
    "Vegetarian",
    "Non-Vegetarian",
    "Beverages"
  ];

  return (
    <div
      className="border rounded p-3 bg-white"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h5 className="mb-3">Meal Type</h5>

      {categories.map((category) => (
        <div key={category} className="form-check mb-2">
          <input
          
            className="form-check-input"
            type="radio"
            name="mealType"
            id={category}
            checked={a === category}
            onChange={() => b(category)}
          />

          <label
            className="form-check-label ms-2"
            htmlFor={category}
          >
            {category}
          </label>
        </div>
      ))}
    </div>
  );
}