import React, { useState } from "react";
import "./ProductDetail.scss";

import img1 from "../../assets/salad6.png";
import img2 from "../../assets/salad8.png";
import img3 from "../../assets/salad9.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import { FiMinus, FiPlus, FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [img1, img2, img3];
  const currentImage = images[activeImageIndex];

  const price = 24;
  const total = (price * quantity).toFixed(2);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="product-detail">
      {/* Top Navigation */}
      <div className="top-nav">
        <span className="back-btn" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </span>
        <span className="menu-dots">⋮</span>
      </div>

      {/* Image Slider */}
      <div className="slider-wrapper">
        <div className="slider">
          {images.map((img, index) => (
            <div
              key={index}
              className={`slide ${index === activeImageIndex ? "active" : ""}`}
            >
              <img src={img} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <div className="slider-indicator">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeImageIndex ? "active" : ""}`}
              onClick={() => setActiveImageIndex(i)}
            ></span>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="product-content">
        <div className="pd-h2">
          {" "}
          <h2 className="category">Mediterranean</h2>
        </div>
        <div className="pd-pp">
          <h2 className="title">Quinoa Salad</h2>

          <div className="quantity-control">
            <button onClick={handleDecrease}>
              <FiMinus />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>
              <FiPlus />
            </button>
          </div>
        </div>

        <p className="description">
          Fresh and healthy salad made with our own Chef Recipe. Special healthy
          and fat-free dish for those who want to lose weight.
        </p>

        <div className="delivery-info">
          <span className="sp-time">Delivery Time</span>
          <FiClock className="clock" />
          <span className="sp-m">25 mins</span>
        </div>

        <div className="footer">
          <div className="total">
            <span>Total Price</span>
            <h3>${total}</h3>
          </div>

          <button className="cart-btn">
            <IoCartOutline className="cart-p" />
            <span className="cart-badge">1</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
