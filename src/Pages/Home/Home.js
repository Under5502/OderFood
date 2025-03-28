import React, { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
  // ✅ Đúng giá trị API
  const categories = [
    { label: "Seafood", value: "Seafood" },
    { label: "Dessert", value: "Dessert" },
    { label: "Pasta", value: "Pasta" },
  ];
  
  
  

  const [activeTab, setActiveTab] = useState("Side");
  const [meals, setMeals] = useState([]);
  const [featuredMeal, setFeaturedMeal] = useState(null);
  const [page, setPage] = useState(0);
  const mealsPerPage = 4;

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []);
        setPage(0);
        setFeaturedMeal(data.meals?.[0] || null);
      })
      .catch((err) => {
        console.error("Lỗi gọi API:", err);
        setMeals([]);
        setFeaturedMeal(null);
      });
  }, [activeTab]);

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
              onClick={() => setActiveTab(cat.value)}
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
                <h3>{meal.strMeal}</h3>
                <p>{activeTab}</p>
                <span className="price">
                  ${Math.floor(Math.random() * 15 + 10)}.00
                </span>
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
