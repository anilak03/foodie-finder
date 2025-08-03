import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import MealDetail from './pages/MealDetail.js';
import Header from './components/Header.js';

export default App;

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetail />} />
      </Routes>
    </div>
  );
}

