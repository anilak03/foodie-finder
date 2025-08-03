import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';



export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  return (
    <div className="flex gap-2">
      <Input
        type="text"
        placeholder="Search meals..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={() => onSearch(query)}>Search</Button>
    </div>
  );
}
