import React, { useState } from "react";
import "./Home.scss";

import salad7 from "../../assets/salad7.jpg";
import salad8 from "../../assets/salad8.png";
import salad9 from "../../assets/salad9.png";
import salad6 from "../../assets/salad6.png";
import la1 from "../../assets/la1.jpg";
import la2 from "../../assets/la2.jpg";
import la3 from "../../assets/la3.jpg";

const Home = () => {
  const categories = [
    { label: "Salad", value: "Salad" },
    { label: "Soups", value: "Soups" },
    { label: "Drink", value: "Drink" },
  ];

  const mealsData = {
    Salad: [
      {
        idMeal: "s1",
        strMeal: "Mix Salad",
        strMealThumb: salad6,
        ingredient: "Spicy With Garlic",
      },
      {
        idMeal: "s2",
        strMeal: "Salmon Teriyaki",
        strMealThumb: salad7,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "s3",
        strMeal: "Grilled Shrimp",
        strMealThumb: salad8,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "s4",
        strMeal: "Salmon Teriyaki",
        strMealThumb: salad9,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "s2",
        strMeal: "Salmon Teriyaki",
        strMealThumb: salad7,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "s1",
        strMeal: "Mix Salad",
        strMealThumb: salad6,
        ingredient: "Spicy With Garlic",
      },

      {
        idMeal: "s4",
        strMeal: "Salmon Teriyaki",
        strMealThumb: salad9,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "s3",
        strMeal: "Grilled Shrimp",
        strMealThumb: salad8,
        ingredient: "Mix Vegetable",
      },
    ],
    Soups: [
      {
        idMeal: "d1",
        strMeal: "Chocolate Cake",
        strMealThumb: salad6,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "d2",
        strMeal: "Ice Cream Sundae",
        strMealThumb: salad7,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "d3",
        strMeal: "Salmon Teriyaki",
        strMealThumb: salad9,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "d4",
        strMeal: "Grilled Shrimp",
        strMealThumb: salad8,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "s2",
        strMeal: "Salmon Teriyaki",
        strMealThumb: salad7,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "s1",
        strMeal: "Mix Salad",
        strMealThumb: salad6,
        ingredient: "Spicy With Garlic",
      },

      {
        idMeal: "s4",
        strMeal: "Salmon Teriyaki",
        strMealThumb: salad9,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "s3",
        strMeal: "Grilled Shrimp",
        strMealThumb: salad8,
        ingredient: "Mix Vegetable",
      },
    ],
    Drink: [
      {
        idMeal: "p1",
        strMeal: "Spaghetti Carbonara",
        strMealThumb: salad6,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "p2",
        strMeal: "Penne Arrabiata",
        strMealThumb: salad9,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "p3",
        strMeal: "Salmon Teriyaki",
        strMealThumb: salad7,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "p4",
        strMeal: "Grilled Shrimp",
        strMealThumb: salad8,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "s2",
        strMeal: "Salmon Teriyaki",
        strMealThumb: salad7,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "s1",
        strMeal: "Mix Salad",
        strMealThumb: salad6,
        ingredient: "Spicy With Garlic",
      },

      {
        idMeal: "s4",
        strMeal: "Salmon Teriyaki",
        strMealThumb: salad9,
        ingredient: "Mix Vegetable",
      },
      {
        idMeal: "s3",
        strMeal: "Grilled Shrimp",
        strMealThumb: salad8,
        ingredient: "Mix Vegetable",
      },
    ],
  };

  // ✅ Mặc định là Salad
  const [activeTab, setActiveTab] = useState("Salad");
  const [page, setPage] = useState(0);
  const mealsPerPage = 4;

  const meals = mealsData[activeTab] || [];
  const featuredMeal = meals[0];

  const paginatedMeals = meals.slice(
    page * mealsPerPage,
    page * mealsPerPage + mealsPerPage
  );

  const nextPage = () => {
    if ((page + 1) * mealsPerPage < meals.length) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="home-wrapper">
      <div className="home-la">
        <img className="la1" src={la1} alt="" />
        <img className="la2" src={la2} alt="" />
        <img className="la3" src={la3} alt="" />
      </div>
      {/* Featured section */}
      {featuredMeal && (
        <div className="home-container">
          <div className="home-contain">
            <h1>
              <strong>Fresh Healthy</strong>
              <br />
              {featuredMeal.strMeal}
            </h1>
          </div>
          <div className="home-image">
            <img src={featuredMeal.strMealThumb} alt={featuredMeal.strMeal} />
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="tabbed-meals">
        <div className="tab-menu">
          {categories.map((cat) => (
            <span
              key={cat.value}
              className={activeTab === cat.value ? "active" : ""}
              onClick={() => {
                setActiveTab(cat.value);
                setPage(0);
              }}
            >
              {cat.label}
            </span>
          ))}
        </div>

        {/* Meal Cards */}
        {paginatedMeals.length > 0 ? (
          <div className="meal-grid">
            {paginatedMeals.map((meal) => (
              <div key={meal.idMeal} className="meal-card">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <div className="hps">
                  <h3>{meal.strMeal}</h3>
                  <p>{meal.ingredient}</p>
                  <span className="price">
                    ${Math.floor(Math.random() * 15 + 10)}.00
                  </span>
                </div>
                <span className="heart">🤍</span>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ padding: "40px 0", color: "#888" }}>
            No meals found for this category.
          </p>
        )}

        {/* Pagination */}
        {meals.length > mealsPerPage && (
          <div className="pagination-btns">
            <button onClick={prevPage} disabled={page === 0}>
              ←
            </button>
            <button
              onClick={nextPage}
              disabled={(page + 1) * mealsPerPage >= meals.length}
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
