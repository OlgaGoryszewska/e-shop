import React from "react";
import ProductList from "../../components/ProductList";



const HomePage: React.FC  = () => {
  return (
    <div>
      <h1 className=" text-xl lg:text-2xl pb-4 bold">PRODUCTS LIST</h1>
      <ProductList /> 
    </div>
  );
};

export default HomePage;
