import { lazy } from "react";

export default [
  {
    path: "/register",
    exact: true,
    label: "Register",
    component: lazy(() => import("./views/Register.js")),
    private: false,
    restricted: true,
  },
  {
    path: "/",
    exact: true,
    label: "Login",
    component: lazy(() => import("./views/Login.js")),
    private: false,
    restricted: true,
  },
  {
    path: "/products",
    exact: true,
    label: "Products",
    component: lazy(() => import("./views/Products.js")),
    private: true,
    restricted: false,
  },
  {
    path: "/product",
    exact: true,
    label: "AddProduct ",
    component: lazy(() => import("./views/AddProduct.js")),
    private: true,
    restricted: false,
  },
  {
    path: "/product/:id",
    exact: true,
    label: "Edit Product",
    component: lazy(() => import("./views/EditProduct.js")),
    private: true,
    restricted: false,
  },
];
