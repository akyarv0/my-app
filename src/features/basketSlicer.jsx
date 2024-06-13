import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],

};
const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};
const getBasketFromStorage = () => {
  if (!localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};
export const basketSlicer = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.basket = action.payload;
    },
  },
});

export const { setBasket } = basketSlicer.actions;
export default basketSlicer.reducer;
