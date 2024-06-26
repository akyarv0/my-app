import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productSlicer";
import Product from "./Product";
import "../css/ProductList.css"; // ProductList.css dosyasını ekledim

const ProductList = ( { searchTerm }) => {

  const filteredProducts = useSelector((state) => {
    if (searchTerm) {
      return state.products.products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return state.products.products;
    }
  });
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
