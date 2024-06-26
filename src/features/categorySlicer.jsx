import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  products: [],
  loadingCategories: false,
  loadingProducts: false,
  selectedCategory: null,
};

const BASE_URL = "https://fakestoreapi.com";

export const getCategories = createAsyncThunk("getCategories", async () => {
  const response = await axios.get(`${BASE_URL}/products/categories`);
  return response.data;
});

export const getProductsByCategory = createAsyncThunk(
  "getProductsByCategory",
  async (category) => {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`);
    return response.data;
  }
);

export const categorySlicer = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loadingCategories = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loadingCategories = false;
    });
    builder.addCase(getProductsByCategory.pending, (state) => {
      state.loadingProducts = true;
    });
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loadingProducts = false;
    });
  },
});

export const { setSelectedCategory } = categorySlicer.actions;
export default categorySlicer.reducer;
