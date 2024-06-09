import React from "react";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/CheckoutSuccessPage");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-brown hover:bg-primary text-white font-medium my-2 py-2 px-4 rounded"
      >Check Out
      </button>
    </div>
  );
}

export default CheckOut;
