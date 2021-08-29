import React, { Component } from "react";
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

export default class ProductForm extends Component {
  state = {
    ...initialState,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddProduct({ ...this.state });
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
          File
          <InputGroup size="sm" className="mb-3">
            <FormControl
              type="file"
              value={file}
              name="file"
              required
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

        <Button type="submit">Add</Button>
      </form>
    );
  }
}
