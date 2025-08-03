import { Card, CardContent } from './ui/card'; 
import { Link } from 'react-router-dom';

export default function MealCard({ meal }) {
  return (
    <Link to={`/meal/${meal.idMeal}`}>
      <Card className="hover:shadow-xl transition">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <CardContent>
          <h2 className="text-lg font-semibold truncate">{meal.strMeal}</h2>
        </CardContent>
      </Card>
    </Link>
  );
}
