import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  total: 0, // Add a total field to the initial state
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlicer = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);

      if (findProduct) {
        const newBasket = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        findProduct.count += action.payload.count;

        state.products = [...newBasket, findProduct];
        writeFromBasketToStorage(state.products);
      } else {
        state.products = [...state.products, action.payload];
        writeFromBasketToStorage(state.products);
      }
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    calculateBasketTotal: (state) => {
      state.total = state.products.reduce(
        (total, product) => total + product.price * product.count,
        0
      );
    },
    deleteFromBasket: (state, action) => {
      const newBasket = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = newBasket;
      writeFromBasketToStorage(state.products);
    },
  },
});

export const { addToBasket, setDrawer, calculateBasketTotal , deleteFromBasket} = basketSlicer.actions;
export default basketSlicer.reducer;
