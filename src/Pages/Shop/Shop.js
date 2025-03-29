import React from "react";
import "./Shop.scss";

import heroSalad from "../../assets/salad6.png";
import salad1 from "../../assets/salad7.jpg";
import salad2 from "../../assets/salad8.png";
import salad3 from "../../assets/salad9.png";
import logo from "../../assets/logo.jpg";
import la1 from "../../assets/la1.jpg";
import la2 from "../../assets/la2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

import { IoIosArrowBack } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const saladItems = [
    {
      id: 1,
      name: "Mixed Salad",
      description: "Mix Vegetables",
      price: "$24.00",
      image: salad2,
    },
    {
      id: 2,
      name: "Quinoa Salad",
      description: "Spicy with garlic",
      price: "$24.00",
      image: salad3,
    },
  ];

  return (
    <div className="shop-wrapper">
      <div className="cart-hover-zone">
        <div className="cart-shop">
          <BsCart3 />
        </div>
      </div>

      <img src={logo} alt="Logo" className="logo-shop" onClick={handleHome} />
      {/* SHOP TOP */}
      <div className="shop-top">
        <div className="stl">
          <h1>
            Delicious Salads For you <br />
            Healthy life
          </h1>
          <p>We made fresh and healthy salad with different recipes</p>
          <button className="btn-view" onClick={handleHome}>
            <span className="spv"> View Menu</span>{" "}
            <FaArrowRightLong className="fa-right" />
          </button>
        </div>
        <div className="hero-image">
          <img src={heroSalad} alt="Hero Salad" className="h1-sl" />
          <img src={la1} alt="" className="la1-shop" />
          <img src={la2} alt="" className="la2-shop" />
        </div>
      </div>

      {/* SHOP MID */}
      <div className="shop-mid">
        <button className="arrow-left">
          <IoIosArrowBack className="btn-mid-l" />
        </button>{" "}
        <div className="shop-cards">
          {saladItems.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="card-img" />
              <h3 className="sm-h3">{item.name}</h3>
              <p className="sm-p">{item.description}</p>
              <span className="sm-sp">{item.price}</span>
              <button className="add-btn">+</button>
            </div>
          ))}
        </div>
        <div className="shop-description">
          <h2 className="sm-h2">We have Delicious Saladsin town</h2>
          <p className="sm-p2">
            Capture sint occaecat cupidatat proident, taken possession of my
            entire soul, like these sweet mornings of spring which I enjoy with
            my whole.
          </p>
        </div>
      </div>

      {/* SHOP BOTTOM */}
      <div className="shop-bottom">
        <div className="bottom-salad">
          <div className="btsl">
            <h3 className="h3-bt">
              Try our newly Salad with Avocado Combo with 6 Different type Of
              fresh salads
            </h3>
            <p className="p-bt">
              Fresh and healthy salad made with our own Chef Recipe. Special
              healthy and fat-free dish for those who want to lose weight.
            </p>
          </div>
          <img src={salad3} alt="Avocado Combo" className="img-bottom" />
        </div>
      </div>
    </div>
  );
}

export default Shop;
