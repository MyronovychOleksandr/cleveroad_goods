import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import productsOperations from "../redux/products/productsOperations";
import { Col, Row, Nav, Button, Container, Card } from "react-bootstrap";

class Products extends Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }
  render() {
    const { products } = this.props;
    return (
      <>
        {products && (
          <Row className="grid">
            {products.map(
              ({ file, name, description, price, discount, expire, id }) => (
                <Col xs={4} key={id}>
                  <Card
                    border="success"
                    style={{ padding: "5px", margin: "10px 0" }}
                  >
                    <Card.Img variant="top" src={file} />
                    <p>Name: {name}</p>
                    <p>Description: {description}</p>
                    <p>Price: {price}</p>
                    {discount && (
                      <p>
                        Price with discount: {price - (price * discount) / 100}
                      </p>
                    )}
                    <p>Discount expire: {expire}</p>
                    <Row md="auto">
                      <Col>
                        <Nav.Item>
                          <NavLink to={`/product/${id}`}>Edit</NavLink>
                        </Nav.Item>
                      </Col>
                      <Col>
                        <Button
                          variant="danger"
                          onClick={() => this.props.onRemoveProduct(id)}
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              )
            )}
          </Row>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.products,
});
const mapDispatchToProps = {
  onFetchProducts: productsOperations.fetchProducts,
  onRemoveProduct: productsOperations.removeProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
