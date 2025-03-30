import React, { useState } from "react";
import "./MobileShop.scss";

import salad1 from "../../../assets/salad7.jpg";
import salad2 from "../../../assets/salad6.png";
import salad3 from "../../../assets/salad9.png";
import Navbar from "../../../Components/Navbar/Navbar";
import { FiFilter } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const MobileShop = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Salads");

  const data = {
    Salads: [
      {
        id: 1,
        name: "Chicken Salad",
        description: "Chicken with Avocado",
        price: "$32.00",
        image: salad1,
      },
      {
        id: 2,
        name: "Mixed Salad",
        description: "Mix Vegetables",
        price: "$24.00",
        image: salad2,
      },
      {
        id: 3,
        name: "Quinoa Salad",
        description: "Spicy with garlic",
        price: "$24.00",
        image: salad3,
      },
    ],
    Soups: [
      {
        id: 1,
        name: "Chicken Salad",
        description: "Chicken with Avocado",
        price: "$32.00",
        image: salad2,
      },
      {
        id: 2,
        name: "Mixed Salad",
        description: "Mix Vegetables",
        price: "$24.00",
        image: salad3,
      },
      {
        id: 3,
        name: "Quinoa Salad",
        description: "Spicy with garlic",
        price: "$24.00",
        image: salad1,
      },
    ],
    Grilled: [
      {
        id: 1,
        name: "Chicken Salad",
        description: "Chicken with Avocado",
        price: "$32.00",
        image: salad3,
      },
      {
        id: 2,
        name: "Mixed Salad",
        description: "Mix Vegetables",
        price: "$24.00",
        image: salad1,
      },
      {
        id: 3,
        name: "Quinoa Salad",
        description: "Spicy with garlic",
        price: "$24.00",
        image: salad2,
      },
    ],
  };

  const items = data[activeTab];
  const [featured, ...others] = items;

  return (
    <div className="mobile-shop-container">
      <Navbar />

      {/* Header */}
      <div className="header">
        <h2>Delicious Salads</h2>
        <p>We made fresh and Healthy food</p>

        <div className="tab-row">
          <div className="tabs">
            {["Salads", "Soups", "Grilled"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <FiFilter className="filter-icon" />
        </div>
      </div>

      {/* Featured Item */}
      {featured && (
        <div
          className="featured-item"
          onClick={() => navigate(`/product/${featured.id}`)}
        >
          <img
            src={featured.image}
            alt={featured.name}
            className="featured-img"
          />
          <div className="featured-info">
            <h3>{featured.name}</h3>
            <p>{featured.description}</p>
            <span>{featured.price}</span>
          </div>
          <button className="plus-btn">+</button>
        </div>
      )}

      {/* Other Items */}
      <div className="other-items">
        {others.map((item) => (
          <div
            className="other-card"
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img src={item.image} alt={item.name} className="circle-img" />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <span>{item.price}</span>
            <button className="plus-btn">+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileShop;
