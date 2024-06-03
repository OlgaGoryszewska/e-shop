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
      <div className=" flex flex-col min-h-screen">
        <Header/>
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/CardPage" element={<CardPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
