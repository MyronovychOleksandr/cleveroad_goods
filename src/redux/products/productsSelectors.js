import { createSelector } from "@reduxjs/toolkit";

const getproducts = (state) => state.products.products;

const getFilter = (state) => state.products.filter;

const getVisibleproducts = createSelector(
  [getproducts, getFilter],
  (products, filter) => {
    return products.filter((Product) =>
      Product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getProductById = createSelector(
  [(state, ProductId) => ProductId, getproducts],
  (ProductId, products) => products.find((Product) => Product.id === ProductId)
);

export default {
  getproducts,
  getFilter,
  getVisibleproducts,
  getProductById,
};
