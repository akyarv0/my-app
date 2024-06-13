import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../features/productSlicer";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from "react";

import "../css/ProductDetail.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [count, setCount] = useState(0);

  const { basket } = useSelector((state) => state.basket); 


  const addToBasket = () => {
  const addedProduct = {...basket, id, title, price, image, count};
  console.log(addedProduct);
   
  }

    
  


  const { products, selectedProduct } = useSelector((store) => store.products);
  const { title, price, description, category, image } = selectedProduct;
  const dispatch = useDispatch();
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    const product = products.find((product) => product.id.toString() === id);
    if (product) {
      dispatch(setSelectedProduct(product));
    }
  };

  console.log(title);

  return (
    <div className="product-details">
      <div
        className="product-card"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <div className="product-image">
          {" "}
          <img
            className="product-image flex-row"
            src={image}
            alt={title}
          />{" "}
        </div>

        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <p className="product-price">Price: ${price}</p>
          <div className="flex-row gap-10">
            {" "}
            <CiCirclePlus
              onClick={() => setCount(count + 1)}
              style={{
                cursor: "pointer",
                fontSize: "40px",
                marginRight: "10px",
              }}
            />
            <span className="quantity">{count}</span>
            <CiCircleMinus
              onClick={() =>
                setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))
              }
              style={{
                cursor: "pointer",
                fontSize: "40px",
                marginLeft: "10px",
              }}
            />
          </div>
          <div>
            <button className="details-button" onClick={addToBasket} >Add to cart</button>
          </div>
          <p className="product-description">{description}</p>
          <p className="product-category">Category: {category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
