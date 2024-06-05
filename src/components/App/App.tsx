import React from "react";
import Layout from "../Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import CardPage from "../../Pages/CardPage";
import ContactPage from "../../Pages/ContactPage";
import CheckOutSuccessPage from "../../Pages/CheckoutSuccessPage";
import DropDownMenu from "../DropDownMenu";
import Footer from "../Footer";
import Header from "../Header";


const App = () => {
  return (
    <Router>
      <Header>
        <DropDownMenu />
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card-page" element={<CardPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/checkout-success-page" element={<CheckOutSuccessPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
