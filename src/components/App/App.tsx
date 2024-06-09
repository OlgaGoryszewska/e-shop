import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Layout from "../Layout";

//Pages
import HomePage from "../../Pages/HomePage";
import ContactPage from "../../Pages/ContactPage";
import CardPage from "../../Pages/CardPage";
import CheckOutPage from "../../Pages/CheckOutPage";
import CheckOutSuccessPage from "../../Pages/CheckoutSuccessPage";
import ProductList from "../ProductList";
import ProductPage from "../../Pages/ProductPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="ContactPage" element={<ContactPage />} />
      <Route path="CardPage" element={<CardPage />} />
      <Route path="CheckOutPage" element={<CheckOutPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="CheckOutSuccessPage" element={<CheckOutSuccessPage />} />
      <Route path="*" element={<div>404</div>} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

