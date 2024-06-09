import React from "react";
import { useNavigate } from "react-router-dom";

function ViewCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/CardPage");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-brown hover:bg-primary text-white font-medium my-2 py-2 px-4 rounded"
      >
        View Product
      </button>
    </div>
  );
}

export default ViewCard;
