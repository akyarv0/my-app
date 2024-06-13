// src/components/BasketDrawer.js

import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { useSelector, useDispatch } from "react-redux";

import { setDrawer, calculateBasketTotal , deleteFromBasket} from "../features/basketSlicer";
import "../css/Drawer.css";
import { toast } from "react-toastify";

const BasketDrawer = () => {
  const { products, drawer, total } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasketTotal());
  }, [products, dispatch]);

  return (
    <Drawer
      className="drawer"
      onClose={() => dispatch(setDrawer(false))}
      anchor="right"
      sx={{ padding: "20px" }}
      open={drawer}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ border: "2px solid #000" }}>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => (
              <tr key={index}>
                <td>
                  <img src={product.image} width="100px" alt={product.title} />
                </td>
                <td>{product.title && product.title.slice(0, 30)}...</td>
                <td>{product.count}</td>
                <td>{product.price}$</td>
                <td style={{ fontWeight: "bold", color: "green" }}>{product.price * product.count}$</td>
                <td width={"20px"}>
                  <button className="button" onClick={() => dispatch(deleteFromBasket(product.id))}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h3 style={{ textAlign: "center", fontWeight: "bold",color:"green" }}>Total: {total}</h3>
    </Drawer>
  );
};

export default BasketDrawer;
