import React from "react";
import Layout from ".";
import HomePage from "../../Pages/HomePage";
import CardPage from "../../Pages/CardPage";
import ContactPage from "../../Pages/ContactPage";
import CheckOutSuccessPage from "../../Pages/CheckOutSuccessPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../Header";
import DropDownMenu from "../DropDownMenu";
import Body from "../Body";


const App = () => {
  return (
    <div>
      <Router>
        <>
          <Layout>
            <Routes>
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/CardPage" element={<CardPage />} />
              <Route path="/ContactPage" element={<ContactPage />} />
              <Route path="/CheckoutSuccessPage" element={<CheckOutSuccessPage />} />
            </Routes>
          </Layout>
        </>
      </Router>
    </div>
  );
};

export default App;
