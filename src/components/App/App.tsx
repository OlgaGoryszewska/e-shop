// src/App.tsx
import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from '../Layout';
import HomePage from '../../Pages/HomePage';
import ContactPage from '../../Pages/ContactPage';
import CardPage from '../../Pages/CardPage';
import CheckOutPage from '../../Pages/CheckOutPage';
import CheckOutSuccessPage from '../../Pages/CheckoutSuccessPage';
import ProductPage from '../../Pages/ProductPage';
import SearchPage from '../../Pages/SearchPage';
import { CartProvider } from '../../context/CartContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="ContactPage" element={<ContactPage />} />
      <Route path="CardPage" element={<CardPage />} />
      <Route path="CheckOutPage" element={<CheckOutPage />} />
      <Route path="CheckOutSuccessPage" element={<CheckOutSuccessPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<div>404</div>} />
    </Route>
  )
);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
