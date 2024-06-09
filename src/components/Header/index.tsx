
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OpenCard from '../Basket';
import DropDownMenu from '../DropDownMenu';
import logo from '../../assets/logo.svg';

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
    <header className="p-4 flex flex-col justify-between ">
      <div className='flex flex-row justify-between'>
        <img src={logo} alt="logo" className="w-24" /> 
        <div className='flex flex-row'>
          <OpenCard />
          <DropDownMenu />
      </div>
      </div>
      <form onSubmit={handleSearchSubmit} className="flex items-center m-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="px-4 py-2 rounded-l bg-gray-200 text-black"
        />
        <button type="submit" className="bg-brown text-white px-4 py-2 rounded-r">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
