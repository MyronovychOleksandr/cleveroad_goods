import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import productActions from "./productsActions";

const addProduct = (state, action) => {
  return [...state, action.payload];
};

const removeProduct = (state, action) => {
  return state.filter((Product) => Product.id !== action.payload);
};

const products = createReducer([], {
  [productActions.fetchProductsSuccess]: (state, action) => action.payload,
  [productActions.addProductsSuccess]: addProduct,
  [productActions.removeProductsSuccess]: removeProduct,
  [productActions.fetchOneProductsSuccess]: (state, action) => [action.payload],
});

export default combineReducers({
  products,
});
