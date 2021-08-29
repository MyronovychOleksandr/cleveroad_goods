import axios from "axios";
import productsActions from "./productsActions";

const productUrl =
  "https://cleveroad-223ff-default-rtdb.europe-west1.firebasedatabase.app";

const addProducts = (product) => (dispatch) => {
  dispatch(productsActions.addProductsRequest());

  axios
    .post(`${productUrl}/product.json`, { ...product })
    .then((response) => {
      dispatch(productsActions.addProductsSuccess(response.data));
    })
    .catch((error) => dispatch(productsActions.addProductsError(error)));
};

const fetchProducts = () => (dispatch) => {
  dispatch(productsActions.fetchProductsRequest());

  axios
    .get(`${productUrl}/product.json`)
    .then(({ data }) => {
      if (data) {
        const keys = Object.keys(data);
        const modeData = keys.reduce((acc, key) => {
          acc.push({ id: key, ...data[key] });
          return acc;
        }, []);
        dispatch(productsActions.fetchProductsSuccess(modeData));
      }
    })
    .catch((error) => dispatch(productsActions.fetchProductsError(error)));
};

const removeProduct = (id) => (dispatch) => {
  dispatch(productsActions.removeProductsRequest());

  axios
    .delete(`${productUrl}/product/${id}/.json`)
    .then(() => dispatch(productsActions.removeProductsSuccess(id)))
    .catch((error) => dispatch(productsActions.removeProductsError(error)));
};

const editProduct = (product, id) => (dispatch) => {
  dispatch(productsActions.addProductsRequest());

  axios
    .patch(`${productUrl}/product/${id}/.json`, { ...product })
    .then((response) => {
      dispatch(productsActions.addProductsSuccess(response.data));
    })
    .catch((error) => dispatch(productsActions.addProductsError(error)));
};

const getOneProduct = (id) => (dispatch) => {
  dispatch(productsActions.fetchOneProductsRequest());

  axios
    .get(`${productUrl}/product/${id}/.json`)
    .then((response) => {
      dispatch(productsActions.fetchOneProductsSuccess(response.data));
    })
    .catch((error) => dispatch(productsActions.fetchOneProductsError(error)));
};

export default {
  addProducts,
  fetchProducts,
  removeProduct,
  editProduct,
  getOneProduct,
};
