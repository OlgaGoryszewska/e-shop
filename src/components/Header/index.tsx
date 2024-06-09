// src/components/Header.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OpenCard from '../Basket';

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">Home</Link>
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="px-4 py-2 rounded-l bg-gray-200 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Search
        </button>
      </form>
      <OpenCard />
    </header>
  );
};

export default Header;
