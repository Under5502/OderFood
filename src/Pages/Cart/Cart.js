import React, { useState } from "react";
import "./Cart.scss";
import salad1 from "../../assets/salad7.jpg";
import salad2 from "../../assets/salad8.png";
import salad3 from "../../assets/salad9.png";
import { FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const mealsData = {
  Salad: [
    {
      idMeal: "s1",
      strMeal: "Mix Salad",
      strMealThumb: salad3,
      gam: "350g",
      ingredient:
        "A mouthwatering rotini pasta cooked with sun-dried tomatoes and blended in a rich, slow-simmered tomato sauce.",
    },
    {
      idMeal: "s2",
      strMeal: "Salmon Teriyaki",
      strMealThumb: salad1,
      gam: "350g",
    },
    {
      idMeal: "s3",
      strMeal: "Grilled Shrimp",
      strMealThumb: salad3,
      gam: "350g",
    },
    {
      idMeal: "s4",
      strMeal: "Grilled Shrimp",
      strMealThumb: salad2,
      gam: "350g",
    },
  ],
  Soups: [
    {
      idMeal: "s1",
      strMeal: "Mix Salad",
      strMealThumb: salad3,
      gam: "350g",
      ingredient:
        "A mouthwatering rotini pasta cooked with sun-dried tomatoes and blended in a rich, slow-simmered tomato sauce.",
    },
    {
      idMeal: "d2",
      strMeal: "Ice Cream Sundae",
      strMealThumb: salad3,
      gam: "350g",
    },
    {
      idMeal: "s2",
      strMeal: "Salmon Teriyaki",
      strMealThumb: salad1,
      gam: "350g",
    },
    {
      idMeal: "s3",
      strMeal: "Grilled Shrimp",
      strMealThumb: salad3,
      gam: "350g",
    },
  ],
  Drink: [
    {
      idMeal: "s1",
      strMeal: "Mix Salad",
      strMealThumb: salad3,
      gam: "350g",
      ingredient:
        "A mouthwatering rotini pasta cooked with sun-dried tomatoes and blended in a rich, slow-simmered tomato sauce.",
    },
    {
      idMeal: "p2",
      strMeal: "Penne Arrabiata",
      strMealThumb: salad3,
      gam: "350g",
    },
    {
      idMeal: "s2",
      strMeal: "Salmon Teriyaki",
      strMealThumb: salad1,
      gam: "350g",
    },
    {
      idMeal: "s3",
      strMeal: "Grilled Shrimp",
      strMealThumb: salad3,
      gam: "350g",
    },
  ],
};

const categories = ["Salad", "Soups", "Drink"];

const Cart = () => {
  const [selectedCategory, setSelectedCategory] = useState("Salad");
  const selectedMeals = mealsData[selectedCategory] || [];
  const mainMeal = selectedMeals[0];
  const recommendedMeals = selectedMeals.slice(1);
  const [quantity, setQuantity] = useState(1);
  const [itemQuantities, setItemQuantities] = useState({});

  const cartItems = [
    {
      name: "Chicken Biryani",
      weight: "380g",
      price: 4.5,
      img: salad1,
    },
    {
      name: "Crust Supreme",
      weight: "460g",
      price: 5.5,
      img: salad2,
    },
    {
      name: "Gleam Breeze",
      weight: "0.350L",
      price: 2.15,
      img: salad3,
    },
  ];

  const totalPrice = cartItems.reduce((total, item, index) => {
    const qty = itemQuantities[index] || 1;
    return total + item.price * qty;
  }, 0);
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      {/* ==== CART RIGHT ==== */}
      <div className="cart-right">
        <div className="title-cart">
          <span className="title-cr">Meal Category</span>
        </div>
        <div className="category-list">
          {categories.map((category) => (
            <div
              key={category}
              className={`category-item ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>

        {mainMeal && (
          <div className="main-meal">
            <div className="img-main">
              <img
                src={mainMeal.strMealThumb}
                alt={mainMeal.strMeal}
                className="main-meal-img"
              />
            </div>
            <div className="meal-left">
              <div className="main-meal-full">
                <h2 className="meal-title">{mainMeal.strMeal}</h2>
                <p className="meal-description">
                  {mainMeal.ingredient ||
                    "A vibrant and flavorful pasta dish..."}
                </p>

                <div className="size">
                  <span className="sp-size">SIZE</span>
                  <div className="size-options">
                    <button className="size-btn selected">380g</button>
                    <button className="size-btn">480g</button>
                    <button className="size-btn">560g</button>
                  </div>
                </div>

                <div className="build-meal">
                  <h4 className="h4-build-meal">Build Your Meal</h4>
                  <div className="topping-list">
                    <div className="topping-item">
                      <img
                        src={salad2}
                        alt="topping1"
                        className="topping-img"
                      />
                      <FaCheckCircle className="check-meal" />
                    </div>
                    <div className="topping-item">
                      <img
                        src={salad2}
                        alt="topping1"
                        className="topping-img"
                      />
                      <FaCheckCircle className="check-meal" />
                    </div>
                    <div className="topping-item">
                      <img
                        src={salad2}
                        alt="topping1"
                        className="topping-img"
                      />
                      <FaCheckCircle className="check-meal" />
                    </div>
                  </div>
                </div>

                <div className="add-section">
                  <div className="quantity-selector">
                    <button
                      className="btn-add-carts"
                      onClick={() =>
                        setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                      }
                    >
                      -
                    </button>
                    <span className="add-quanti">{quantity}</span>
                    <button
                      className="btn-add-carts"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="price-order">
                    <span className="price">
                      ${(4.5 * quantity).toFixed(2)}
                    </span>
                    <button className="add-to-order-btn">Add to order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {recommendedMeals.length > 0 && (
          <div className="recommended-section">
            <h3>Recommended Pairings</h3>
            <div className="recommended-list">
              {recommendedMeals.map((meal) => (
                <div key={meal.idMeal} className="recommended-card">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="recommended-img"
                  />
                  <div className="list-b">
                    <div className="list-r">
                      <h4 className="h4-listr">{meal.strMeal}</h4>
                      <p className="p-listr">{meal.gam}</p>
                    </div>
                    <div className="list-m">
                      <p className="p-money">$3.60</p>
                      <button className="list-mcong">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ==== CART LEFT ==== */}
      <div className="cart-left">
        <div className="order-summary">
          <h3 className="order-title">
            My Order <span className="order-count">3 positions</span>
          </h3>

          <div className="order-items">
            {cartItems.map((item, index) => (
              <div className="order-item" key={index}>
                <img src={item.img} alt={item.name} className="order-img" />
                <div className="oder-pp">
                  <div className="order-info">
                    <p className="order-name">{item.name}</p>
                    <p className="order-weight">{item.weight}</p>
                  </div>
                  <div className="order-quantity">
                    <div className="oder-price-ct">
                      <p className="order-price">
                        $
                        {(item.price * (itemQuantities[index] || 1)).toFixed(2)}
                      </p>
                    </div>
                    <div className="qty-btn-ct">
                      <button
                        className="qty-btn"
                        onClick={() =>
                          setItemQuantities((prev) => ({
                            ...prev,
                            [index]: prev[index] > 1 ? prev[index] - 1 : 1,
                          }))
                        }
                      >
                        -
                      </button>
                      <span>{itemQuantities[index] || 1}</span>
                      <button
                        className="qty-btn"
                        onClick={() =>
                          setItemQuantities((prev) => ({
                            ...prev,
                            [index]: (prev[index] || 1) + 1,
                          }))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="promo-section">
            <div className="promo-row">
              <span className="pto-title">PROMOCODE</span>
              <span className="promo-code">
                🏷️ bato <IoClose className="promo-close" />
              </span>
            </div>
            <div className="discount-row">
              <span className="title-discount">DISCOUNT</span>
              <span>-10%</span>
            </div>
            <div className="discount-row">
              <span className="title-discount">DELIVERY</span>
              <span>FREE</span>
            </div>
            <div className="discount-row">
              <span className="total-title">TOTAL</span>
              <span className="total-title">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button className="confirm-btn" onClick={() => navigate("/checkout")}>
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
