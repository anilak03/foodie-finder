import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export async function getMealsBySearch(query) {
  const res = await axios.get(`${API_URL}/search.php?s=${query}`);
  return res.data.meals || [];
}

export async function getMealById(id) {
  const res = await axios.get(`${API_URL}/lookup.php?i=${id}`);
  return res.data.meals[0];
}

export async function getMealCategories() {
  const res = await axios.get(`${API_URL}/categories.php`);
  return res.data.categories;
}

export async function getRandomMeal() {
  const res = await axios.get(`${API_URL}/random.php`);
  return res.data.meals || [];
}