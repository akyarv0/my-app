import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts, setSelectedProduct } from "../features/productSlicer";

import "../css/ProductDetail.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, selectedProduct, loading } = useSelector((state) => state.products);

  useEffect(() => {
  getProductsById();
  }, []);

  const getProductsById = () => {
    if (products.id === id) {
      dispatch(setSelectedProduct(products));
        
    }
    
  }

  

  const { title, price, description, category, image } = selectedProduct;

  return (
    <div className="product-details">
      <div className="product-card">
        <img className="product-image" src={image} alt={title} />
        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <p className="product-price">Price: ${price}</p>
          <p className="product-description">{description}</p>
          <p className="product-category">Category: {category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
