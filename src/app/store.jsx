import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlicer";
import productReducer from "../features/productSlicer";
import basketReducer from "../features/basketSlicer";

export const store = configureStore({
  reducer: {
    app: appReducer,
    products: productReducer,
    basket: basketReducer
    
  },
});
