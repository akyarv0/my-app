import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);




  
  return <div>ProductDetails</div>;
};

export default ProductDetails;
