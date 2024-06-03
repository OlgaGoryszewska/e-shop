import react from "react";
import Layout from "../Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import CardPage from "../../Pages/CardPage";
import DropDownMenu from "../DropDownMenu";
import Footer from "../Footer";
import Header from "../Header";

const App = () => {
  return (
    <Router>
      <>
        <DropDownMenu/>
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/CardPage" element={<CardPage />} />
        </Routes>
        <Footer/>
      </>
    </Router>
  );
};

export default App;
