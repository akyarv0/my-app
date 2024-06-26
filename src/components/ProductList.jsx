import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productSlicer";
import Product from "./Product";
import "../css/ProductList.css"; // ProductList.css dosyasını ekledim

const ProductList = ({ searchTerm }) => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p> // Eğer arama sonucu boşsa
        )
      )}
    </div>
  );
};

export default ProductList;
