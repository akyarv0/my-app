import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "../css/ProductList.css";
import Category from "./Category";

const ProductList = ({ searchTerm }) => {
  const { products, loadingProducts, selectedCategory } = useSelector((state) => state.categories);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (


    <>

  
  <Category/>

    <div className="product-list">
      {loadingProducts ? (
        <p>Loading products...</p>
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
    </>
  );
};

export default ProductList;
