import React from "react";
import { useNavigate } from "react-router-dom";
import basket from "../../assets/basket.svg";

function OpenCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/CardPage");
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img className="mr-2 w-9 mt-3" src={basket} alt="basket" />
      </button>
    </div>
  );
}

export default OpenCard;
