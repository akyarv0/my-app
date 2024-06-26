import React from "react";
import ProductList from "../components/ProductList";
import Category from "../components/Category";

const Home = ({ searchTerm }) => {
  return (
    <div>
     
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
