import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMealById } from '../services/mealApi.js';

export default function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    getMealById(id).then((data) => {
      setMeal(data);
    });
  }, [id]);

  if (!meal) return <p className="p-4">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full max-w-md mb-4 rounded-xl" />
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <p className="my-4">{meal.strInstructions}</p>
      {meal.strYoutube && (
        <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Watch on YouTube
        </a>
      )}
    </div>
  );
}
