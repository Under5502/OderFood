const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMealsByName = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${name}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu món ăn:', error);
    return [];
  }
};