import React, { Component } from "react";
import { connect } from "react-redux";
import productsOperations from "../redux/products/productsOperations";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    padding: 4,
  },
};

const initialState = {
  name: "",
  file: "",
  description: "",
  price: "",
  discount: "",
  expire: "",
};

class EditProduct extends Component {
  state = {
    ...initialState,
  };

  async componentDidMount() {
    await this.props.onGetOneProduct(this.props.match.params.id);
    setTimeout(this.handleState, 100);
  }

  handleState = () => {
    this.setState({ ...this.props.products[0] });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.onEditProduct({ ...this.state }, id);
    this.setState({ ...initialState });
  };

  formatDate = () => {
    let d = new Date();
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  render() {
    const { name, file, description, price, discount, expire } = this.state;
    const currentDate = this.formatDate();
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name
          <InputGroup size="sm" className="mb-3">
            <FormControl
              type="text"
              value={name}
              name="name"
              maxLength="60"
              minLength="20"
              required
              placeholder="Name"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleChange}
            />
          </InputGroup>
        </label>

        <label style={styles.label}>
          Description
          <InputGroup size="sm" className="mb-3">
            <FormControl
              type="text"
              value={description}
              name="description"
              maxLength="200"
              placeholder="Description"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleChange}
            />
          </InputGroup>
        </label>
        <label style={styles.label}>
          Price
          <InputGroup size="sm" className="mb-3">
            <FormControl
              type="number"
              value={price}
              name="price"
              max="99999999.99"
              min="0"
              required
              placeholder="Price"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleChange}
            />
          </InputGroup>
        </label>
        <label style={styles.label}>
          Discount
          <InputGroup size="sm" className="mb-3">
            <FormControl
              type="number"
              value={discount}
              name="discount"
              max="90"
              min="10"
              placeholder="Discount"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleChange}
            />
          </InputGroup>
        </label>
        <label style={styles.label}>
          Expire
          <InputGroup size="sm" className="mb-3">
            <FormControl
              type="date"
              value={expire}
              name="expire"
              min={currentDate}
              placeholder="Expire"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleChange}
            />
          </InputGroup>
        </label>

        <Button type="submit">Edit</Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = {
  onEditProduct: productsOperations.editProduct,
  onGetOneProduct: productsOperations.getOneProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
