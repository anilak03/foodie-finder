import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Foodie Finder
        </Link>
      </div>
    </header>
  );
}
