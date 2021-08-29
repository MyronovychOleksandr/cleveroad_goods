import { createAction } from "@reduxjs/toolkit";

const addProductsRequest = createAction("products/addRequest");
const addProductsSuccess = createAction("products/addSuccess");
const addProductsError = createAction("products/addError");

const fetchProductsRequest = createAction("products/fetchRequest");
const fetchProductsSuccess = createAction("products/fetchSuccess");
const fetchProductsError = createAction("products/fetchError");

const fetchOneProductsRequest = createAction("products/fetchOneRequest");
const fetchOneProductsSuccess = createAction("products/fetchOneSuccess");
const fetchOneProductsError = createAction("products/fetchOneError");

const removeProductsRequest = createAction("products/removeRequest");
const removeProductsSuccess = createAction("products/removeSuccess");
const removeProductsError = createAction("products/removeError");

const editProductsRequest = createAction("products/editRequest");
const editProductsSuccess = createAction("products/editSuccess");
const editProductsError = createAction("products/editError");

export default {
  addProductsRequest,
  addProductsSuccess,
  addProductsError,
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
  removeProductsRequest,
  removeProductsSuccess,
  removeProductsError,
  editProductsRequest,
  editProductsSuccess,
  editProductsError,
  fetchOneProductsRequest,
  fetchOneProductsSuccess,
  fetchOneProductsError,
};
