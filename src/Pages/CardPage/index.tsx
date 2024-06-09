// src/pages/CardPage.tsx
import React from "react";
import { useCart } from "../../context/CartContext";
import CheckOut from "../../components/CheckOut";

const CardPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border p-4 mb-4">
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="mb-2">Price: ${item.price}</p>
            <p className="mb-2">Quantity: {item.quantity}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove from Cart
            </button>
            <CheckOut />
          </div>
        ))
      )}
    </div>
  );
};

export default CardPage;
