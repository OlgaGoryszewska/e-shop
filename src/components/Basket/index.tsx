
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import basket from '../../assets/basket.svg';

const OpenCard: React.FC = () => {
  const navigate = useNavigate();
  const { itemCount } = useCart();

  const handleClick = () => {
    navigate('/CardPage');
  };

  return (
    <div className="relative">
      <button onClick={handleClick}>
        <img className="mr-2 w-9 mt-3" src={basket} alt="basket" />
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {itemCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default OpenCard;
