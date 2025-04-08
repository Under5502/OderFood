import React, { useEffect, useState } from "react";
import services from "../../utils/services";
import "./Filter.scss";
import { IoFilter } from "react-icons/io5";

const Filter = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);

  const [showFilter, setShowFilter] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // 👈 trạng thái đã bấm OK

  // Bộ lọc
  const [keyword, setKeyword] = useState("");
  const [maxPrice, setMaxPrice] = useState(500000);
  const [isVegan, setIsVegan] = useState(false);
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [minRating, setMinRating] = useState(0);

  // Fetch danh sách món ăn 1 lần sau khi mở filter
  useEffect(() => {
    if (showFilter && !hasFetched) {
      const fetchFoods = async () => {
        const data = await services.getAllFoods();
        setFoods(data);
        setFilteredFoods(data);
        setHasFetched(true);
      };
      fetchFoods();
    }
  }, [showFilter]);

  // Hàm xử lý khi bấm OK
  const handleSubmit = () => {
    const filter = foods.filter((food) => {
      const avgRating =
        food.totalRatings > 0 ? food.totalStars / food.totalRatings : 0;

      return (
        food.name.toLowerCase().includes(keyword.toLowerCase()) &&
        food.price <= maxPrice &&
        (!isVegan || food.isVegan) &&
        (!isGlutenFree || food.isGlutenFree) &&
        avgRating >= minRating
      );
    });

    setFilteredFoods(filter);
    setIsSubmitted(true); // ✅ đã lọc → show sản phẩm
  };

  return (
    <div className="filter-page">
      {/* Nút mở filter */}
      <div className="filter-toggle">
        <button onClick={() => setShowFilter(true)}>
          <IoFilter />
        </button>
      </div>

      {/* Dropdown filter */}
      <div className={`filter-dropdown ${showFilter ? "show" : ""}`}>
        <div className="filter-header">
          <strong>Bộ lọc tìm món ăn</strong>
          <button
            onClick={() => {
              setShowFilter(false);
              setIsSubmitted(false); // 👈 ẩn danh sách món ăn luôn
            }}
          >
            ✖
          </button>
        </div>

        <input
          type="text"
          placeholder="🔍 Tìm món ăn..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <div className="price-slider">
          <label>💰 Giá tối đa: {maxPrice.toLocaleString()} đ</label>
          <input
            type="range"
            min="0"
            max="500000"
            step="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div className="row">
          <label>
            <input
              type="checkbox"
              checked={isVegan}
              onChange={() => setIsVegan(!isVegan)}
            />
            Món chay
          </label>
          <label>
            <input
              type="checkbox"
              checked={isGlutenFree}
              onChange={() => setIsGlutenFree(!isGlutenFree)}
            />
            Không gluten
          </label>
        </div>

        <div className="row">
          <label>Đánh giá tối thiểu</label>
          <input
            type="number"
            min="0"
            max="5"
            step="0.5"
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
          />
        </div>

        {/* ✅ Nút OK */}
        <div className="ok-button-wrapper">
          <button className="ok-btn" onClick={handleSubmit}>
            OK
          </button>
        </div>
      </div>

      {/* Danh sách món ăn chỉ hiển thị khi đã bấm OK */}
      {isSubmitted && (
        <div className={`layout ${showFilter ? "with-filter" : "full"}`}>
          <div className="food-grid">
            {filteredFoods.length > 0 ? (
              filteredFoods.map((food) => {
                const avgRating =
                  food.totalRatings > 0
                    ? (food.totalStars / food.totalRatings).toFixed(1)
                    : "Chưa có";

                return (
                  <div className="food-card" key={food.id}>
                    <img src={food.img} alt={food.name} />
                    <h3>{food.name}</h3>
                    <p>Giá: {food.price.toLocaleString()} đ</p>
                    <p>Đánh giá: ⭐ {avgRating}</p>
                    <p>
                      {food.isVegan && "🌿 Chay "}
                      {food.isGlutenFree && "🌾 Không gluten"}
                    </p>
                  </div>
                );
              })
            ) : (
              <p>Không tìm thấy món ăn nào phù hợp.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
