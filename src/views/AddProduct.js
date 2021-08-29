import React, { Component } from "react";
import { connect } from "react-redux";
import productsOperations from "../redux/products/productsOperations";
import ProductForm from "../components/ProductForm";

class AddProduct extends Component {
  state = {};
  render() {
    return <ProductForm onAddProduct={this.props.handleAddProduct} />;
  }
}

// const mapStateToProps = (state) => ({
//   error: state.auth.error,
// });
const mapDispatchToProps = {
  handleAddProduct: productsOperations.addProducts,
};

export default connect(null, mapDispatchToProps)(AddProduct);
