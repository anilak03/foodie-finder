import { useEffect, useState } from 'react';
import { getMealsBySearch, getMealCategories, getRandomMeal } from '../services/mealApi.js';
import SearchBar from '../components/SearchBar.js';
import MealCard from '../components/MealCard.js';
import { Button } from '../components/ui/button';

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMealCategories().then(setCategories);
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    const result = await getMealsBySearch(query);
    setMeals(result);
    setLoading(false);
  };

  const handleRandom = async () => {
    const result = await getRandomMeal();
    setMeals(result);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <SearchBar onSearch={handleSearch} />
        <Button onClick={handleRandom}>Random Meal</Button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : meals.length ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        <p>No meals found. Try a different search.</p>
      )}
    </div>
  );
}
