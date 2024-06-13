import React from "react";
import { useSelector } from "react-redux";
import "../css/Basket.css"; // Assuming you have some CSS for the basket

const Basket = ({ toggleBasket }) => {
  const { basket } = useSelector((state) => state.basket);

  console.log(basket);

  return (
    <div className="basket">
 
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((product, index) => (
            <tr key={index}>
              <td><img src={product.image} alt={product.title} /></td>
              <td>{product.title}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Basket;
