import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
};
const BASE_URL = "https://fakestoreapi.com";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);

  return response.data;
});

export const productSlicer = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
  },
});
export const {} = productSlicer.actions;

export default productSlicer.reducer;
